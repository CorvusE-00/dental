import { z } from 'zod'
import { UPLOAD_RULES } from '@/lib/constants'
import {
  carePathOptions,
  patientLocationOptions,
  treatmentInterestOptions,
  type TreatmentId,
} from '@/lib/data'

const treatmentIds = treatmentInterestOptions.map((option) => option.value) as [
  TreatmentId,
  ...TreatmentId[],
]

const patientLocations = patientLocationOptions.map((option) => option.value)
const carePaths = carePathOptions.map((option) => option.value)

export function createTreatmentPlanSchema(locale: 'en' | 'tr' = 'en') {
  const text = locale === 'tr'
    ? {
        name: 'Lütfen adınızı ve soyadınızı yazın.',
        location: 'Lütfen nerede yaşadığınızı seçin.',
        carePath: 'Lütfen hangi konuda yardım istediğinizi seçin.',
        email: 'Lütfen geçerli bir e-posta adresi yazın.',
        phone: 'Lütfen geçerli bir telefon veya WhatsApp numarası yazın.',
        treatment: 'Lütfen bir tedavi seçin.',
        message: 'Lütfen mesajınızı 1.000 karakterin altında tutun.',
      }
    : {
        name: 'Please enter your full name.',
        location: 'Please choose where you are based.',
        carePath: 'Please choose what you would like help with.',
        email: 'Please enter a valid email address.',
        phone: 'Please enter a valid phone or WhatsApp number.',
        treatment: 'Please choose a treatment interest.',
        message: 'Please keep your message under 1,000 characters.',
      }

  return z.object({
    fullName: z.string().trim().min(2, text.name).max(100),
    patientLocation: z.string().refine((value) => patientLocations.includes(value as (typeof patientLocations)[number]), text.location),
    carePath: z.string().refine((value) => carePaths.includes(value as (typeof carePaths)[number]), text.carePath),
    email: z.string().trim().pipe(z.email(text.email)),
    phone: z.string().trim().refine((value) => value === '' || /^\+?[0-9\s().-]{7,20}$/.test(value), text.phone),
    treatmentInterest: z.string().refine((value) => (treatmentIds as string[]).includes(value), text.treatment),
    attachments: z.array(z.custom<File>()).max(UPLOAD_RULES.maxFiles),
    message: z.string().trim().max(1000, text.message),
  })
}

export const treatmentPlanSchema = createTreatmentPlanSchema()

export type TreatmentPlanValues = z.infer<typeof treatmentPlanSchema>

export const treatmentPlanDefaults: TreatmentPlanValues = {
  fullName: '',
  patientLocation: '',
  carePath: '',
  email: '',
  phone: '',
  treatmentInterest: '',
  attachments: [],
  message: '',
}
