# Luma Frontend Refinement Phase

## Scope

This plan covers the active frontend refinement phase for Luma Dental Istanbul:

- Hero and TrustStrip cleanup
- Shared treatment data, homepage treatment cards, treatment index, and treatment detail routes
- Local Care feature icons
- Patient Journey timeline redesign
- Measurement-led image, network, JavaScript, and animation performance work
- SEO, navigation, localization, responsive, accessibility, and release validation

## Protected areas

The Patient Assistant UI, `/api/chat`, `lib/chat-client.ts`, n8n transport and response handling, session handling, i18n behavior, accessibility behavior, Treatment Plan flow, and existing metadata foundations must keep working throughout the phase. No AI model, backend integration, RAG, vector storage, embeddings, CRM, calendar, lead capture, WhatsApp integration, or unrelated redesign is in scope.

## Working decisions and dependencies

- Stable treatment slugs are `routine-care`, `dental-implants`, `veneers`, `crowns`, `smile-makeover`, and `all-on-4`.
- `not-sure` remains a form-only treatment interest option and does not become a detail page.
- The shared treatment model will be the source for homepage cards, the index, detail pages, metadata, FAQs, process information, duration, and optional estimate information.
- Verified clinic facts are required before launch or presentation as real clinic claims. During this fictional prototype phase, clearly labelled prototype or example starting prices and indicative timeline ranges are allowed, but they must never be presented as verified Luma clinic facts. Final pricing, suitability, timing, and treatment recommendations still depend on appropriate assessment. Do not add guarantees, fake discounts, urgency, outcome claims, or invented credentials.
- Performance work starts with a baseline and proceeds only from measured findings.
- Each later phase depends on the data, route, or component work it consumes; performance optimization depends on the baseline; final QA depends on all implementation phases.

## Phase 0 — Baseline and safeguards

**Objective:** Establish a measurable baseline and protect existing behavior before changing the frontend.

**Files likely involved:** `AGENTS.md`, `package.json`, `app/**`, `components/**`, `lib/**`, `public/images/**`, `IMPLEMENTATION.md`.

**Implementation notes:** Re-read the repository and Next.js guidance before coding. Confirm the current build and TypeScript commands. Run controlled desktop and mobile checks. Record Lighthouse Performance, LCP, CLS, TBT, transfer bytes, request count, largest resources, render-blocking resources, long tasks, image dimensions/formats/sizes, `next/image` usage, `sizes` and `priority`, client boundaries, and Motion usage. Keep measurement details in terminal or execution notes; do not append baseline measurements or audit findings as historical logs inside `IMPLEMENTATION.md`. This file remains only the active plan and checklist unless a separate temporary report file is explicitly needed. Do not change implementation during baseline capture.

**Checklist:**

- [x] Re-read repository instructions and the relevant installed Next.js guide.
- [x] Record a clean build and TypeScript baseline.
- [ ] Capture desktop and mobile Lighthouse and browser performance baselines.
- [x] Inventory public images and their page usage.
- [x] Record protected Patient Assistant, chat, Treatment Plan, locale, and metadata behavior.

**Acceptance criteria:** Baseline measurements and protected behavior are documented before implementation. No production code changes are made in this phase.

## Phase 1 — Hero and TrustStrip cleanup

**Objective:** Reduce above-the-fold clutter while preserving the existing hierarchy, metrics, layout, language behavior, and CTA behavior.

**Files likely involved:** `components/sections/hero.tsx`, `components/sections/trust-strip.tsx`, `components/site-page.tsx`, `lib/data.ts`, `lib/i18n.tsx`.

**Implementation notes:** Remove the three Hero reassurance lines (“Clinician-led planning”, “Clear next steps”, and “Support from first conversation to aftercare”) from the visible homepage Hero. Remove the visible homepage prototype notice (“Illustrative prototype figures. Replace with verified clinic facts before launch.”). Keep the three large trust metrics. Remove or simplify now-unused copy fields only after a repository-wide reference check. Preserve the current responsive composition, CTA, locale routes, and accessible structure.

**Checklist:**

- [x] Remove the Hero reassurance list from English and Turkish rendered copy.
- [x] Remove the visible homepage prototype notice from the TrustStrip.
- [x] Keep the three large trust metrics in both locales.
- [x] Remove only data and copy fields proven unused after the ref search.
- [ ] Verify Hero, TrustStrip, CTA, locale switching, and accessibility behavior.

**Acceptance criteria:** The Hero is clearer, the three metrics remain visible, no prototype notice is rendered on the homepage, and no unrelated layout or behavior changes.

## Phase 2 — Treatment data architecture

**Objective:** Create one typed, extensible catalogue that supports treatment cards, the index, detail pages, metadata, English, and Turkish.

**Files likely involved:** `lib/data.ts`, `lib/i18n.tsx`, new shared treatment data/schema modules if needed, `components/shared/treatment-card.tsx`, treatment form components, and tests or validation utilities if present.

