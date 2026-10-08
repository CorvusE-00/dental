import type { Metadata } from 'next'
import { LegalPage } from '@/components/pages/legal-page'
import { getLegalMetadata } from '@/lib/metadata'

export const metadata: Metadata = getLegalMetadata('en', 'privacy')

export default function PrivacyPage() {
  return <LegalPage locale="en" page="privacy" />
}
