import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { TreatmentsIndexPage } from '@/components/pages/treatments-index-page'
import type { Locale } from '@/lib/i18n'
import { getTreatmentIndexMetadata } from '@/lib/metadata'

export default async function LocalizedTreatmentsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale !== 'tr' && locale !== 'en') notFound()

  return <TreatmentsIndexPage locale={locale as Locale} />
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (locale !== 'tr' && locale !== 'en') notFound()

  return getTreatmentIndexMetadata(locale as Locale)
}
