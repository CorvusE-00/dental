import { z } from 'zod'
import { UPLOAD_RULES } from '@/lib/constants'
import { treatmentInterestOptions, type TreatmentId } from '@/lib/data'

const treatmentIds = treatmentInterestOptions.map((option) => option.value) as [
  TreatmentId,
  ...TreatmentId[],
]

export const treatmentPlanSchema = z.object({
  fullName: z.string().trim().min(2, 'Please enter your full name.').max(100),
  country: z.string().trim().min(2, 'Please enter the country you will travel from.').max(80),
  email: z.string().trim().pipe(z.email('Please enter a valid email address.')),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9\s().-]{7,20}$/, 'Please enter a phone or WhatsApp number, including country code.'),
  treatmentInterest: z
    .string()
    .refine((value) => (treatmentIds as string[]).includes(value), 'Please choose a treatment interest.'),
  attachments: z.array(z.custom<File>()).max(UPLOAD_RULES.maxFiles),
  message: z.string().trim().max(1000, 'Please keep your message under 1,000 characters.'),
})

export type TreatmentPlanValues = z.infer<typeof treatmentPlanSchema>

export const treatmentPlanDefaults: TreatmentPlanValues = {
  fullName: '',
  country: '',
  email: '',
  phone: '',
  treatmentInterest: '',
  attachments: [],
  message: '',
}
