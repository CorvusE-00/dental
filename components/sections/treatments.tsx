'use client'

import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import { TreatmentCard } from '@/components/shared/treatment-card'
import { getFeaturedTreatments, getTreatmentHref, getTreatmentsIndexHref } from '@/lib/treatments'
import { useLocale } from '@/lib/i18n'

export function Treatments() {
  const { locale, copy } = useLocale()
  const featuredTreatments = getFeaturedTreatments(locale)

  return (
    <section id="treatments" aria-labelledby="treatments-title" className="section-y bg-card">
      <div className="container-page flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="treatments-title"
            eyebrow={copy.sections.treatments.eyebrow}
            title={copy.sections.treatments.title}
          />
          <a
            href={getTreatmentsIndexHref(locale)}
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:pb-2"
          >
            {copy.sections.treatments.viewAll}
            <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" />
          </a>
        </div>

        <Reveal>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredTreatments.map((treatment) => (
              <TreatmentCard
                key={treatment.id}
                treatment={treatment}
                learnMoreLabel={copy.sections.treatments.learnMore}
                href={getTreatmentHref(locale, treatment.id)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
