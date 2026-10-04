'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'
import { PrimaryCta } from '@/components/shared/primary-cta'
import { useLocale } from '@/lib/i18n'

export function FinalCta() {
  const { copy } = useLocale()
  return (
    <section
      id="contact"
      data-hide-sticky-cta
      data-avoid-floating-assistant
      aria-labelledby="final-cta-title"
      className="section-y relative isolate overflow-hidden bg-primary text-primary-foreground"
    >
      <Image
        src="/images/editorial/hero-consultation.jpg"
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className="object-cover opacity-45"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-primary/80" />
      <div className="container-page relative z-10 flex flex-col items-center gap-8 text-center">
        <p className="eyebrow text-primary-foreground/70">{copy.sections.finalCta.eyebrow}</p>
        <h2
          id="final-cta-title"
          className="max-w-3xl font-serif text-4xl leading-[1.05] font-normal tracking-[-0.015em] text-balance sm:text-6xl lg:text-7xl"
        >
          {copy.sections.finalCta.title}
        </h2>
        <p className="max-w-lg text-base leading-relaxed text-primary-foreground/75 md:text-lg">
          {copy.sections.finalCta.description}
        </p>
        <PrimaryCta tone="light" size="lg" className="w-full sm:w-fit" />
        <ul className="flex flex-col items-center gap-2 text-sm text-primary-foreground/75 sm:flex-row sm:gap-6">
          {copy.trust.items.map((item) => (
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
