import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n'
import { getLegalHref, type LegalPageSlug } from '@/lib/navigation'
import { absoluteUrl, getLocaleConfig, getTreatmentIndexConfig, siteConfig } from '@/lib/site-config'
import { getTreatmentBySlug, getTreatmentHref } from '@/lib/treatments'

const homepageLanguageAlternates = {
  en: absoluteUrl('/'),
  tr: absoluteUrl('/tr'),
  'x-default': absoluteUrl('/'),
}

const treatmentIndexLanguageAlternates = {
  en: absoluteUrl('/treatments'),
  tr: absoluteUrl('/tr/treatments'),
  'x-default': absoluteUrl('/treatments'),
}

const legalMetadata = {
  en: {
    privacy: { title: 'Privacy Policy | Luma Dental Istanbul', description: 'How information may be handled by the fictional Luma Dental Istanbul prototype and its patient assistant channels.' },
    cookies: { title: 'Cookie Policy | Luma Dental Istanbul', description: 'How browser storage and cookies are handled by the fictional Luma Dental Istanbul prototype.' },
    terms: { title: 'Terms | Luma Dental Istanbul', description: 'Terms for using the fictional Luma Dental Istanbul website, patient assistant, and demonstration channels.' },
  },
  tr: {
    privacy: { title: 'Gizlilik Politikası | Luma Dental Istanbul', description: 'Kurgusal Luma Dental Istanbul prototipi ve hasta asistanı kanallarında bilgilerin nasıl ele alınabileceği.' },
    cookies: { title: 'Çerez Politikası | Luma Dental Istanbul', description: 'Kurgusal Luma Dental Istanbul prototipinde tarayıcı depolaması ve çerezlerin kullanımı.' },
    terms: { title: 'Koşullar | Luma Dental Istanbul', description: 'Kurgusal Luma Dental Istanbul web sitesi, hasta asistanı ve gösterim kanallarının kullanım koşulları.' },
  },
} as const

type MetadataContent = {
  title: string
  description: string
  path: string
  locale: string
  image: string
  imageAlt: string
}

function getPageMetadata(content: MetadataContent, languages: Record<string, string>): Metadata {
  const url = absoluteUrl(content.path)
  const image = absoluteUrl(content.image)

  return {
    metadataBase: siteConfig.origin,
    title: content.title,
    description: content.description,
    alternates: {
      canonical: url,
      languages,
    },
    robots: siteConfig.indexable
      ? { index: true, follow: true }
      : { index: false, follow: false, noarchive: true },
    openGraph: {
      type: 'website',
      url,
      title: content.title,
      description: content.description,
      siteName: siteConfig.name,
      locale: content.locale,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          type: 'image/png',
          alt: content.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: content.imageAlt,
        },
      ],
    },
  }
}

export function getLocalizedMetadata(locale: Locale): Metadata {
  return getPageMetadata(getLocaleConfig(locale), homepageLanguageAlternates)
}

export function getTreatmentIndexMetadata(locale: Locale): Metadata {
  return getPageMetadata(getTreatmentIndexConfig(locale), treatmentIndexLanguageAlternates)
}

export function getLegalMetadata(locale: Locale, page: LegalPageSlug): Metadata {
  const content = legalMetadata[locale][page]
  const path = getLegalHref(locale, page)
  const languages = {
    en: absoluteUrl(getLegalHref('en', page)),
    tr: absoluteUrl(getLegalHref('tr', page)),
    'x-default': absoluteUrl(getLegalHref('en', page)),
  }

  return getPageMetadata(
    {
      title: content.title,
      description: content.description,
      path,
      locale: getLocaleConfig(locale).locale,
      image: getLocaleConfig(locale).image,
      imageAlt: getLocaleConfig(locale).imageAlt,
    },
    languages,
  )
}

export function getTreatmentMetadata(locale: Locale, slug: string): Metadata | undefined {
  const treatment = getTreatmentBySlug(slug)
  if (!treatment) return undefined

  const localeConfig = getLocaleConfig(locale)
  const content = treatment.content[locale]
  const treatmentPath = getTreatmentHref(locale, treatment.slug)
  const languages = {
    en: absoluteUrl(getTreatmentHref('en', treatment.slug)),
    tr: absoluteUrl(getTreatmentHref('tr', treatment.slug)),
    'x-default': absoluteUrl(getTreatmentHref('en', treatment.slug)),
  }

  return getPageMetadata(
    {
      title: content.metadata.title,
      description: content.metadata.description,
      path: treatmentPath,
      locale: localeConfig.locale,
      image: localeConfig.image,
      imageAlt: content.imageAlt,
    },
    languages,
  )
}
