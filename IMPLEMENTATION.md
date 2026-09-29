# Luma Dental Istanbul — Implementation Plan

## 1. Purpose

This document replaces `IMPLEMENTATION_KICKSTART.md` as the implementation anchor for the Luma Dental Istanbul prototype.

Implementation status: the dual-audience pass, mobile care-section hierarchy, distinct editorial image system, English/Turkish prototype routes, responsive journey and FAQ layouts, opaque mobile header treatment, stable in-page anchor positioning, a single header language control, the desktop hero crop refinement, a mobile-first hero image opening, and scroll-preserving locale switching are implemented. The next work should replace prototype facts and imagery with approved clinic material and complete final content review.

The prototype has two jobs:

1. Present a credible, polished example of what a modern clinic website could be.
2. Model a clinic website that can serve people who already live in Istanbul as well as patients travelling to Istanbul from elsewhere.

The current phase remains frontend-only. There is no backend, CRM, booking engine, authentication, payment flow, analytics infrastructure, AI assistant, or real transmission of form data or uploaded files. The next planned pass is metadata, search visibility, and share-preview preparation; it will not change the product boundary or add a data service.

All clinic names, people, credentials, statistics, reviews, patient cases, imagery, and clinical content remain fictional demonstration content until replaced with verified material and appropriate permissions.

Application implementation has started from this plan after review approval. Keep this document current when the product direction changes.

The current implementation includes `/` for English and `/tr` for Turkish, an accessible language switcher, translated patient-facing interface copy, distinct local and international visual sections, a mobile-first section opening, and an editorial image source register at `public/images/editorial/SOURCES.md`.

## 2. Review of the current prototype

The prototype already has a strong base for a premium clinic presentation:

- A calm ivory, deep ink, sage, and champagne palette.
- Editorial typography with a restrained serif accent.
- A clear page rhythm and generous whitespace.
- A single repeated primary CTA.
- Strong synthetic imagery with a consistent warm-neutral treatment.
- A useful before-and-after comparison pattern.
- Centralized treatment, team, result, testimonial, and FAQ data.
- Accessible landmarks, headings, image alt text, keyboard-oriented comparison controls, and reduced-motion support.
- Clear prototype notices for results and testimonials.

The main problem is audience framing. The current hero, metadata, trust metrics, `Why Luma` section, journey, FAQ, footer, and much of the imagery repeatedly lead with international travel. A local patient sees a website built for somebody else.

The most visible examples are:

- `Dental care for international patients · Istanbul` in the hero.
- `Premium dental care for international patients` in the hero description.
- `Designed around international patients` as a major section.
- Travel, transfers, accommodation, and aftercare abroad inside the main journey.
- A footer column dedicated to `International Patients` with no equivalent local-patient path.
- A required `Country` field and `Phone / WhatsApp` framing in the enquiry form.
- Patient stories that all describe international trips.
- A hero image centered on a patient relaxing beside a Bosphorus view.

These choices make the site coherent for dental tourism, but they narrow the market and make the clinic appear more like a travel coordinator than a local dental practice with an international service.

During the browser review, the page rendered successfully across the full long-form homepage and returned no visible console errors. The rendered controls and accessibility text were present. The mobile menu and treatment-plan dialog should be manually rechecked during implementation because the browser automation session did not expose their open states consistently after clicking them.

## 3. Recommended positioning

The clinic should be presented as a local dental practice in Istanbul that also has the systems and support needed for international patients.

Recommended positioning sentence:

> Thoughtful cosmetic, restorative, and implant dentistry in Istanbul, planned around your life, your goals, and your timeline.

Recommended brand promise:

> Clear options, careful planning, and support from first conversation through aftercare.

The website should make both audiences feel expected in the first screen. Travel support should become a focused service for people coming from abroad rather than the definition of the entire clinic.

## 4. Recommended homepage direction

### Hero

Move the hero from a tourism-first message to an audience-inclusive message.

Recommended draft:

Eyebrow:

> PRIVATE DENTAL CARE IN ISTANBUL

