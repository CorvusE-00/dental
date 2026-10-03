'use client'

import type { LucideIcon } from 'lucide-react'
import { CalendarRange, Star, UsersRound } from 'lucide-react'
import { trustMetrics } from '@/lib/data'
import { useLocale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const metricIcons: Record<string, LucideIcon> = {
  patients: UsersRound,
  experience: CalendarRange,
  rating: Star,
}

export function TrustStrip({ compact = false, className }: { compact?: boolean; className?: string }) {
  const { copy } = useLocale()
  return (
    <section aria-label={copy.trust.ariaLabel} className={cn(compact ? 'py-2 md:py-20' : 'py-6 md:py-8', className)}>
      <div className="container-page">
        <dl className={cn('grid', compact ? 'grid-cols-3 gap-x-3' : 'grid-cols-3 gap-x-6 md:gap-x-10')}>
          {trustMetrics.map((metric) => {
            const Icon = metricIcons[metric.id]
            const label = compact
              ? copy.trust.mobileMetrics[metric.id] ?? copy.trust.metrics[metric.id] ?? metric.label
              : copy.trust.metrics[metric.id] ?? metric.label
            return (
              <div key={metric.id} className={cn('border-t border-foreground/15', compact ? 'pt-2' : 'pt-4 md:pt-5')}>
                <dt className={cn('flex items-center gap-1.5 text-muted-foreground', compact ? 'text-[0.625rem] leading-[1.2] sm:text-sm sm:leading-normal' : 'text-xs sm:text-sm')}>
                  <Icon aria-hidden="true" className={cn('shrink-0 text-foreground/55', compact ? 'size-3.5' : 'size-[1.125rem]')} strokeWidth={1.5} />
                  {label}
                </dt>
                <dd className={cn('mt-2 font-serif leading-none tracking-[-0.01em]', compact ? 'text-xl sm:text-2xl' : 'text-3xl md:text-4xl lg:text-5xl')}>
                  {copy.trust.values[metric.id] ?? metric.value}
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