**Implementation notes:** Refactor the current treatment shape into a shared model with stable slug, localized name and summary, image and alt text, card/index/detail content, process, timeline or duration, plan factors, FAQs, aftercare, optional pricing or estimate information, and metadata fields. Keep content separate from rendering. Before a supported slug can receive a detail route, require complete localized content for both locales: localized name, summary, detail introduction, suitability wording, process steps, duration or timeline wording, plan factors, pricing or estimate wording, FAQs, aftercare, metadata title and description, and image plus alt text. A treatment detail route must not be exposed when any required localized content is incomplete. Keep the current form options and `not-sure` behavior. Do not invent prices, outcomes, credentials, or medical claims.

**Checklist:**

- [x] Define the shared typed treatment model and stable supported slugs.
- [x] Move English and Turkish treatment content into the shared catalogue structure.
- [x] Add the fields needed by cards, index pages, detail pages, FAQs, process, duration, aftercare, and metadata.
- [x] Define and validate the minimum localized content-completeness requirements before exposing a detail route.
- [x] Keep `not-sure` as a form-only option.
- [x] Preserve current treatment interest form behavior and validation.
- [x] Add safe wording for unspecified pricing and estimates.

**Acceptance criteria:** One typed source can supply every treatment surface in both locales, every routed treatment passes the required localized completeness check, incomplete treatments cannot receive a detail route, form behavior is unchanged, and no unsupported clinic facts are introduced.

## Phase 3 — Homepage Treatments redesign

**Objective:** Make the homepage Treatments section easier to scan and connect each featured treatment to its detail page.

**Files likely involved:** `components/sections/treatments.tsx`, `components/shared/treatment-card.tsx`, `lib/data.ts`, `lib/i18n.tsx`, existing reveal or motion components, and localized route helpers.

**Implementation notes:** Remove the “Also available…” supporting sentence. Use a curated set of featured treatment cards from the shared catalogue. Use a clean, readable text area rather than long text over an image. Remove detail tag pills. Show a clear treatment name and short description with a restrained affordance. Make the full card a semantic link to the localized detail route. Add a visible “View all treatments” or equivalent localized link to `/treatments` and `/tr/treatments`. Preserve the visual language and make the layout work on mobile, tablet, and desktop with keyboard focus and reduced-motion support.

**Checklist:**

- [x] Remove the supporting “Also available…” sentence.
- [x] Render curated featured cards from the shared treatment catalogue.
- [x] Replace long image-overlay copy with a readable card text area.
- [x] Remove detail tag pills.
- [x] Add treatment name, short description, and restrained link affordance.
- [ ] Make each full card a semantic localized detail link.
- [ ] Add a visible localized “View all treatments” link to the correct treatment index route.
- [ ] Verify responsive layout, focus states, alt text, and reduced motion.

**Acceptance criteria:** Homepage treatment cards are readable at all target widths, each card has one clear destination, and the section uses the shared treatment model without changing unrelated homepage sections.

## Phase 4 — Treatments index route

**Objective:** Add a complete localized treatment index that gives patients a clear overview before entering an individual treatment page.

**Files likely involved:** `app/treatments/page.tsx`, `app/[locale]/treatments/page.tsx`, shared treatment index components, `lib/data.ts`, `lib/i18n.tsx`, `lib/metadata.ts`, and route helpers.

**Implementation notes:** Add `/treatments` and `/tr/treatments`. Render the full supported catalogue with concise summaries, consistent cards, a clear heading, an appropriate next step, and links to localized detail routes. The homepage Treatments “View all treatments” or equivalent localized link must resolve visibly and directly to `/treatments` in English and `/tr/treatments` in Turkish, while featured cards continue linking to individual detail pages. Use existing layout, typography, metadata, and CTA patterns. Invalid locales must continue to use existing `notFound()` behavior.

**Checklist:**

- [x] Add the English Treatments index route.
- [x] Add the Turkish Treatments index route.
- [x] Render all supported treatment entries from the shared catalogue.
- [x] Add concise localized heading and supporting copy.
- [ ] Link every index card to the matching localized detail route.
- [x] Verify the homepage all-treatments link targets `/treatments` and `/tr/treatments` by locale.
- [x] Add localized page metadata and preserve canonical behavior.
- [ ] Verify invalid locale handling and responsive layout.

**Acceptance criteria:** Both index routes load, list the supported treatments, preserve the existing visual system, and provide working localized links and metadata.

## Phase 5 — Treatment detail content refinement

**Objective:** Make every localized treatment detail page materially more informative, treatment-specific, and useful for a prospective patient while keeping the existing routes, layout, and Treatment Plan flow.

**Files likely involved:** `lib/treatments.ts`, `lib/i18n.tsx`, `components/pages/treatment-detail-page.tsx`, completeness helpers, and only the directly related treatment detail presentation files if the quick-facts hierarchy requires a small adjustment.

**Implementation notes:** Keep the existing English and Turkish detail routes, metadata, homepage links, index links, FAQ component, and overall editorial page composition. Refine the shared treatment data so each page explains what the treatment is, what happens clinically, who may consider it, how the process differs, how appointments and healing may affect timing, what shapes the plan, what aftercare involves, and what questions patients commonly ask. Add clearly labelled prototype starting prices in EUR with localized notes that they are examples and final pricing depends on examination, materials, and the treatment plan. Do not present placeholder prices as verified clinic prices or add discounts, urgency, package savings, guarantees, or unsupported medical claims. Keep all new content complete in both EN and TR before a detail route remains exposable.

