import type { Locale } from '@/lib/i18n'

function resolveSiteOrigin() {
  const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (configuredOrigin) return new URL(configuredOrigin.endsWith('/') ? configuredOrigin : `${configuredOrigin}/`)

  return new URL('http://localhost:3001/')
}

const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL?.trim()

export const siteConfig = {
  name: 'Luma Dental Istanbul',
  origin: resolveSiteOrigin(),
  indexable: process.env.VERCEL_ENV === 'production' && Boolean(configuredOrigin),
  locales: {
    en: {
      title: 'Luma Dental Istanbul | Thoughtful Dental Care',
      description:
        'Thoughtful cosmetic, restorative, implant, and everyday dental care in Istanbul for local patients and people travelling from abroad.',
      path: '/',
      locale: 'en_TR',
      image: '/images/social/luma-og-en.png',
      imageAlt: 'Luma Dental Istanbul — thoughtful dental care, planned around you.',
    },
    tr: {
      title: 'Luma Dental Istanbul | Özenli Diş Bakımı',
      description:
        "İstanbul'da yaşayanlar ve yurt dışından gelen hastalar için özenli estetik, restoratif, implant ve günlük diş bakımı.",
      path: '/tr',
      locale: 'tr_TR',
      image: '/images/social/luma-og-tr.png',
      imageAlt: 'Luma Dental Istanbul — size göre planlanan özenli diş bakımı.',
    },
  },
  treatmentIndex: {
    en: {
      title: 'Treatments | Luma Dental Istanbul',
      description: 'Explore dental treatments in Istanbul, with care and next steps planned around your needs after assessment.',
      path: '/treatments',
      locale: 'en_TR',
      image: '/images/social/luma-og-en.png',
      imageAlt: 'Luma Dental Istanbul — treatments planned around you.',
    },
    tr: {
      title: 'Tedaviler | Luma Dental Istanbul',
      description: 'İstanbul’da ihtiyaçlarınıza göre planlanan diş tedavilerini ve sonraki adımları değerlendirme sonrasında keşfedin.',
      path: '/tr/treatments',
      locale: 'tr_TR',
      image: '/images/social/luma-og-tr.png',
      imageAlt: 'Luma Dental Istanbul — size göre planlanan tedaviler.',
    },
  },
} as const

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.origin).toString()
}

export function getLocaleConfig(locale: Locale) {
  return siteConfig.locales[locale]
}

export function getTreatmentIndexConfig(locale: Locale) {
  return siteConfig.treatmentIndex[locale]
}
