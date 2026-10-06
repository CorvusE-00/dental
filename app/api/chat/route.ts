import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { admitChatRequest } from '@/lib/chat-rate-limiter'

type ChatLocale = 'en' | 'tr'

type ChatRequest = {
  message: string
  locale: ChatLocale
  sessionId: string
}

const MAX_MESSAGE_LENGTH = 1500
const MAX_REPLY_LENGTH = 4000
const WEBHOOK_TIMEOUT_MS = 10_000
const SESSION_ID_PATTERN = /^[A-Za-z0-9][A-Za-z0-9_-]{7,199}$/

async function readClinicKnowledge() {
  try {
    return await readFile(join(process.cwd(), 'knowledge', 'luma-clinic.md'), 'utf8')
  } catch {
    return null
  }
}

function errorResponse(status: number, error: 'invalid_request' | 'chat_unavailable' | 'rate_limited' | 'duplicate_message', reply?: string, retryAfterSeconds?: number) {
  const headers = retryAfterSeconds ? { 'Retry-After': String(retryAfterSeconds) } : undefined
  return Response.json(reply ? { error, reply } : { error }, { status, headers })
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function parseChatRequest(value: unknown): ChatRequest | null {
  if (!isRecord(value)) return null

  const message = typeof value.message === 'string' ? value.message.trim() : ''
  const locale = value.locale === 'en' || value.locale === 'tr' ? value.locale : null
  const sessionId = typeof value.sessionId === 'string' ? value.sessionId.trim() : ''

  if (!message || message.length > MAX_MESSAGE_LENGTH || !locale || !SESSION_ID_PATTERN.test(sessionId)) {
    return null
  }

  return { message, locale, sessionId }
}

function getWebhookUrl() {
  const configuredUrl = process.env.N8N_CHAT_WEBHOOK_URL?.trim()
  if (!configuredUrl) return null

  try {
    const url = new URL(configuredUrl)
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return null
    return url.toString()
  } catch {
    return null
  }
}

export async function POST(request: Request) {
  if (!request.headers.get('content-type')?.toLowerCase().includes('application/json')) {
    return errorResponse(415, 'invalid_request')
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return errorResponse(400, 'invalid_request')
  }

  const payload = parseChatRequest(body)
  if (!payload) return errorResponse(400, 'invalid_request')

  const webhookUrl = getWebhookUrl()
  if (!webhookUrl) return errorResponse(503, 'chat_unavailable')

  const webhookSecret = process.env.N8N_CHAT_SECRET?.trim()
  if (!webhookSecret) return errorResponse(503, 'chat_unavailable')

  const clinicKnowledge = await readClinicKnowledge()
  if (!clinicKnowledge?.trim()) return errorResponse(503, 'chat_unavailable')

  const admission = admitChatRequest(payload.sessionId, payload.message)
  if (!admission.allowed) {
    const reply = admission.reason === 'duplicate_message'
      ? payload.locale === 'tr'
        ? 'Bu mesajı az önce aldık. Lütfen birkaç saniye bekleyip tekrar deneyin.'
        : 'We just received that message. Please wait a few seconds before trying again.'
      : payload.locale === 'tr'
        ? 'Mesajları çok hızlı gönderiyorsunuz. Lütfen biraz bekleyip tekrar deneyin.'
        : "You're sending messages too quickly. Please wait a moment and try again."

    return errorResponse(429, admission.reason, reply, admission.retryAfterSeconds)
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS)

  try {
    const upstream = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Luma-Secret': webhookSecret,
      },
      body: JSON.stringify({ ...payload, clinicKnowledge }),
      signal: controller.signal,
      cache: 'no-store',
    })

    if (!upstream.ok) return errorResponse(502, 'chat_unavailable')

    let responseBody: unknown
    try {
      responseBody = await upstream.json()
    } catch {
      return errorResponse(502, 'chat_unavailable')
    }

    const reply = isRecord(responseBody) && typeof responseBody.reply === 'string' ? responseBody.reply.trim() : ''
    if (!reply || reply.length > MAX_REPLY_LENGTH) return errorResponse(502, 'chat_unavailable')

    return Response.json({ reply })
  } catch {
    return errorResponse(502, 'chat_unavailable')
  } finally {
    clearTimeout(timeout)
  }
}
