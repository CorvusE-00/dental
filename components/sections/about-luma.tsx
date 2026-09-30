'use client'

import Image from 'next/image'
import { SectionHeading } from '@/components/shared/section-heading'
import { useLocale } from '@/lib/i18n'

export function AboutLuma() {
  const { copy } = useLocale()

  return (
    <section id="about" aria-labelledby="about-title" className="section-y scroll-mt-[calc(var(--header-height)+1rem)] bg-secondary">
      <div className="container-page grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            id="about-title"
            eyebrow={copy.sections.about.eyebrow}
            title={copy.sections.about.title}
            description={copy.sections.about.description}
          />
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted lg:col-span-7 lg:aspect-[16/10]">
          <Image
            src="/images/clinic.png"
            alt={copy.sections.about.imageAlt}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
