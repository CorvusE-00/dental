'use client'

import Image from 'next/image'
import { SectionHeading } from '@/components/shared/section-heading'
import { useLocale } from '@/lib/i18n'

export function AboutLuma() {
  const { copy } = useLocale()

  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-[calc(var(--header-height)+1rem)] bg-secondary py-16 sm:py-20 lg:py-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-20">
        <div className="max-w-xl lg:pr-4">
          <SectionHeading
            id="about-title"
            eyebrow={copy.sections.about.eyebrow}
            title={copy.sections.about.title}
            description={copy.sections.about.description}
            className="gap-4"
          />
          <p className="mt-8 max-w-md font-serif text-xl leading-[1.2] tracking-[-0.01em] text-foreground/85 italic sm:text-2xl">
            {copy.sections.about.statement}
          </p>
        </div>

        <div className="relative w-full pl-0 sm:pl-8 lg:pl-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted lg:aspect-[5/4]">
            <Image
              src="/images/editorial/about-clinic.jpg"
              alt={copy.sections.about.imageAlt}
              fill
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover object-[center_45%]"
            />
          </div>
          <div className="relative z-10 mt-[-2.5rem] ml-auto w-[42%] rounded-2xl bg-secondary p-2 sm:mt-[-4rem] sm:w-[34%] lg:absolute lg:-bottom-10 lg:-left-8 lg:mt-0 lg:w-40">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-muted">
              <Image
                src="/images/editorial/about-clinic.jpg"
                alt={copy.sections.about.detailAlt}
                fill
                sizes="(min-width: 1024px) 10rem, 42vw"
                className="object-cover object-[88%_52%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