**Information hierarchy:** Preserve the current page design while planning the content in this order: hero; quick facts / “At a glance”; what the treatment is; suitability; treatment-specific process; timing and plan factors; prototype starting price; aftercare; treatment-specific FAQ; final CTA.

**Checklist — treatment-specific content:**

- [x] Rewrite `whatItIs` for all six treatments with clear explanations of the treatment, what is done, the common problem addressed, relevant materials or restorations, and the key context a patient should understand.
- [x] Rewrite the process steps for routine care, dental implants, veneers, crowns, smile makeover, and All-on-4 / All-on-6 so each reflects the actual treatment workflow and uses an appropriate 3–5 step range.
- [x] Improve suitability wording for every treatment with practical patient context, factors that may affect suitability, and a clear reason assessment is required.
- [x] Replace generic `planFactors` lists with treatment-specific decision factors.
- [x] Rewrite aftercare content for each treatment without promising outcomes.
- [x] Rewrite FAQs so each treatment answers genuinely useful pre-contact questions specific to that treatment.
- [x] Replace overly vague timeline wording with useful, cautious prototype ranges and explanations of appointments, laboratory stages, and healing where relevant.
- [x] Add treatment-specific prototype appointment guidance without presenting guarantees or unsupported exact schedules.

**Checklist — quick facts and prototype pricing:**

- [x] Extend `TreatmentLocalizedContent` with a small typed `quickFacts` block containing concise starting price, appointment count, and typical timeline values, plus optional anaesthesia guidance where appropriate.
- [x] Add localized generic labels for Starting price, Typical appointments, Typical timeline, and Anaesthesia / their Turkish equivalents.
- [x] Add localized `priceNote` content that clearly identifies each starting price as a prototype example, paired with concise pricing copy that explains final estimates depend on examination, materials, and treatment scope.
- [x] Add the proposed EUR placeholder starting prices for routine care, dental implants, veneers, crowns, smile makeover, and All-on-4 / All-on-6 without discounts, urgency, or package claims.
- [x] Render the quick-facts block near the top of each detail page and present the prototype starting price clearly but calmly.
- [x] Keep concise quick-fact values separate from the longer explanatory `timeline` and `pricing` content.

**Checklist — completeness and verification:**

- [x] Update the typed completeness validation so both EN and TR require the new quick facts and price-note fields before a detail route can be exposed.
- [x] Verify all six treatments have materially distinct EN/TR content across definitions, process, timing, plan factors, aftercare, FAQs, quick facts, and pricing notes.
- [x] Verify the existing routes, metadata, homepage card links, index card links, FAQ keyboard behavior, and Treatment Plan CTA continue to work unchanged.
- [ ] Verify the revised hierarchy remains readable and avoids horizontal overflow at the existing supported viewport targets where tooling allows; leave this item incomplete if exact viewport emulation is unavailable.

**Checklist — Phase 5 visual polish:**

- [x] Shorten quick-fact display values while preserving the longer timing explanations below.
- [x] Remove repeated starting prices from the explanatory pricing copy and keep the prototype disclaimer visible.
- [x] Use process-length-aware desktop columns so 3, 4, and 5 steps remain balanced on one row.
- [x] Center the pricing CTA and final dark-section CTA on desktop while preserving stacked mobile layouts.
- [ ] Validate the revised polish at 1440, 1280, 1024, 768, 390, and 360px where exact viewport tooling is available.

**Content and pricing approval note:** The proposed EUR values are prototype placeholders for review and must be approved before they are shown to clinics or patients. The wording should make their unverified prototype status unmistakable.

**Acceptance criteria:** All six EN/TR treatment pages provide distinct, clear, clinically understandable prototype content; quick facts and labelled placeholder pricing appear near the top; completeness validation blocks partial localized pages; existing route, link, metadata, FAQ, accessibility, and Treatment Plan behavior remain intact; and no later phase begins.

## Phase 6 — Local Care icons

**Objective:** Give the four Local Care feature items the same restrained visual support already used by International Care.

**Files likely involved:** `components/sections/why-luma.tsx`, `lib/data.ts`, `lib/i18n.tsx`.

**Implementation notes:** Add a distinct Lucide icon mapping for each Local Care feature. Keep the existing visual scale, thin stroke, muted color, spacing, and semantic treatment used by the International Care icons. Icons should support the text and remain decorative where the copy already provides the meaning.

**Checklist:**

- [x] Choose four distinct Lucide icons that match the Local Care feature meanings.
- [x] Pass the Local Care icon map through the existing shared care section API.
- [x] Match the current International Care icon size, stroke, color, and spacing.
- [x] Verify decorative accessibility behavior and localized rendering.
- [ ] Validate icon alignment and wrapping at 1440, 1280, 1024, 768, 390, and 360px where exact viewport tooling is available.

**Acceptance criteria:** Local Care displays four consistent icons without changing its copy, layout structure, or the International Care presentation.

## Phase 7 — Patient Journey redesign

**Objective:** Replace the current text-and-image split with a clear full-width four-step journey timeline while preserving meaning and the existing CTA.

