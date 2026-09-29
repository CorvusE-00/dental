'use client'

import { useEffect, useState } from 'react'
import { PrimaryCta } from '@/components/shared/primary-cta'
import { useTreatmentPlan } from '@/components/shared/treatment-plan-provider'
import { cn } from '@/lib/utils'
import { usePatientAssistant } from '@/components/patient-assistant/patient-assistant-provider'

export function MobileStickyCta() {
  const { isOpen } = useTreatmentPlan()
  const { isOpen: assistantOpen } = usePatientAssistant()
  const [blocked, setBlocked] = useState(true)

  useEffect(() => {
    const targets = document.querySelectorAll('[data-hide-sticky-cta]')
    const visible = new Set<Element>()
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target)
        else visible.delete(entry.target)
      }
      setBlocked(visible.size > 0)
    })
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  const hidden = blocked || isOpen || assistantOpen

  return (
    <div
      aria-hidden={hidden || undefined}
      inert={hidden}
      className={cn(
        'fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/90 px-5 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md transition-[translate,opacity] duration-300 md:hidden',
        hidden ? 'pointer-events-none translate-y-full opacity-0' : 'translate-y-0 opacity-100',
      )}
    >
      <PrimaryCta size="md" className="w-full" />
    </div>
  )
}
