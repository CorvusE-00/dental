import type { Locale } from '@/lib/i18n'
import { absoluteUrl, getLocaleConfig, siteConfig } from '@/lib/site-config'

export function SiteJsonLd({ locale }: { locale: Locale }) {
  const page = getLocaleConfig(locale)
  const pageUrl = absoluteUrl(page.path)
  const websiteUrl = absoluteUrl('/')
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${websiteUrl}#website`,
        name: siteConfig.name,
        url: websiteUrl,
        inLanguage: locale,
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        name: page.title,
        description: page.description,
        url: pageUrl,
        isPartOf: { '@id': `${websiteUrl}#website` },
        inLanguage: locale,
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
    />
  )
}
