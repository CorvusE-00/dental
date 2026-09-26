# IMPLEMENTATION KICKSTART — Luma Dental Istanbul

## 1. Project Overview

Luma Dental Istanbul is a fictional premium dental tourism prototype for international patients considering dental treatment in Istanbul. The primary product goal is to present a credible, calm, premium homepage that helps prospective patients understand the clinic, treatments, patient journey, results, and next step.

The UX philosophy is editorial, warm, medically credible, human, and conversion-focused without feeling aggressive. The single dominant CTA is **Get Your Free Treatment Plan**.

**Current phase: Frontend-only homepage prototype.**

There must be no backend, CRM, AI assistant, booking engine, CMS, authentication, or real data transmission in this phase.

## 2. Current Scope

### In scope

- One polished responsive homepage
- Same-page navigation
- Primary treatment-plan modal
- Frontend-only form validation
- Simulated form submission
- Fictional content and imagery
- Responsive layouts
- Accessible interactions
- Before/after controls
- Mobile navigation
- Mobile sticky CTA
- Editorial footer

### Out of scope

- Backend
- Database
- CMS
- Authentication
- Payments
- Real appointment booking
- Real WhatsApp integration
- CRM integration
- AI chatbot
- AI SDK
- API routes for business logic
- Analytics or event infrastructure
- Dedicated treatment pages
- Dedicated doctor pages
- Privacy, terms, or cookie pages
- Production medical workflows

This boundary is explicit so future sessions do not accidentally expand the project.

## 3. Brand Positioning

**Brand:** Luma Dental Istanbul  
**Tagline:** Your new smile. Designed in Istanbul.

**Positioning:** Premium cosmetic, implant, and restorative dentistry for international patients travelling to Istanbul.

**Brand personality:**

- Premium
- Calm
- Warm
- Modern
- Editorial
- Medically credible
- Human
- International

Explicitly avoid cheap dental-tourism aesthetics, aggressive sales language, exaggerated medical claims, generic bright medical blue, cartoon dental graphics, excessive gradients, excessive glassmorphism, overly rounded SaaS-style UI, and multiple competing CTAs.

## 4. Core Conversion Principle

The single dominant CTA is **Get Your Free Treatment Plan**. All prominent conversion buttons use this wording and open the same shared treatment-plan dialog. Do not introduce competing primary CTA language.

Secondary contact information may exist but must remain visually subordinate.

## 5. Design Token System

Approved CSS-variable intentions:

- Background: `#F7F5F0`
- Foreground / Deep Ink: `#152321`
- Surface: `#FFFFFF`
- Accent / Muted Sage: `#A8B8A5`
- Soft Accent: `#E6EBE3`
- Secondary Accent / Soft Champagne: `#D9CDB8`
- Muted Text: `#59625F`
- Border: `#DEDED8`

Colors must be centralized as design tokens. Avoid repeated hard-coded colors. Sage is an accent, not a dominant page fill. Maintain WCAG AA contrast where practical.

Radius should be restrained, approximately 10–24px depending on the component. Avoid making every surface heavily rounded.

## 6. Typography

Primary font: **Geist** for body text, navigation, forms, labels, buttons, and UI.

Optional editorial font: **Instrument Serif**, used sparingly for the hero headline, major editorial headings, and selected visual emphasis.

Typography should feel refined rather than decorative.

## 7. Layout System

- Maximum outer width: `1280px`
- Approximate main content width: `1200px`
- Desktop side padding: `48px`
- Tablet side padding: `32px`
- Mobile side padding: `20px`

Section spacing:

- Desktop: `120–160px`
- Tablet: `96px`
- Mobile: `72px`

Use generous whitespace and open editorial compositions. Avoid wrapping every section in cards. Use asymmetry selectively and keep layouts fluid between breakpoints.

Representative validation widths: 1440, 1280, 1024, 768, 390, and 360.

## 8. Homepage Information Architecture

Section order:

1. Header
2. Hero
3. Trust strip
4. Results / Before & After
5. Treatments
6. International Patient Experience / Why Luma
7. Patient Journey
8. Doctors
9. Testimonials
10. FAQ
11. Final CTA
12. Editorial Footer

Use stable anchor IDs, including:

- `#treatments`
- `#results`
- `#why-luma`
- `#doctors`
- `#faq`

## 9. Header and Navigation

Desktop navigation:

- Treatments
- Results
- Why Luma
- Our Doctors
- FAQ
- Primary CTA on the right

The header is sticky and initially minimal. After scrolling, it may gain a subtle translucent background, light backdrop blur, and soft border. Avoid excessive glass styling.

On mobile, provide the wordmark, an accessible menu trigger, and a mobile navigation that closes after selection, locks background scrolling while open, and manages focus appropriately.

Navigation is same-page anchor based for V1.

## 10. Homepage Content Decisions

**Hero eyebrow:** PRIVATE DENTAL CARE IN ISTANBUL

**Hero headline:**

> A smile you'll love.  
> A journey we've already planned.

**Primary CTA:** Get Your Free Treatment Plan

**Trust indicators:**

- No commitment
- Response within 24 hours
- English-speaking team

**Trust metrics:**

- 8,000+ Patients treated
- 14+ years Clinical experience
- 4.9 / 5 Patient rating
- 40+ countries International patients

Featured treatments:

- Dental Implants
- Smile Makeovers
- Veneers
- All-on-4 / All-on-6

Zirconium Crowns and Teeth Whitening may appear in supporting content or the footer, but should not expand the homepage treatment grid.

## 11. Fictional Team

### Dr. Kerem Aydin

Founder & Prosthodontist  
DDS, MSc  
14+ years experience

### Dr. Elif Demir

Oral & Maxillofacial Surgeon  
DDS, PhD  
12+ years experience

### Dr. Sofia Marin

Cosmetic Dentist  
DDS  
8+ years experience

### Maya Thompson

International Patient Coordinator  
English / German

All names, credentials, biographies, imagery, statistics, reviews, and patient cases are fictional prototype content.

## 12. Results / Before & After

Include three fictional demonstration cases using synthetic paired imagery. The before/after control must support mouse, touch, and keyboard input, provide accessible labels, and show a visible focus state.

Example approved fictional case:

**Michael, 42 — UK**  
20 Zirconium Crowns  
2 visits · Istanbul

Include this subtle section-level note:

> Demonstration imagery. Individual treatment needs and outcomes vary.

Generated imagery must not be presented as real clinical evidence.

## 13. Treatment Plan Modal

All primary CTAs open one shared accessible dialog.

Required fields:

- Name
- Country
- Email
- Phone / WhatsApp
- Treatment interest

Optional fields:

- Photos / X-rays
- Additional message

Treatment options:

- Dental implants
- Veneers
- Crowns
- Full smile makeover
- Not sure yet

Use React Hook Form, Zod, and a Radix/shadcn Dialog.

Accessibility requirements:

- Move focus into the modal
- Return focus to the trigger
- Close on Escape
- Support backdrop click
- Lock scrolling
- Provide a semantic title and description
- Provide accessible validation messages

## 14. File Upload Prototype Rules

This is frontend-only demonstration behavior. Accepted types are JPG, JPEG, PNG, and PDF. Allow a maximum of 5 files and 10 MB per file.

Support filename display, file removal, and validation errors. Do not transmit or store files.

Required notice:

> Prototype demonstration only. Information and files entered here are not transmitted or stored.

## 15. Simulated Form Submission

Behavior:

1. Validate the form.
2. Show a short loading state.
3. Prevent duplicate submissions.
4. Show a success state inside the dialog.

There must be no network submission and no random simulated server errors.

Suggested success copy:

> Thank you. Your treatment request has been received.

Supporting text:

> This is a demonstration form. No information has been transmitted.

Reset the form when the modal closes.

## 16. Mobile Sticky CTA

