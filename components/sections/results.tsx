import { BeforeAfterSlider } from '@/components/shared/before-after-slider'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import { resultCases } from '@/lib/data'

export function Results() {
  return (
    <section id="results" aria-labelledby="results-title" className="section-y">
      <div className="container-page flex flex-col gap-12 md:gap-16">
        <SectionHeading
          id="results-title"
          eyebrow="Results"
          title="Natural-looking results, planned in detail."
          description="Drag or use your arrow keys to compare. Each smile is designed around the patient's features, never a template."
        />

        <ul className="grid gap-12 lg:grid-cols-3 lg:gap-6">
          {resultCases.map((result, index) => (
            <li key={result.id}>
              <Reveal delay={index * 0.08} className="flex flex-col gap-5">
                <BeforeAfterSlider result={result} />
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-medium tracking-[-0.01em]">{result.treatment}</h3>
                  <p className="text-sm text-muted-foreground">
                    {result.patient}, {result.origin} · {result.visits}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Images are illustrative and created for this prototype. Individual results vary depending on
          your dental health, anatomy and chosen treatment.
        </p>
      </div>
    </section>
  )
}
