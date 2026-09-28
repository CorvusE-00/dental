'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'
import { PrimaryCta } from '@/components/shared/primary-cta'
import { useLocale } from '@/lib/i18n'

export function Hero() {
  const { copy } = useLocale()
  return (
    <section id="top" aria-labelledby="hero-title" className="pt-[calc(var(--header-height)+2.5rem)] md:pt-[calc(var(--header-height)+4rem)]">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="order-1 flex flex-col gap-6 lg:order-none lg:col-span-7">
            <p className="eyebrow">{copy.hero.eyebrow}</p>
            <h1
              id="hero-title"
              className="font-serif text-[2.875rem] leading-[0.98] font-normal tracking-[-0.02em] text-balance sm:text-7xl lg:text-[5.5rem]"
            >
              {copy.hero.title}
              <br />
              <em className="text-foreground/80">{copy.hero.emphasis}</em>
            </h1>
          </div>

          <div data-hide-sticky-cta className="order-2 relative mt-6 aspect-[4/3] overflow-hidden rounded-2xl bg-muted sm:mt-8 sm:aspect-[16/10] md:mt-12 lg:col-span-12 lg:col-start-1 lg:row-start-2 lg:order-none lg:mt-4 lg:aspect-[21/9]">
            <Image
              src="/images/editorial/hero-consultation.jpg"
              alt={copy.hero.imageAlt}
              fill
              priority
              sizes="(min-width: 1280px) 1184px, 100vw"
              className="object-cover object-[center_30%] sm:object-[center_36%] lg:object-[center_28%]"
            />
          </div>

          <div data-hide-sticky-cta className="order-3 flex flex-col gap-7 lg:order-none lg:col-span-5 lg:pb-3">
            <p className="max-w-md text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
              {copy.hero.description}
            </p>
            <div className="flex flex-col gap-5">
              <PrimaryCta size="lg" className="w-full sm:w-fit" />
              <ul className="flex flex-col gap-2 text-sm text-foreground/80 sm:flex-row sm:flex-wrap sm:gap-x-5">
                {copy.trust.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check aria-hidden="true" className="size-3.5 text-foreground/60" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <a href="#local-care" className="underline decoration-border underline-offset-4 hover:text-foreground">
                  {copy.hero.localLink}
                </a>
                <a
                  href="#international-care"
                  className="underline decoration-border underline-offset-4 hover:text-foreground"
                >
                  {copy.hero.internationalLink}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
