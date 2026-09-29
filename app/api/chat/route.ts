type ChatLocale = 'en' | 'tr'

type ChatRequest = {
  message: string
  locale: ChatLocale
  sessionId: string
}

const MAX_MESSAGE_LENGTH = 2000
const MAX_SESSION_ID_LENGTH = 200
const MAX_REPLY_LENGTH = 4000
const WEBHOOK_TIMEOUT_MS = 10_000

function errorResponse(status: number, error: 'invalid_request' | 'chat_unavailable') {
  return Response.json({ error }, { status })
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function parseChatRequest(value: unknown): ChatRequest | null {
  if (!isRecord(value)) return null

  const message = typeof value.message === 'string' ? value.message.trim() : ''
  const locale = value.locale === 'en' || value.locale === 'tr' ? value.locale : null
  const sessionId = typeof value.sessionId === 'string' ? value.sessionId.trim() : ''

  if (!message || message.length > MAX_MESSAGE_LENGTH || !locale || !sessionId || sessionId.length > MAX_SESSION_ID_LENGTH) {
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

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS)

  try {
    const upstream = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
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
