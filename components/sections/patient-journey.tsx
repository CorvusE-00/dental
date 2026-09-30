'use client'

import Image from 'next/image'
import { PrimaryCta } from '@/components/shared/primary-cta'
import { SectionHeading } from '@/components/shared/section-heading'
import { patientJourney } from '@/lib/data'
import { useLocale } from '@/lib/i18n'

export function PatientJourney() {
  const { copy } = useLocale()

  return (
    <section id="journey" aria-labelledby="journey-title" className="section-y scroll-mt-[calc(var(--header-height)+1rem)]">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col gap-10 lg:col-span-7">
          <SectionHeading
            id="journey-title"
            eyebrow={copy.sections.journey.eyebrow}
            title={copy.sections.journey.title}
            description={copy.sections.journey.description}
          />

          <ol className="grid gap-x-8 gap-y-0 sm:grid-cols-2">
            {patientJourney.map((step, index) => {
              const localized = copy.journey[step.id] ?? step
              return (
                <li key={step.id} className="grid grid-cols-[2.5rem_1fr] gap-3 border-t border-foreground/15 py-5 last:border-b sm:nth-last-2:border-b">
                  <span className="font-serif text-xl leading-none text-muted-foreground tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-medium tracking-[-0.01em]">{localized.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{localized.description}</p>
                  </div>
                </li>
              )
            })}
          </ol>

          <PrimaryCta size="lg" className="w-full sm:w-fit" />
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted ring-1 ring-foreground/10 sm:aspect-[16/10] lg:col-span-5 lg:aspect-[4/3] lg:self-center">
          <Image
            src="/images/editorial/international-care.jpg"
            alt={copy.sections.journey.imageAlt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
