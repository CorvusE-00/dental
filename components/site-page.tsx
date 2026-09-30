'use client'

import { useEffect } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { MobileStickyCta } from '@/components/layout/mobile-sticky-cta'
import { TreatmentPlanProvider } from '@/components/shared/treatment-plan-provider'
import { PatientAssistantProvider } from '@/components/patient-assistant/patient-assistant-provider'
import { PatientAssistant } from '@/components/patient-assistant/patient-assistant'
import { LocaleProvider, type Locale, useLocale } from '@/lib/i18n'
import { Hero } from '@/components/sections/hero'
import { TrustStrip } from '@/components/sections/trust-strip'
import { AboutLuma } from '@/components/sections/about-luma'
import { Results } from '@/components/sections/results'
import { Treatments } from '@/components/sections/treatments'
import { WhyLuma } from '@/components/sections/why-luma'
import { PatientJourney } from '@/components/sections/patient-journey'
import { Doctors } from '@/components/sections/doctors'
import { Testimonials } from '@/components/sections/testimonials'
import { Faq } from '@/components/sections/faq'
import { FinalCta } from '@/components/sections/final-cta'

export function SitePage({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider initialLocale={locale}>
      <TreatmentPlanProvider>
        <PatientAssistantProvider>
          <LocalizedPageContent />
          <PatientAssistant />
        </PatientAssistantProvider>
      </TreatmentPlanProvider>
    </LocaleProvider>
  )
}

function LocalizedPageContent() {
  const { copy, locale } = useLocale()

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.slice(1)
      if (!hash) return
      const target = document.getElementById(hash)
      if (!target) return
      const headerHeight = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 72
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16
      window.scrollTo({ top, behavior: 'auto' })
    }

    const timers = [0, 80, 300, 700].map((delay) => window.setTimeout(scrollToHash, delay))
    window.addEventListener('hashchange', scrollToHash)
    return () => {
      timers.forEach((timer) => window.clearTimeout(timer))
      window.removeEventListener('hashchange', scrollToHash)
    }
  }, [locale])

  return (
    <>
        <a
          href="#main"
          className="sr-only z-50 rounded-md bg-primary px-4 py-3 text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          {copy.skipToContent}
        </a>
        <Header />
        <main id="main">
          <Hero />
          <TrustStrip compact className="py-4 md:hidden" />
          <TrustStrip className="hidden md:block" />
          <AboutLuma />
          <Results />
          <Treatments />
          <WhyLuma />
          <PatientJourney />
          <Doctors />
          <Testimonials />
          <Faq />
          <FinalCta />
        </main>
        <Footer />
        <MobileStickyCta />
    </>
  )
}
