'use client'

import { RotateCcw, X } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'
import { useLocale } from '@/lib/i18n'
import { requestChatReply } from '@/lib/chat-client'
import { AssistantComposer } from './assistant-composer'
import { AssistantTypingIndicator } from './assistant-typing-indicator'
import { MessageBubble } from './message-bubble'
import { QuickReplies } from './quick-replies'
import { usePatientAssistant } from './patient-assistant-provider'

export function AssistantPanel() {
  const { copy, locale } = useLocale()
  const {
    isOpen,
    flow,
    messages,
    returnFocusRef,
    getSessionId,
    closeAssistant,
    resetConversation,
    appendMessage,
    addExchange,
  } = usePatientAssistant()
  const messagesRef = useRef<HTMLDivElement>(null)
  const requestIdRef = useRef(0)
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    const container = messagesRef.current
    if (!container) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    container.scrollTo({ top: container.scrollHeight, behavior: reduceMotion ? 'auto' : 'smooth' })
  }, [flow, messages])

  const replies = useMemo(() => {
    const assistantCopy = copy.patientAssistant
    if (flow === 'welcome') {
      return [
        { id: 'treatment-plan', label: assistantCopy.treatmentPlanAction },
        { id: 'consultation', label: assistantCopy.consultationAction },
        { id: 'question', label: assistantCopy.questionAction },
      ]
    }
    if (flow === 'treatment-location') {
      return [
        { id: 'local', label: assistantCopy.localReply },
        { id: 'international', label: assistantCopy.internationalReply },
      ]
    }
    return []
  }, [copy.patientAssistant, flow])

  function handleQuickReply(reply: { id: string; label: string }) {
    const assistantCopy = copy.patientAssistant
    if (reply.id === 'treatment-plan') {
      addExchange(assistantCopy.treatmentPlanAction, assistantCopy.locationQuestion, 'treatment-location')
      return
    }
    if (reply.id === 'consultation') {
      addExchange(assistantCopy.consultationAction, assistantCopy.consultationResponse, 'consultation')
      return
    }
    if (reply.id === 'question') {
      addExchange(assistantCopy.questionAction, assistantCopy.questionResponse, 'question')
      return
    }
    addExchange(reply.label, assistantCopy.locationResponse, 'question')
  }

  function handleReset() {
    requestIdRef.current += 1
    setIsPending(false)
    resetConversation()
  }

  async function handleTypedMessage(message: string) {
    if (isPending) return

    const requestId = ++requestIdRef.current
    appendMessage('patient', message, 'question')
    setIsPending(true)

    try {
      const { reply } = await requestChatReply({ message, locale, sessionId: getSessionId() })
      if (requestId === requestIdRef.current) appendMessage('assistant', reply)
    } catch {
      if (requestId === requestIdRef.current) appendMessage('assistant', copy.patientAssistant.connectionError)
    } finally {
      if (requestId === requestIdRef.current) setIsPending(false)
    }
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) closeAssistant()
      }}
    >
      <DialogContent
        id="patient-assistant-panel"
        showCloseButton={false}
        finalFocus={() => returnFocusRef.current ?? true}
        className="fixed inset-0 top-0 left-0 flex h-[100dvh] w-full max-w-none translate-x-0 translate-y-0 flex-col gap-0 overflow-hidden rounded-none bg-card p-0 text-foreground shadow-2xl [transform:none] sm:max-w-none md:top-auto md:right-6 md:bottom-6 md:left-auto md:h-[min(42rem,calc(100dvh-8rem))] md:w-[min(25rem,calc(100vw-3rem))] md:rounded-2xl"
      >
        <header className="flex shrink-0 items-start justify-between gap-4 border-b border-border px-5 py-4 md:px-6">
          <div className="flex min-w-0 flex-col gap-1.5">
            <p className="eyebrow">{copy.patientAssistant.eyebrow}</p>
            <DialogTitle className="font-serif text-2xl leading-none font-normal tracking-[-0.015em]">
              {copy.patientAssistant.title}
            </DialogTitle>
            <DialogDescription className="text-xs leading-relaxed text-muted-foreground">
              {copy.patientAssistant.description}
            </DialogDescription>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={handleReset}
              aria-label={copy.patientAssistant.resetLabel}
              title={copy.patientAssistant.resetLabel}
              className="inline-flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-sage-soft hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <RotateCcw aria-hidden="true" className="size-4" />
            </button>
            <button
              type="button"
              onClick={closeAssistant}
              aria-label={copy.patientAssistant.closeLabel}
              className="inline-flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-sage-soft hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>
        </header>

        <div
          ref={messagesRef}
          role="log"
          aria-label={copy.patientAssistant.title}
          aria-live="polite"
          className="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain px-5 py-5 md:px-6"
        >
          <div className="flex flex-col items-start gap-1.5">
            <span className="px-1 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {copy.patientAssistant.assistantRole}
            </span>
            <p className="max-w-[88%] rounded-2xl rounded-bl-md bg-sage-soft px-4 py-3 text-sm leading-relaxed">
              {copy.patientAssistant.welcome}
            </p>
          </div>

          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message}
              assistantLabel={copy.patientAssistant.assistantRole}
              patientLabel={copy.patientAssistant.patientRole}
            />
          ))}

          {isPending && <AssistantTypingIndicator label={copy.patientAssistant.loadingLabel} roleLabel={copy.patientAssistant.assistantRole} />}

          {!isPending && replies.length > 0 && (
            <QuickReplies
              replies={replies}
              ariaLabel={copy.patientAssistant.quickRepliesLabel}
              onSelect={handleQuickReply}
            />
          )}
        </div>

        <p className="shrink-0 px-5 pb-2 text-center text-[0.6875rem] leading-relaxed text-muted-foreground md:px-6">
          {copy.patientAssistant.prototypeNotice}
        </p>
        <AssistantComposer
          placeholder={copy.patientAssistant.composerPlaceholder}
          sendLabel={copy.patientAssistant.sendMessage}
          isPending={isPending}
          onSend={handleTypedMessage}
        />
      </DialogContent>
    </Dialog>
  )
}
