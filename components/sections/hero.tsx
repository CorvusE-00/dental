'use client'

import Image from 'next/image'
import { PrimaryCta } from '@/components/shared/primary-cta'
import { useLocale } from '@/lib/i18n'

export function Hero() {
  const { copy } = useLocale()

  return (
    <section id="top" aria-labelledby="hero-title" className="hero-shell pt-[calc(var(--header-height)+0.5rem)] md:pt-[calc(var(--header-height)+2.5rem)]">
      <div className="container-page">
        <div className="hero-grid grid gap-7 sm:gap-8 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-0">
          <div className="contents hero-copy lg:col-span-7 lg:row-span-2 lg:flex lg:flex-col lg:justify-center lg:gap-8">
            <div className="order-1 flex flex-col gap-3 lg:gap-6">
              <p className="eyebrow">{copy.hero.eyebrow}</p>
              <h1
                id="hero-title"
                className="font-serif text-[2.625rem] leading-[0.98] font-normal tracking-[-0.02em] text-balance sm:text-7xl lg:text-[4rem] xl:text-[5.5rem]"
              >
                {copy.hero.title}
                <br />
                <em className="text-foreground/80">{copy.hero.emphasis}</em>
              </h1>
            </div>

            <div data-hide-sticky-cta className="order-3 flex flex-col gap-3 lg:gap-7 lg:pb-3">
              <p className="max-w-md text-[0.9375rem] leading-[1.45] text-pretty text-muted-foreground md:text-lg">
                <span className="sm:hidden">{copy.hero.mobileDescription}</span>
                <span className="hidden sm:inline">{copy.hero.description}</span>
              </p>
              <div className="flex flex-col gap-3 lg:gap-5">
                <PrimaryCta size="lg" className="h-12 w-full px-5 text-[0.9375rem] sm:h-14 sm:w-fit sm:px-7 sm:text-base" />
                <div className="grid grid-cols-2 gap-2 sm:hidden">
                  <a href="#local-care" className="rounded-[10px] border border-foreground/15 px-3 py-2.5 text-center text-[0.75rem] leading-tight text-foreground transition-colors hover:bg-sage-soft">
                    {copy.hero.localShortLink}
                  </a>
                  <a href="#international-care" className="rounded-[10px] border border-foreground/15 px-3 py-2.5 text-center text-[0.75rem] leading-tight text-foreground transition-colors hover:bg-sage-soft">
                    {copy.hero.internationalShortLink}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div data-hide-sticky-cta className="hero-image order-2 relative aspect-[16/10] min-h-0 overflow-hidden rounded-2xl bg-muted sm:aspect-[16/10] lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:aspect-[4/5]">
            <Image
              src="/images/editorial/hero-consultation.jpg"
              alt={copy.hero.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-[center_30%] sm:object-[center_36%] lg:object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
