import type { MetadataRoute } from 'next'
import { absoluteUrl, siteConfig } from '@/lib/site-config'
import { getHomeHref } from '@/lib/navigation'
import { getTreatmentHref, getTreatmentsIndexHref, routableTreatmentSlugs } from '@/lib/treatments'

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.indexable) return []

  const lastModified = new Date()
  const locales = ['en', 'tr'] as const
  const homepageAlternates = {
    en: absoluteUrl(getHomeHref('en')),
    tr: absoluteUrl(getHomeHref('tr')),
    'x-default': absoluteUrl(getHomeHref('en')),
  }
  const treatmentIndexAlternates = {
    en: absoluteUrl(getTreatmentsIndexHref('en')),
    tr: absoluteUrl(getTreatmentsIndexHref('tr')),
    'x-default': absoluteUrl(getTreatmentsIndexHref('en')),
  }

  return [
    ...locales.map((locale) => ({
      url: absoluteUrl(getHomeHref(locale)),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: locale === 'en' ? 1 : 0.9,
      alternates: { languages: homepageAlternates },
    })),
    ...locales.map((locale) => ({
      url: absoluteUrl(getTreatmentsIndexHref(locale)),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: { languages: treatmentIndexAlternates },
    })),
    ...routableTreatmentSlugs.flatMap((slug) => {
      const languages = {
        en: absoluteUrl(getTreatmentHref('en', slug)),
        tr: absoluteUrl(getTreatmentHref('tr', slug)),
        'x-default': absoluteUrl(getTreatmentHref('en', slug)),
      }

      return locales.map((locale) => ({
        url: absoluteUrl(getTreatmentHref(locale, slug)),
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates: { languages },
      }))
    }),
  ]
}
