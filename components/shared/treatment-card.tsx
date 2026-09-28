'use client'

import Image from 'next/image'
import type { Treatment } from '@/lib/data'
import { useLocale } from '@/lib/i18n'

export function TreatmentCard({ treatment, index }: { treatment: Treatment; index: number }) {
  const { copy } = useLocale()
  const localized = copy.treatments[treatment.id] ?? treatment
  return (
    <article className="group flex flex-col gap-6">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
        <Image
          src={treatment.image}
          alt={treatment.imageAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-baseline gap-4">
          <span className="text-sm text-muted-foreground tabular-nums">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="font-serif text-3xl leading-tight font-normal tracking-[-0.01em]">
            {localized.name}
          </h3>
        </div>
        <p className="max-w-lg leading-relaxed text-muted-foreground">{localized.summary}</p>
        <ul className="mt-1 flex flex-wrap gap-2" aria-label={`${localized.name} details`}>
          {localized.details.map((detail) => (
            <li
              key={detail}
              className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground"
            >
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
