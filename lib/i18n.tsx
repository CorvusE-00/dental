'use client'

import { usePathname, useRouter } from 'next/navigation'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type Locale = 'en' | 'tr'

type FeatureCopy = { title: string; description: string }
type JourneyCopy = { title: string; description: string }
type FaqCopy = { question: string; answer: string }
type LegalSection = { id?: string; title: string; paragraphs: string[]; bullets?: string[]; contactEmail?: boolean }
type LegalPageCopy = { eyebrow: string; title: string; description: string; lastUpdated: string; sections: LegalSection[] }

export type SiteCopy = {
  nav: string[]
  mobileNav: string[]
  wordmark: string
  menu: string
  openMenu: string
  close: string
  skipToContent: string
  hero: {
    eyebrow: string
    title: string
    emphasis: string
    description: string
    mobileDescription: string
    localLink: string
    internationalLink: string
    localShortLink: string
    internationalShortLink: string
    imageAlt: string
  }
  trust: { ariaLabel: string; items: string[]; metrics: Record<string, string>; mobileMetrics: Record<string, string>; values: Record<string, string> }
  sections: {
    treatments: { eyebrow: string; title: string; viewAll: string; learnMore: string }
    treatmentsIndex: { eyebrow: string; title: string; description: string; ctaTitle: string; ctaDescription: string }
    about: { eyebrow: string; title: string; description: string; imageAlt: string }
    local: { eyebrow: string; title: string; description: string; imageAlt: string }
    international: { eyebrow: string; title: string; description: string; imageAlt: string }
    journey: { eyebrow: string; title: string; description: string; localLabel: string; internationalLabel: string; imageAlt: string }
    results: { eyebrow: string; title: string; description: string; disclaimer: string }
    doctors: { eyebrow: string; title: string; description: string }
    testimonials: { eyebrow: string; title: string; disclaimer: string }
    faq: { eyebrow: string; title: string; contactIntro: string }
    finalCta: { eyebrow: string; title: string; description: string }
  }
  treatmentDetail: {
    eyebrow: string
    backToTreatments: string
    atAGlance: string
    startingPrice: string
    typicalAppointments: string
    typicalTimeline: string
    anaesthesia: string
    whatItIs: string
    suitability: string
    process: string
    timing: string
    planFactors: string
    pricing: string
    aftercare: string
    faqs: string
  }
  localFeatures: Record<string, FeatureCopy>
  internationalFeatures: Record<string, FeatureCopy>
  localJourney: Record<string, JourneyCopy>
  internationalJourney: Record<string, JourneyCopy>
  journey: Record<string, JourneyCopy>
  faq: Record<string, FaqCopy>
  doctors: Record<string, { role?: string; languages?: string }>
  testimonials: Record<string, { quote: string; treatment: string }>
  resultTreatments: Record<string, string>
  resultVisits: Record<string, string>
  form: {
    name: string
    namePlaceholder: string
    email: string
    emailPlaceholder: string
    phone: string
    phonePlaceholder: string
    location: string
    carePath: string
    treatmentInterest: string
    chooseOne: string
    selectTreatment: string
    message: string
    messagePlaceholder: string
    prototypeNotice: string
    submitting: string
    uploadLabel: string
    uploadOptional: string
    chooseFiles: string
    fileLimitReached: string
    uploadHint: string
    selectedFiles: string
    removeFile: string
    locationOptions: Record<string, string>
    carePathOptions: Record<string, string>
    treatmentOptions: Record<string, string>
  }
  modal: {
    eyebrow: string
    description: string
    successTitle: string
    successDescription: string
    close: string
  }
  patientAssistant: {
    eyebrow: string
    title: string
    description: string
    quickRepliesLabel: string
    launcherLabel: string
    closeLabel: string
    resetLabel: string
    resetConversation: string
    welcome: string
    treatmentPlanAction: string
    consultationAction: string
    questionAction: string
    locationQuestion: string
    localReply: string
    internationalReply: string
    consultationResponse: string
    questionResponse: string
    locationResponse: string
    composerPlaceholder: string
    sendMessage: string
    loadingLabel: string
    connectionError: string
    prototypeNotice: string
    assistantRole: string
    patientRole: string
  }
  legal: {
    privacy: LegalPageCopy
    cookies: LegalPageCopy
    terms: LegalPageCopy
  }
  footer: { description: string; legalLabel: string; prototype: string; columns: Record<string, { title: string; links: Record<string, string> }>; language: string; location: string; legal: string[] }
  common: { before: string; after: string; comparison: string; beforeVisible: string; optional: string }
}

