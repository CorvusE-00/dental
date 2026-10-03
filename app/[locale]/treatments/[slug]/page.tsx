import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { TreatmentDetailPage } from '@/components/pages/treatment-detail-page'
import { getTreatmentMetadata } from '@/lib/metadata'
import type { Locale } from '@/lib/i18n'
import { getTreatmentBySlug, routableTreatmentSlugs } from '@/lib/treatments'

type LocalizedTreatmentRouteParams = { locale: string; slug: string }

export function generateStaticParams(): LocalizedTreatmentRouteParams[] {
  return (['en', 'tr'] as const).flatMap((locale) =>
    routableTreatmentSlugs.flatMap((slug) => (getTreatmentBySlug(slug) ? [{ locale, slug }] : [])),
  )
}

export default async function LocalizedTreatmentPage({ params }: { params: Promise<LocalizedTreatmentRouteParams> }) {
  const { locale, slug } = await params
  if (locale !== 'tr' && locale !== 'en') notFound()

  const treatment = getTreatmentBySlug(slug)
  if (!treatment) notFound()

  return <TreatmentDetailPage locale={locale as Locale} treatment={treatment} />
}

export async function generateMetadata({ params }: { params: Promise<LocalizedTreatmentRouteParams> }): Promise<Metadata> {
  const { locale, slug } = await params
  if (locale !== 'tr' && locale !== 'en') notFound()

  const treatment = getTreatmentBySlug(slug)
  if (!treatment) notFound()

  return getTreatmentMetadata(locale as Locale, treatment.slug) ?? notFound()
}
