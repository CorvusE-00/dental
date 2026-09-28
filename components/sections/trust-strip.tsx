'use client'

import { trustMetrics } from '@/lib/data'
import { useLocale } from '@/lib/i18n'

export function TrustStrip() {
  const { copy } = useLocale()
  return (
    <section aria-label={copy.trust.ariaLabel} className="py-14 md:py-20">
      <div className="container-page">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {trustMetrics.map((metric) => (
            <div key={metric.id} className="flex flex-col gap-2 border-t border-foreground/15 pt-5">
              <dt className="order-2 text-sm text-muted-foreground">{copy.trust.metrics[metric.id] ?? metric.label}</dt>
              <dd className="order-1 font-serif text-3xl leading-none tracking-[-0.01em] md:text-4xl lg:text-5xl">
                {copy.trust.values[metric.id] ?? metric.value}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-xs text-muted-foreground">{copy.trust.prototypeNotice}</p>
      </div>
    </section>
  )
}
