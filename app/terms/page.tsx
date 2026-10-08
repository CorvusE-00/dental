import type { Metadata } from 'next'
import { LegalPage } from '@/components/pages/legal-page'
import { getLegalMetadata } from '@/lib/metadata'

export const metadata: Metadata = getLegalMetadata('en', 'terms')

export default function TermsPage() {
  return <LegalPage locale="en" page="terms" />
}
