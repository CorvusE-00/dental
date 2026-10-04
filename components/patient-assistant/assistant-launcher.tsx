'use client'

import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { motion } from 'motion/react'
import { useTreatmentPlan } from '@/components/shared/treatment-plan-provider'
import { useMobileStickyCtaVisibility } from '@/components/shared/use-mobile-sticky-cta-visibility'
import { useLocale } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { usePatientAssistant } from './patient-assistant-provider'

export function AssistantLauncher() {
  const { copy } = useLocale()
  const { isOpen, openAssistant } = usePatientAssistant()
  const { isOpen: treatmentPlanOpen } = useTreatmentPlan()
  const { isStickyCtaVisible } = useMobileStickyCtaVisibility()
  const [isMobile, setIsMobile] = useState(() => (
    typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
  ))
  const modalHidden = isOpen || treatmentPlanOpen
  const stickyCtaElevated = isMobile && isStickyCtaVisible

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)')
    const update = () => setIsMobile(mediaQuery.matches)
    update()
    mediaQuery.addEventListener('change', update)
    return () => mediaQuery.removeEventListener('change', update)
  }, [])

  return (
    <motion.button
      type="button"
      aria-label={copy.patientAssistant.launcherLabel}
      aria-expanded={isOpen}
      aria-controls="patient-assistant-panel"
      aria-hidden={modalHidden || undefined}
      tabIndex={modalHidden ? -1 : 0}
      onClick={(event) => openAssistant({ source: 'floating-launcher' }, event.currentTarget)}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'fixed right-4 z-40 inline-flex min-h-12 items-center gap-2.5 rounded-full border border-primary/10 bg-primary px-4 text-sm font-medium text-primary-foreground shadow-[0_12px_30px_rgba(21,35,33,0.16)] transition-[bottom,opacity,visibility] duration-300 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground',
        stickyCtaElevated
          ? 'bottom-[calc(5.25rem+env(safe-area-inset-bottom))]'
          : 'bottom-[calc(1rem+env(safe-area-inset-bottom))]',
        modalHidden && 'pointer-events-none invisible opacity-0',
        'md:right-6 md:bottom-6',
      )}
    >
      <MessageCircle aria-hidden="true" className="size-4" />
      <span className="hidden sm:inline">{copy.patientAssistant.title}</span>
      <span className="sm:hidden">Luma</span>
    </motion.button>
  )
}
