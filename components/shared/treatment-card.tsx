'use client'

import Image from 'next/image'
import type { HomepageTreatment } from '@/lib/treatments'

type TreatmentCardProps = {
  treatment: HomepageTreatment
  learnMoreLabel: string
  href?: string
}

export function TreatmentCard({ treatment, learnMoreLabel, href }: TreatmentCardProps) {
  const card = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={treatment.image}
          alt={treatment.imageAlt}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <h3 className="font-serif text-2xl leading-tight font-normal tracking-[-0.01em] text-primary sm:text-3xl">
          {treatment.name}
        </h3>
        <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">{treatment.summary}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-medium text-primary">
          {learnMoreLabel}
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none">
            →
          </span>
        </span>
      </div>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-primary/35 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
      >
        {card}
      </a>
    )
  }

  return <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">{card}</article>
}
