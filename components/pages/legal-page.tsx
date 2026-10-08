'use client'

import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { TreatmentPlanProvider } from '@/components/shared/treatment-plan-provider'
import { SITE } from '@/lib/constants'
import { LocaleProvider, useLocale, type Locale } from '@/lib/i18n'
import type { LegalPageSlug } from '@/lib/navigation'

function LegalPageContent({ page }: { page: LegalPageSlug }) {
  const { copy } = useLocale()
  const content = copy.legal[page]

  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-primary px-4 py-3 text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {copy.skipToContent}
      </a>
      <Header />
      <main id="main" className="container-page pb-24 pt-[calc(var(--header-height)+5rem)] md:pb-32 md:pt-[calc(var(--header-height)+7rem)]">
        <article className="mx-auto max-w-3xl">
          <header className="max-w-2xl">
            <p className="eyebrow">{content.eyebrow}</p>
            <h1 className="mt-5 font-serif text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.92] tracking-[-0.035em] text-balance">
              {content.title}
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {content.description}
            </p>
            <p className="mt-5 text-sm text-muted-foreground">{content.lastUpdated}</p>
          </header>

          <div className="mt-16 md:mt-24">
            {content.sections.map((section) => (
              <section
                key={section.id ?? section.title}
                id={section.id}
                className="scroll-mt-[calc(var(--header-height)+1.5rem)] border-t border-border py-8 first:border-t-0 first:pt-0 md:py-10"
              >
                <h2 className="font-serif text-3xl leading-tight tracking-[-0.02em] md:text-4xl">{section.title}</h2>
                <div className="mt-5 space-y-4 text-[0.9375rem] leading-relaxed text-muted-foreground md:text-base">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul className="list-disc space-y-2 pl-5">
                      {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  )}
                  {section.contactEmail && (
                    <a href={`mailto:${SITE.email}`} className="inline-flex font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground">
                      {SITE.email}
                    </a>
                  )}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

export function LegalPage({ locale, page }: { locale: Locale; page: LegalPageSlug }) {
  return (
    <LocaleProvider initialLocale={locale}>
      <TreatmentPlanProvider>
        <LegalPageContent page={page} />
      </TreatmentPlanProvider>
    </LocaleProvider>
  )
}
