'use client'

import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import { TestimonialCard } from '@/components/shared/testimonial-card'
import { testimonials } from '@/lib/data'
import { useLocale } from '@/lib/i18n'

export function Testimonials() {
  const { copy } = useLocale()
  return (
    <section aria-labelledby="testimonials-title" className="section-y">
      <div className="container-page flex flex-col gap-12 md:gap-16">
        <SectionHeading id="testimonials-title" eyebrow={copy.sections.testimonials.eyebrow} title={copy.sections.testimonials.title} />
        <Reveal>
          <ul className="grid gap-12 md:grid-cols-3 md:gap-8">
            {testimonials.map((testimonial) => (
              <li key={testimonial.id} className="h-full">
                <TestimonialCard testimonial={testimonial} />
              </li>
            ))}
          </ul>
        </Reveal>
        <p className="text-sm text-muted-foreground">{copy.sections.testimonials.disclaimer}</p>
      </div>
    </section>
  )
}