Provide a mobile-only **Get Your Free Treatment Plan** CTA. It must not obstruct content, must be hidden while the modal is open, must behave gracefully near the footer, and must not cover interactive footer controls.

## 17. Footer

Use the editorial footer direction.

### Brand

Luma Dental Istanbul  
Premium cosmetic and restorative dentistry for international patients in Istanbul.  
Nişantaşı, Istanbul, Türkiye

### Treatments

- Dental Implants
- Veneers
- Smile Makeovers
- All-on-4 / All-on-6
- Zirconium Crowns

### Explore

- Results
- Our Doctors
- Patient Journey
- FAQ
- Contact

### International Patients

- Treatment Planning
- Travel Information
- Aftercare
- Patient Coordinator

Bottom utility row:

- © 2026 Luma Dental Istanbul
- Privacy Policy
- Cookie Policy
- Terms

Include this disclaimer:

> Luma Dental Istanbul is a fictional clinic created for demonstration purposes.

Include an oversized, low-contrast **LUMA** wordmark near the bottom as a decorative editorial element, not primary information.

## 18. Imagery Direction

All imagery is synthetic or AI-generated placeholder content. Required categories are hero, clinic, three doctors, patient coordinator, treatment imagery, international-patient imagery, and result cases.

Visual direction: premium editorial, realistic, warm-neutral, soft daylight, natural skin, realistic teeth, modern clinic environments, and understated luxury.

Avoid obvious stock imagery, artificial Hollywood-white smiles, cartoon teeth, doctors pointing at floating graphics, and cheesy tourism imagery.

Suggested aspect ratios:

- Hero: wide landscape
- Doctors: approximately 4:5
- Treatments: approximately 4:3 or 3:2
- Results: consistent framing suitable for comparison

Use `next/image` and prefer locally stored assets under `/public/images/`.

## 19. Motion Philosophy

Use CSS transitions for simple interactions. Use Motion only when it adds meaningful polish, such as section reveals, staggered content, modal choreography, or subtle image movement.

Avoid excessive parallax, cursor tracking, spinning effects, continuous decorative movement, and unnecessary page transitions. Typical animation duration is approximately 200–600ms. Most reveal animations should run once. Respect `prefers-reduced-motion`.

Number counters are optional and should be omitted if they add unnecessary complexity.

## 20. Accessibility Baseline

Target practical WCAG AA.

Required:

- Semantic HTML
- One H1
- Logical heading hierarchy
- Page landmarks
- Keyboard navigation
- Visible focus indicators
- Accessible Dialog
- Accessible Accordion
- Accessible before/after control
- Properly associated form errors
- Alt text
- Sufficient contrast
- Approximately 44px minimum interactive touch targets
- Reduced-motion support

Decorative elements such as the footer LUMA wordmark must not carry required meaning.

## 21. Technical Stack

Use:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Radix primitives
- Lucide React
- Motion
- React Hook Form
- Zod
- `next/image`
- `next/font`
- Geist

Do not introduce duplicate libraries for the same responsibility. Use no global state-management library. Keep state localized unless a small shared boundary is genuinely necessary.

## 22. Recommended Component Architecture

```text
app/
  layout.tsx
  page.tsx

components/
  layout/
    header.tsx
    footer.tsx

  home/
    hero.tsx
    trust-strip.tsx
    results-section.tsx
    treatments-section.tsx
    international-patient-section.tsx
    patient-journey.tsx
    doctors-section.tsx
    testimonials-section.tsx
    faq-section.tsx
    final-cta.tsx

  shared/
    treatment-plan-modal.tsx
    primary-cta.tsx
    section-heading.tsx
    doctor-card.tsx
    treatment-card.tsx
    testimonial-card.tsx
    before-after-slider.tsx

  ui/

lib/
  data.ts
  constants.ts
  utils.ts
```

This is a guide rather than an absolute constraint. Keep files focused and preferably well below 600 lines. Avoid monolithic components.

## 23. Centralized Data

