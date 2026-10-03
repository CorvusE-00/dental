import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n'
import { absoluteUrl, getLocaleConfig, getTreatmentIndexConfig, siteConfig } from '@/lib/site-config'

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
