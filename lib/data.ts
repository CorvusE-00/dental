import { getFeaturedTreatments, type HomepageTreatment, type TreatmentId } from '@/lib/treatments'

export type { TreatmentId } from '@/lib/treatments'

export type NavItem = { id: string; label: string; href: `#${string}` }

export const primaryNav: NavItem[] = [
  { id: 'treatments', label: 'Treatments', href: '#treatments' },
  { id: 'results', label: 'Results', href: '#results' },
  { id: 'doctors', label: 'Our Doctors', href: '#doctors' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
]

export const mobileNav: NavItem[] = [
  ...primaryNav.slice(0, 1),
  { id: 'local-care', label: 'Local Care', href: '#local-care' },
  { id: 'international-care', label: 'International Care', href: '#international-care' },
  ...primaryNav.slice(1),
]

export type Metric = { id: string; value: string; label: string }

export const trustMetrics: Metric[] = [
  { id: 'patients', value: '8,000+', label: 'Patients treated' },
  { id: 'experience', value: '14+ years', label: 'Clinical experience' },
  { id: 'rating', value: '4.9 / 5', label: 'Patient rating' },
]

export type Treatment = HomepageTreatment

export const featuredTreatments: Treatment[] = getFeaturedTreatments('en')

export const supportingTreatments = [
  'Crowns and bridges',
  'Dentures',
  'All-on-4 / All-on-6',
  'Teeth whitening',
] as const

export type TreatmentOption = { value: TreatmentId; label: string }

export const treatmentInterestOptions: TreatmentOption[] = [
  { value: 'routine-care', label: 'Check-ups or preventive care' },
  { value: 'dental-implants', label: 'Dental implants' },
  { value: 'veneers', label: 'Veneers' },
  { value: 'crowns', label: 'Crowns' },
  { value: 'smile-makeover', label: 'Full smile makeover' },
  { value: 'not-sure', label: 'Not sure yet' },
]

export type PatientLocation = 'istanbul' | 'turkiye' | 'abroad'

export const patientLocationOptions = [
  { value: 'istanbul' as PatientLocation, label: 'I live in Istanbul' },
  { value: 'turkiye' as PatientLocation, label: 'I live elsewhere in Türkiye' },
  { value: 'abroad' as PatientLocation, label: 'I live outside Türkiye' },
] as const

export const carePathOptions = [
  { value: 'exploring', label: 'I am exploring my options' },
  { value: 'consultation', label: 'I need an in-person consultation' },
  { value: 'international', label: 'I am planning treatment from abroad' },
] as const

export type ResultCase = {
  id: string
  patient: string
  origin: string
  treatment: string
  visits: string
  before: { src: string; alt: string }
  after: { src: string; alt: string }
}

export const resultCases: ResultCase[] = [
  {
    id: 'case-michael',
    patient: 'Michael, 42',
    origin: 'UK',
    treatment: '20 Zirconium Crowns',
    visits: '2 visits · Istanbul',
    before: {
      src: '/images/results/case-1-before.png',
      alt: 'Before treatment: worn, discoloured teeth with visible gaps.',
    },
    after: {
      src: '/images/results/case-1-after.png',
      alt: 'After treatment: even, natural-shade zirconium crowns.',
    },
  },
  {
    id: 'case-hannah',
    patient: 'Hannah, 34',
    origin: 'Germany',
    treatment: '8 Porcelain Veneers',
    visits: '1 visit · Istanbul',
    before: {
      src: '/images/results/case-2-before.png',
      alt: 'Before treatment: slightly crooked front teeth with chipped edges and staining.',
    },
    after: {
      src: '/images/results/case-2-after.png',
      alt: 'After treatment: aligned porcelain veneers in a soft natural shade.',
    },
  },
  {
    id: 'case-robert',
    patient: 'Robert, 61',
    origin: 'Ireland',
    treatment: 'All-on-6, both arches',
    visits: '2 visits · Istanbul',
    before: {
      src: '/images/results/case-3-before.png',
      alt: 'Before treatment: several missing teeth and receded gums.',
    },
    after: {
      src: '/images/results/case-3-after.png',
      alt: 'After treatment: full upper and lower implant-supported bridges.',
    },
  },
]

export type Feature = { id: string; title: string; description: string }

export const localFeatures: Feature[] = [
  {
    id: 'local-consultation',
    title: 'Meet the team in Istanbul',
    description:
      'Start with an in-person conversation about your health, your goals and the changes you would like to make.',
  },
  {
    id: 'clear-options',
    title: 'Understand your options',
    description:
      'We explain suitable routes, timings and next steps before you decide how you want to proceed.',
  },
  {
    id: 'everyday-care',
    title: 'Care for everyday needs',
    description:
      'From examinations and hygiene to restorative and cosmetic care, your plan can grow with your needs.',
  },
  {
    id: 'local-aftercare',
    title: 'Follow-up close to home',
    description:
      'Continue with clear aftercare and regular support at the clinic in Istanbul.',
  },
]

export const internationalFeatures: Feature[] = [
  {
    id: 'international-planning',
    title: 'Plan before you travel',
    description:
      'Share the information you have and receive clear options to discuss before you arrange your visit.',
  },
  {
    id: 'coordinator',
    title: 'One coordinator, start to finish',
    description:
      'A dedicated coordinator helps organise appointments and keeps the practical details in one place.',
  },
  {
    id: 'logistics',
    title: 'A visit shaped around your dates',
    description:
      'When appropriate, appointment timing and local travel guidance can be planned around your stay.',
  },
  {
    id: 'aftercare',
    title: 'Aftercare that continues at home',
    description:
      'Receive clear written guidance and follow-up support once you have returned home.',
  },
]

export type JourneyStep = { id: string; title: string; description: string }

export const patientJourney: JourneyStep[] = [
  {
    id: 'tell-us',
    title: 'Tell us what you need',
    description: 'Share your concerns, goals and any useful photos or existing records.',
  },
  {
    id: 'review-options',
    title: 'Review your options',
    description: 'The team explains possible routes, timing and what information is still needed.',
  },
  {
    id: 'confirm-plan',
    title: 'Confirm your plan',
    description: 'Complete the appropriate clinical assessment and confirm your plan before treatment.',
  },
  {
    id: 'treatment-aftercare',
    title: 'Treatment & aftercare',
    description: 'Proceed with treatment and receive clear follow-up and aftercare guidance.',
  },
]

export type TeamMember = {
  id: string
  name: string
  role: string
  credentials?: string
  experience?: string
  languages?: string
  image: string
  imageAlt: string
}

export const team: TeamMember[] = [
  {
    id: 'kerem-aydin',
    name: 'Dr. Kerem Aydin',
    role: 'Founder & Prosthodontist',
    credentials: 'DDS, MSc',
    experience: '14+ years experience',
    image: '/images/team/kerem-aydin.png',
    imageAlt: 'Portrait of Dr. Kerem Aydin in the clinic.',
  },
  {
    id: 'elif-demir',
    name: 'Dr. Elif Demir',
    role: 'Oral & Maxillofacial Surgeon',
    credentials: 'DDS, PhD',
    experience: '12+ years experience',
    image: '/images/team/elif-demir.png',
    imageAlt: 'Portrait of Dr. Elif Demir in the clinic.',
  },
  {
    id: 'sofia-marin',
    name: 'Dr. Sofia Marin',
    role: 'Cosmetic Dentist',
    credentials: 'DDS',
    experience: '8+ years experience',
    image: '/images/team/sofia-marin.png',
    imageAlt: 'Portrait of Dr. Sofia Marin in the clinic.',
  },
  {
    id: 'maya-thompson',
    name: 'Maya Thompson',
    role: 'International Patient Coordinator',
    languages: 'English / German',
    image: '/images/team/maya-thompson.png',
    imageAlt: 'Portrait of Maya Thompson, International Patient Coordinator.',
  },
]

export type Testimonial = {
  id: string
  quote: string
  name: string
  origin: string
  treatment: string
  image: string
  imageAlt: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'sarah',
    quote:
      'I had a plan and an honest estimate before I booked a flight. Maya answered every question, and nothing about the trip felt rushed.',
    name: 'Sarah W.',
    origin: 'Manchester, UK',
    treatment: 'Dental implants',
    image: '/images/testimonials/sarah.jpg',
    imageAlt: 'Portrait of Sarah, a fictional Luma patient.',
  },
  {
    id: 'jonas',
    quote:
      'Dr. Marin talked me out of more veneers than I needed. The result looks like my own teeth, just calmer and more even.',
    name: 'Jonas K.',
    origin: 'Munich, Germany',
    treatment: 'Veneers',
    image: '/images/testimonials/jonas.png',
    imageAlt: 'Portrait of Jonas, a fictional Luma patient.',
  },
  {
    id: 'claire',
    quote:
      'The clinic felt more like a quiet hotel than a hospital. Every step was explained, and the follow-up calls at home were reassuring.',
    name: 'Claire D.',
    origin: 'Dublin, Ireland',
    treatment: 'Full smile makeover',
    image: '/images/testimonials/claire.jpg',
    imageAlt: 'Portrait of Claire, a fictional Luma patient.',
  },
]

