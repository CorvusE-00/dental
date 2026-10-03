'use client'

import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import { TreatmentCard } from '@/components/shared/treatment-card'
import { getFeaturedTreatments } from '@/lib/treatments'
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
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary md:pb-2">
            {copy.sections.treatments.viewAll}
            <ArrowRight aria-hidden="true" className="size-4" />
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredTreatments.map((treatment, index) => (
            <Reveal key={treatment.id} delay={(index % 2) * 0.08}>
              <TreatmentCard treatment={treatment} learnMoreLabel={copy.sections.treatments.learnMore} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
