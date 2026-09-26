'use client'

import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PRIMARY_CTA_LABEL } from '@/lib/constants'
import { useTreatmentPlan } from '@/components/shared/treatment-plan-provider'

type PrimaryCtaProps = {
  tone?: 'ink' | 'light'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onBeforeOpen?: () => void
  returnFocusTo?: () => HTMLElement | null
}

const sizeClasses = {
  sm: 'h-11 px-5 text-sm',
  md: 'h-12 px-6 text-[0.9375rem]',
  lg: 'h-14 px-7 text-base',
} as const

const toneClasses = {
  ink: 'bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-foreground',
  light:
    'bg-background text-foreground hover:bg-sage-soft focus-visible:outline-background',
} as const

export function PrimaryCta({
  tone = 'ink',
  size = 'md',
  className,
  onBeforeOpen,
  returnFocusTo,
}: PrimaryCtaProps) {
  const { openTreatmentPlan } = useTreatmentPlan()

  return (
    <button
      type="button"
      onClick={(event) => {
        onBeforeOpen?.()
        openTreatmentPlan(returnFocusTo ? returnFocusTo() : event.currentTarget)
      }}
      className={cn(
        'group inline-flex items-center justify-center gap-2.5 rounded-[10px] font-medium tracking-[-0.005em] whitespace-nowrap transition-colors duration-200',
        sizeClasses[size],
        toneClasses[tone],
        className,
      )}
    >
      {PRIMARY_CTA_LABEL}
      <ArrowRight
        aria-hidden="true"
        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
      />
    </button>
  )
}
