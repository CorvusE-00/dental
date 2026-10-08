import type { Metadata } from 'next'
import { LegalPage } from '@/components/pages/legal-page'
import { getLegalMetadata } from '@/lib/metadata'

export const metadata: Metadata = getLegalMetadata('en', 'cookies')

export default function CookiesPage() {
  return <LegalPage locale="en" page="cookies" />
}