**Files likely involved:** `components/sections/patient-journey.tsx`, `lib/data.ts`, `lib/i18n.tsx`, `app/globals.css`, and the existing primary CTA helper.

**Implementation notes:** Preserve the four ordered journey steps and their semantics. Use a full-width horizontal timeline with four markers and a connecting rail on desktop, then a vertical timeline on mobile. Remove the large side image if the timeline reads better without it. Keep the current copy and CTA unless a structural adaptation is required. Use subtle motion only where it already fits, honor reduced motion, and avoid layout shifts.

**Checklist:**

- [x] Preserve the four ordered journey steps and localized copy.
- [x] Implement the full-width desktop horizontal timeline.
- [x] Implement the mobile vertical timeline.
- [x] Remove the large side image if it is no longer needed by the final structure.
- [x] Preserve the Patient Journey CTA and existing destination.
- [x] Verify semantic ordered-list structure, focus behavior, and reduced motion.
- [ ] Validate the timeline at 1440, 1280, 1024, 768, 390, and 360px where exact viewport tooling is available.

**Acceptance criteria:** The Patient Journey reads as one connected four-step process on desktop and mobile, remains accessible, and keeps the current CTA behavior.

## Phase 8 — Performance audit

**Objective:** Measure the current implementation and identify the highest-value performance work before optimization.

**Files likely involved:** `public/images/**`, `app/**`, `components/**`, `lib/**`, `next.config.*`, and performance measurement output kept outside production code unless a repository convention requires otherwise.

**Implementation notes:** Re-run the baseline after Phases 1–7. Inspect every public image’s dimensions, format, byte size, and usage, with special attention to above-the-fold images and LCP. Inspect `next/image` width, `sizes`, `priority`, lazy-loading, browser network waterfalls, render-blocking resources, JavaScript bundles, client component boundaries, Motion usage, and long tasks. Rank findings by measured impact and identify safe changes. Keep the measurements and audit findings in terminal or execution notes rather than appending them as historical logs inside `IMPLEMENTATION.md`; keep this file limited to the active plan and checklist unless a separate temporary report file is explicitly needed. Do not optimize by guesswork.

**Checklist:**

- [ ] Capture updated Lighthouse and browser performance measurements.
- [ ] Compare updated values to the Phase 0 baseline.
- [x] Audit image dimensions, formats, byte sizes, and page usage.
- [x] Audit LCP image loading, `sizes`, `priority`, and lazy-loading decisions.
- [x] Audit available route payloads and source-level network, JavaScript, client-boundary, and Motion findings; browser waterfall metrics remain unavailable.
- [x] Record a prioritized optimization list with expected risk and benefit.

**Acceptance criteria:** The performance audit identifies concrete, measured opportunities and confirms which changes are safe to make without visual or behavioral regression.

## Phase 9 — Image and network optimization

**Objective:** Reduce image and network cost using the measured findings while preserving the current visual quality and responsive composition.

**Files likely involved:** `public/images/**`, image-using components, `next.config.*`, and image source documentation where existing assets are changed.

**Implementation notes:** Optimize only assets and loading paths identified in Phase 8. Resize or convert eligible photographic assets, preserve transparency where required, and keep source documentation accurate. Tune LCP image priority, `sizes`, dimensions, and lazy-loading based on actual layouts. Remove unused assets only after repository-wide references are checked. Re-measure after each meaningful batch.

**Checklist:**

- [x] Apply measured image size and format improvements to eligible assets.
- [x] Preserve transparency and visible quality where assets require it.
- [x] Correct measured `next/image` dimensions, `sizes`, priority, and lazy-loading.
- [x] Remove only assets confirmed unused after reference checks.
- [x] Update asset source documentation when applicable.
- [x] Re-run the performance measurements and compare with the baseline.

**Acceptance criteria:** Network payload and image cost improve materially where the audit identified them, LCP does not regress, and no visible quality or responsive behavior regresses.

## Phase 10 — JavaScript and animation optimization

**Objective:** Reduce unnecessary client JavaScript and animation work without changing product behavior or interaction design.

**Files likely involved:** audited client components in `app/**`, `components/**`, `lib/**`, existing Motion/reveal utilities, and `package.json` only if the audit proves a dependency change is necessary.

**Implementation notes:** Use the Phase 8 findings to remove unnecessary client boundaries or animation work where safe. Prefer small, local changes. Preserve Patient Assistant, Treatment Plan, locale switching, forms, accessibility, and existing visual hierarchy. Honor reduced-motion preferences and avoid broad architectural rewrites or new dependencies.

**Checklist:**

- [ ] Apply only measured safe client-boundary improvements.
- [x] Remove or reduce measured unnecessary animation work.
- [x] Preserve existing Motion behavior where it contributes to the design.
- [x] Verify reduced-motion behavior after changes.
- [x] Verify Patient Assistant, Treatment Plan, forms, and locale switching remain unchanged.
- [x] Re-run build and performance measurements.

**Acceptance criteria:** JavaScript or animation cost improves where measured, interaction behavior is preserved, and no new dependency or unrelated refactor is introduced.

## Phase 11 — SEO, navigation, and localization integration

