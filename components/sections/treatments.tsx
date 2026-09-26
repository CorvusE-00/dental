import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import { TreatmentCard } from '@/components/shared/treatment-card'
import { featuredTreatments, supportingTreatments } from '@/lib/data'

export function Treatments() {
  return (
    <section id="treatments" aria-labelledby="treatments-title" className="section-y bg-card">
      <div className="container-page flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="treatments-title"
            eyebrow="Treatments"
            title="Restorative and cosmetic care, under one roof."
          />
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:pb-2">
            Also available: {supportingTreatments.join(' and ')}. Your plan combines only what you need.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {featuredTreatments.map((treatment, index) => (
            <Reveal key={treatment.id} delay={(index % 2) * 0.08}>
              <TreatmentCard treatment={treatment} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
