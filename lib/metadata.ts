import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n'
import { absoluteUrl, getLocaleConfig, siteConfig } from '@/lib/site-config'

const languageAlternates = {
  en: absoluteUrl('/'),
  tr: absoluteUrl('/tr'),
  'x-default': absoluteUrl('/'),
}

export function getLocalizedMetadata(locale: Locale): Metadata {
  const content = getLocaleConfig(locale)
  const url = absoluteUrl(content.path)
  const image = absoluteUrl(content.image)

  return {
    metadataBase: siteConfig.origin,
    title: content.title,
    description: content.description,
    alternates: {
      canonical: url,
      languages: languageAlternates,
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
