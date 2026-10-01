'use client'

import Image from 'next/image'
import { SectionHeading } from '@/components/shared/section-heading'
import { useLocale } from '@/lib/i18n'

export function AboutLuma() {
  const { copy } = useLocale()

  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-[calc(var(--header-height)+1rem)] bg-secondary py-14 sm:py-16 lg:py-20">
      <div className="container-page grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="order-1 max-w-lg lg:col-span-5 lg:col-start-8 lg:row-start-1">
          <SectionHeading
            id="about-title"
            eyebrow={copy.sections.about.eyebrow}
            title={copy.sections.about.title}
            description={copy.sections.about.description}
          />
        </div>

        <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-2xl bg-muted lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:aspect-[5/4]">
          <Image
            src="/images/editorial/about-clinic.jpg"
            alt={copy.sections.about.imageAlt}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover object-[center_50%]"
          />
        </div>
      </div>
    </section>
  )
}
