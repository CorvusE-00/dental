import Image from 'next/image'
import { Check } from 'lucide-react'
import { PrimaryCta } from '@/components/shared/primary-cta'
import { trustIndicators } from '@/lib/data'

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="pt-[calc(var(--header-height)+2.5rem)] md:pt-[calc(var(--header-height)+4rem)]">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <p className="eyebrow">Dental care for international patients · Istanbul</p>
            <h1
              id="hero-title"
              className="font-serif text-[3.25rem] leading-[0.98] font-normal tracking-[-0.02em] text-balance sm:text-7xl lg:text-[5.5rem]"
            >
              Your new smile.
              <br />
              <em className="text-foreground/80">Designed in Istanbul.</em>
            </h1>
          </div>

          <div data-hide-sticky-cta className="flex flex-col gap-7 lg:col-span-5 lg:pb-3">
            <p className="max-w-md text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
              Premium dental care for international patients, with personalised treatment plans and a
              dedicated coordinator from your first message to aftercare.
            </p>
            <div className="flex flex-col gap-5">
              <PrimaryCta size="lg" className="w-full sm:w-fit" />
              <ul className="flex flex-col gap-2 text-sm text-foreground/80 sm:flex-row sm:flex-wrap sm:gap-x-5">
                {trustIndicators.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check aria-hidden="true" className="size-3.5 text-foreground/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative mt-12 aspect-[4/5] overflow-hidden rounded-2xl bg-muted sm:aspect-[16/10] md:mt-16 lg:aspect-[21/9]">
          <Image
            src="/images/hero.png"
            alt="An international patient relaxing in the Luma clinic lounge, with a view over the Bosphorus."
            fill
            priority
            sizes="(min-width: 1280px) 1184px, 100vw"
            className="object-cover object-[72%_center] sm:object-center"
          />
        </div>
      </div>
    </section>
  )
}
