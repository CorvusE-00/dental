export type ChatLocale = 'en' | 'tr'

export type ChatRequest = {
  message: string
  locale: ChatLocale
  sessionId: string
}

type ChatResponse = {
  reply: unknown
  error?: unknown
}

type ControlledChatErrorResponse = ChatResponse & {
  error: unknown
}

function isChatResponse(value: unknown): value is ChatResponse {
  return typeof value === 'object' && value !== null && 'reply' in value
}

function isControlledChatError(value: unknown): value is ControlledChatErrorResponse {
  return isChatResponse(value)
    && typeof value.error === 'string'
    && (value.error === 'rate_limited' || value.error === 'duplicate_message')
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
    if (isControlledChatError(responseBody) && typeof responseBody.reply === 'string' && responseBody.reply.trim()) {
      return { reply: responseBody.reply.trim() }
    }

    throw new Error('CHAT_REQUEST_FAILED')
  }

  if (!isChatResponse(responseBody) || typeof responseBody.reply !== 'string' || !responseBody.reply.trim()) {
    throw new Error('CHAT_REQUEST_FAILED')
  }

  return { reply: responseBody.reply.trim() }
}