Headline:

> A healthier, more confident smile. Planned around you.

Supporting copy:

> Modern cosmetic, restorative, and implant dentistry for people in Istanbul and patients travelling from abroad. Start with a conversation about what you want to change.

Primary CTA:

> Start Your Treatment Plan

The CTA should remain the single dominant action throughout the page. `Get Your Free Treatment Plan` is clear for lead generation but feels remote and tourism-oriented. `Start Your Treatment Plan` or `Request Your Personalised Plan` is more natural for both local and international visitors. The final wording should be chosen once and used consistently.

Under the CTA, use a quiet audience prompt rather than a second competing CTA:

- Already in Istanbul? See local care.
- Travelling to Istanbul? See how planning works.

These can link to two sections on the same page. They should not open separate funnels in this prototype.

### Trust strip

The current indicators are useful but should be broadened:

- Clinician-led treatment planning.
- English and Turkish support, only if the clinic can verify this.
- Clear next steps before treatment.
- Aftercare that continues beyond the appointment.

Keep a response-time statement only when the future clinic can reliably meet it. `Within one business day` is safer and more natural than a fixed `within 24 hours` promise if the operation has not been defined.

### Service categories

The current treatment grid is weighted toward high-value cosmetic and implant work. Add a clear local-care layer so a resident can recognize everyday needs:

- Everyday dental care: examinations, hygiene, fillings, gum care, and root canal consultations.
- Restorative care: crowns, bridges, dentures, and implants.
- Cosmetic care: veneers, whitening, and smile design.
- Full-arch care: All-on-4 and All-on-6 assessments.

The cards can still feature four services visually, but the copy should make the wider care range visible. Avoid implying that every visitor needs a cosmetic procedure.

### Local patient section

Add a section titled something like:

> Care that fits your life in Istanbul.

Suggested points:

- In-person consultations at the clinic.
- A clear explanation of options before treatment.
- Flexible planning around work, family, and existing care.
- Preventive, restorative, cosmetic, and implant support in one clinic.
- Follow-up close to home.

This section should contain a clinic interior, a clinician explaining a scan or treatment plan, and a practical location cue. It should not use travel or hotel language.

### International patient section

Keep the existing international capability, but make the audience explicit:

> Travelling to Istanbul for treatment?

Use this section for appointment sequencing, airport transfers, accommodation guidance, language support, and remote pre-assessment. The section should also state that local patients can use the same clinical planning without travelling.

### Patient journeys

Replace the single travel-led five-step journey with two compact paths:

Local path:

1. Tell us what you need.
2. Meet the team for an assessment.
3. Review your options and estimate.
4. Begin treatment when you are ready.
5. Continue with local follow-up.

International path:

1. Share photos or recent records.
2. Receive an initial plan and options.
3. Coordinate dates and travel details.
4. Complete the in-clinic assessment and treatment.
5. Continue with aftercare at home.

The two paths can be displayed as two editorial columns or as a simple audience switcher. They should share the same underlying component structure.

### Results and testimonials

Keep the before-and-after interaction, but make the context more medically responsible and useful:

- Use consistent framing, neutral lighting, and matching crop ratios.
- Show the treatment, broad timeframe, and visit count only when those facts are verified for future real content.
- Keep the demonstration label visible near the section heading, not only below the cases.
- Avoid presenting synthetic images as proof of clinical outcomes.
- Add a mix of local and international testimonial placeholders in the data model.
- Reserve real patient stories for cases with written consent and verified details.

For the clinic-presentation prototype, it is better to show fewer, more believable cases than many dramatic transformations.

### Doctors and clinic credibility

The team section is a good trust anchor but should eventually carry more useful information:

- Verified role and area of practice.
- Languages actually spoken.
- Registration or professional details where legally appropriate.
- A short explanation of who reviews treatment plans.
- A real clinic image or consultation image when available.

Do not add credentials, affiliations, awards, or patient numbers just to make the page look more credible. Those details should be supplied and approved by the clinic.

