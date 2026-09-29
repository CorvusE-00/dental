'use client'

import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react'

export type AssistantIntent = 'treatment-plan' | 'consultation' | 'question'
export type AssistantSource = 'floating-launcher' | 'hero' | 'treatment-card' | 'international-care' | 'final-cta'
export type AssistantPatientType = 'local' | 'international'

export type AssistantOpenContext = {
  intent?: AssistantIntent
  source?: AssistantSource
  patientType?: AssistantPatientType
  treatment?: string
}

export type AssistantFlow = 'welcome' | 'treatment-location' | 'consultation' | 'question'

export type AssistantMessage = {
  id: string
  role: 'assistant' | 'patient'
  text: string
}

type AssistantContextValue = {
  isOpen: boolean
  flow: AssistantFlow
  messages: AssistantMessage[]
  activeContext: AssistantOpenContext | null
  returnFocusRef: React.RefObject<HTMLElement | null>
  openAssistant: (context?: AssistantOpenContext, returnFocusTo?: HTMLElement | null) => void
  closeAssistant: () => void
  resetConversation: () => void
  addExchange: (patientText: string, assistantText: string, nextFlow?: AssistantFlow) => void
}

const PatientAssistantContext = createContext<AssistantContextValue | null>(null)

export function PatientAssistantProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [flow, setFlow] = useState<AssistantFlow>('welcome')
  const [messages, setMessages] = useState<AssistantMessage[]>([])
  const [activeContext, setActiveContext] = useState<AssistantOpenContext | null>(null)
  const returnFocusRef = useRef<HTMLElement | null>(null)

  const openAssistant = useCallback((context?: AssistantOpenContext, returnFocusTo?: HTMLElement | null) => {
    setActiveContext(context ?? null)
    returnFocusRef.current = returnFocusTo ?? null
    setIsOpen(true)
  }, [])

  const closeAssistant = useCallback(() => {
    setIsOpen(false)
  }, [])

  const resetConversation = useCallback(() => {
    setFlow('welcome')
    setMessages([])
    setActiveContext(null)
  }, [])

  const addExchange = useCallback((patientText: string, assistantText: string, nextFlow: AssistantFlow = 'question') => {
    setMessages((current) => [
      ...current,
      { id: `${Date.now()}-patient-${current.length}`, role: 'patient', text: patientText },
      { id: `${Date.now()}-assistant-${current.length}`, role: 'assistant', text: assistantText },
    ])
    setFlow(nextFlow)
  }, [])

  const value = useMemo(
    () => ({
      isOpen,
      flow,
      messages,
      activeContext,
      returnFocusRef,
      openAssistant,
      closeAssistant,
      resetConversation,
      addExchange,
    }),
    [activeContext, addExchange, closeAssistant, flow, isOpen, messages, openAssistant, resetConversation],
  )

  return <PatientAssistantContext.Provider value={value}>{children}</PatientAssistantContext.Provider>
}

export function usePatientAssistant() {
  const context = useContext(PatientAssistantContext)
  if (!context) {
    throw new Error('usePatientAssistant must be used within PatientAssistantProvider')
  }
  return context
}
