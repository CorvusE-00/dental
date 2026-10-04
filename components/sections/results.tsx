'use client'

import { BeforeAfterSlider } from '@/components/shared/before-after-slider'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import { resultCases } from '@/lib/data'
import { useLocale } from '@/lib/i18n'

export function Results() {
  const { copy } = useLocale()
  return (
    <section id="results" aria-labelledby="results-title" className="section-y pt-12 md:pt-24 2xl:pt-[8.5rem]">
      <div className="container-page flex flex-col gap-12 md:gap-16">
        <SectionHeading
          id="results-title"
          eyebrow={copy.sections.results.eyebrow}
          title={copy.sections.results.title}
          description={copy.sections.results.description}
        />

        <Reveal>
          <ul className="grid gap-12 lg:grid-cols-3 lg:gap-6">
            {resultCases.map((result) => (
              <li key={result.id} className="flex flex-col gap-5">
                <BeforeAfterSlider result={result} />
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-medium tracking-[-0.01em]">{copy.resultTreatments[result.id] ?? result.treatment}</h3>
                  <p className="text-sm text-muted-foreground">
                    {result.patient}, {result.origin} · {copy.resultVisits[result.id] ?? result.visits}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {copy.sections.results.disclaimer}
        </p>
      </div>
    </section>
  )
}