## 5. Copy recommendations

### Language principles

- Lead with care, clarity, and suitability rather than destination marketing.
- Use `people in Istanbul and patients travelling from abroad` when both groups need to be named.
- Avoid making a travel arrangement sound like the main clinical value.
- Avoid guaranteed outcomes, absolute safety claims, and fixed clinical promises.
- Explain that suitability and final recommendations require a proper clinical assessment.
- Use `initial plan`, `consultation`, and `treatment options` precisely so the visitor understands what the form does.
- Replace repeated mentions of `free` if the future clinic may charge for consultations or imaging.
- Keep the fictional prototype notice visible until real clinic content replaces it.

### Copy areas to revise

- Page title and meta description should describe Istanbul dental care for local and international patients, not only dental tourism.
- Hero eyebrow, headline, and supporting paragraph should include both audiences without sounding generic.
- `Why Luma` should become a combined trust section with a local subsection and an international subsection.
- The footer column `International Patients` should become `Patient Information` with links for local care, international planning, aftercare, and contact.
- The FAQ should begin with questions both groups share: consultation process, treatment suitability, costs and estimates, timing, languages, and aftercare. Travel questions can follow in an international subsection.
- Patient stories should use a neutral label such as `Patient experiences` and eventually include Istanbul-based examples.
- `Your plan starts with a few photos` should be accompanied by a local alternative such as `Start with a consultation` so the page does not imply that every patient must submit images remotely.

### Suggested microcopy for the enquiry form

Use one shared form with an audience field:

- `Where are you based?` — Istanbul / elsewhere in Türkiye / outside Türkiye.
- `What would you like help with?` — I am exploring options / I need an in-person consultation / I am planning treatment from abroad.
- `Preferred contact method` — email / phone / WhatsApp, only if the clinic actually supports these channels.

Country should not be a required field for a local patient. Uploads should remain optional, clearly labeled, and governed by the prototype notice.

## 6. Visual and design recommendations

### Keep

- Ivory background, deep ink, sage accents, and restrained champagne details.
- Serif headings used for editorial emphasis.
- Rounded corners used selectively.
- Thin borders, quiet dividers, and generous section spacing.
- Editorial footer and oversized decorative wordmark.

### Improve

- Replace the hero's strong Bosphorus cue with a warm consultation or reception scene that works for both audiences. Istanbul can appear as a subtle location cue in the copy and supporting image.
- Add more clinician-patient interaction and fewer lifestyle/travel images.
- Add one clear clinic exterior, reception, or neighborhood image so local patients can imagine arriving there.
- Use visuals of explanations, scans, shade selection, treatment planning, and aftercare. These communicate competence better than luxury alone.
- Keep the image palette warm-neutral but reduce the feeling of staged destination advertising.
- Give the local and international sections distinct visual cues while keeping the same design system.
- Ensure synthetic or placeholder imagery is labeled in a way that does not interrupt the polished presentation.
- Review face and mouth imagery for consistency, realism, and appropriate clinical framing before showing the prototype to clinics.

### Image system and source plan

The same image should not carry multiple major sections. Reusing `/images/clinic.png` across routine care, local care, and the patient journey weakens the sense that each section has a deliberate purpose. Give every major visual block one clear image role:

- Hero: a premium consultation or clinician-patient conversation that works for local and international visitors.
- Everyday care card: an examination, hygiene, scan, or treatment-planning detail rather than a lifestyle scene.
- Local care: a real or approved clinic interior, reception, or clinician explaining options to a patient in Istanbul.
- International care: a coordinator or clinician helping a patient understand timing and next steps, with travel kept as supporting context.
- Patient journey: treatment planning, imaging, shade selection, or an appointment moment that communicates process.
- Doctors and results: consistent portrait and case-image systems, with consented real material used when the site becomes a clinic presentation.

The visual direction should feel editorial and quietly premium: natural light, restrained warmth, real human interaction, realistic expressions, subtle Istanbul cues, and consistent crops and color treatment. Avoid generic luxury interiors, tourist postcard views, exaggerated smiles, repeated compositions, and visible AI artifacts. Images should support clinical confidence and human care rather than make the page feel like a travel advertisement.