export type Faq = { id: string; question: string; answer: string }

export const faqs: Faq[] = [
  {
    id: 'first-consultation',
    question: 'What happens at the first consultation?',
    answer:
      'We listen to what you want to change, review your dental health and explain the next useful step. Final recommendations depend on an appropriate clinical assessment.',
  },
  {
    id: 'suitability',
    question: 'How do you know which treatment is suitable?',
    answer:
      'Suitability varies from person to person. The team considers your health, anatomy, goals and records before confirming any treatment route.',
  },
  {
    id: 'estimate',
    question: 'Will I understand the estimate before treatment?',
    answer:
      'The aim is to explain the proposed options, timings and expected costs clearly before you decide how to proceed. The final plan follows the appropriate assessment.',
  },
  {
    id: 'routine-care',
    question: 'Do you offer routine check-ups and hygiene?',
    answer:
      'The prototype includes examinations, hygiene, restorative care, cosmetic care and implant planning. The future clinic should replace this list with its verified services.',
  },
  {
    id: 'international-planning',
    question: 'Can I start planning from outside Istanbul?',
    answer:
      'Yes. You can begin by sharing the information you have. An in-clinic assessment is still required before any final treatment recommendation.',
  },
  {
    id: 'travel-support',
    question: 'Can you help with practical travel planning?',
    answer:
      'For international patients, appointment timing and local travel guidance can be discussed around the visit. Any transfer, accommodation or language services should be confirmed by the real clinic.',
  },
  {
    id: 'aftercare',
    question: 'What happens after treatment?',
    answer:
      'You receive written aftercare guidance and follow-up support appropriate to your treatment. If a concern arises, the clinic will explain the next step.',
  },
]

export type FooterLink = { label: string; href: string }
export type FooterColumn = { id: string; title: string; links: FooterLink[] }

export const footerColumns: FooterColumn[] = [
  {
    id: 'treatments',
    title: 'Treatments',
    links: [
      { label: 'Dental Implants', href: '#treatments' },
      { label: 'Veneers', href: '#treatments' },
      { label: 'Smile Makeovers', href: '#treatments' },
      { label: 'All-on-4 / All-on-6', href: '#treatments' },
      { label: 'Zirconium Crowns', href: '#treatments' },
    ],
  },
  {
    id: 'explore',
    title: 'Explore',
    links: [
      { label: 'Results', href: '#results' },
      { label: 'Our Doctors', href: '#doctors' },
      { label: 'Patient Journey', href: '#journey' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    id: 'patient-care',
    title: 'Patient Care',
    links: [
      { label: 'Local Care', href: '#local-care' },
      { label: 'International Care', href: '#international-care' },
      { label: 'Treatment Planning', href: '#journey' },
      { label: 'Aftercare', href: '#international-care' },
      { label: 'Contact', href: '#contact' },
    ],
  },
]

export const legalLinks = ['Privacy Policy', 'Cookie Policy', 'Terms'] as const
