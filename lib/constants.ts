export const SITE = {
  name: 'Luma Dental Istanbul',
  wordmark: 'Luma',
  tagline: 'Thoughtful dental care, planned around you.',
  location: 'Nişantaşı, Istanbul, Türkiye',
  email: 'hello@lumadental.example',
  phone: '+90 212 000 00 00',
  year: 2026,
} as const

export const PRIMARY_CTA_LABEL = 'Start Your Treatment Plan'
export const PRIMARY_FORM_CTA_LABEL = 'Start My Treatment Plan'

export const UPLOAD_RULES = {
  maxFiles: 5,
  maxFileSizeBytes: 10 * 1024 * 1024,
  acceptedMimeTypes: ['image/jpeg', 'image/png', 'application/pdf'],
  acceptedExtensions: ['.jpg', '.jpeg', '.png', '.pdf'],
} as const

export const SIMULATED_SUBMIT_DELAY_MS = 1200

export const PROTOTYPE_NOTICE =
  'Prototype demonstration only. Information and files entered here are not transmitted or stored.'

export const PROTOTYPE_FACTS_NOTICE =
  'Illustrative prototype figures. Replace with verified clinic facts before launch.'
