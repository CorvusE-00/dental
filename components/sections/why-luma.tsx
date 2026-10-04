'use client'

import Image from 'next/image'
import type { LucideIcon } from 'lucide-react'
import { CalendarCheck, CalendarDays, ClipboardCheck, HeartHandshake, HeartPulse, ListChecks, UserRoundCheck, UsersRound } from 'lucide-react'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import { internationalFeatures, localFeatures } from '@/lib/data'
import { useLocale } from '@/lib/i18n'

const internationalFeatureIcons: Record<string, LucideIcon> = {
  'international-planning': ClipboardCheck,
  coordinator: UserRoundCheck,
  logistics: CalendarDays,
  aftercare: HeartHandshake,
}

const localFeatureIcons: Record<string, LucideIcon> = {
  'local-consultation': UsersRound,
  'clear-options': ListChecks,
  'everyday-care': HeartPulse,
  'local-aftercare': CalendarCheck,
}

export function WhyLuma() {
  const { copy } = useLocale()
  return (
    <>
      <CareSection
        id="local-care"
        image="/images/editorial/local-care.jpg"
        imageAlt={copy.sections.local.imageAlt}
        eyebrow={copy.sections.local.eyebrow}
        title={copy.sections.local.title}
        description={copy.sections.local.description}
        features={localFeatures.map((feature) => ({ ...feature, ...copy.localFeatures[feature.id] }))}
        icons={localFeatureIcons}
      />
      <CareSection
        id="international-care"
        image="/images/editorial/patient-journey.jpg"
        imageAlt={copy.sections.international.imageAlt}
        eyebrow={copy.sections.international.eyebrow}
        title={copy.sections.international.title}
        description={copy.sections.international.description}
        features={internationalFeatures.map((feature) => ({ ...feature, ...copy.internationalFeatures[feature.id] }))}
        icons={internationalFeatureIcons}
        tone="secondary"
        imageOnRight
      />
    </>
  )
}

function CareSection({
  id,
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  features,
  icons,
  tone = 'default',
  imageOnRight = false,
}: {
  id: string
  image: string
  imageAlt: string
  eyebrow: string
  title: string
  description: string
  features: { id: string; title: string; description: string }[]
  icons?: Record<string, LucideIcon>
  tone?: 'default' | 'secondary'
  imageOnRight?: boolean
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`section-y scroll-mt-[calc(var(--header-height)+1rem)] ${tone === 'secondary' ? 'bg-secondary' : ''}`}
    >
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className={`order-1 flex flex-col justify-center gap-10 lg:col-span-7 lg:gap-12 ${imageOnRight ? 'lg:order-1' : 'lg:order-2'}`}>
          <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} description={description} />

          <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = icons?.[feature.id]
              return (
              <li key={feature.id}>
                <Reveal delay={index * 0.06} className="flex flex-col gap-3 border-t border-foreground/15 pt-5">
                  <div className="flex items-center gap-3">
                    {Icon ? <Icon aria-hidden="true" className="size-5 shrink-0 text-foreground/60" strokeWidth={1.5} /> : null}
                    <h3 className="text-lg font-medium tracking-[-0.01em]">{feature.title}</h3>
                  </div>
                  <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
                </Reveal>
              </li>
              )
            })}
          </ul>
        </div>

        <div className={`order-2 relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted sm:aspect-[3/2] lg:col-span-5 lg:aspect-[4/5] ${imageOnRight ? 'lg:order-2' : 'lg:order-1'}`}>
          <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  )
}
