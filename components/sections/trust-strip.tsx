'use client'

import { trustMetrics } from '@/lib/data'
import { useLocale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function TrustStrip({ compact = false, className }: { compact?: boolean; className?: string }) {
  const { copy } = useLocale()
  return (
    <section aria-label={copy.trust.ariaLabel} className={cn(compact ? 'py-2 md:py-20' : 'py-14 md:py-20', className)}>
      <div className="container-page">
        <dl className={cn('grid', compact ? 'grid-cols-4 gap-x-2 gap-y-0' : 'grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4')}>
          {trustMetrics.map((metric) => (
            <div key={metric.id} className={cn('flex flex-col border-t border-foreground/15', compact ? 'gap-1 pt-2' : 'gap-2 pt-5')}>
              <dt className={cn('order-2 text-muted-foreground', compact ? 'text-[0.625rem] leading-[1.2] sm:text-sm sm:leading-normal' : 'text-sm')}>{copy.trust.metrics[metric.id] ?? metric.label}</dt>
              <dd className={cn('order-1 font-serif leading-none tracking-[-0.01em]', compact ? 'text-xl sm:text-2xl' : 'text-3xl md:text-4xl lg:text-5xl')}>
                {copy.trust.values[metric.id] ?? metric.value}
              </dd>
            </div>
          ))}
        </dl>
        <p className={cn('text-xs text-muted-foreground', compact ? 'hidden' : 'mt-8')}>{copy.trust.prototypeNotice}</p>
      </div>
    </section>
  )
}
