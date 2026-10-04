import type { Locale } from '@/lib/i18n'
import { footerColumns, type FooterColumn } from '@/lib/data'
import { getTreatmentHref, getTreatmentsIndexHref, type RoutableTreatmentSlug } from '@/lib/treatments'

export type HomepageSectionId =
  | 'results'
  | 'doctors'
  | 'faq'
  | 'local-care'
  | 'international-care'
  | 'journey'
  | 'contact'

export type NavItem = { id: string; label: string; href: string }

export function getHomeHref(locale: Locale) {
  return locale === 'tr' ? '/tr' : '/'
}

export function getSectionHref(locale: Locale, section: HomepageSectionId) {
  return `${getHomeHref(locale)}#${section}`
}

export function getPrimaryNavItems(locale: Locale): NavItem[] {
  return [
    { id: 'treatments', label: 'Treatments', href: getTreatmentsIndexHref(locale) },
    { id: 'results', label: 'Results', href: getSectionHref(locale, 'results') },
    { id: 'doctors', label: 'Our Doctors', href: getSectionHref(locale, 'doctors') },
    { id: 'faq', label: 'FAQ', href: getSectionHref(locale, 'faq') },
  ]
}

export function getMobileNavItems(locale: Locale): NavItem[] {
  return [
    ...getPrimaryNavItems(locale).slice(0, 1),
    { id: 'local-care', label: 'Local Care', href: getSectionHref(locale, 'local-care') },
    { id: 'international-care', label: 'International Care', href: getSectionHref(locale, 'international-care') },
    ...getPrimaryNavItems(locale).slice(1),
  ]
}

type FooterNavigationColumn = Omit<FooterColumn, 'links'> & {
  links: Array<FooterColumn['links'][number] & { href: string }>
}

const treatmentSlugs: Record<string, RoutableTreatmentSlug> = {
  'dental-implants': 'dental-implants',
  veneers: 'veneers',
  'smile-makeovers': 'smile-makeover',
  'all-on-4-all-on-6': 'all-on-4',
  'zirconium-crowns': 'crowns',
}

function getFooterHref(locale: Locale, columnId: string, linkId: string) {
  if (columnId === 'treatments') {
    const slug = treatmentSlugs[linkId]
    if (slug) return getTreatmentHref(locale, slug)
  }

  const sectionByLink: Record<string, HomepageSectionId> = {
    results: 'results',
    doctors: 'doctors',
    'patient-journey': 'journey',
    faq: 'faq',
    contact: 'contact',
    'local-care': 'local-care',
    'international-care': 'international-care',
    'treatment-planning': 'journey',
    aftercare: 'international-care',
  }

  const section = sectionByLink[linkId]
  return section ? getSectionHref(locale, section) : getHomeHref(locale)
}

export function getFooterColumns(locale: Locale): FooterNavigationColumn[] {
  return footerColumns.map((column) => ({
    ...column,
    links: column.links.map((link) => ({
      ...link,
      href: getFooterHref(locale, column.id, link.id),
    })),
  }))
}
