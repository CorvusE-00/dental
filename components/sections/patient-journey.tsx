'use client'

import Image from 'next/image'
import { PrimaryCta } from '@/components/shared/primary-cta'
import { SectionHeading } from '@/components/shared/section-heading'
import { internationalPatientJourney, localPatientJourney } from '@/lib/data'
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

          <div className="grid gap-10 md:grid-cols-2">
            <JourneyColumn label={copy.sections.journey.localLabel} steps={localPatientJourney.map((step) => ({ ...step, ...copy.localJourney[step.id] }))} />
            <JourneyColumn label={copy.sections.journey.internationalLabel} steps={internationalPatientJourney.map((step) => ({ ...step, ...copy.internationalJourney[step.id] }))} />
          </div>

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

function JourneyColumn({
  label,
  steps,
}: {
  label: string
  steps: { id: string; title: string; description: string }[]
}) {
  return (
    <div className="flex flex-col">
      <h3 className="border-t border-foreground/15 py-4 text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </h3>
      <ol className="flex flex-col">
        {steps.map((step, index) => (
          <li key={step.id} className="grid grid-cols-[2.5rem_1fr] gap-3 border-t border-foreground/15 py-5 last:border-b">
            <span className="font-serif text-xl leading-none text-muted-foreground tabular-nums">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium tracking-[-0.01em]">{step.title}</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
