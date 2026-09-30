'use client'

import type { LucideIcon } from 'lucide-react'
import { BadgeCheck, Star, Users } from 'lucide-react'
import { trustMetrics } from '@/lib/data'
import { useLocale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const metricIcons: Record<string, LucideIcon> = {
  patients: Users,
  experience: BadgeCheck,
  rating: Star,
}

export function TrustStrip({ compact = false, className }: { compact?: boolean; className?: string }) {
  const { copy } = useLocale()
  return (
    <section aria-label={copy.trust.ariaLabel} className={cn(compact ? 'py-2 md:py-20' : 'py-14 md:py-20', className)}>
      <div className="container-page">
        <dl className={cn('grid', compact ? 'grid-cols-3 gap-x-3 gap-y-0' : 'grid-cols-3 gap-x-6 gap-y-10')}>
          {trustMetrics.map((metric) => {
            const Icon = metricIcons[metric.id]
            return (
              <div key={metric.id} className={cn('flex flex-col border-t border-foreground/15', compact ? 'gap-1 pt-2' : 'gap-3 pt-5')}>
                <div className="flex items-center justify-between gap-3 text-foreground/55">
                  <Icon aria-hidden="true" className={cn('shrink-0', compact ? 'size-3.5' : 'size-4')} strokeWidth={1.5} />
                  <dd className={cn('font-serif leading-none tracking-[-0.01em]', compact ? 'text-xl sm:text-2xl' : 'text-3xl md:text-4xl lg:text-5xl')}>
                    {copy.trust.values[metric.id] ?? metric.value}
                  </dd>
                </div>
                <dt className={cn('text-muted-foreground', compact ? 'text-[0.625rem] leading-[1.2] sm:text-sm sm:leading-normal' : 'text-sm')}>
                  {compact ? copy.trust.mobileMetrics[metric.id] ?? copy.trust.metrics[metric.id] ?? metric.label : copy.trust.metrics[metric.id] ?? metric.label}
                </dt>
              </div>
            )
          })}
        </dl>
        <p className={cn('text-xs text-muted-foreground', compact ? 'hidden' : 'mt-8')}>{copy.trust.prototypeNotice}</p>
      </div>
    </section>
  )
}