**Objective:** Make the new treatment surfaces discoverable, internally linked, localized, and correctly represented in metadata.

**Files likely involved:** `components/layout/header.tsx`, `components/layout/footer.tsx`, `lib/data.ts`, `lib/i18n.tsx`, `lib/metadata.ts`, `lib/site-config.ts`, `app/sitemap.ts`, `app/robots.ts`, `components/metadata/json-ld.tsx`, and the new treatment routes.

**Implementation notes:** Point primary Treatments navigation to `/treatments` and `/tr/treatments`, then update footer and mobile navigation links as needed. Add treatment index and detail URLs to the sitemap. Extend canonical, alternate locale, title, description, and Open Graph handling through the existing metadata foundations. Keep the existing production `NEXT_PUBLIC_SITE_URL` expectation and social-image mapping. Validate internal links, 404 behavior, route-aware metadata, and that no English-only strings remain in Turkish pages. Add structured data only when it is justified by available verified content.

**Checklist:**

- [x] Update primary, footer, and mobile Treatments navigation for both locales.
- [x] Add index and detail routes to the sitemap.
- [x] Add localized metadata, canonical URLs, hreflang alternates, and Open Graph mappings.
- [x] Preserve the existing `NEXT_PUBLIC_SITE_URL` and social-image configuration.
- [x] Verify internal links, 404 behavior, and route-aware metadata.
- [x] Check Turkish pages for hardcoded English content.
- [x] Keep structured data unchanged; no unverified clinic claims were added.

**Acceptance criteria:** Treatment pages are reachable through navigation and sitemap, metadata is correct for EN/TR, canonical and alternate URLs resolve correctly, and localization is complete.

## Phase 12 — Responsive, accessibility, and performance QA

**Objective:** Validate the complete refinement phase across required viewports and protect existing behavior before release.

**Files likely involved:** all files changed by Phases 1–11, plus the existing protected Patient Assistant, chat, Treatment Plan, and metadata surfaces for verification only.

**Implementation notes:** Test at 1440, 1280, 1024, 768, 390, and 360 widths. Check homepage cards, index and detail pages, Local Care icons, the Patient Journey timeline, header/footer/mobile navigation, and all internal links. Check overflow, image crops, keyboard navigation, focus states, heading order, semantic lists, alt text, reduced motion, locale switching, invalid routes, metadata, and the protected assistant/API/Treatment Plan flows. Run the production build, TypeScript checks, and final Lighthouse measurements. Compare against Phase 0 and Phase 8 baselines.

**Checklist:**

- [x] Validate all required viewport widths and both locales.
- [x] Validate homepage Treatments, index, and detail pages.
- [x] Validate Local Care icons and Patient Journey timeline.
- [x] Validate navigation, links, invalid routes, and metadata.
- [x] Validate overflow, image crops, keyboard/focus behavior, heading order, lists, alt text, and reduced motion.
- [ ] Validate Patient Assistant UI, `/api/chat`, n8n transport, session behavior, and Treatment Plan behavior.
- [x] Run the production build and TypeScript checks.
- [ ] Run final Lighthouse and browser performance measurements.
- [ ] Compare Performance, LCP, CLS, TBT, payload, and request metrics with baselines.
- [x] Confirm no protected behavior or unrelated section changed.

**Acceptance criteria:** Required routes and locales work at all target widths, accessibility checks pass, the production build and TypeScript checks pass, Performance reaches at least 95 where the environment permits, CLS and TBT remain near zero, LCP is not worse than baseline, and protected behavior remains intact.

## Phase 13 — Final treatment-detail and footer polish

**Objective:** Reduce treatment-detail density and add restrained visual structure while preserving the approved treatment-page layout, clinical meaning, responsive behavior, and existing protected surfaces.

**Files involved:** `components/pages/treatment-detail-page.tsx`, `lib/treatments.ts`, `lib/data.ts`, and `public/images/**` for the Crowns asset review only.

**Implementation notes:** Keep the treatment-detail composition and copy intent intact while shortening repetitive explanatory text across all six supported treatments and both locales. Use small decorative Lucide icons beside section headings with `aria-hidden="true"`, reduce plan factors to five meaningful items per treatment, and use a count-aware desktop grid so the factors fit cleanly. Review the Crowns image inventory; retain the documented prototype placeholder when no dedicated crown asset is available. Remove the duplicate Contact link from the Patient Care footer column while keeping Contact in Explore. Do not modify the Patient Assistant, chat, Treatment Plan, metadata, sitemap, navigation, locale architecture, homepage structure, or other protected areas.

**Checklist:**

- [x] Review the available image inventory for a dedicated Crowns asset and document the existing prototype placeholder status when none is available.
- [x] Shorten visible treatment-detail explanatory copy for all six treatments in English and Turkish while preserving clinical meaning and the existing process structure.
- [x] Add restrained decorative icons to treatment-detail section headings with accessible hidden semantics.
- [x] Reduce each treatment to five meaningful plan factors and use a count-aware desktop factor grid.
- [x] Remove the duplicate Contact link from the Patient Care footer column.
- [x] Validate all six treatment detail routes in both locales at 1440, 1280, 1024, 768, 390, and 360px.
- [x] Verify no horizontal overflow, broken images, missing image alt text, duplicate H1 elements, or unexpected treatment-detail layout regressions.
- [x] Run `pnpm exec tsc --noEmit` and `pnpm build`.

