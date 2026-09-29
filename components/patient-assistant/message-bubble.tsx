'use client'

import { motion } from 'motion/react'
import type { AssistantMessage } from './patient-assistant-provider'

export function MessageBubble({ message, assistantLabel, patientLabel }: { message: AssistantMessage; assistantLabel: string; patientLabel: string }) {
  const isPatient = message.role === 'patient'

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex flex-col gap-1.5 ${isPatient ? 'items-end' : 'items-start'}`}
    >
      <span className="px-1 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
        {isPatient ? patientLabel : assistantLabel}
      </span>
      <p
        className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isPatient ? 'rounded-br-md bg-primary text-primary-foreground' : 'rounded-bl-md bg-sage-soft text-foreground'
        }`}
      >
        {message.text}
      </p>
    </motion.div>
  )
}
