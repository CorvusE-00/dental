import { Check } from 'lucide-react'
import { PrimaryCta } from '@/components/shared/primary-cta'
import { trustIndicators } from '@/lib/data'

export function FinalCta() {
  return (
    <section
      id="contact"
      data-hide-sticky-cta
      aria-labelledby="final-cta-title"
      className="section-y bg-primary text-primary-foreground"
    >
      <div className="container-page flex flex-col items-center gap-8 text-center">
        <p className="eyebrow text-primary-foreground/70">Start here</p>
        <h2
          id="final-cta-title"
          className="max-w-3xl font-serif text-4xl leading-[1.05] font-normal tracking-[-0.015em] text-balance sm:text-6xl lg:text-7xl"
        >
          Your plan starts with a few photos.
        </h2>
        <p className="max-w-lg text-base leading-relaxed text-primary-foreground/75 md:text-lg">
          Share your smile and what you would like to change. A clinician will review it and reply
          with a personalised plan.
        </p>
        <PrimaryCta tone="light" size="lg" className="w-full sm:w-fit" />
        <ul className="flex flex-col items-center gap-2 text-sm text-primary-foreground/75 sm:flex-row sm:gap-6">
          {trustIndicators.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Check aria-hidden="true" className="size-3.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