const english: SiteCopy = {
  nav: ['Treatments', 'Results', 'Our Doctors', 'FAQ'],
  mobileNav: ['Treatments', 'Local Care', 'International Care', 'Results', 'Our Doctors', 'FAQ'],
  wordmark: 'Luma Dental Istanbul, back to home',
  menu: 'Menu',
  openMenu: 'Open menu',
  close: 'Close',
  skipToContent: 'Skip to content',
  hero: {
    eyebrow: 'Private dental care in Istanbul',
    title: 'A healthier, more confident smile.',
    emphasis: 'Planned around you.',
    description:
      'Modern cosmetic, restorative and implant dentistry for people in Istanbul and patients travelling from abroad. Start with a conversation about what you would like to change.',
    mobileDescription: 'Thoughtful cosmetic, restorative and implant care for people in Istanbul and patients travelling from abroad.',
    localLink: 'Already in Istanbul? See local care',
    internationalLink: 'Travelling here? See how planning works',
    localShortLink: "I'm in Istanbul",
    internationalShortLink: "I'm travelling here",
    imageAlt: 'A dentist and patient discussing care in a bright modern clinic.',
  },
  trust: { ariaLabel: 'Luma at a glance', items: ['Clinician-led planning', 'Clear next steps', 'Support from first conversation to aftercare'], metrics: { patients: 'Patients treated', experience: 'Clinical experience', rating: 'Patient rating', care: 'Care planned in Istanbul' }, mobileMetrics: { patients: 'Patients', experience: 'Experience', rating: 'Rating', care: 'Istanbul care' }, values: { patients: '8,000+', experience: '14+ years', rating: '4.9 / 5', care: 'Local + global' } },
  sections: {
    treatments: { eyebrow: 'Treatments', title: 'Care for everyday needs and bigger changes.', viewAll: 'View all treatments', learnMore: 'Learn more' },
    treatmentsIndex: {
      eyebrow: 'Treatments',
      title: 'Treatments',
      description: 'Care planned around your needs. Use this catalogue as a starting point; final recommendations follow an appropriate assessment.',
      ctaTitle: 'Not sure which treatment fits your needs?',
      ctaDescription: 'Start with a conversation about what you would like to change and we will help you understand the next step.',
    },
    about: {
      eyebrow: 'About Luma',
      title: 'Dental care designed around the person, not the procedure.',
      description: 'Luma brings thoughtful clinical planning, clear communication and considered cosmetic, restorative and everyday dentistry together for people in Istanbul and patients travelling from abroad.',
      imageAlt: 'A modern dental treatment room with a chair, clinical equipment and warm daylight.',
    },
    local: {
      eyebrow: 'For local patients',
      title: 'Care that fits your life in Istanbul.',
      description: 'Start with an in-person conversation about your health, your goals and the changes you would like to make.',
      imageAlt: 'A clinician speaking with a patient in a calm clinic room.',
    },
    international: {
      eyebrow: 'For international patients',
      title: 'Travelling to Istanbul for treatment?',
      description: 'The same careful planning is available from abroad, with practical support around your visit and aftercare at home.',
      imageAlt: 'A panoramic dental scan used to discuss treatment planning.',
    },
    journey: {
      eyebrow: 'Patient journey',
      title: 'A clear next step, wherever you start.',
      description: 'From the first conversation to aftercare, each stage has a clear purpose and a useful next step.',
      localLabel: 'Already in Istanbul',
      internationalLabel: 'Travelling from abroad',
      imageAlt: 'A clinician holding a tooth model while explaining a treatment detail.',
    },
    results: {
      eyebrow: 'Illustrative results',
      title: 'Natural-looking results, planned in detail.',
      description: "Drag or use your arrow keys to compare. Each smile is designed around the patient's features, never a template.",
      disclaimer: 'Images are illustrative and created for this prototype. Individual results vary depending on your dental health, anatomy and chosen treatment.',
    },
    doctors: {
      eyebrow: 'Our doctors',
      title: 'The team behind your plan.',
      description: 'Every treatment plan is reviewed by a clinician, and every patient is supported by a coordinator who speaks their language.',
    },
    testimonials: { eyebrow: 'Patient experiences', title: 'Care should feel clear.', disclaimer: 'Testimonials are fictional and written for this prototype.' },
    faq: { eyebrow: 'FAQ', title: 'Questions, answered honestly.', contactIntro: 'Something else on your mind? Write to' },
    finalCta: {
      eyebrow: 'Start here',
      title: 'Start with a conversation about what you would like to change.',
      description: 'Tell us whether you are looking for an in-person consultation in Istanbul or planning from abroad. We will help you understand the next step.',
    },
  },
  treatmentDetail: {
    eyebrow: 'Treatment guide',
    backToTreatments: 'Back to treatments',
    atAGlance: 'At a glance',
    startingPrice: 'Starting price',
    typicalAppointments: 'Typical appointments',
    typicalTimeline: 'Typical timeline',
    anaesthesia: 'Anaesthesia',
    whatItIs: 'What this treatment involves',
    suitability: 'Who this may be suitable for',
    process: 'How the process works',
    timing: 'Timing and appointments',
    planFactors: 'What shapes your plan',
    pricing: 'Pricing and estimate',
    aftercare: 'Aftercare',
    faqs: 'Common questions',
  },
  localFeatures: {
    'local-consultation': { title: 'Meet the team in Istanbul', description: 'Start with an in-person conversation about your health, your goals and the changes you would like to make.' },
    'clear-options': { title: 'Understand your options', description: 'We explain suitable routes, timings and next steps before you decide how you want to proceed.' },
    'everyday-care': { title: 'Care for everyday needs', description: 'From examinations and hygiene to restorative and cosmetic care, your plan can grow with your needs.' },
    'local-aftercare': { title: 'Follow-up close to home', description: 'Continue with clear aftercare and regular support at the clinic in Istanbul.' },
  },
  internationalFeatures: {
    'international-planning': { title: 'Plan before you travel', description: 'Share the information you have and receive clear options to discuss before you arrange your visit.' },
    coordinator: { title: 'One coordinator, start to finish', description: 'A dedicated coordinator helps organise appointments and keeps the practical details in one place.' },
    logistics: { title: 'A visit shaped around your dates', description: 'When appropriate, appointment timing and local travel guidance can be planned around your stay.' },
    aftercare: { title: 'Aftercare that continues at home', description: 'Receive clear written guidance and follow-up support once you have returned home.' },
  },
  localJourney: {
    'local-start': { title: 'Tell us what you need', description: 'Share what has changed, what concerns you and what you would like to understand.' },
    'local-assessment': { title: 'Meet the team for an assessment', description: 'Discuss your health and goals in person at the clinic in Istanbul.' },
    'local-options': { title: 'Review your options', description: 'Receive a clear explanation of suitable routes, timing and the next decision.' },
    'local-treatment': { title: 'Begin when you are ready', description: 'Move forward with a plan that fits your priorities and your schedule.' },
    'local-aftercare': { title: 'Continue with local follow-up', description: 'Keep receiving guidance and aftercare close to home.' },
  },
  internationalJourney: {
    'international-share': { title: 'Share what you have', description: 'Send a few photos or recent records and tell us what you would like to change.' },
    'international-plan': { title: 'Review your initial options', description: 'Discuss possible routes, timings and the information still needed before you travel.' },
    'international-dates': { title: 'Coordinate your dates', description: 'Plan appointments and practical details around your time in Istanbul.' },
    'international-treatment': { title: 'Complete your in-clinic assessment', description: 'A full clinical assessment confirms your plan before any treatment begins.' },
    'international-aftercare': { title: 'Aftercare at home', description: 'Continue with clear guidance and follow-up once you have returned home.' },
  },
  journey: {
    'tell-us': { title: 'Tell us what you need', description: 'Share your concerns, goals and any useful photos or existing records.' },
    'review-options': { title: 'Review your options', description: 'The team explains possible routes, timing and what information is still needed.' },
    'confirm-plan': { title: 'Confirm your plan', description: 'Complete the appropriate clinical assessment and confirm your plan before treatment.' },
    'treatment-aftercare': { title: 'Treatment & aftercare', description: 'Proceed with treatment and receive clear follow-up and aftercare guidance.' },
  },
  faq: {
    'first-consultation': { question: 'What happens at the first consultation?', answer: 'We listen to what you want to change, review your dental health and explain the next useful step. Final recommendations depend on an appropriate clinical assessment.' },
    suitability: { question: 'How do you know which treatment is suitable?', answer: 'Suitability varies from person to person. The team considers your health, anatomy, goals and records before confirming any treatment route.' },
    estimate: { question: 'Will I understand the estimate before treatment?', answer: 'The aim is to explain the proposed options, timings and expected costs clearly before you decide how to proceed. The final plan follows the appropriate assessment.' },
    'routine-care': { question: 'Do you offer routine check-ups and hygiene?', answer: 'The prototype includes examinations, hygiene, restorative care, cosmetic care and implant planning. The future clinic should replace this list with its verified services.' },
    'international-planning': { question: 'Can I start planning from outside Istanbul?', answer: 'Yes. You can begin by sharing the information you have. An in-clinic assessment is still required before any final treatment recommendation.' },
    'travel-support': { question: 'Can you help with practical travel planning?', answer: 'For international patients, appointment timing and local travel guidance can be discussed around the visit. Any transfer, accommodation or language services should be confirmed by the real clinic.' },
    aftercare: { question: 'What happens after treatment?', answer: 'You receive written aftercare guidance and follow-up support appropriate to your treatment. If a concern arises, the clinic will explain the next step.' },
  },
  doctors: {
    'kerem-aydin': { role: 'Founder & Prosthodontist' },
    'elif-demir': { role: 'Oral & Maxillofacial Surgeon' },
    'sofia-marin': { role: 'Cosmetic Dentist' },
    'maya-thompson': { role: 'International Patient Coordinator', languages: 'English / German' },
  },
  testimonials: {
    sarah: { quote: 'I had a plan and an honest estimate before I booked a flight. Maya answered every question, and nothing about the trip felt rushed.', treatment: 'Dental implants' },
    jonas: { quote: 'Dr. Marin talked me out of more veneers than I needed. The result looks like my own teeth, just calmer and more even.', treatment: 'Veneers' },
    claire: { quote: 'The clinic felt more like a quiet hotel than a hospital. Every step was explained, and the follow-up calls at home were reassuring.', treatment: 'Full smile makeover' },
  },
  resultTreatments: { 'case-michael': '20 Zirconium Crowns', 'case-hannah': '8 Porcelain Veneers', 'case-robert': 'All-on-6, both arches' },
  resultVisits: { 'case-michael': '2 visits · Istanbul', 'case-hannah': '1 visit · Istanbul', 'case-robert': '2 visits · Istanbul' },
  form: {
    name: 'Name', namePlaceholder: 'Your full name', email: 'Email', emailPlaceholder: 'you@example.com', phone: 'Phone / WhatsApp', phonePlaceholder: '+90 555 000 0000', location: 'Where are you based?', carePath: 'What would you like help with?', treatmentInterest: 'Treatment interest', chooseOne: 'Choose one', selectTreatment: 'Select a treatment', message: 'Additional message', messagePlaceholder: 'Anything you would like our clinicians to know', prototypeNotice: 'Prototype demonstration only. Information and files entered here are not transmitted or stored.', submitting: 'Sending your request…', uploadLabel: 'Photos / X-rays', uploadOptional: 'optional', chooseFiles: 'Choose files', fileLimitReached: 'File limit reached', uploadHint: 'JPG, PNG or PDF · Up to 5 files · 10 MB each', selectedFiles: 'Selected files', removeFile: 'Remove',
    locationOptions: { istanbul: 'I live in Istanbul', turkiye: 'I live elsewhere in Türkiye', abroad: 'I live outside Türkiye' },
    carePathOptions: { exploring: 'I am exploring my options', consultation: 'I need an in-person consultation', international: 'I am planning treatment from abroad' },
    treatmentOptions: { 'routine-care': 'Check-ups or preventive care', 'dental-implants': 'Dental implants', veneers: 'Veneers', crowns: 'Crowns', 'smile-makeover': 'Full smile makeover', 'not-sure': 'Not sure yet' },
  },
  modal: { eyebrow: 'Free · No commitment', description: 'Tell us where you are starting from and what you would like to change. We will help you understand the next useful step.', successTitle: 'Thank you. Your treatment request has been received.', successDescription: 'This is a demonstration form. No information has been transmitted.', close: 'Close' },
  patientAssistant: {
    eyebrow: 'Patient support',
    title: 'Luma Patient Assistant',
    description: 'A simple way to find the next useful step.',
    quickRepliesLabel: 'Suggested actions',
    launcherLabel: 'Open Luma Patient Assistant',
    closeLabel: 'Close Luma Patient Assistant',
    resetLabel: 'Start a new conversation',
    resetConversation: 'New conversation',
    welcome: 'Hi, I’m Luma’s AI-powered patient assistant. How can I help you today?',
    treatmentPlanAction: 'Start a treatment plan',
    consultationAction: 'Book a consultation',
    questionAction: 'Ask a question',
    locationQuestion: 'Are you currently based in Türkiye, or are you planning to travel to Istanbul?',
    localReply: 'I live in Türkiye',
    internationalReply: 'I’m travelling from abroad',
    consultationResponse: 'I can help you think through a consultation. Tell me what you would like to change, and the team can explain the next step.',
    questionResponse: 'Of course. Ask your question below and I’ll help you find the right information to discuss with the team.',
    locationResponse: 'Thank you. That helps us understand which planning path may feel most useful to you.',
    composerPlaceholder: 'Type a question…',
    sendMessage: 'Send message',
    loadingLabel: 'Luma assistant is replying',
    connectionError: 'I’m having trouble connecting right now. Please try again in a moment.',
    prototypeNotice: 'Prototype assistant. Messages are sent to the assistant service and may be stored to continue the conversation or support follow-up. Please do not share sensitive medical records, payment details, or emergency information. This assistant is not for emergencies.',
    assistantRole: 'Luma assistant',
    patientRole: 'You',
  },
  legal: {
    privacy: {
      eyebrow: 'Privacy policy',
      title: 'How information is handled.',
      description: 'A concise privacy notice for the fictional Luma Dental Istanbul prototype and its patient assistant channels.',
      lastUpdated: 'Last updated: October 8, 2026',
      sections: [
        {
          title: 'About this prototype',
          paragraphs: ['Luma Dental Istanbul is a fictional dental clinic experience created for demonstration and testing. It is not a real clinic or a substitute for a clinical service.'],
        },
        {
          title: 'Information the assistant may process',
          paragraphs: ['The website and WhatsApp patient assistant may use AI-powered services. When you interact with the assistant, your messages and technical or session data may be processed to answer questions, continue conversation context, support contact or lead follow-up, and support consultation-related workflows.'],
        },
        {
          title: 'Storage and retention',
          paragraphs: ['Assistant messages may be temporarily or persistently stored by the services used to operate the prototype so that conversation continuity and follow-up can work. Information is intended to be retained only as reasonably necessary for prototype operation, service delivery, and testing.'],
        },
        {
          title: 'Please do not share sensitive information',
          paragraphs: ['Please do not submit the following through the website or WhatsApp assistant:', 'The assistant is not an emergency service, does not provide a medical diagnosis, and cannot respond to urgent situations. Contact the appropriate local emergency service for an emergency.'],
          bullets: ['Sensitive medical records or diagnostic images', 'Payment card information or passwords', 'Emergency information requiring immediate care'],
        },
        {
          title: 'Service providers and WhatsApp',
          paragraphs: ['Third-party providers may support hosting, automation, AI or model processing, messaging, email, and related infrastructure. WhatsApp interactions may also be subject to Meta and WhatsApp privacy terms and settings.'],
        },
        {
          id: 'data-deletion',
          title: 'Access, correction and deletion',
          paragraphs: ['You may request access to, correction of, or deletion of information you submitted through the prototype by contacting the address below. Please include enough relevant conversation or contact information for the team to locate the submission. Requests will be reviewed and handled as reasonably practicable; instant deletion or a fixed legal timeframe is not promised.'],
          contactEmail: true,
        },
        {
          title: 'Security and contact',
          paragraphs: ['Reasonable security measures are used for the prototype, but no transmission over the internet can be guaranteed completely secure. Questions about this notice or a request about submitted information can be sent to:'],
          contactEmail: true,
        },
      ],
    },
    cookies: {
      eyebrow: 'Cookie policy',
      title: 'A clear view of browser storage.',
      description: 'This notice explains the limited browser storage used by the fictional Luma Dental Istanbul prototype.',
      lastUpdated: 'Last updated: October 8, 2026',
      sections: [
        {
          title: 'What this covers',
          paragraphs: ['Cookies are small files stored by a website. Browser storage can provide a similar local function. This policy covers those technologies when they are used by the prototype.'],
        },
        {
          title: 'Essential and preference storage',
          paragraphs: ['The current site may use essential browser storage or session information to support basic functionality, language preference, interface state, and security-related operation. The current locale preference is stored in the browser so the site can remember whether English or Turkish was selected.'],
        },
        {
          title: 'No non-essential tracking is currently implemented',
          paragraphs: ['The current codebase does not implement analytics, advertising cookies, tracking pixels, marketing cookies, or a separate consent platform.'],
        },
        {
          title: 'Third-party services',
          paragraphs: ['If you interact with WhatsApp or another external service, that platform may use its own cookies or similar technologies under its own policies.'],
        },
        {
          title: 'Your choices',
          paragraphs: ['You can clear browser storage through your browser settings. Doing so may reset language preferences or other local interface state. Blocking essential storage may affect how parts of the prototype work.'],
        },
        {
          title: 'Contact',
          paragraphs: ['Questions about this cookie notice can be sent to:'],
          contactEmail: true,
        },
      ],
    },
    terms: {
      eyebrow: 'Terms',
      title: 'Using this prototype responsibly.',
      description: 'Simple terms for the fictional Luma Dental Istanbul website, assistant, and related demonstration channels.',
      lastUpdated: 'Last updated: October 8, 2026',
      sections: [
        {
          title: 'Prototype and information use',
          paragraphs: ['Luma Dental Istanbul is a fictional prototype. Website and assistant content is provided for demonstration and general information, and may be incomplete, illustrative, or changed without notice.'],
        },
        {
          title: 'No medical advice or treatment relationship',
          paragraphs: ['Using the website or assistant does not create a doctor-patient relationship. Content is not a diagnosis or personalized medical advice. Treatment suitability requires an appropriate professional clinical assessment.'],
        },
        {
          title: 'Plans, prices and outcomes',
          paragraphs: ['Prices, timing, availability, treatment suitability, outcomes, and clinic-specific facts are not guaranteed unless explicitly confirmed through an appropriate assessment and communication from the relevant provider.'],
        },
        {
          title: 'Emergency use is prohibited',
          paragraphs: ['Do not use the website, assistant, or WhatsApp channel for emergencies or urgent medical concerns. Contact the appropriate local emergency service or qualified healthcare provider.'],
        },
        {
          title: 'Acceptable use',
          paragraphs: ['You must not abuse, attack, probe, automate-spam, overload, impersonate, or misuse the website, assistant, messaging channels, or related infrastructure.'],
        },
        {
          title: 'Availability and third-party services',
          paragraphs: ['The prototype may be changed, suspended, or interrupted. Third-party hosting, automation, AI, messaging, email, and other services may be involved and may have their own terms and policies.'],
        },
        {
          title: 'Responsibility',
          paragraphs: ['Because this is a fictional demonstration, no promise is made that the service will be complete, continuously available, or suitable for a particular purpose. To the extent permitted by applicable law, use of the prototype is at your own discretion and reliance on its content should be limited accordingly.'],
        },
        {
          title: 'Contact',
          paragraphs: ['Questions about these terms can be sent to:'],
          contactEmail: true,
        },
      ],
    },
  },
  footer: { description: 'Thoughtful cosmetic, restorative and everyday dental care for people in Istanbul and patients travelling from abroad.', legalLabel: 'Legal (not available in this prototype)', prototype: 'Luma Dental Istanbul is a fictional clinic created for demonstration purposes.', language: 'Language', location: 'Nişantaşı, Istanbul, Türkiye', legal: ['Privacy Policy', 'Cookie Policy', 'Terms'], columns: { treatments: { title: 'Treatments', links: { 'Dental Implants': 'Dental Implants', Veneers: 'Veneers', 'Smile Makeovers': 'Smile Makeovers', 'All-on-4 / All-on-6': 'All-on-4 / All-on-6', 'Zirconium Crowns': 'Zirconium Crowns' } }, explore: { title: 'Explore', links: { Results: 'Results', 'Our Doctors': 'Our Doctors', 'Patient Journey': 'Patient Journey', FAQ: 'FAQ', Contact: 'Contact' } }, 'patient-care': { title: 'Patient Care', links: { 'Local Care': 'Local Care', 'International Care': 'International Care', 'Treatment Planning': 'Treatment Planning', Aftercare: 'Aftercare', Contact: 'Contact' } } } },
  common: { before: 'Before', after: 'After', comparison: 'Before and after comparison', beforeVisible: '% before image visible', optional: 'optional' },
}

