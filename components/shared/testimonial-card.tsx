import type { Testimonial } from '@/lib/data'

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col justify-between gap-10 border-t border-foreground/15 pt-8">
      <blockquote className="font-serif text-2xl leading-snug tracking-[-0.005em] text-pretty lg:text-[1.75rem]">
        <p>{`“${testimonial.quote}”`}</p>
      </blockquote>
      <figcaption className="flex flex-col gap-1 text-sm">
        <span className="font-medium">{testimonial.name}</span>
        <span className="text-muted-foreground">
          {testimonial.origin} · {testimonial.treatment}
        </span>
      </figcaption>
    </figure>
  )
}
