'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { PrimaryCta } from '@/components/shared/primary-cta'
import { Reveal } from '@/components/shared/reveal'
import { TreatmentCard } from '@/components/shared/treatment-card'
import { TreatmentPlanProvider } from '@/components/shared/treatment-plan-provider'
import { LocaleProvider, type Locale, useLocale } from '@/lib/i18n'
import { getAllTreatments, getTreatmentHref } from '@/lib/treatments'

export function TreatmentsIndexPage({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider initialLocale={locale}>
      <TreatmentPlanProvider>
        <LocalizedTreatmentsIndex />
      </TreatmentPlanProvider>
    </LocaleProvider>
  )
}

function LocalizedTreatmentsIndex() {
  const { copy, locale } = useLocale()
  const treatments = getAllTreatments(locale)
  const indexCopy = copy.sections.treatmentsIndex

  return (
    <div id="top">
      <Header />
      <main id="main">
        <section className="bg-background pb-16 pt-[calc(var(--header-height)+5rem)] md:pb-24 md:pt-[calc(var(--header-height)+7rem)]">
          <div className="container-page">
            <header className="flex max-w-3xl flex-col gap-5">
              <p className="eyebrow">{indexCopy.eyebrow}</p>
              <h1 className="font-serif text-5xl leading-[1.02] font-normal tracking-[-0.02em] text-balance sm:text-6xl lg:text-7xl">
                {indexCopy.title}
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
                {indexCopy.description}
              </p>
            </header>
          </div>
        </section>

        <section aria-labelledby="treatment-catalogue-title" className="bg-card py-16 md:py-24 lg:py-28">
          <div className="container-page flex flex-col gap-10 md:gap-14">
            <h2 id="treatment-catalogue-title" className="sr-only">
              {indexCopy.title}
            </h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {treatments.map((treatment, index) => (
                <Reveal key={treatment.id} delay={(index % 3) * 0.06}>
                  <TreatmentCard
                    treatment={treatment}
                    learnMoreLabel={copy.sections.treatments.learnMore}
                    href={getTreatmentHref(locale, treatment.id)}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y bg-primary text-primary-foreground" aria-labelledby="treatments-cta-title">
          <div className="container-page flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
            <div className="flex max-w-2xl flex-col gap-4">
              <p className="eyebrow text-primary-foreground/70">{copy.sections.finalCta.eyebrow}</p>
              <h2 id="treatments-cta-title" className="font-serif text-4xl leading-[1.05] font-normal tracking-[-0.015em] text-balance sm:text-5xl">
                {indexCopy.ctaTitle}
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-primary-foreground/75 md:text-lg">
                {indexCopy.ctaDescription}
              </p>
            </div>
            <PrimaryCta tone="light" size="lg" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
