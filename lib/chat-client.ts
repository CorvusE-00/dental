export type ChatLocale = 'en' | 'tr'

export type ChatContext = {
  intent?: 'treatment-plan' | 'consultation' | 'question'
  source?: 'floating-launcher' | 'hero' | 'treatment-card' | 'international-care' | 'final-cta'
  patientType?: 'local' | 'international'
  treatment?: string
}

export type ChatRequest = {
  message: string
  locale: ChatLocale
  sessionId: string
  context?: ChatContext
}

type ChatResponse = {
  reply: unknown
  error?: unknown
}

function isChatResponse(value: unknown): value is ChatResponse {
  return typeof value === 'object' && value !== null && 'reply' in value
}

export async function requestChatReply(payload: ChatRequest) {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  let responseBody: unknown
  try {
    responseBody = await response.json()
  } catch {
    throw new Error('CHAT_REQUEST_FAILED')
  }

  if (!response.ok) {
    if (isChatResponse(responseBody) && typeof responseBody.reply === 'string' && responseBody.reply.trim()) {
      return { reply: responseBody.reply.trim() }
    }

    throw new Error('CHAT_REQUEST_FAILED')
  }

  if (!isChatResponse(responseBody) || typeof responseBody.reply !== 'string' || !responseBody.reply.trim()) {
    throw new Error('CHAT_REQUEST_FAILED')
  }

  return { reply: responseBody.reply.trim() }
}
