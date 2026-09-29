'use client'

import { MessageCircle } from 'lucide-react'
import { motion } from 'motion/react'
import { useLocale } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { usePatientAssistant } from './patient-assistant-provider'

export function AssistantLauncher() {
  const { copy } = useLocale()
  const { isOpen, openAssistant } = usePatientAssistant()

  return (
    <motion.button
      type="button"
      aria-label={copy.patientAssistant.launcherLabel}
      aria-expanded={isOpen}
      aria-controls="patient-assistant-panel"
      aria-hidden={isOpen || undefined}
      tabIndex={isOpen ? -1 : 0}
      onClick={(event) => openAssistant({ source: 'floating-launcher' }, event.currentTarget)}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'fixed right-4 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] z-40 inline-flex min-h-12 items-center gap-2.5 rounded-full border border-primary/10 bg-primary px-4 text-sm font-medium text-primary-foreground shadow-[0_12px_30px_rgba(21,35,33,0.16)] transition-[opacity,visibility] duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground md:right-6 md:bottom-6',
        isOpen && 'pointer-events-none invisible opacity-0',
      )}
    >
      <MessageCircle aria-hidden="true" className="size-4" />
      <span className="hidden sm:inline">{copy.patientAssistant.title}</span>
      <span className="sm:hidden">Luma</span>
    </motion.button>
  )
}
