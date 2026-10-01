# Luma About Section Simplification

## Scope

Apply one focused simplification to the About Luma section only.

Work may include:
- `components/sections/about-luma.tsx`
- Minimal About-related localization or image asset data.

Do not redesign any other section.

## Protected areas

Do not modify:
- `components/patient-assistant/**`
- `app/api/chat/**`
- `lib/chat-client.ts`

Do not redesign the Header, Hero, Trust metrics, Treatments, Results, Local Care, International Care, Patient Journey, Doctors, Testimonials, FAQ, Footer, or Final CTA.

## Implementation tasks

1. Inspect the current main-branch About implementation and existing editorial image assets before editing.

2. Remove the failed About experiments:
   - Remove the small inset or overlapping second image.
   - Remove the duplicate crop of `about-clinic.jpg`.
   - Remove the italic brand statement.
   - Remove any 01 / 02 / 03 list, checkmark list, feature icons, and related unused `statement` or `detailAlt` copy fields.
   - Leave no supporting list or extra slogan.

3. Build the final asymmetric desktop layout:
   - Image left at approximately 55–58% width.
   - Text right at approximately 42–45% width.
   - Keep the eyebrow, existing localized headline, and existing localized description only.
   - Keep text left-aligned.
   - Vertically center the text group against the image or bias it slightly upward.
   - Use controlled heading line length and readable body-copy width.

4. Choose the strongest About image:
   - Inspect `/images/editorial/about-clinic.jpg`, `routine-care.jpg`, and `local-care.jpg`.
   - Keep or replace the current About image based on credible dental editorial quality.
   - Prefer unmistakably dental, realistic photographic texture, natural daylight, warm neutral tones, a modern clinic, and calm architectural character.
   - Avoid AI-looking luxury interiors, generic hotel or spa feeling, tiny dental context, Hero-style doctor/patient repetition, low resolution, and obvious stock posing.
   - If no existing asset works, replace `public/images/editorial/about-clinic.jpg` with one dedicated high-quality image. Do not create unnecessary variants.

5. Present one image only:
   - Use a substantial desktop aspect ratio around 4:3 or 5:4.
   - Use `next/image`, `fill`, `object-cover`, correct `sizes`, and deliberate object positioning.
   - Keep the full photographic composition understandable.
   - Use consistent restrained rounded corners.
   - Do not add inset images, overlap, collage, floating frames, captions, or gradient overlays.

6. Refine spacing and composition:
   - Keep the sage/secondary background.
   - Use balanced top and bottom padding without a large empty area.
   - Keep the section height close to the image height.
   - Create page rhythm through the image-left/text-right asymmetry.
   - Improve typography and whitespace rather than adding content.

7. Set responsive behavior:
   - Desktop: image left and text right.
   - Tablet and mobile: stack cleanly with text first and image second.
   - Keep the DOM order accessible and do not use CSS tricks that create an inaccessible reading order.
   - On mobile, reduce excess padding, use a natural wide image crop, keep the headline controlled, and prevent horizontal overflow.

8. Preserve the Luma visual language:
   - Warm ivory and soft sage palette.
   - Dark green typography.
   - Serif-led elegance.
   - Restrained editorial healthcare feel.
   - No lists, icons, badges, cards, decorative numbers, extra slogans, heavy shadows, or animation gimmicks.

9. Review at 1440px, 1280px, 1024px, 768px, 390px, and 360px. Confirm the image-left/text-right desktop rhythm, text-first mobile order, credible image crop, balanced spacing, and no overflow.

## Checklist

### Inspection

- [x] Inspect the current About component and localized copy.
- [x] Inspect `about-clinic.jpg`, `routine-care.jpg`, and `local-care.jpg`.
- [x] Confirm protected and unrelated areas before editing.

### Simplification

- [x] Remove the inset and overlapping second image.
- [x] Remove the duplicate image crop.
- [x] Remove the italic statement.
- [x] Remove all numbered rows, checkmarks, feature icons, and unused related copy fields.
- [x] Confirm the section contains only eyebrow, headline, description, and one image.

### Image choice and presentation

- [x] Decide that the existing assets did not meet the final About art direction.
- [x] Replace `about-clinic.jpg` with one dedicated high-quality dental editorial image.
- [x] Use one substantial image with deliberate crop and object position.
- [x] Confirm the image is unmistakably dental, realistic, premium, calm, and architectural.
- [x] Confirm `next/image`, `fill`, `object-cover`, aspect ratio, and `sizes` are correct.
- [x] Confirm there is no stretch, awkward crop, low resolution, or Hero repetition.

### Layout and spacing

- [x] Implement desktop image-left/text-right composition.
- [x] Keep the text left-aligned with controlled heading and body-copy widths.
- [x] Balance vertical alignment and section padding.
- [x] Confirm no unnecessary content or decorative treatment remains.

### Responsive review

- [x] Review 1440px.
- [x] Review 1280px.
- [x] Review 1024px.
- [x] Review 768px.
- [x] Review 390px.
- [x] Review 360px.
- [x] Confirm mobile and tablet use text first, image second.
- [x] Confirm no overflow, awkward crops, excessive whitespace, or broken spacing.

### Validation

- [x] Run `pnpm build`.
- [x] Confirm `components/patient-assistant/**`, `app/api/chat/**`, and `lib/chat-client.ts` are untouched.
- [x] Confirm unrelated homepage sections are untouched.

## Handoff report

Report:
1. Files changed.
2. Which image was used and why.
3. Confirmation that the inset, statement, lists, checkmarks, numbers, and icons were removed.
4. Responsive layout result.
5. Build result.
6. Confirmation that chatbot and API files were untouched.
