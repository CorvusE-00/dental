import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { SitePage } from '@/components/site-page'
import type { Locale } from '@/lib/i18n'

export default async function LocalizedHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale !== 'tr' && locale !== 'en') notFound()
  return <SitePage locale={locale as Locale} />
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (locale === 'tr') {
    return {
      title: 'Luma Dental Istanbul | Özenli Diş Bakımı',
      description: "İstanbul'da yaşayanlar ve yurt dışından gelen hastalar için özenli diş bakımı.",
      alternates: { canonical: '/tr', languages: { en: '/', tr: '/tr' } },
    }
  }
  return {
    title: 'Luma Dental Istanbul | Thoughtful Dental Care',
    alternates: { canonical: '/', languages: { en: '/', tr: '/tr' } },
  }
}
