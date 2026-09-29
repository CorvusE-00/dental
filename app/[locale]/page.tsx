import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { SitePage } from '@/components/site-page'
import { SiteJsonLd } from '@/components/metadata/json-ld'
import type { Locale } from '@/lib/i18n'
import { getLocalizedMetadata } from '@/lib/metadata'

export default async function LocalizedHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale !== 'tr' && locale !== 'en') notFound()
  return (
    <>
      <SiteJsonLd locale={locale as Locale} />
      <SitePage locale={locale as Locale} />
    </>
  )
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (locale !== 'tr' && locale !== 'en') notFound()
  return getLocalizedMetadata(locale as Locale)
}
