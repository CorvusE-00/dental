export type NavItem = { id: string; label: string; href: `#${string}` }

export const primaryNav: NavItem[] = [
  { id: 'treatments', label: 'Treatments', href: '#treatments' },
  { id: 'results', label: 'Results', href: '#results' },
  { id: 'why-luma', label: 'Why Luma', href: '#why-luma' },
  { id: 'doctors', label: 'Our Doctors', href: '#doctors' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
]

export const trustIndicators = [
  'No commitment',
  'Response within 24 hours',
  'English-speaking team',
] as const

export type Metric = { id: string; value: string; label: string }

export const trustMetrics: Metric[] = [
  { id: 'patients', value: '8,000+', label: 'Patients treated' },
  { id: 'experience', value: '14+ years', label: 'Clinical experience' },
  { id: 'rating', value: '4.9 / 5', label: 'Patient rating' },
  { id: 'countries', value: '40+ countries', label: 'International patients' },
]

export type TreatmentId =
  | 'dental-implants'
  | 'veneers'
  | 'crowns'
  | 'smile-makeover'
  | 'all-on-4'
  | 'not-sure'

export type Treatment = {
  id: TreatmentId
  name: string
  summary: string
  details: string[]
  image: string
  imageAlt: string
}

export const featuredTreatments: Treatment[] = [
  {
    id: 'dental-implants',
    name: 'Dental Implants',
    summary:
      'Replace one or several missing teeth with titanium or zirconia implants, planned digitally around your bone and bite.',
    details: ['Usually 2 visits', '3D CBCT planning'],
    image: '/images/treatments/dental-implants.png',
    imageAlt: 'A clinician holding a model of a single dental implant beside a digital scan.',
  },
  {
    id: 'smile-makeover',
    name: 'Smile Makeovers',
    summary:
      'A considered combination of treatments designed around your face, your features and the smile you want to see.',
    details: ['Digital smile design', 'Mock-up before treatment'],
    image: '/images/treatments/smile-makeover.png',
    imageAlt: 'A patient reviewing a smile design preview with a dentist in a bright clinic.',
  },
  {
    id: 'veneers',
    name: 'Veneers',
    summary:
      'Thin porcelain or composite veneers to refine shape, shade and alignment with natural-looking translucency.',
    details: ['Usually 1 visit', 'Shade matched in clinic'],
    image: '/images/treatments/veneers.png',
    imageAlt: 'A row of porcelain veneers arranged on a neutral surface beside a shade guide.',
  },
  {
    id: 'all-on-4',
    name: 'All-on-4 / All-on-6',
    summary:
      'Full-arch restoration supported by four or six implants, for patients missing most or all of their teeth.',
    details: ['Usually 2 visits', 'Temporary teeth on day of surgery'],
    image: '/images/treatments/all-on-4.png',
    imageAlt: 'A full-arch implant-supported bridge model on a clinic workbench.',
  },
]

export const supportingTreatments = ['Zirconium Crowns', 'Teeth Whitening'] as const

export type TreatmentOption = { value: TreatmentId; label: string }

export const treatmentInterestOptions: TreatmentOption[] = [
  { value: 'dental-implants', label: 'Dental implants' },
  { value: 'veneers', label: 'Veneers' },
  { value: 'crowns', label: 'Crowns' },
  { value: 'smile-makeover', label: 'Full smile makeover' },
  { value: 'not-sure', label: 'Not sure yet' },
]

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

export const internationalFeatures: Feature[] = [
  {
    id: 'coordinator',
    title: 'One coordinator, start to finish',
    description:
      'A dedicated English- or German-speaking coordinator answers your questions and organises every appointment.',
  },
  {
    id: 'planning',
    title: 'Planned before you travel',
    description:
      'Your photos and X-rays are reviewed by our clinicians, so you arrive with a clear, individualised plan.',
  },
  {
    id: 'logistics',
    title: 'Transfers and stay, arranged',
    description:
      'Airport pick-up, clinic transfers and partner hotels in Nişantaşı, coordinated around your treatment days.',
  },
  {
    id: 'aftercare',
    title: 'Aftercare that continues at home',
    description:
      'Follow-up video consultations and clear written guidance once you are back home.',
  },
]

export type JourneyStep = { id: string; title: string; description: string }

export const patientJourney: JourneyStep[] = [
  {
    id: 'share',
    title: 'Share your smile',
    description: 'Send a few photos or recent X-rays and tell us what you would like to change.',
  },
  {
    id: 'plan',
    title: 'Receive your treatment plan',
    description:
      'Within 24 hours, a clinician-reviewed plan with options, timings and a transparent estimate.',
  },
  {
    id: 'travel',
    title: 'Travel to Istanbul',
    description: 'We coordinate your appointments, transfers and accommodation around your dates.',
  },
  {
    id: 'treatment',
    title: 'Treatment in clinic',
    description:
      'A full clinical assessment confirms your plan before any treatment begins.',
  },
  {
    id: 'aftercare',
    title: 'Aftercare at home',
    description: 'Follow-up check-ins with your coordinator and clinician once you have returned.',
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
}

export const testimonials: Testimonial[] = [
  {
    id: 'sarah',
    quote:
      'I had a plan and an honest estimate before I booked a flight. Maya answered every question, and nothing about the trip felt rushed.',
    name: 'Sarah W.',
    origin: 'Manchester, UK',
    treatment: 'Dental implants',
  },
  {
    id: 'jonas',
    quote:
      'Dr. Marin talked me out of more veneers than I needed. The result looks like my own teeth, just calmer and more even.',
    name: 'Jonas K.',
    origin: 'Munich, Germany',
    treatment: 'Veneers',
  },
  {
    id: 'claire',
    quote:
      'The clinic felt more like a quiet hotel than a hospital. Every step was explained, and the follow-up calls at home were reassuring.',
    name: 'Claire D.',
    origin: 'Dublin, Ireland',
    treatment: 'Full smile makeover',
  },
]

export type Faq = { id: string; question: string; answer: string }

export const faqs: Faq[] = [
  {
    id: 'plan-cost',
    question: 'Is the treatment plan really free?',
    answer:
      'Yes. Sharing your photos or X-rays and receiving an initial plan is free and carries no commitment. Final recommendations are confirmed after an in-person clinical assessment.',
  },
  {
    id: 'duration',
    question: 'How long will I need to stay in Istanbul?',
    answer:
      'It depends on your treatment. Veneers and crowns usually take 5–7 days in one visit. Implant treatments typically involve two visits several months apart to allow healing.',
  },
  {
    id: 'suitability',
    question: 'How do you know if I am suitable for treatment?',
    answer:
      'Your initial plan is based on the records you share. Suitability varies from person to person, and your clinician will confirm the plan with a full examination and 3D imaging on arrival.',
  },
  {
    id: 'languages',
    question: 'Will I be able to communicate with the team?',
    answer:
      'Our clinicians speak English, and your patient coordinator supports you in English or German from your first message through aftercare.',
  },
  {
    id: 'travel',
    question: 'Do you help with flights and accommodation?',
    answer:
      'We arrange airport transfers, clinic transfers and partner hotels close to the clinic. You book your own flights so you keep full control over your dates.',
  },
  {
    id: 'aftercare',
    question: 'What happens if I need support after I return home?',
    answer:
      'Your coordinator stays in touch after treatment, with scheduled video check-ins and written aftercare guidance. If a concern arises, we will advise on next steps.',
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
    id: 'international',
    title: 'International Patients',
    links: [
      { label: 'Treatment Planning', href: '#journey' },
      { label: 'Travel Information', href: '#why-luma' },
      { label: 'Aftercare', href: '#why-luma' },
      { label: 'Patient Coordinator', href: '#doctors' },
    ],
  },
]

export const legalLinks = ['Privacy Policy', 'Cookie Policy', 'Terms'] as const
