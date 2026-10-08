import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { LegalPage } from '@/components/pages/legal-page'
import type { Locale } from '@/lib/i18n'
import { getLegalMetadata } from '@/lib/metadata'

export default async function LocalizedCookiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale !== 'tr' && locale !== 'en') notFound()
  return <LegalPage locale={locale as Locale} page="cookies" />
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (locale !== 'tr' && locale !== 'en') notFound()
  return getLegalMetadata(locale as Locale, 'cookies')
}
