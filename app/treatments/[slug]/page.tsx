import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { TreatmentDetailPage } from '@/components/pages/treatment-detail-page'
import { getTreatmentMetadata } from '@/lib/metadata'
import { getTreatmentBySlug, routableTreatmentSlugs } from '@/lib/treatments'

type TreatmentRouteParams = { slug: string }

export function generateStaticParams(): TreatmentRouteParams[] {
  return routableTreatmentSlugs.flatMap((slug) => (getTreatmentBySlug(slug) ? [{ slug }] : []))
}

export default async function TreatmentPage({ params }: { params: Promise<TreatmentRouteParams> }) {
  const { slug } = await params
  const treatment = getTreatmentBySlug(slug)
  if (!treatment) notFound()

  return <TreatmentDetailPage locale="en" treatment={treatment} />
}

export async function generateMetadata({ params }: { params: Promise<TreatmentRouteParams> }): Promise<Metadata> {
  const { slug } = await params
  const treatment = getTreatmentBySlug(slug)
  if (!treatment) notFound()

  return getTreatmentMetadata('en', treatment.slug) ?? notFound()
}