const turkish: SiteCopy = {
  ...english,
  nav: ['Tedaviler', 'Sonuçlar', 'Doktorlarımız', 'SSS'],
  mobileNav: ['Tedaviler', 'Yerel Bakım', 'Uluslararası Bakım', 'Sonuçlar', 'Doktorlarımız', 'SSS'],
  wordmark: 'Luma Dental Istanbul, ana sayfaya dön',
  menu: 'Menü', openMenu: 'Menüyü aç', close: 'Kapat', skipToContent: 'İçeriğe geç',
  hero: { eyebrow: "İstanbul'da özel diş bakımı", title: 'Daha sağlıklı, daha özgüvenli bir gülüş.', emphasis: 'Size göre planlandı.', description: "İstanbul'da yaşayanlar ve yurt dışından gelen hastalar için modern estetik, restoratif ve implant diş hekimliği. Değiştirmek istediklerinizi konuşarak başlayın.", mobileDescription: "İstanbul'da yaşayanlar ve yurt dışından gelenler için modern, kişiye özel diş bakımı.", localLink: "İstanbul'da mısınız? Yerel bakımı keşfedin", internationalLink: "Buraya mı geliyorsunuz? Planlamanın nasıl işlediğini görün", localShortLink: "İstanbul'dayım", internationalShortLink: 'Buraya geliyorum', imageAlt: 'Aydınlık ve modern bir klinikte bakım planını konuşan diş hekimi ve hasta.' },
  trust: { ariaLabel: 'Luma hakkında kısaca', items: ['Klinisyen liderliğinde planlama', 'Net sonraki adımlar', 'İlk görüşmeden bakım sonrasına destek'], metrics: { patients: 'Tedavi gören hasta', experience: 'Klinik deneyim', rating: 'Hasta puanı', care: "İstanbul'da planlanan bakım" }, mobileMetrics: { patients: 'Hasta', experience: 'Klinik deneyim', rating: 'Hasta puanı', care: "İstanbul'da bakım" }, values: { patients: '8.000+', experience: '14+ yıl', rating: '4,9 / 5', care: 'Yerel + global' } },
  sections: {
    treatments: { eyebrow: 'Tedaviler', title: 'Günlük ihtiyaçlar ve daha kapsamlı değişiklikler için bakım.', viewAll: 'Tüm tedavileri görüntüle', learnMore: 'Daha fazla bilgi' },
    treatmentsIndex: {
      eyebrow: 'Tedaviler',
      title: 'Tedaviler',
      description: 'İhtiyaçlarınıza göre planlanan bakım. Bu katalog bir başlangıç noktasıdır; nihai öneriler uygun bir değerlendirme sonrasında belirlenir.',
      ctaTitle: 'Hangi tedavinin size uygun olduğundan emin değil misiniz?',
      ctaDescription: 'Değiştirmek istediklerinizi konuşarak başlayın; sonraki adımı anlamanıza yardımcı olalım.',
    },
    about: {
      eyebrow: 'Luma hakkında',
      title: 'Prosedüre değil, kişiye göre tasarlanan diş bakımı.',
      description: 'Luma; İstanbul’da yaşayanlar ve yurt dışından gelen hastalar için özenli klinik planlamayı, açık iletişimi ve estetik, restoratif ve günlük diş bakımını bir araya getirir.',
      imageAlt: 'Sıcak gün ışığı alan, modern ekipmanlarla donatılmış diş tedavi odası.',
    },
    local: { eyebrow: 'Yerel hastalar için', title: "İstanbul'daki hayatınıza uyan bakım.", description: 'Sağlığınız, hedefleriniz ve yapmak istediğiniz değişiklikler hakkında yüz yüze bir görüşmeyle başlayın.', imageAlt: 'Sakin bir klinik odasında hasta ile konuşan klinisyen.' },
    international: { eyebrow: 'Uluslararası hastalar için', title: 'Tedavi için İstanbul’a mı geliyorsunuz?', description: 'Aynı özenli planlama yurt dışından başlayan hastalar için de sunulur; ziyaretiniz ve ülkenize dönüş sonrası bakım için pratik destek sağlanır.', imageAlt: 'Tedavi planlamasını anlatmak için kullanılan panoramik diş taraması.' },
    journey: { eyebrow: 'Hasta yolculuğu', title: 'Nereden başlarsanız başlayın, net bir sonraki adım.', description: 'İlk görüşmeden bakım sonrasına kadar her aşamanın açık bir amacı ve faydalı bir sonraki adımı vardır.', localLabel: "İstanbul'da yaşıyorum", internationalLabel: 'Yurt dışından geliyorum', imageAlt: 'Tedavi detayını anlatırken diş modeli tutan klinisyen.' },
    results: { eyebrow: 'Örnek sonuçlar', title: 'Detaylı planlanmış doğal görünümlü sonuçlar.', description: 'Karşılaştırmak için sürükleyin veya ok tuşlarını kullanın. Her gülüş, hazır bir şablon yerine hastanın özelliklerine göre tasarlanır.', disclaimer: 'Görseller örnek amaçlıdır ve bu prototip için oluşturulmuştur. Sonuçlar diş sağlığınıza, anatomik yapınıza ve seçilen tedaviye göre değişir.' },
    doctors: { eyebrow: 'Doktorlarımız', title: 'Planınızın arkasındaki ekip.', description: 'Her tedavi planı bir klinisyen tarafından incelenir ve her hasta kendi dilini konuşan bir koordinatör tarafından desteklenir.' },
    testimonials: { eyebrow: 'Hasta deneyimleri', title: 'Bakım süreci anlaşılır olmalı.', disclaimer: 'Hasta yorumları kurgusaldır ve bu prototip için yazılmıştır.' },
    faq: { eyebrow: 'SSS', title: 'Sorularınızı açıkça yanıtlıyoruz.', contactIntro: 'Aklınızda başka bir soru mu var? Bize yazın:' },
    finalCta: { eyebrow: 'Buradan başlayın', title: 'Değiştirmek istediklerinizi konuşarak başlayın.', description: "İstanbul'da yüz yüze bir görüşme mi aradığınızı, yoksa yurt dışından mı plan yaptığınızı belirtin. Bir sonraki adımı anlamanıza yardımcı olalım." },
  },
  treatmentDetail: {
    eyebrow: 'Tedavi rehberi',
    backToTreatments: 'Tedavilere dön',
    atAGlance: 'Kısaca',
    startingPrice: 'Başlangıç fiyatı',
    typicalAppointments: 'Tipik randevu',
    typicalTimeline: 'Tipik süreç',
    anaesthesia: 'Anestezi',
    whatItIs: 'Bu tedavi neleri içerir?',
    suitability: 'Kimler için uygun olabilir?',
    process: 'Süreç nasıl ilerler?',
    timing: 'Zamanlama ve randevular',
    planFactors: 'Planınızı şekillendiren unsurlar',
    pricing: 'Fiyatlandırma ve tahmini ücret',
    aftercare: 'Bakım sonrası',
    faqs: 'Sık sorulan sorular',
  },
  localFeatures: {
    'local-consultation': { title: "İstanbul'da ekiple tanışın", description: 'Sağlığınız, hedefleriniz ve yapmak istediğiniz değişiklikler hakkında yüz yüze bir görüşmeyle başlayın.' },
    'clear-options': { title: 'Seçeneklerinizi anlayın', description: 'Nasıl ilerlemek istediğinize karar vermeden önce uygun yolları, süreleri ve sonraki adımları açıklıyoruz.' },
    'everyday-care': { title: 'Günlük ihtiyaçlar için bakım', description: 'Muayene ve hijyenden restoratif ve estetik bakıma kadar planınız ihtiyaçlarınızla birlikte gelişebilir.' },
    'local-aftercare': { title: 'Evinize yakın takip', description: "İstanbul'daki klinikte anlaşılır bakım sonrası destek ve düzenli takiple devam edin." },
  },
  internationalFeatures: {
    'international-planning': { title: 'Seyahatten önce planlayın', description: 'Elinizdeki bilgileri paylaşın ve ziyaretinizi ayarlamadan önce görüşebileceğiniz net seçenekler alın.' },
    coordinator: { title: 'Baştan sona tek koordinatör', description: 'Ayrılmış bir koordinatör randevuları düzenlemenize ve pratik ayrıntıları tek yerde tutmanıza yardımcı olur.' },
    logistics: { title: 'Tarihleriniz etrafında planlanan ziyaret', description: 'Uygun olduğunda randevu zamanları ve yerel ulaşım önerileri İstanbul’daki konaklamanıza göre planlanabilir.' },
    aftercare: { title: 'Ülkenize döndüğünüzde de bakım', description: 'Eve döndüğünüzde anlaşılır yazılı yönlendirme ve takip desteği alın.' },
  },
  localJourney: {
    'local-start': { title: 'İhtiyacınızı anlatın', description: 'Ne değiştiğini, sizi neyin endişelendirdiğini ve neyi anlamak istediğinizi paylaşın.' },
    'local-assessment': { title: 'Değerlendirme için ekiple görüşün', description: "Sağlığınızı ve hedeflerinizi İstanbul'daki klinikte yüz yüze konuşun." },
    'local-options': { title: 'Seçeneklerinizi değerlendirin', description: 'Uygun yolları, süreyi ve bir sonraki kararı net biçimde öğrenin.' },
    'local-treatment': { title: 'Hazır olduğunuzda başlayın', description: 'Önceliklerinize ve programınıza uyan bir planla ilerleyin.' },
    'local-aftercare': { title: 'Yerel takiple devam edin', description: 'Evinize yakın yönlendirme ve bakım sonrası desteği sürdürün.' },
  },
  internationalJourney: {
    'international-share': { title: 'Elinizdekileri paylaşın', description: 'Birkaç fotoğrafı veya güncel kaydı gönderin ve neyi değiştirmek istediğinizi anlatın.' },
    'international-plan': { title: 'İlk seçeneklerinizi değerlendirin', description: 'Seyahatten önce olası yolları, süreleri ve ihtiyaç duyulan ek bilgileri konuşun.' },
    'international-dates': { title: 'Tarihlerinizi planlayın', description: "Randevuları ve pratik ayrıntıları İstanbul'da geçireceğiniz zamana göre düzenleyin." },
    'international-treatment': { title: 'Klinikte değerlendirmenizi tamamlayın', description: 'Herhangi bir tedavi başlamadan önce tam klinik değerlendirme planınızı doğrular.' },
    'international-aftercare': { title: 'Evinizde bakım sonrası destek', description: 'Ülkenize döndükten sonra anlaşılır yönlendirme ve takip desteğiyle devam edin.' },
  },
  journey: {
    'tell-us': { title: 'İhtiyacınızı anlatın', description: 'Endişelerinizi, hedeflerinizi ve varsa faydalı fotoğraf veya kayıtları paylaşın.' },
    'review-options': { title: 'Seçeneklerinizi değerlendirin', description: 'Ekip olası yolları, süreyi ve hâlâ ihtiyaç duyulan bilgileri açıklar.' },
    'confirm-plan': { title: 'Planınızı netleştirin', description: 'Uygun klinik değerlendirmeyi tamamlayın ve tedavi başlamadan önce planınızı onaylayın.' },
    'treatment-aftercare': { title: 'Tedavi ve bakım sonrası destek', description: 'Tedavinize başlayın ve anlaşılır takip ile bakım sonrası yönlendirme alın.' },
  },
  faq: {
    'first-consultation': { question: 'İlk görüşmede ne olur?', answer: 'Değiştirmek istediklerinizi dinler, diş sağlığınızı değerlendirir ve sonraki faydalı adımı açıklarız. Nihai öneriler uygun bir klinik değerlendirmeye bağlıdır.' },
    suitability: { question: 'Hangi tedavinin uygun olduğunu nasıl anlarsınız?', answer: 'Uygunluk kişiden kişiye değişir. Ekip herhangi bir tedavi yolunu kesinleştirmeden önce sağlığınızı, anatomik yapınızı, hedeflerinizi ve kayıtlarınızı değerlendirir.' },
    estimate: { question: 'Tedaviden önce tahmini ücreti anlayabilir miyim?', answer: 'Karar vermeden önce önerilen seçeneklerin, sürelerin ve tahmini maliyetlerin açıkça anlatılması amaçlanır. Nihai plan uygun değerlendirmeden sonra belirlenir.' },
    'routine-care': { question: 'Rutin kontrol ve hijyen hizmeti sunuyor musunuz?', answer: 'Prototip; muayene, hijyen, restoratif ve estetik bakım ile implant planlamasını içerir. Gerçek klinik bu listeyi doğrulanmış hizmetleriyle değiştirmelidir.' },
    'international-planning': { question: 'İstanbul dışından planlamaya başlayabilir miyim?', answer: 'Evet. Elinizdeki bilgileri paylaşarak başlayabilirsiniz. Nihai tedavi önerisinden önce klinikte değerlendirme yine gereklidir.' },
    'travel-support': { question: 'Seyahat planlamasında pratik destek alabilir miyim?', answer: 'Uluslararası hastalar için randevu tarihleri ve yerel ulaşım önerileri ziyaret çevresinde konuşulabilir. Transfer, konaklama veya dil hizmetleri gerçek klinik tarafından doğrulanmalıdır.' },
    aftercare: { question: 'Tedaviden sonra ne olur?', answer: 'Tedavinize uygun yazılı bakım sonrası yönlendirme ve takip desteği alırsınız. Bir sorun oluşursa klinik sonraki adımı açıklar.' },
  },
  doctors: { 'kerem-aydin': { role: 'Kurucu ve Protetik Diş Hekimi' }, 'elif-demir': { role: 'Ağız, Diş ve Çene Cerrahı' }, 'sofia-marin': { role: 'Estetik Diş Hekimi' }, 'maya-thompson': { role: 'Uluslararası Hasta Koordinatörü', languages: 'İngilizce / Almanca' } },
  testimonials: { sarah: { quote: 'Uçuşumu ayarlamadan önce bir planım ve dürüst bir tahminim vardı. Maya her soruyu yanıtladı; seyahatin hiçbir aşaması aceleye gelmiş hissettirmedi.', treatment: 'Diş implantları' }, jonas: { quote: 'Dr. Marin ihtiyacım olandan daha fazla laminate yaptırmamı önermedi. Sonuç kendi dişlerim gibi, sadece daha sakin ve dengeli görünüyor.', treatment: 'Porselen laminalar' }, claire: { quote: 'Klinik bir hastaneden çok sakin bir otel gibiydi. Her adım açıklandı ve evde yapılan takip görüşmeleri içimi rahatlattı.', treatment: 'Gülüş tasarımı' } },
  resultTreatments: { 'case-michael': '20 Zirkonyum Kuron', 'case-hannah': '8 Porselen Lamina', 'case-robert': 'Her iki çeneye All-on-6' },
  resultVisits: { 'case-michael': '2 ziyaret · İstanbul', 'case-hannah': '1 ziyaret · İstanbul', 'case-robert': '2 ziyaret · İstanbul' },
  form: {
    name: 'Ad Soyad', namePlaceholder: 'Adınız ve soyadınız', email: 'E-posta', emailPlaceholder: 'siz@example.com', phone: 'Telefon / WhatsApp', phonePlaceholder: '+90 555 000 0000', location: 'Nerede yaşıyorsunuz?', carePath: 'Hangi konuda yardım istiyorsunuz?', treatmentInterest: 'İlgilendiğiniz tedavi', chooseOne: 'Bir seçenek seçin', selectTreatment: 'Bir tedavi seçin', message: 'Ek mesaj', messagePlaceholder: 'Klinisyenlerimizin bilmesini istediğiniz bir şey var mı?', prototypeNotice: 'Bu yalnızca bir prototip gösterimidir. Buraya girilen bilgiler ve dosyalar iletilmez veya saklanmaz.', submitting: 'Talebiniz gönderiliyor…', uploadLabel: 'Fotoğraflar / Röntgenler', uploadOptional: 'isteğe bağlı', chooseFiles: 'Dosya seçin', fileLimitReached: 'Dosya sınırına ulaşıldı', uploadHint: 'JPG, PNG veya PDF · En fazla 5 dosya · Her biri 10 MB', selectedFiles: 'Seçilen dosyalar', removeFile: 'Kaldır',
    locationOptions: { istanbul: "İstanbul'da yaşıyorum", turkiye: "Türkiye'nin başka bir yerinde yaşıyorum", abroad: 'Türkiye dışında yaşıyorum' }, carePathOptions: { exploring: 'Seçeneklerimi araştırıyorum', consultation: 'Yüz yüze görüşmeye ihtiyacım var', international: 'Tedaviyi yurt dışından planlıyorum' }, treatmentOptions: { 'routine-care': 'Kontrol veya koruyucu bakım', 'dental-implants': 'Diş implantları', veneers: 'Porselen laminalar', crowns: 'Kuronlar', 'smile-makeover': 'Gülüş tasarımı', 'not-sure': 'Henüz emin değilim' },
  },
  modal: { eyebrow: 'Ücretsiz · Taahhüt yok', description: 'Nereden başladığınızı ve neyi değiştirmek istediğinizi anlatın. Bir sonraki faydalı adımı anlamanıza yardımcı olalım.', successTitle: 'Teşekkürler. Tedavi talebiniz alındı.', successDescription: 'Bu bir gösterim formudur. Hiçbir bilgi iletilmedi.', close: 'Kapat' },
  patientAssistant: {
    eyebrow: 'Hasta desteği',
    title: 'Luma Hasta Asistanı',
    description: 'Size en faydalı sonraki adımı bulmanın sade bir yolu.',
    quickRepliesLabel: 'Önerilen işlemler',
    launcherLabel: 'Luma Hasta Asistanını aç',
    closeLabel: 'Luma Hasta Asistanını kapat',
    resetLabel: 'Yeni bir görüşme başlat',
    resetConversation: 'Yeni görüşme',
    welcome: 'Merhaba, ben Luma’nın yapay zekâ destekli hasta asistanıyım. Bugün size nasıl yardımcı olabilirim?',
    treatmentPlanAction: 'Tedavi planıma başlayın',
    consultationAction: 'Görüşme planlayın',
    questionAction: 'Bir soru sorun',
    locationQuestion: 'Şu anda Türkiye’de mi yaşıyorsunuz, yoksa İstanbul’a gelmeyi mi planlıyorsunuz?',
    localReply: 'Türkiye’de yaşıyorum',
    internationalReply: 'Yurt dışından geliyorum',
    consultationResponse: 'Bir görüşmeye hazırlanmanıza yardımcı olabilirim. Değiştirmek istediklerinizi anlatın; ekip sonraki adımı açıklayabilir.',
    questionResponse: 'Elbette. Sorunuzu aşağıya yazın; ekip ile görüşmeniz için doğru bilgiyi bulmanıza yardımcı olayım.',
    locationResponse: 'Teşekkürler. Bu bilgi, size en uygun planlama yolunu anlamamıza yardımcı olur.',
    composerPlaceholder: 'Bir soru yazın…',
    sendMessage: 'Mesaj gönder',
    loadingLabel: 'Luma asistanı yanıtlıyor',
    connectionError: 'Şu anda bağlantı kurmakta zorlanıyorum. Lütfen biraz sonra tekrar deneyin.',
    prototypeNotice: 'Prototip asistan. Mesajlar asistan hizmetine gönderilir ve görüşmeyi sürdürmek veya takip desteği sağlamak için saklanabilir. Lütfen hassas tıbbi kayıtları, ödeme bilgilerini veya acil durum bilgilerini paylaşmayın. Bu asistan acil durumlar için değildir.',
    assistantRole: 'Luma asistanı',
    patientRole: 'Siz',
  },
  legal: {
    privacy: {
      eyebrow: 'Gizlilik politikası',
      title: 'Bilgiler nasıl ele alınır?',
      description: 'Kurgusal Luma Dental Istanbul prototipi ve hasta asistanı kanalları için kısa gizlilik bildirimi.',
      lastUpdated: 'Son güncelleme: 8 Ekim 2026',
      sections: [
        {
          title: 'Bu prototip hakkında',
          paragraphs: ["Luma Dental Istanbul, gösterim ve test amacıyla oluşturulmuş kurgusal bir diş kliniği deneyimidir. Gerçek bir klinik değildir ve klinik hizmetin yerine geçmez."],
        },
        {
          title: 'Asistanın işleyebileceği bilgiler',
          paragraphs: ['Web sitesi ve WhatsApp hasta asistanı yapay zekâ destekli hizmetler kullanabilir. Asistanla iletişim kurduğunuzda mesajlarınız ile teknik veya oturum bilgileriniz; soruları yanıtlamak, görüşme bağlamını sürdürmek, iletişim veya potansiyel hasta takibini desteklemek ve görüşme süreçlerine yardımcı olmak için işlenebilir.'],
        },
        {
          title: 'Saklama ve muhafaza süresi',
          paragraphs: ['Asistan mesajları, görüşme sürekliliği ve takip desteğinin çalışabilmesi için prototipi işleten hizmetler tarafından geçici veya kalıcı olarak saklanabilir. Bilgilerin yalnızca prototipin çalışması, hizmetin sunulması ve testler için makul ölçüde gerekli olduğu süre boyunca tutulması amaçlanır.'],
        },
        {
          title: 'Lütfen hassas bilgileri paylaşmayın',
          paragraphs: ['Web sitesi veya WhatsApp asistanı üzerinden aşağıdaki bilgileri göndermeyin:', 'Asistan acil durum hizmeti değildir, tıbbi teşhis sunmaz ve acil durumlara yanıt veremez. Acil bir durumda uygun yerel acil yardım hizmetine başvurun.'],
          bullets: ['Hassas tıbbi kayıtlar veya teşhis görüntüleri', 'Banka veya kredi kartı bilgileri ya da şifreler', 'Acil müdahale gerektiren acil durum bilgileri'],
        },
        {
          title: 'Hizmet sağlayıcılar ve WhatsApp',
          paragraphs: ['Barındırma, otomasyon, yapay zekâ veya model işleme, mesajlaşma, e-posta ve ilgili altyapı için üçüncü taraf sağlayıcılar kullanılabilir. WhatsApp görüşmeleri ayrıca Meta ve WhatsApp gizlilik koşullarına ve ayarlarına tabi olabilir.'],
        },
        {
          id: 'data-deletion',
          title: 'Erişim, düzeltme ve silme',
          paragraphs: ['Prototip üzerinden gönderdiğiniz bilgilerinize erişim, düzeltme veya silme talebinde bulunmak için aşağıdaki adresten bize ulaşabilirsiniz. Ekibin ilgili gönderimi bulabilmesi için görüşme veya iletişim bilgilerini yeterli ölçüde belirtin. Talepler makul ölçüde incelenip ele alınır; anında silme veya sabit bir yasal süre taahhüt edilmez.'],
          contactEmail: true,
        },
        {
          title: 'Güvenlik ve iletişim',
          paragraphs: ['Prototip için makul güvenlik önlemleri kullanılır; ancak internet üzerinden yapılan hiçbir aktarımın tamamen güvenli olduğu garanti edilemez. Bu bildirim veya gönderdiğiniz bilgilerle ilgili sorularınızı şu adrese iletebilirsiniz:'],
          contactEmail: true,
        },
      ],
    },
    cookies: {
      eyebrow: 'Çerez politikası',
      title: 'Tarayıcı depolamasına açık bir bakış.',
      description: 'Bu bildirim, kurgusal Luma Dental Istanbul prototipinin kullandığı sınırlı tarayıcı depolamasını açıklar.',
      lastUpdated: 'Son güncelleme: 8 Ekim 2026',
      sections: [
        {
          title: 'Bu bildirim neyi kapsar?',
          paragraphs: ['Çerezler, bir web sitesi tarafından saklanan küçük dosyalardır. Tarayıcı depolaması da benzer bir yerel işlev sağlayabilir. Bu politika, prototip tarafından kullanıldığında bu teknolojileri kapsar.'],
        },
        {
          title: 'Gerekli ve tercih depolaması',
          paragraphs: ['Mevcut site; temel işlevleri, dil tercihini, arayüz durumunu ve güvenlikle ilgili çalışmayı desteklemek için gerekli tarayıcı depolamasını veya oturum bilgilerini kullanabilir. Mevcut dil tercihi, İngilizce veya Türkçe seçimini hatırlamak için tarayıcıda saklanır.'],
        },
        {
          title: 'Şu anda gerekli olmayan takip kullanılmıyor',
          paragraphs: ['Mevcut kod tabanında analiz, reklam çerezleri, takip pikselleri, pazarlama çerezleri veya ayrı bir izin platformu bulunmamaktadır.'],
        },
        {
          title: 'Üçüncü taraf hizmetler',
          paragraphs: ['WhatsApp veya başka bir harici hizmetle etkileşime girerseniz, bu platform kendi politikaları kapsamında kendi çerezlerini veya benzer teknolojileri kullanabilir.'],
        },
        {
          title: 'Seçenekleriniz',
          paragraphs: ['Tarayıcı ayarlarınızdan tarayıcı depolamasını temizleyebilirsiniz. Bu işlem dil tercihini veya diğer yerel arayüz durumlarını sıfırlayabilir. Gerekli depolamayı engellemek prototipin bazı bölümlerinin çalışma şeklini etkileyebilir.'],
        },
        {
          title: 'İletişim',
          paragraphs: ['Bu çerez bildirimiyle ilgili sorularınızı şu adrese iletebilirsiniz:'],
          contactEmail: true,
        },
      ],
    },
    terms: {
      eyebrow: 'Koşullar',
      title: 'Bu prototipi sorumlu şekilde kullanın.',
      description: 'Kurgusal Luma Dental Istanbul web sitesi, asistanı ve ilgili gösterim kanalları için temel koşullar.',
      lastUpdated: 'Son güncelleme: 8 Ekim 2026',
      sections: [
        {
          title: 'Prototip ve bilgilerin kullanımı',
          paragraphs: ['Luma Dental Istanbul kurgusal bir prototiptir. Web sitesi ve asistan içeriği gösterim ve genel bilgilendirme amacıyla sunulur; eksik, örnek niteliğinde olabilir veya önceden bildirim yapılmadan değiştirilebilir.'],
        },
        {
          title: 'Tıbbi tavsiye veya tedavi ilişkisi yoktur',
          paragraphs: ['Web sitesini veya asistanı kullanmanız doktor-hasta ilişkisi oluşturmaz. İçerik teşhis veya kişiye özel tıbbi tavsiye değildir. Tedaviye uygunluk için uygun bir profesyonel klinik değerlendirme gerekir.'],
        },
        {
          title: 'Planlar, fiyatlar ve sonuçlar',
          paragraphs: ['Fiyatlar, süreler, uygunluk, tedavi sonuçları, müsaitlik ve kliniğe özgü bilgiler; uygun bir değerlendirme ve ilgili sağlayıcıdan açık bir teyit olmadıkça garanti edilmez.'],
        },
        {
          title: 'Acil durumlarda kullanmayın',
          paragraphs: ['Web sitesini, asistanı veya WhatsApp kanalını acil durumlar ya da acil tıbbi endişeler için kullanmayın. Uygun yerel acil yardım hizmetine veya nitelikli bir sağlık uzmanına başvurun.'],
        },
        {
          title: 'Kabul edilebilir kullanım',
          paragraphs: ['Web sitesini, asistanı, mesajlaşma kanallarını veya ilgili altyapıyı kötüye kullanmamalı, saldırmamalı, taramamalı, otomatik spam göndermemeli, kimliğinizi başkası gibi göstermemeli, aşırı yüklememeli veya başka şekilde yanlış kullanmamalısınız.'],
        },
        {
          title: 'Kullanılabilirlik ve üçüncü taraf hizmetler',
          paragraphs: ['Prototip değiştirilebilir, askıya alınabilir veya kesintiye uğrayabilir. Üçüncü taraf barındırma, otomasyon, yapay zekâ, mesajlaşma, e-posta ve diğer hizmetler kullanılabilir; bunların kendi koşulları ve politikaları olabilir.'],
        },
        {
          title: 'Sorumluluk',
          paragraphs: ['Bu bir kurgusal gösterim olduğu için hizmetin eksiksiz, sürekli erişilebilir veya belirli bir amaca uygun olacağına dair söz verilmez. Uygulanabilir hukukun izin verdiği ölçüde prototipi kullanmak sizin takdirinizdedir ve içeriğe güvenmeniz buna göre sınırlı olmalıdır.'],
        },
        {
          title: 'İletişim',
          paragraphs: ['Bu koşullarla ilgili sorularınızı şu adrese iletebilirsiniz:'],
          contactEmail: true,
        },
      ],
    },
  },
  footer: { description: "İstanbul'da yaşayanlar ve yurt dışından gelen hastalar için özenli estetik, restoratif ve günlük diş bakımı.", legalLabel: 'Yasal bilgiler', prototype: 'Luma Dental Istanbul, gösterim amacıyla oluşturulmuş kurgusal bir kliniktir.', language: 'Dil', location: "Nişantaşı, İstanbul, Türkiye", legal: ['Gizlilik Politikası', 'Çerez Politikası', 'Koşullar'], columns: { treatments: { title: 'Tedaviler', links: { 'Dental Implants': 'Diş İmplantları', Veneers: 'Porselen Laminalar', 'Smile Makeovers': 'Gülüş Tasarımı', 'All-on-4 / All-on-6': 'All-on-4 / All-on-6', 'Zirconium Crowns': 'Zirkonyum Kuronlar' } }, explore: { title: 'Keşfet', links: { Results: 'Sonuçlar', 'Our Doctors': 'Doktorlarımız', 'Patient Journey': 'Hasta Yolculuğu', FAQ: 'SSS', Contact: 'İletişim' } }, 'patient-care': { title: 'Hasta Bakımı', links: { 'Local Care': 'Yerel Bakım', 'International Care': 'Uluslararası Bakım', 'Treatment Planning': 'Tedavi Planlaması', Aftercare: 'Bakım Sonrası', Contact: 'İletişim' } } } },
  common: { before: 'Önce', after: 'Sonra', comparison: 'Öncesi ve sonrası karşılaştırması', beforeVisible: '% önce görseli görünür', optional: 'isteğe bağlı' },
}