For the next implementation pass, create a small image register containing the source, license or permission, intended section, crop, and whether the asset is real, licensed stock, commissioned, or synthetic. Search only licensed sources such as clinic-owned material, commissioned photography, or image libraries with clear usage rights. Do not use random Google images or unapproved patient photographs. Synthetic images can demonstrate art direction during the prototype stage, but they must never be presented as clinical evidence or as real patient outcomes.

### Responsive design priorities

- Fix the mobile opening of the international-care section. When a visitor arrives at `#international-care`, the current portrait image fills most of the first viewport and pushes the eyebrow and headline below the fold. The section should open with a visible heading, short explanation, and clear relationship to the image.
- On mobile, place the section introduction before the image or use a balanced split that keeps the heading in the first viewport. Reduce the mobile image height or use a calmer 4:3 or 3:2 crop instead of allowing a tall image to dominate the screen.
- Add reliable anchor spacing for the fixed header so section headings are not hidden or clipped after in-page navigation. Check `scroll-margin-top` and the header's mobile height together.
- Keep the desktop asymmetric image and text composition where it works, while allowing mobile to use a different order and crop for readability.
- Make the audience choices easy to scan on a small screen.
- Avoid a sticky CTA covering footer controls or the last lines of content.
- Keep treatment cards readable without making the page feel endless.
- Check the design at 1440, 1280, 1024, 768, 390, and 360 pixels.
- Check focus indicators, menu focus return, modal focus, and keyboard operation at each meaningful breakpoint.

### Turkish language support

Build the language model as a first-class part of the next pass, with English as the default and Turkish available throughout the same patient journey. For a premium, indexable experience, use route-based locales such as `/en` and `/tr` rather than changing only visible strings in place. The language control should be available in the header and footer, preserve the visitor's current page or section where practical, and expose the active language accessibly.

Keep translations in typed English and Turkish content dictionaries rather than scattering conditional strings through components. Translate every visible interface element: navigation, headings, buttons, forms, validation errors, FAQ content, notices, metadata, image alt text where appropriate, and success messages. Both languages are left-to-right, but Turkish characters, longer labels, line wrapping, and mobile navigation need their own visual QA.

Turkish copy should be reviewed by a fluent native speaker with healthcare terminology experience before it is shown to clinics. The prototype should not claim English or Turkish support as a clinic fact until the future clinic confirms who can communicate in each language and through which channels. Language selection must not change clinical claims, consent wording, privacy text, or the meaning of form questions.

### World-class quality bar

Before this becomes a clinic-facing example, the page should meet these standards:

- Evidence-led credibility: verified clinician roles, languages, registrations where appropriate, clinic facts, consented patient stories, and clear wording that final suitability requires an assessment.
- Distinctive art direction: fewer, better images with one consistent visual language, subtle Istanbul context, and enough restraint that the clinic feels confident rather than promotional.
- Clear patient journeys: local visitors can understand how to book and follow up nearby; international visitors can understand remote planning, timing, travel support, and aftercare without either path taking over the page.
- Premium interaction design: calm motion, fast first paint, predictable sticky navigation, visible focus states, a non-blocking language switcher, clear form feedback, and no mobile overlays that cover content.
- Useful content: everyday preventive and restorative care should sit alongside cosmetic and implant services, with FAQs that answer suitability, timing, estimates, aftercare, languages, and what happens next.
- Technical polish: optimized images, strong responsive behavior, accessible names and contrast, reduced-motion support, no horizontal overflow, and clean production previews without browser-extension DOM mutations creating misleading hydration warnings.
- Clinic handoff readiness: replace all fictional names, claims, testimonials, case images, contact details, and legal or privacy language with approved clinic material before public use.

## 7. Conversion and interaction plan

The primary conversion remains one shared treatment-plan or consultation dialog. It should support both audiences without creating a backend.

