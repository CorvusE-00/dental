const SHORT_WINDOW_MS = 60_000
const LONG_WINDOW_MS = 60 * 60_000
const DUPLICATE_WINDOW_MS = 5_000
const SHORT_LIMIT = 10
const LONG_LIMIT = 60

type SessionState = {
  acceptedAt: number[]
  messages: Map<string, number>
}

export type ChatAdmission =
  | { allowed: true }
  | { allowed: false; reason: 'rate_limited' | 'duplicate_message'; retryAfterSeconds: number }

// This intentionally uses process-local memory. It is suitable for the single-instance prototype only,
// and must be replaced with shared storage before running multiple server instances.
const sessions = new Map<string, SessionState>()

function getSessionState(sessionId: string) {
  const existing = sessions.get(sessionId)
  if (existing) return existing

  const state: SessionState = { acceptedAt: [], messages: new Map() }
  sessions.set(sessionId, state)
  return state
}

function pruneExpired(now: number) {
  for (const [sessionId, state] of sessions) {
    state.acceptedAt = state.acceptedAt.filter((timestamp) => timestamp > now - LONG_WINDOW_MS)
    for (const [message, timestamp] of state.messages) {
      if (timestamp <= now - DUPLICATE_WINDOW_MS) state.messages.delete(message)
    }

    if (state.acceptedAt.length === 0 && state.messages.size === 0) sessions.delete(sessionId)
  }
}

function secondsUntil(timestamp: number, now: number) {
  return Math.max(1, Math.ceil((timestamp - now) / 1000))
}

export function admitChatRequest(sessionId: string, message: string, now = Date.now()): ChatAdmission {
  pruneExpired(now)
  const state = getSessionState(sessionId)
  const normalizedMessage = message.trim().toLowerCase()
  const duplicateTimestamp = state.messages.get(normalizedMessage)

  if (duplicateTimestamp && duplicateTimestamp > now - DUPLICATE_WINDOW_MS) {
    return {
      allowed: false,
      reason: 'duplicate_message',
      retryAfterSeconds: secondsUntil(duplicateTimestamp + DUPLICATE_WINDOW_MS, now),
    }
  }

  const recentAccepted = state.acceptedAt.filter((timestamp) => timestamp > now - SHORT_WINDOW_MS)
  if (recentAccepted.length >= SHORT_LIMIT) {
    return {
      allowed: false,
      reason: 'rate_limited',
      retryAfterSeconds: secondsUntil(recentAccepted[0] + SHORT_WINDOW_MS, now),
    }
  }

  if (state.acceptedAt.length >= LONG_LIMIT) {
    return {
      allowed: false,
      reason: 'rate_limited',
      retryAfterSeconds: secondsUntil(state.acceptedAt[0] + LONG_WINDOW_MS, now),
    }
  }

  state.acceptedAt.push(now)
  state.messages.set(normalizedMessage, now)
  return { allowed: true }
}
