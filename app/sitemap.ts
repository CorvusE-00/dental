import type { MetadataRoute } from 'next'
import { absoluteUrl, siteConfig } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.indexable) return []

  const lastModified = new Date()
  return [
    {
      url: absoluteUrl('/'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          en: absoluteUrl('/'),
          tr: absoluteUrl('/tr'),
          'x-default': absoluteUrl('/'),
        },
      },
    },
    {
      url: absoluteUrl('/tr'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          en: absoluteUrl('/'),
          tr: absoluteUrl('/tr'),
          'x-default': absoluteUrl('/'),
        },
      },
    },
  ]
}