Required improvements:

- Use one audience-aware opening question instead of assuming international travel.
- Make the local route feel complete without asking for a country or travel details.
- Keep the international route capable of collecting timing and travel context.
- Make the form title match the chosen CTA exactly.
- Keep the prototype notice beside the upload control and before submission.
- Preserve loading, duplicate-submit prevention, success, reset-on-close, Escape, backdrop click, focus return, and scroll lock behavior.
- Verify the mobile menu opens, closes after navigation, returns focus, and does not leave the page visually locked.
- Verify the before-and-after slider with pointer, touch, keyboard arrows, Home, and End where supported.
- Keep the mobile sticky CTA hidden while the dialog is open and clear of the footer.

Potential future channel buttons such as phone or WhatsApp should only be added after a real clinic contact destination exists. The current `.example` email address should remain clearly fictional in the prototype and should not be presented as an operating clinic contact.

## 8. Data and component plan

Keep content centralized and extend the existing typed data rather than duplicating copy inside components.

Recommended additions:

- Audience tags: `local`, `international`, or `shared`.
- Service categories: `everyday`, `restorative`, `cosmetic`, or `full-arch`.
- Separate local and international journey steps.
- Testimonial fields for audience and verification status.
- A single source for CTA label, audience options, form labels, and prototype notices.
- A clinic facts object for address, languages, opening hours, parking or transport details, and contact channels once verified.

Keep the current component boundaries. Do not add a global state library, CMS, API route, CRM schema, analytics layer, or AI dependency for this phase.

## 9. Implementation phases

### Phase 0 — Content decisions

- Approve the dual-audience positioning.
- Choose the final primary CTA wording.
- Confirm which local services the example clinic should show.
- Decide which languages and contact channels can be claimed.
- Confirm whether Turkish content will be reviewed by a fluent healthcare-aware speaker and who owns final approval.
- Approve the mobile opening hierarchy for the local and international sections.
- Separate verified future content from fictional placeholder content.

### Phase 1 — Information architecture and copy

- Rewrite metadata, hero, trust strip, footer, FAQ, journey, and section headings.
- Add a local patient path and retain an international patient path.
- Reorganize services so everyday local care is visible.
- Update form language and fields for both audiences.

### Phase 2 — Visual system and imagery

- Replace or supplement travel-led hero imagery.
- Add consultation, clinician, clinic, and local-arrival imagery.
- Remove repeated images from major sections and assign one purposeful image to each visual block.
- Source or commission premium assets with a license and permission register.
- Review synthetic results and team imagery for consistency.
- Add visible but quiet prototype labels where evidence could be mistaken for real clinical proof.

### Phase 3 — Interaction refinement

- Re-test the treatment-plan dialog and mobile menu manually and with keyboard navigation.
- Confirm audience-aware form behavior.
- Confirm before-and-after input behavior and focus states.
- Implement the English/Turkish locale switch and verify route, persistence, metadata, and accessible active-state behavior.
- Fix mobile section order, image crop, fixed-header anchor spacing, and the international-care first viewport.
- Confirm sticky CTA behavior near the footer and while the dialog is open.

### Phase 4 — Quality review

- Run the production build and TypeScript checks.
- Check browser console output.
- Review all anchors and footer links.
- Test representative responsive widths.
- Check for horizontal overflow, poor contrast, clipped focus rings, and excessive copy density.
- Review every major section for image repetition, crop quality, source notes, and premium visual consistency.
- Run a full English and Turkish copy review at desktop and mobile widths, including long Turkish labels and form errors.
- Confirm that no form values or files leave the browser.

## 10. Definition of ready for the next implementation pass

The next implementation pass is ready when:

