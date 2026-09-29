import { SitePage } from '@/components/site-page'
import { SiteJsonLd } from '@/components/metadata/json-ld'
import type { Metadata } from 'next'
import { getLocalizedMetadata } from '@/lib/metadata'

export const metadata: Metadata = getLocalizedMetadata('en')

export default function HomePage() {
  return (
    <>
      <SiteJsonLd locale="en" />
      <SitePage locale="en" />
    </>
  )
}