**Acceptance criteria:** Treatment detail pages remain clinically clear and responsive with shorter visible copy, restrained icons, five-factor desktop planning rows, and no duplicate footer Contact link. Crowns uses a documented placeholder only if a dedicated asset is unavailable. Protected assistant, chat, Treatment Plan, metadata, navigation, locale, and homepage behavior remain unchanged.

## Phase 14 — Dedicated Crowns image

**Objective:** Replace the Crowns treatment's documented routine-care placeholder with one dedicated, generated prototype image for the treatment index card and detail hero.

**Files planned for execution:** `public/images/treatments/crowns.webp`, `lib/treatments.ts`, and, if treatment-asset provenance is documented separately, `public/images/treatments/SOURCES.md`.

**Implementation notes:** Generate a premium editorial dental-clinic photograph that clearly communicates crowns or restorative dentistry through a ceramic crown or restoration, clinician gloved hands, a tooth model, subtle dental tools, or a calm modern clinical setting. Keep it realistic, warm, uncluttered, and visibly dental without blood, extracted teeth, extreme mouth close-ups, implant-specific imagery, veneer-specific imagery, text, logos, overlays, or exaggerated advertising expressions. Use a landscape or near-4:3 source with safe space around the subject so the same asset crops cleanly in the approximately 5:4 desktop detail hero, 4:3 mobile/tablet detail hero, and 4:3 treatment card. Generate at least 1600px wide, convert the approved result to a high-quality WebP, and keep the final asset under 1MB where visual quality allows. Do not change the image optimization architecture or any unrelated asset.

**Data update plan:** Update only the Crowns entry in `lib/treatments.ts` to use `/images/treatments/crowns.webp`, set `imageStatus` to `dedicated`, and remove the obsolete placeholder `imageNote` when appropriate. Review both localized `imageAlt` values so they describe the final generated crown/restorative scene accurately without changing treatment copy or route behavior.

**Asset documentation plan:** Record the image as a generated prototype asset, including its intended Crowns treatment use and generation/provenance note, using the existing image-source documentation convention or a focused treatment-assets source file if no treatment-specific document currently exists. Do not claim clinic ownership, clinical outcomes, or real patient photography.

**Checklist:**

- [x] Generate and review one dedicated Crowns treatment image matching the approved visual and subject direction.
- [x] Confirm the source composition supports the treatment card and detail hero crops at desktop, tablet, and mobile ratios.
- [x] Save the approved production asset as `public/images/treatments/crowns.webp` at high visual quality and within the target byte budget where possible.
- [x] Update only the Crowns image path, status, placeholder note, and localized image alt text in `lib/treatments.ts`.
- [x] Document the generated prototype asset and its provenance using the repository's image-source convention.
- [x] Verify Crowns has a unique image while Routine Care remains unchanged.
- [x] Inspect EN/TR Crowns card and detail hero crops at 1440, 1280, 1024, 768, 390, and 360px.
- [x] Check for broken image requests, recognizable crown/restoration context, obvious AI artifacts, and correct localized alt text.
- [x] Run `pnpm exec tsc --noEmit` and `pnpm build`.

**Acceptance criteria:** Crowns uses a dedicated generated WebP asset with safe responsive cropping, accurate EN/TR alt text, documented prototype provenance, and no obvious AI artifacts. Routine Care and all protected treatment layout, copy, assistant, n8n, Treatment Plan, navigation, metadata, sitemap, and performance architecture remain unchanged.

## Phase 15 — Patient Assistant on treatment routes

**Objective:** Make the existing Patient Assistant launcher and panel available exactly once on the English and Turkish treatment index and treatment detail routes while preserving its current behavior and keeping the homepage unchanged.

**Current mounting and root cause:** `components/site-page.tsx` currently mounts `PatientAssistantProvider` and `PatientAssistant` inside the homepage's `LocaleProvider` and `TreatmentPlanProvider`. `components/pages/treatments-index-page.tsx` and `components/pages/treatment-detail-page.tsx` provide only `LocaleProvider` and `TreatmentPlanProvider`, and render no Patient Assistant provider or component. The treatment routes therefore have neither the assistant context consumed by the launcher/panel nor an assistant mount in their page tree. `app/layout.tsx` is only the document shell and does not currently provide locale, Treatment Plan, or assistant context.

**Provider dependencies:** The assistant requires `LocaleProvider` for localized launcher, panel, quick-reply, and error copy; `PatientAssistantProvider` for open state, messages, reset, focus return, and session ID; and `TreatmentPlanProvider` for launcher hiding and Treatment Plan handoff. The assistant must remain inside all three provider scopes.

**Recommended architecture:** Add one small shared client wrapper, such as `components/shared/luma-page-providers.tsx`, that composes `LocaleProvider`, `TreatmentPlanProvider`, and `PatientAssistantProvider`, renders page children, and mounts one existing `PatientAssistant`. Use that wrapper from `SitePage`, `TreatmentsIndexPage`, and `TreatmentDetailPage`. Remove the homepage-only provider/component mount from `components/site-page.tsx` once the shared wrapper owns it. Do not change any file under `components/patient-assistant/**`; do not move providers to `app/layout.tsx`; do not add a second launcher, panel, session provider, or dialog.