- The first viewport makes sense to both a local Istanbul patient and an international patient.
- Local care is visible without requiring a travel narrative.
- International planning is still easy to find and understand.
- The primary CTA works for both audiences and uses one consistent label.
- Services include a credible local-care range as well as cosmetic and implant work.
- Copy avoids unverified guarantees and clearly separates prototype content from future real clinic content.
- Every major visual section has a distinct, purposeful image with a documented source or permission.
- Imagery supports trust, clinical explanation, and human care rather than destination marketing alone.
- The mobile local and international section openings show the heading and purpose before a tall image pushes content below the fold.
- English and Turkish are available through an accessible locale control, with Turkish copy reviewed by an appropriate native speaker.
- The final page feels ready for a clinic review because its hierarchy, imagery, content evidence, accessibility, and responsive behavior are all coherent.
- The form, menu, slider, FAQ, sticky CTA, and anchor navigation are verified at desktop and mobile widths.
- The site still has no backend, no data transmission, and no production medical workflow.

## 11. Existing product boundaries retained

- Frontend-only homepage prototype.
- Same-page navigation.
- One shared treatment-plan or consultation dialog.
- Fictional content and imagery until replaced with approved material.
- No backend, database, CMS, authentication, payment, booking engine, CRM, AI assistant, analytics infrastructure, or business API.
- No dedicated treatment or doctor pages during this phase.
- No fake medical schema, fake review schema, or fake structured clinic data.
- Practical WCAG AA accessibility target.
- Reduced-motion support.

This document is the current source of truth for the next review and implementation pass.

## 12. Metadata, social previews, and search foundation plan

### Objective

Replace the current minimal metadata with a complete, localized, production-safe metadata system for the English homepage (`/`) and Turkish homepage (`/tr`). The shared preview should show a polished snapshot of the actual Luma landing page instead of a generic or incomplete URL preview.

This phase will prepare the site for search engines and link sharing on Facebook, Instagram messages, WhatsApp, LinkedIn, Slack, Telegram, X, and similar services that read Open Graph or Twitter Card metadata. It will not claim real clinic facts, verified reviews, clinician credentials, or social profiles until those details are supplied and approved.

### Current gaps to address

- `app/layout.tsx` has a title, a short prototype description, and icons, but no `metadataBase`, Open Graph object, Twitter Card object, publisher information, robots policy, sitemap, or social preview image.
- The localized page has a Turkish title and description, but the English route does not provide a route-specific description and both routes need a shared, explicit metadata strategy.
- Canonical and alternate language URLs are currently relative and do not include an `x-default` alternate.
- The root layout always renders `lang="en"`, including `/tr`; the document language should follow the active route.
- No committed website snapshot is available as an Open Graph or Twitter image.
- There is no `robots.txt` or XML sitemap route.
- There is no approved production origin, clinic social profile, phone number, address, opening hours, or verified organization data to put into metadata or structured data.

### Recommended metadata model

Create one typed site configuration module for values shared by `layout.tsx`, localized `generateMetadata`, `robots.ts`, `sitemap.ts`, and JSON-LD. Read the public production origin from a dedicated environment variable such as `NEXT_PUBLIC_SITE_URL`; use the final clinic domain when available and never use `localhost` or a temporary Vercel preview URL in canonical, sitemap, or social tags.

Use localized metadata for `/` and `/tr`:

- English title: `Luma Dental Istanbul | Thoughtful Dental Care`.
- Turkish title: `Luma Dental Istanbul | Özenli Diş Bakımı`.
- English description focused on cosmetic, restorative, implant, everyday care, Istanbul patients, and patients travelling from abroad.
- Turkish description with the same meaning and natural Turkish healthcare wording.
- `metadataBase` set to the approved production origin.
- Absolute canonical URLs for `/` and `/tr`.
- `alternates.languages` for `en`, `tr`, and `x-default`, with `/` as the default English route.
- `applicationName`, `siteName`, `publisher`, and `creator` only where the clinic has approved the wording.
- Existing favicons and Apple icon retained, with an audit of their light and dark appearance.
- A light theme color and viewport configuration retained unless the final brand system changes.

Keep titles concise enough for search results and descriptions readable when truncated. Avoid keyword stuffing, unverified treatment guarantees, price claims, “best clinic” language, or claims that the prototype figures are real.

### Website snapshot for URL previews

