import type { Metadata } from 'next'
import { TreatmentsIndexPage } from '@/components/pages/treatments-index-page'
import { getTreatmentIndexMetadata } from '@/lib/metadata'

export const metadata: Metadata = getTreatmentIndexMetadata('en')

export default function TreatmentsPage() {
  return <TreatmentsIndexPage locale="en" />
}