**Execution scope:** Planned production changes are limited to the new shared provider wrapper plus `components/site-page.tsx`, `components/pages/treatments-index-page.tsx`, and `components/pages/treatment-detail-page.tsx`. No changes are planned for `app/api/chat/**`, `lib/chat-client.ts`, n8n, prompts, session implementation, Treatment Plan contracts or modal behavior, navigation, metadata, sitemap, locale architecture, or treatment content.

**Checklist:**

- [x] Confirm the current assistant mount and provider dependency tree before editing.
- [x] Add the smallest shared page-provider wrapper that preserves Locale, Treatment Plan, and Patient Assistant provider order.
- [x] Mount the existing assistant through that wrapper on the homepage, treatment index, and treatment detail page components.
- [x] Remove the old homepage-only assistant mount after the shared wrapper is in use.
- [x] Verify exactly one launcher, one dialog, and one assistant session context on every required route.
- [x] Verify EN/TR coverage for `/`, `/treatments`, `/treatments/dental-implants`, `/tr/treatments`, and `/tr/treatments/dental-implants`, with the existing homepage behavior unchanged.
- [x] Verify launcher open/close, reset, locale copy, focus return, quick replies, and Treatment Plan handoff without changing assistant or Treatment Plan logic.
- [x] Check mobile launcher/panel behavior at 390px and 360px, CTA/footer access, sticky/floating control interaction, and horizontal overflow.
- [x] Verify keyboard behavior, dialog focus trapping, accessible labels, close controls, and reduced motion remain unchanged.
- [x] Run TypeScript checks and the production build; report n8n transport limitations separately if local environment configuration prevents transport verification.

**Acceptance criteria:** The existing Patient Assistant appears once and is usable on the homepage, both treatment index routes, and both treatment detail route families. Locale copy, session/reset behavior, accessibility, Treatment Plan handoff, launcher positioning, and homepage behavior remain unchanged. No API, n8n, chatbot, treatment content, or unrelated architecture changes are introduced.

## Phase 16 — CTA alignment and Patient Assistant mobile positioning polish

**Objective:** Preserve the treatments index desktop CTA alignment and make the existing Patient Assistant launcher a persistent fixed mobile utility without changing its design, session behavior, or dialog implementation.

**Current findings:** The treatments index CTA row is correctly centered with `md:items-center` and must remain unchanged. The launcher’s normal mobile position is the true lower-right corner. When the existing homepage MobileStickyCta becomes visible, the launcher must remain visible and move directly above it; treatment routes have no sticky CTA and keep the normal position. The open assistant state and Treatment Plan modal still hide it.

**Recommended shared positioning strategy:** Keep the existing IntersectionObserver in `use-mobile-sticky-cta-visibility.ts` because `MobileStickyCta` still owns sticky-region visibility. The launcher may consume only the resulting sticky CTA visibility plus a small mobile media-query check to choose between exactly two mobile bottom positions: `bottom-[calc(1rem+env(safe-area-inset-bottom))]` normally and `bottom-[calc(5.25rem+env(safe-area-inset-bottom))]` while the sticky CTA is visible. Keep the launcher visible and keyboard accessible in both positions. Do not use assistant-avoidance state, section-aware offsets, scroll-aware offsets, or treatment-route-specific offsets. Preserve desktop `md:right-6 md:bottom-6`, assistant/session state, open-panel behavior, Treatment Plan behavior, and the existing visual-hidden pattern for the two modal states.

**Planned avoidance regions:** No avoidance markers are needed for launcher behavior. Existing semantic markers may remain if they are still used by another behavior, but they must not control launcher positioning or visibility. The launcher remains fixed across homepage hero/trust, treatment catalogue, treatment detail, final CTA, and footer.

**CTA alignment plan:** Change only the treatments index desktop row alignment from `md:items-end` to `md:items-center`. Preserve the current copy, button size, mobile stacked layout, spacing system, and section design.

**Files planned for execution:** `components/patient-assistant/assistant-launcher.tsx`, `components/shared/use-mobile-sticky-cta-visibility.ts`, `components/pages/treatments-index-page.tsx`, `components/pages/treatment-detail-page.tsx`, `components/site-page.tsx`, `components/sections/hero.tsx`, `components/sections/trust-strip.tsx`, `components/sections/final-cta.tsx`, and `components/layout/footer.tsx` only if marker placement requires it. Do not modify `components/patient-assistant/patient-assistant-provider.tsx`, `components/patient-assistant/assistant-panel.tsx`, `app/api/chat/**`, `lib/chat-client.ts`, n8n, Treatment Plan implementation, or dialog primitives.

**Checklist:**