Create a clean social snapshot from the rendered landing page rather than using a browser screenshot with browser chrome, scrollbars, or mobile UI. The capture should use the approved desktop composition at `1200 × 630` pixels, the standard Open Graph ratio.

Recommended snapshot composition:

- Luma wordmark and `Dental Istanbul` identifier.
- The approved landing headline or a shorter share headline that remains legible at preview size.
- The real hero consultation image already used by the page, with both faces visible.
- A quiet ivory background and deep ink typography matching the site.
- A small Istanbul location cue and a neutral line such as `Thoughtful dental care, planned around you.`
- No placeholder statistics, fictional patient claims, browser controls, visible scrollbars, or dense body copy.

Generate and review two committed snapshots so shared links remain language-appropriate:

- `public/images/social/luma-og-en.png`.
- `public/images/social/luma-og-tr.png`.

Each file should be optimized below the platform limits, checked at 1200 × 630, and accompanied by explicit accessible image alt text in metadata. The implementation can reference these static files from localized `openGraph.images` and `twitter.images`. Next.js file-based `opengraph-image` and `twitter-image` conventions remain a valid alternative, but a committed static snapshot is preferable here because the request is for a stable visual snapshot of the approved website and avoids runtime rendering differences between crawlers.

The capture workflow should be reproducible: build the production app, render `/` and `/tr` at the agreed desktop viewport, hide any preview-only overlays, capture the approved viewport, optimize the PNG, inspect it visually, and record the source and date in an image register. The snapshot must be regenerated whenever the hero headline, hero image, logo, or primary color changes materially.

### Open Graph and social metadata

Add a shared `openGraph` configuration with:

- `type: website`.
- Absolute `url` for the active locale.
- Localized `title`, `description`, and `siteName`.
- Localized `locale` values such as `en_TR` and `tr_TR`.
- The matching 1200 × 630 snapshot with width, height, MIME type, and alt text.

Add a `twitter` configuration with:

- `card: summary_large_image`.
- Localized title and description.
- The matching snapshot and alt text.
- `site` and `creator` handles only after the clinic confirms the official X account; do not invent handles.

Open Graph will cover Facebook, LinkedIn, WhatsApp, Slack, Telegram, and most link-preview surfaces. Instagram profile links do not support a separate website card format, so the same canonical URL and share image should be used wherever a link is posted. A Facebook App ID should only be added if the clinic has an actual approved App ID.

### Robots and sitemap

Add the Next.js metadata route files:

- `app/robots.ts` with an allow-all production policy, the approved sitemap URL, and a preview protection policy when running on temporary preview deployments.
- `app/sitemap.ts` containing `/` and `/tr`, absolute URLs, stable `lastModified` handling, and language alternates for each route.

Do not publish a sitemap or index a temporary preview hostname as the canonical site. Decide whether the current fictional prototype should remain `noindex` until the clinic approves the content; if it will be shown privately to clinics, the safer default is to keep non-production previews out of search and enable indexing only on the approved public domain.

### Structured data

Keep structured data conservative while the site contains fictional content. Do not add fake `Dentist`, `MedicalClinic`, `LocalBusiness`, `Review`, `AggregateRating`, or `FAQPage` data to make the prototype look more established.

Once the clinic supplies verified information, add sanitized JSON-LD from a server component:

- `WebSite` for the canonical site name and URL.
- `WebPage` for the localized homepage.
- `Dentist` or an appropriate medical business type with verified name, address, phone, hours, services, and official profile links.
- `sameAs` links for confirmed Instagram, Facebook, LinkedIn, and other official profiles.
- `FAQPage` only when the visible FAQ is approved, factual, and eligible for the intended search treatment.

Escape `<` characters in serialized JSON-LD and validate the result with Google's Rich Results Test and Schema Markup Validator. Structured data must match visible page content and must never introduce a stronger medical or review claim than the page itself.

### Files expected in the implementation pass

