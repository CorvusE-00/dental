import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { MobileStickyCta } from '@/components/layout/mobile-sticky-cta'
import { TreatmentPlanProvider } from '@/components/shared/treatment-plan-provider'
import { Hero } from '@/components/sections/hero'
import { TrustStrip } from '@/components/sections/trust-strip'
import { Results } from '@/components/sections/results'
import { Treatments } from '@/components/sections/treatments'
import { WhyLuma } from '@/components/sections/why-luma'
import { PatientJourney } from '@/components/sections/patient-journey'
import { Doctors } from '@/components/sections/doctors'
import { Testimonials } from '@/components/sections/testimonials'
import { Faq } from '@/components/sections/faq'
import { FinalCta } from '@/components/sections/final-cta'

export default function HomePage() {
  return (
    <TreatmentPlanProvider>
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-primary px-4 py-3 text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <TrustStrip />
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
    </TreatmentPlanProvider>
  )
}