- [x] Confirm the existing desktop CTA alignment, launcher behavior, observer ownership, and protected areas before editing.
- [x] Remove assistant-launcher coupling to avoidance visibility and section-based mobile hiding/elevation.
- [x] Set the normal mobile launcher position at `right-4` and `bottom-[calc(1rem+env(safe-area-inset-bottom))]`.
- [x] Keep the launcher visible and move it to `bottom-[calc(5.25rem+env(safe-area-inset-bottom))]` only while the mobile homepage sticky CTA is visible; retain modal-only hiding and do not reset session state.
- [x] Preserve the treatments index desktop CTA row at `md:items-center` without changing mobile layout or CTA behavior.
- [x] Confirm the launcher remains fixed across homepage hero/trust, treatment catalogue, treatment detail, final CTA, and footer.
- [x] Verify homepage and Turkish homepage initial load, no startup flicker, and stable scroll coordinates.
- [x] Verify both treatment index routes use the same fixed launcher position through cards, CTA, and footer.
- [x] Verify both treatment detail routes use the same fixed launcher position from hero through footer.
- [x] Validate 390px and 360px mobile routes, sticky CTA clearance, state transitions, and no horizontal overflow.
- [x] Validate treatments index CTA alignment and desktop launcher position at 1440px and 1280px.
- [x] Verify keyboard access, labels, tab order, focus return, open/close behavior, session preservation, and reduced motion.
- [x] Run `pnpm exec tsc --noEmit` and `pnpm build`; confirm protected assistant/session/API/n8n/Treatment Plan behavior remains untouched.

**Acceptance criteria:** The treatments index CTA remains vertically centered on desktop while its mobile composition remains unchanged. On mobile, the mounted Patient Assistant launcher stays right aligned and uses the normal `right-4` / `bottom-[calc(1rem+env(safe-area-inset-bottom))]` position when the sticky CTA is hidden, then moves directly above the visible homepage sticky CTA using `bottom-[calc(5.25rem+env(safe-area-inset-bottom))]` with a small gap. It never hides because of sticky CTA visibility, does not use section-aware positions, and hides only while the assistant panel or Treatment Plan modal is open. Treatment routes always use the normal position. Accessibility, session/chat behavior, desktop launcher behavior, Treatment Plan behavior, and all protected areas remain unchanged.

## Phase 17 — Treatment detail sanity check

**Status:** REVIEW COMPLETE — MINOR CHANGE IMPLEMENTED. The approved Routine Care quick-fact timeline wording is now distinct from the appointment wording.

**Objective:** Review all six treatment detail pages in English and Turkish for meaningful plan factors, balanced section icon density, copy depth after the Phase 13 reduction, duplication, quick-fact usefulness, visual hierarchy, and responsive presentation. Do not manufacture changes for symmetry and do not redesign the treatment detail page.

**Scope:** Review `routine-care`, `dental-implants`, `veneers`, `crowns`, `smile-makeover`, and `all-on-4` through `lib/treatments.ts`, `components/pages/treatment-detail-page.tsx`, and the treatment-detail labels in `lib/i18n.tsx`. Check every plan factor for clinical relevance, treatment specificity, useful decision context, and redundancy. Confirm that implants explain fixture/root replacement, healing/integration, final restoration, and bone/grafting context; veneers explain shells, material, preparation, and bite/enamel suitability; crowns explain coverage, damaged structure, preparation, and final fit; smile makeovers explain coordinated sequencing; all-on-4/all-on-6 explain full-arch support, implant strategy, healing, provisional and final restoration; and routine care explains examination, hygiene, prevention, and restorative follow-up.

**Responsive review sizes:** `1440`, `1280`, `1024`, `768`, `390`, and `360`. Inspect plan-factor rows, icon and heading alignment, quick-fact wrapping, Turkish strings, process titles, copy density, section spacing, and horizontal overflow. Review the rendered page hierarchy rather than code alone.

**Decision rule:** Classify each finding as `NO CHANGE`, `MINOR CHANGE`, or `MUST FIX`. A valid outcome is that no implementation is needed. If a change is justified, keep it minimal and do not re-expand the shortened copy. Do not propose changes to the Patient Assistant, n8n, chat API, session logic, Treatment Plan, homepage, treatment index, navigation, footer, metadata, sitemap, image assets, or performance architecture.

**Review checklist:**

- [x] Review all six treatment slugs in English and Turkish.
- [x] Assess every plan factor and record the justified final count for each treatment.
- [x] Review section icon frequency, size, stroke, spacing, and editorial balance.
- [x] Check copy depth and the required clinical distinctions after the Phase 13 reduction.
- [x] Check material duplication across introductions, overview, suitability, process, timing, pricing, aftercare, and FAQs.
- [x] Verify quick facts remain concise, distinct, and useful.
- [x] Review desktop and mobile hierarchy at all six required viewport sizes.
- [x] Classify findings as `NO CHANGE`, `MINOR CHANGE`, or `MUST FIX`.
- [x] Apply only the approved Routine Care quick-fact timeline wording change.

**Approved minor change:** Routine Care now uses `Often same-day` for the English typical timeline and `Çoğu zaman aynı gün` for the Turkish typical timeline.

**Protected areas:** Do not modify Patient Assistant files, `app/api/chat/**`, `lib/chat-client.ts`, n8n, session or message handling, Treatment Plan behavior, homepage sections, treatment index, navigation, footer, metadata, sitemap, image assets, or performance architecture during this phase.
