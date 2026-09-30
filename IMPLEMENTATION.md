# Luma Homepage Final Top Refinement

## Scope

Apply a focused frontend visual refinement to the top of the homepage only.

This pass covers:

- Header wordmark alignment.
- Hero vertical rhythm and height.
- Trust metric visibility and spacing.
- Hero and trust strip composition.
- About Luma image quality.
- Small compact language-switcher polish.
- Responsive verification at the requested viewport sizes.

Preserve existing content, CTA behavior, localization behavior, accessibility, responsive behavior, reduced-motion support, treatment-plan behavior, and the current desktop two-column hero direction.

Do not redesign the rest of the website.

## Protected areas

Do not modify:

- `components/patient-assistant/**`
- `app/api/chat/**`
- `lib/chat-client.ts`

Do not change chatbot behavior, chatbot prompts, API behavior, treatment-plan modal behavior, localization logic, backend integrations, or unrelated working code.

Do not redesign Results, Treatments, Local Care, International Care, Patient Journey, Doctors, Patient Experiences, FAQ, Final CTA, or Footer.

## Hydration boundary

The previous hydration warning was not reproducible in a clean Chrome profile with extensions disabled and is consistent with browser-extension DOM/SVG mutation.

Leave application hydration logic alone in this pass.

Do not:

- Add `suppressHydrationWarning`.
- Disable SSR.
- Add `ssr: false` workarounds.
- Remove Lucide icons.
- Change locale rendering.
- Make speculative hydration fixes.

The final report must state that the warning was not reproducible in a clean browser profile and is consistent with browser-extension DOM/SVG mutation.

## Implementation sequence

1. Inspect the current main-branch implementation and the current top-of-page rendering before editing.
2. Fix the wordmark structurally in `components/layout/header.tsx` and `components/layout/wordmark.tsx`:
   - Keep the header height unchanged.
   - Make the header row use `flex items-center`.
   - Make the wordmark anchor participate in the full header height with `h-full flex items-center`.
   - Use an inner brand wrapper with controlled normal line-height and centered alignment.
   - Keep `Luma` as the dominant serif wordmark and `DENTAL ISTANBUL` as secondary text.
   - Remove `items-baseline`, `translate-y`, top-margin hacks, relative top offsets, and extremely compressed line-heights such as `leading-[0.82]`.
   - Judge the rendered alignment against navigation, language selector, and CTA at 1440px, 1280px, and 1024px.
3. Refine `components/sections/hero.tsx` without redesigning its current composition:
   - Keep the eyebrow, large headline, italic emphasis, description, CTA, three trust statements, and right-side consultation image.
   - Reduce top padding, headline-to-description gap, CTA-to-trust gap, bottom dead space, and unnecessary section height.
   - Keep the bottom of the left content visually close to the bottom of the right image.
   - Preserve intentional editorial whitespace without leaving a large blank block beneath the trust statements.
4. Refine `components/sections/trust-strip.tsx` and `components/site-page.tsx` so the strip behaves as compact continuation of the hero:
   - Keep exactly three metrics: `8,000+`, `14+ years`, and `4.9 / 5`.
   - Keep their labels: Patients treated, Clinical experience, Patient rating.
   - Do not restore `Local + global`.
   - Keep the current small icon plus label and large serif value hierarchy.
   - Keep three equal, left-aligned desktop columns, subtle top borders, integrated Lucide icons, 18–20px icons, muted color, and 1.4–1.5 stroke width.
   - Do not use icon circles, icon boxes, SaaS cards, or `justify-between` between icon and value.
   - Reduce trust-strip top and bottom padding and unnecessary margins so values are visible immediately after the hero at common desktop heights.
   - Keep the prototype notice below the metrics with a smaller font, softer muted color, and sensible top margin.
   - Do not add a new background, card wrapper, large divider, or excessive border treatment.
5. Inspect `public/images/editorial/` for a sufficiently high-quality About Luma image. If no suitable existing image is available, add `public/images/editorial/about-clinic.jpg` showing a premium modern clinic interior or calm consultation environment with natural daylight, neutral materials, clinical warmth, and no duplicated hero composition or obvious artifacts.
6. Keep the About Luma layout unchanged unless a small crop or aspect adjustment materially improves the new image. Continue using `next/image`, `fill`, `object-cover`, correct `sizes`, and deliberate desktop/mobile crops.
7. Apply only small polish to the compact EN/TR switcher in `lib/i18n.tsx` and `components/layout/header.tsx`: keep it quieter than the primary CTA, subtly bordered, clearly active, compact in width, vertically centered, and behaviorally unchanged.
8. Review the final focused diff and confirm the protected areas and unrelated sections were not modified.

## Checklist

### Header alignment

- [x] Inspect the current main-branch header and wordmark rendering.
- [x] Keep the header height unchanged.
- [x] Align header row, wordmark, navigation, language selector, and CTA through centered layout.
- [x] Make the wordmark anchor full-height and centered.
- [x] Remove baseline alignment, translation offsets, top offsets, and compressed line-height hacks.
- [x] Confirm the rendered wordmark is visually centered at 1440px, 1280px, and 1024px.

### Hero rhythm

- [x] Keep the current asymmetric desktop hero composition and all required content.
- [x] Reduce excessive top, internal, and bottom spacing.
- [x] Bring the left content finish close to the bottom of the right image.
- [x] Remove dead space beneath the trust statements without making the hero cramped.

### Trust metrics

- [x] Keep exactly three metrics and no `Local + global` metric.
- [x] Keep the integrated icon, label, and large serif value hierarchy.
- [x] Keep three equal desktop columns, subtle borders, muted icons, and left alignment.
- [x] Keep the prototype notice with reduced visual prominence.
- [x] Reduce trust-strip spacing so all metric values are visible immediately after the hero at 1440x900 and 1536x864.
- [x] Keep hero and trust strip visually connected without a new background or card treatment.

### About Luma image

- [x] Inspect existing assets under `public/images/editorial/`.
- [x] Reuse a suitable premium clinic image or add `public/images/editorial/about-clinic.jpg`.
- [x] Verify sufficient source quality, correct aspect ratio, deliberate desktop crop, and deliberate mobile crop.
- [x] Confirm the image does not repeat the hero composition.

### Language switcher and responsive behavior

- [x] Keep locale switching behavior unchanged.
- [x] Keep the compact selector quiet, centered, readable, and practical to click.
- [x] Review 1024px, 768px, 390px, and 360px.
- [x] Confirm mobile metrics do not overflow.
- [x] Confirm the mobile CTA remains usable.
- [x] Confirm the wordmark does not collide with controls.
- [x] Confirm the About image remains well cropped.

### Validation

- [x] Run `pnpm build`.
- [x] Inspect 1440px, 1280px, 1024px, 768px, 390px, and 360px.
- [x] Confirm metric values are visible at 1440x900 and 1536x864.
- [x] Confirm the hydration warning was not reproduced in a clean browser profile and no application hydration logic was changed.
- [x] Confirm `components/patient-assistant/**`, `app/api/chat/**`, and `lib/chat-client.ts` were untouched.
- [x] Confirm unrelated sections were not redesigned.

## Handoff report

Report:

1. Files changed.
2. Exact structural wordmark alignment fix.
3. Hero spacing changes.
4. Trust-strip spacing changes.
5. Whether metric values are visible at 1440x900 and 1536x864.
6. About image reused or added.
7. Build result.
8. Confirmation that hydration logic was not modified.
9. Confirmation that chatbot/API files were untouched.
