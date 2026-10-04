'use client'

import { PatientAssistant } from '@/components/patient-assistant/patient-assistant'
import { PatientAssistantProvider } from '@/components/patient-assistant/patient-assistant-provider'
import { TreatmentPlanProvider } from '@/components/shared/treatment-plan-provider'
import { LocaleProvider, type Locale } from '@/lib/i18n'

export function LumaPageProviders({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <LocaleProvider initialLocale={locale}>
      <TreatmentPlanProvider>
        <PatientAssistantProvider>
          {children}
          <PatientAssistant />
        </PatientAssistantProvider>
      </TreatmentPlanProvider>
    </LocaleProvider>
  )
}
