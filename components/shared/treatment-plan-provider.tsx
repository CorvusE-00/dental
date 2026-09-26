'use client'

import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react'
import { MotionConfig } from 'motion/react'
import { TreatmentPlanModal } from '@/components/shared/treatment-plan-modal'

type TreatmentPlanContextValue = {
  isOpen: boolean
  openTreatmentPlan: (returnFocusTo?: HTMLElement | null) => void
}

const TreatmentPlanContext = createContext<TreatmentPlanContextValue | null>(null)

export function TreatmentPlanProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const returnFocusRef = useRef<HTMLElement | null>(null)

  const openTreatmentPlan = useCallback((returnFocusTo?: HTMLElement | null) => {
    returnFocusRef.current = returnFocusTo ?? null
    setIsOpen(true)
  }, [])

  const value = useMemo(() => ({ isOpen, openTreatmentPlan }), [isOpen, openTreatmentPlan])

  return (
    <MotionConfig reducedMotion="user">
      <TreatmentPlanContext.Provider value={value}>
        {children}
        <TreatmentPlanModal
          open={isOpen}
          onOpenChange={setIsOpen}
          returnFocusRef={returnFocusRef}
        />
      </TreatmentPlanContext.Provider>
    </MotionConfig>
  )
}

export function useTreatmentPlan() {
  const context = useContext(TreatmentPlanContext)
  if (!context) {
    throw new Error('useTreatmentPlan must be used within TreatmentPlanProvider')
  }
  return context
}