Use typed centralized data structures for navigation, treatments, team, results, testimonials, and FAQs. Use stable IDs and avoid repeating the same content directly across multiple components.

This should make future CMS, CRM, booking, analytics, and AI integration easier without implementing those systems now.

## 24. Future AI / Automation Readiness

Do not implement AI functionality now.

The eventual system may support:

```text
Website
→ Treatment Enquiry
→ AI Patient Assistant
→ Lead Qualification
→ Appointment Booking
→ CRM / Clinic System
→ Human Coordinator
→ Automated Follow-up
```

For V1, “AI-ready” means only stable component boundaries, centralized typed data, reusable CTA/form interaction points, stable field names, stable treatment IDs, and sensible architecture.

Do not add AI SDKs, chatbot UI, CRM schemas, APIs, event buses, analytics infrastructure, or automation dependencies. Premature infrastructure is specifically discouraged.

## 25. Medical and Marketing Content Rules

Avoid absolute or unsupported claims. Do not use:

- Guaranteed
- Pain-free
- Permanent
- Risk-free
- Safest
- Best
- #1

Prefer language such as individualized treatment options, advanced treatment planning, natural-looking outcomes, treatment suitability varies, and final recommendations require appropriate clinical assessment.

All clinical content remains fictional demonstration content.

## 26. Metadata

**Title:** Luma Dental Istanbul | International Dental Care

**Description:** A fictional premium dental tourism clinic prototype for international patients travelling to Istanbul.

Do not add Dentist schema, LocalBusiness schema, fake review schema, or fake structured clinic data. No canonical URL is required yet.

## 27. Validation Checklist

Before implementation is considered complete, verify:

- Production build succeeds
- TypeScript passes
- Lint passes where configured
- No obvious browser console errors
- CTA/modal flow works
- Form validation works
- Upload validation works
- Simulated submission works
- Modal resets correctly
- Mobile menu works
- Anchor navigation works
- Before/after interaction works with mouse, touch, and keyboard
- Sticky mobile CTA behaves correctly
- Responsive layouts work
- No accidental horizontal overflow
- Keyboard navigation is usable
- Focus states are visible
- Reduced-motion behavior works
- No form data or files leave the browser

Validate representative viewports: 1440, 1280, 1024, 768, 390, and 360.

## 28. Development Principles

1. Preserve the design system.
2. Preserve the single-CTA strategy.
3. Do not add features not requested.
4. Avoid premature architecture.
5. Prefer reusable components over duplication.
6. Prefer simple, robust solutions over clever abstractions.
7. Keep accessibility intact during visual refinements.
8. Keep content centralized.
9. Do not introduce backend behavior.
10. Do not modify the agreed product direction without updating this document.

## 29. Drift Prevention Rule

This file is the implementation anchor for the project.

Before making substantial architectural, design-system, scope, or interaction changes in future sessions:

1. Review `IMPLEMENTATION_KICKSTART.md`.
2. Confirm the requested change does not conflict with established decisions.
3. If an intentional decision changes, update this file so it remains accurate.
4. Do not silently drift from documented decisions.

If a later prompt conflicts with this document, the newest explicit user instruction takes precedence, but this document should then be updated to reflect the new decision.

## Contradiction Review

No material contradictions were found in the supplied project decisions. The plan consistently defines a frontend-only prototype, while the future AI, CRM, booking, and automation flow is explicitly deferred and limited to architectural readiness.

Minor implementation note: the footer lists Privacy Policy, Cookie Policy, and Terms as editorial utility links, while dedicated legal pages are out of scope. For this phase, these should remain non-functional or presentation-only links unless a later instruction explicitly adds legal-page behavior.

## Current Instruction

Create only this documentation file during the kickstart phase. Do not create application components or begin implementing the website until a later instruction authorizes that work.

After recording the decisions, stop and wait for the next instruction.

---

*This document was created as the persistent implementation anchor for the Luma Dental Istanbul frontend-only homepage prototype.*
