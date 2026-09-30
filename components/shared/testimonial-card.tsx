'use client'

import Image from 'next/image'
import type { Testimonial } from '@/lib/data'
import { useLocale } from '@/lib/i18n'

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { copy } = useLocale()
  const localized = copy.testimonials[testimonial.id] ?? testimonial
  return (
    <figure className="flex h-full flex-col justify-between gap-10 border-t border-foreground/15 pt-8">
      <blockquote className="font-serif text-2xl leading-snug tracking-[-0.005em] text-pretty lg:text-[1.75rem]">
        <p>{`“${localized.quote}”`}</p>
      </blockquote>
      <figcaption className="flex items-center gap-3 text-sm">
        <Image
          src={testimonial.image}
          alt={testimonial.imageAlt}
          width={52}
          height={52}
          sizes="52px"
          className="size-13 shrink-0 rounded-full object-cover"
        />
        <span className="flex flex-col gap-1">
          <span className="font-medium">{testimonial.name}</span>
          <span className="text-muted-foreground">
            {testimonial.origin} · {localized.treatment}
          </span>
        </span>
      </figcaption>
    </figure>
  )
}