const messages: Record<Locale, SiteCopy> = { en: english, tr: turkish }

type LocaleContextValue = { locale: Locale; copy: SiteCopy; setLocale: (locale: Locale) => void }
const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ initialLocale, children }: { initialLocale: Locale; children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(initialLocale)

  useEffect(() => {
    document.documentElement.lang = locale
    window.localStorage.setItem('luma-locale', locale)
  }, [locale])

  const value = useMemo(() => ({ locale, copy: messages[locale], setLocale }), [locale])
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const value = useContext(LocaleContext)
  if (!value) throw new Error('useLocale must be used within LocaleProvider')
  return value
}

export function LocaleSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale } = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  function switchLocale(nextLocale: Locale) {
    if (nextLocale === locale) return
    const hash = typeof window === 'undefined' ? '' : window.location.hash
    const path = nextLocale === 'en' ? pathname.replace(/^\/tr(?=\/|$)/, '') || '/' : `/tr${pathname === '/' ? '' : pathname}`
    const scrollY = typeof window === 'undefined' ? 0 : window.scrollY
    router.replace(`${path}${hash}`, { scroll: false })
    window.requestAnimationFrame(() => window.scrollTo({ top: scrollY, behavior: 'auto' }))
  }

  return (
    <div className={`flex items-center rounded-full border border-foreground/10 bg-background/55 font-medium ${compact ? 'gap-0 p-0.5 text-[0.625rem]' : 'gap-1 border-border bg-background/70 p-1 text-xs'}`} aria-label="Language">
      {(['en', 'tr'] as Locale[]).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => switchLocale(item)}
          aria-pressed={locale === item}
          className={`rounded-full uppercase tracking-[0.12em] transition-colors ${compact ? 'min-h-7 px-1.5' : 'min-h-8 px-2.5'} ${locale === item ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
