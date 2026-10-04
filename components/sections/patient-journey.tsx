'use client'

import { PrimaryCta } from '@/components/shared/primary-cta'
import { SectionHeading } from '@/components/shared/section-heading'
import { patientJourney } from '@/lib/data'
import { useLocale } from '@/lib/i18n'

export function PatientJourney() {
  const { copy } = useLocale()

  return (
    <section id="journey" aria-labelledby="journey-title" className="section-y scroll-mt-[calc(var(--header-height)+1rem)] bg-background">
      <div className="container-page flex flex-col gap-12 md:gap-16">
        <SectionHeading
          id="journey-title"
          eyebrow={copy.sections.journey.eyebrow}
          title={copy.sections.journey.title}
          description={copy.sections.journey.description}
          align="center"
          className="mx-auto max-w-3xl"
        />

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-6 top-6 w-px bg-border lg:bottom-auto lg:left-[12.5%] lg:right-[12.5%] lg:top-6 lg:h-px lg:w-auto"
          />

          <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
            {patientJourney.map((step, index) => {
              const localized = copy.journey[step.id] ?? step
              return (
                <li key={step.id} className="relative grid grid-cols-[3rem_minmax(0,1fr)] gap-4 lg:flex lg:min-w-0 lg:flex-col lg:items-center lg:gap-5 lg:text-center">
                  <div className="z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-background font-serif text-xl leading-none text-primary tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="flex min-w-0 flex-col gap-2 pt-1 lg:items-center lg:pt-0">
                    <h3 className="font-medium tracking-[-0.01em]">{localized.title}</h3>
                    <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{localized.description}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="flex justify-center">
          <PrimaryCta size="lg" className="w-full sm:w-fit" />
        </div>
      </div>
    </section>
  )
}
