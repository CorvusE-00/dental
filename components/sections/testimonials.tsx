import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import { TestimonialCard } from '@/components/shared/testimonial-card'
import { testimonials } from '@/lib/data'

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="section-y">
      <div className="container-page flex flex-col gap-12 md:gap-16">
        <SectionHeading id="testimonials-title" eyebrow="Patient stories" title="In their own words." />
        <ul className="grid gap-12 md:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <li key={testimonial.id}>
              <Reveal delay={index * 0.08} className="h-full">
                <TestimonialCard testimonial={testimonial} />
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground">
          Testimonials are fictional and written for this prototype.
        </p>
      </div>
    </section>
  )
}