- `app/layout.tsx` — shared metadata base, icons, theme values, and safe global defaults.
- `app/[locale]/page.tsx` — localized title, description, canonical, alternates, Open Graph, and Twitter metadata.
- A route-aware layout or equivalent server boundary — correct `html lang` for English and Turkish.
- `app/robots.ts` — crawler policy and sitemap reference.
- `app/sitemap.ts` — localized homepage URLs and alternates.
- `lib/site-config.ts` or an equivalent typed module — production origin, approved brand strings, and social handles.
- `public/images/social/luma-og-en.png` and `public/images/social/luma-og-tr.png` — approved website snapshots.
- `public/images/social/SOURCES.md` — snapshot source, viewport, date, copy, image source, and approval status.
- A server-rendered JSON-LD block — added only after verified clinic facts are available.

### Implementation sequence

1. Confirm the production domain, whether the public site should be indexable, the official clinic name, and the canonical English/Turkish descriptions.
2. Confirm official social profile URLs and handles. Leave unknown fields out until confirmed.
3. Capture and approve the English and Turkish 1200 × 630 website snapshots without browser chrome or prototype-only UI.
4. Add shared typed configuration and route-aware localized metadata.
5. Add `robots.ts` and `sitemap.ts` with production and preview behavior.
6. Correct the document language for `/` and `/tr`.
7. Add only safe `WebSite`/`WebPage` structured data initially; add medical business data after clinic verification.
8. Build the site and inspect the rendered `<head>` for both routes.
9. Verify that both snapshots return `200`, have the correct content type and dimensions, and are under platform limits.
10. Test the share previews with Facebook Sharing Debugger, LinkedIn Post Inspector, Slack or WhatsApp link sharing, and an X card preview where available. Clear cached previews after any approved image change.
11. Recheck canonical URLs, `hreflang`, robots, sitemap, icon rendering, localized `lang`, and absence of localhost or preview-host URLs.

### Implementation checklist

- [x] Read the repository instructions and the installed Next.js 16 metadata guides before editing.
- [x] Reserve port `3001` for this preview so the other local website can keep its existing port.
- [x] Add one typed site configuration with localized copy, preview image paths, absolute URL helpers, and a safe local fallback.
- [x] Add localized canonical, alternate-language, Open Graph, and Twitter metadata for `/` and `/tr`.
- [x] Add preview-safe `robots.txt` and production-only sitemap behavior.
- [x] Replace the starter v0 favicon assets with the Luma mark and fresh cache-safe asset URLs.
- [x] Capture and review the English and Turkish 1200 × 630 social snapshots.
- [x] Add and verify the snapshot source register.
- [x] Set the server-rendered document language from the requested route using the Next 16 `proxy.ts` boundary.
- [x] Add safe `WebSite` and localized `WebPage` JSON-LD without fictional medical, review, or business claims.
- [x] Run the production build and inspect rendered head output and metadata routes.
- [x] Verify both social images at `1200 × 630`, under platform limits, with `200 image/png` responses.
- [ ] Confirm the public domain, indexability decision, approved clinic facts, and official social profiles before launch.
- [ ] Validate public share previews after a real domain is configured.

### Decisions required before implementation

- What is the final public domain that should appear in canonical URLs and social previews?
- Should this fictional prototype be indexable, or should only a future approved clinic deployment be indexable?
- Which official social accounts should be linked in `sameAs` and optional platform metadata?
- Should the preview snapshot show the current fictional Luma brand, or should it be labeled as a prototype until clinic approval?
- Which English and Turkish share headlines and descriptions are approved for external sharing?
- Which real clinic facts, address, phone, opening hours, services, and clinician details are approved for future structured data?

### Definition of ready

This metadata pass is ready when `/` and `/tr` produce correct localized titles, descriptions, canonical URLs, language alternates, Open Graph tags, Twitter Card tags, icons, and document language; when the committed snapshots show the approved page clearly at 1200 × 630; when robots and sitemap behavior separates production from previews; when no unverified medical, review, social, or business claims are emitted; and when the final head output and share previews have been checked on representative social and messaging surfaces.
