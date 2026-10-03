'use client'

import Image from 'next/image'
import type { Treatment } from '@/lib/data'
import { useLocale } from '@/lib/i18n'
import { getLocalizedTreatment } from '@/lib/treatments'

export function TreatmentCard({ treatment, index }: { treatment: Treatment; index: number }) {
  const { locale } = useLocale()
  const localizedContent = getLocalizedTreatment(treatment.id, locale)
  const localized = localizedContent
    ? { name: localizedContent.name, summary: localizedContent.summary, details: localizedContent.cardDetails }
    : treatment

  return (
    <article className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-muted">
        <Image
          src={treatment.image}
          alt={treatment.imageAlt}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5 sm:p-6">
        <div className="flex items-baseline gap-3">
          <span className="text-sm text-primary-foreground/65 tabular-nums">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="font-serif text-2xl leading-tight font-normal tracking-[-0.01em] sm:text-3xl">
            {localized.name}
          </h3>
        </div>
        <p className="max-w-lg text-sm leading-relaxed text-primary-foreground/80">{localized.summary}</p>
        <ul className="flex flex-wrap gap-2" aria-label={`${localized.name} details`}>
          {localized.details.map((detail) => (
            <li
              key={detail}
              className="rounded-md border border-primary-foreground/25 bg-primary-foreground/10 px-2.5 py-1 text-xs text-primary-foreground/85"
            >
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
