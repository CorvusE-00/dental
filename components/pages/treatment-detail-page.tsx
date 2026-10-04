'use client'

import Image from 'next/image'
import type { LucideIcon } from 'lucide-react'
import { BadgeEuro, CalendarClock, CircleHelp, HeartHandshake, ListChecks, MessageCircleQuestion, SlidersHorizontal, UserCheck } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { PrimaryCta } from '@/components/shared/primary-cta'
import { TreatmentPlanProvider } from '@/components/shared/treatment-plan-provider'
import { LocaleProvider, type Locale, useLocale } from '@/lib/i18n'
import { getTreatmentsIndexHref, type TreatmentDefinition } from '@/lib/treatments'

export function TreatmentDetailPage({ locale, treatment }: { locale: Locale; treatment: TreatmentDefinition }) {
  return (
    <LocaleProvider initialLocale={locale}>
      <TreatmentPlanProvider>
        <LocalizedTreatmentDetail treatment={treatment} />
      </TreatmentPlanProvider>
    </LocaleProvider>
  )
}

function LocalizedTreatmentDetail({ treatment }: { treatment: TreatmentDefinition }) {
  const { copy, locale } = useLocale()
  const content = treatment.content[locale]
  const labels = copy.treatmentDetail
  const processGridClass = content.process.length === 5
    ? 'lg:grid-cols-5 lg:gap-4'
    : content.process.length === 4
      ? 'lg:grid-cols-4 lg:gap-5'
      : 'lg:grid-cols-3 lg:gap-6'
  const planFactorsGridClass = content.planFactors.length === 5
    ? 'xl:grid-cols-5'
    : content.planFactors.length === 4
      ? 'xl:grid-cols-4'
      : content.planFactors.length === 3
        ? 'xl:grid-cols-3'
        : 'xl:grid-cols-2'

  return (
    <div id="top">
      <Header />
      <main id="main">
        <article>
          <section className="bg-background pb-16 pt-[calc(var(--header-height)+3rem)] md:pb-24 md:pt-[calc(var(--header-height)+5rem)]">
            <div className="container-page grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
              <div className="flex flex-col items-start gap-6 lg:col-span-5">
                <a
                  href={getTreatmentsIndexHref(locale)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  <span aria-hidden="true">←</span>
                  {labels.backToTreatments}
                </a>
                <div className="flex flex-col gap-5">
                  <p className="eyebrow">{labels.eyebrow}</p>
                  <h1 className="font-serif text-5xl leading-[1.02] font-normal tracking-[-0.02em] text-balance sm:text-6xl">
                    {content.name}
                  </h1>
                  <p className="max-w-xl text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
                    {content.detailIntroduction}
                  </p>
                </div>
                <PrimaryCta size="lg" />
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted lg:col-span-7 lg:aspect-[5/4]">
                <Image
                  src={treatment.image}
                  alt={content.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1280px) 680px, (min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          <section className="border-y border-border bg-card py-8 md:py-10" aria-labelledby="treatment-glance-title">
            <div className="container-page flex flex-col gap-6">
              <h2 id="treatment-glance-title" className="eyebrow">
                {labels.atAGlance}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <QuickFact label={labels.startingPrice} value={content.quickFacts.startingPrice} emphasis />
                <QuickFact label={labels.typicalAppointments} value={content.quickFacts.appointmentCount} />
                <QuickFact label={labels.typicalTimeline} value={content.quickFacts.typicalTimeline} />
                {content.quickFacts.anaesthesia ? <QuickFact label={labels.anaesthesia} value={content.quickFacts.anaesthesia} /> : null}
              </div>
            </div>
          </section>

          <section className="bg-card py-16 md:py-24" aria-labelledby="treatment-overview-title">
            <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
              <DetailTextSection id="treatment-overview-title" title={labels.whatItIs} icon={CircleHelp}>
                {content.whatItIs}
              </DetailTextSection>
              <DetailTextSection id="treatment-suitability-title" title={labels.suitability} icon={UserCheck}>
                {content.suitability}
              </DetailTextSection>
            </div>
          </section>

          <section className="bg-background py-16 md:py-24" aria-labelledby="treatment-process-title">
            <div className="container-page flex flex-col gap-10 md:gap-14">
              <DetailHeading id="treatment-process-title" title={labels.process} icon={ListChecks} />
              <ol className={`grid gap-8 md:grid-cols-2 ${processGridClass}`}>
                {content.process.map((step, index) => (
                  <li key={step.title} className="flex min-w-0 flex-col gap-4 border-t border-border pt-5">
                    <span className="font-serif text-3xl text-muted-foreground">{String(index + 1).padStart(2, '0')}</span>
                    <div className="flex flex-col gap-2">
                      <h3 className="min-h-12 text-base font-medium text-primary">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="bg-card py-16 md:py-24" aria-labelledby="treatment-planning-title">
            <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
              <DetailTextSection id="treatment-timing-title" title={labels.timing} icon={CalendarClock}>
                {content.timeline}
              </DetailTextSection>
              <div className="flex flex-col gap-5">
                <DetailHeading id="treatment-planning-title" title={labels.planFactors} icon={SlidersHorizontal} />
                <ul className={`grid gap-3 text-sm leading-snug text-muted-foreground sm:grid-cols-2 ${planFactorsGridClass}`}>
                  {content.planFactors.map((factor) => (
                    <li key={factor} className="border-t border-border pt-3">
                      {factor}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-sage-soft py-16 md:py-24" aria-labelledby="treatment-pricing-title">
            <div className="container-page grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-16">
              <div className="flex max-w-2xl flex-col gap-5 lg:col-span-7">
                <DetailEyebrow title={labels.pricing} icon={BadgeEuro} />
                <h2 id="treatment-pricing-title" className="font-serif text-4xl leading-[1.05] font-normal tracking-[-0.015em] sm:text-5xl">
                  {content.quickFacts.startingPrice}
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">{content.pricing}</p>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{content.priceNote}</p>
              </div>
              <div className="lg:col-span-5 lg:justify-self-end">
                <PrimaryCta size="lg" />
              </div>
            </div>
          </section>

          <section className="bg-background py-16 md:py-24" aria-labelledby="treatment-aftercare-title">
            <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
              <DetailTextSection id="treatment-aftercare-title" title={labels.aftercare} icon={HeartHandshake}>
                {content.aftercare}
              </DetailTextSection>
              <div className="flex flex-col gap-5" aria-labelledby="treatment-faq-title">
                <DetailHeading id="treatment-faq-title" title={labels.faqs} icon={MessageCircleQuestion} />
                <Accordion>
                  {content.faqs.map((faq, index) => (
                    <AccordionItem key={faq.question} value={`faq-${index}`} className="border-b border-foreground/15 first:border-t">
                      <AccordionTrigger className="min-h-16 items-center rounded-none py-5 text-left text-base font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                        <p>{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          <section className="section-y bg-primary text-primary-foreground" aria-labelledby="treatment-final-cta-title">
            <div className="container-page flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
              <div className="flex max-w-2xl flex-col gap-4">
                <p className="eyebrow text-primary-foreground/70">{copy.sections.finalCta.eyebrow}</p>
                <h2 id="treatment-final-cta-title" className="font-serif text-4xl leading-[1.05] font-normal tracking-[-0.015em] text-balance sm:text-5xl">
                  {copy.sections.finalCta.title}
                </h2>
                <p className="max-w-xl text-base leading-relaxed text-primary-foreground/75 md:text-lg">
                  {copy.sections.finalCta.description}
                </p>
              </div>
              <PrimaryCta tone="light" size="lg" />
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  )
}

function DetailHeading({ id, title, icon: Icon }: { id: string; title: string; icon?: LucideIcon }) {
  return (
    <h2 id={id} className="flex items-start gap-3 font-serif text-4xl leading-[1.05] font-normal tracking-[-0.015em] sm:text-5xl">
      {Icon ? <Icon aria-hidden="true" className="mt-1 size-5 shrink-0 stroke-[1.5] text-muted-foreground sm:mt-2 sm:size-[1.375rem]" /> : null}
      <span>{title}</span>
    </h2>
  )
}

function DetailTextSection({ id, title, icon, children }: { id: string; title: string; icon?: LucideIcon; children: React.ReactNode }) {
  return (
    <div className="flex max-w-2xl flex-col gap-5">
      <DetailHeading id={id} title={title} icon={icon} />
      <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{children}</p>
    </div>
  )
}

function DetailEyebrow({ title, icon: Icon }: { title: string; icon: LucideIcon }) {
  return (
    <p className="eyebrow inline-flex items-center gap-2">
      <Icon aria-hidden="true" className="size-4 shrink-0 stroke-[1.5] text-muted-foreground" />
      {title}
    </p>
  )
}

function QuickFact({ label, value, emphasis = false }: { label: string; value: string; emphasis?: boolean }) {
  return (
    <div className="flex flex-col gap-2 border-t border-border pt-4">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
      <p className={emphasis ? 'font-serif text-3xl leading-tight text-primary' : 'text-base leading-relaxed text-primary'}>{value}</p>
    </div>
  )
}
