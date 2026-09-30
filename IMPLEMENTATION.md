# Luma Frontend Corrective Pass

## Scope

Apply a focused corrective pass to the latest homepage frontend changes.

This pass covers only:

- Fixing the React hydration mismatch warning.
- Redesigning the three trust metrics as cohesive editorial blocks.
- Rebuilding the desktop hero as an asymmetric two-column composition.
- Simplifying secondary hero content on desktop.
- Refining the header wordmark alignment.
- Quieting the compact EN/TR language switcher.

Preserve existing content, CTA behavior, locale behavior, responsive behavior, accessibility, reduced-motion support, and treatment-plan behavior.

Do not redesign unrelated sections.

## Protected areas

Do not modify:

- `components/patient-assistant/**`
- `app/api/chat/**`
- `lib/chat-client.ts`

Do not change chatbot logic, API behavior, Results, Treatments, Patient Journey, Testimonials, Footer, or Final CTA unless required to fix a direct regression from this pass.

## Implementation sequence

1. Inspect the current implementation, especially `components/sections/trust-strip.tsx`, `components/sections/hero.tsx`, `components/layout/header.tsx`, `components/layout/wordmark.tsx`, `lib/i18n.tsx`, and recent Lucide icon rendering.
2. Trace the hydration warning to its actual source. Check semantic DOM structure, server/client render branches, unstable values, locale-dependent markup, and SVG attributes. Do not suppress the warning.
3. Refactor trust metrics to valid predictable markup using `<dl>` with direct metric wrappers containing `<dt>` and `<dd>`.
4. Rebuild the trust strip as three equal, left-aligned editorial metric blocks:
   - `8,000+` — Patients treated — `UsersRound`
   - `14+ years` — Clinical experience — `Clock3` or `CalendarRange`
   - `4.9 / 5` — Patient rating — `Star`
5. Keep a subtle top border, controlled whitespace, large serif values, neutral labels, 18–20px icons, muted strokes around 1.4–1.5, no icon circles, no badges, no tiles, and a compact height.
6. Keep the illustrative prototype note while visually de-emphasizing it. Remove any fourth metric.
7. Rebuild the desktop hero at `lg` and above as an asymmetric two-column editorial composition:
   - Left: eyebrow, headline, italic emphasis, description, primary CTA, and three short trust statements.
   - Right: substantial clinic consultation image using approximately `aspect-[4/5]` or `aspect-[3/4]`.
   - Target approximately 55–60% text and 40–45% image, with roughly 6.5–7 and 5–5.5 columns at xl.
8. Keep tablet transitional stacking and mobile stacking. Preserve all existing content and CTA behavior.
9. Remove the separate Local Care and International Care text links from the desktop hero. They may remain as compact mobile entry points if still useful. Keep their destination sections intact.
10. Refine the wordmark without arbitrary `translate-y` offsets. Use controlled flex, line-height, or baseline alignment so the full wordmark block is vertically centered without increasing header height.
11. Refine the compact EN/TR selector with a thin border, smaller typography, a clear active locale, a smaller footprint, and a practical clickable area. Preserve locale behavior.
12. Review the final diff and confirm all protected areas are untouched.

## Checklist

### Hydration

- [x] Inspect the current hydration mismatch source.
- [x] Correct invalid or fragile trust metric DOM structure.
- [x] Check server/client conditionals, generated values, locale markup, and SVG attributes.
- [x] Confirm no `suppressHydrationWarning` was added.
- [x] Verify development mode has no hydration or SVG mismatch warnings.

### Trust metrics

- [x] Render exactly three metrics with no fourth metric.
- [x] Use valid `<dl>`, `<dt>`, and `<dd>` semantics.
- [x] Make each icon and metric read as one left-aligned unit.
- [x] Use `UsersRound`, `Clock3` or `CalendarRange`, and `Star`.
- [x] Remove `BadgeCheck` from clinical experience.
- [x] Keep the compact premium editorial treatment and de-emphasized prototype note.

### Hero

- [x] Implement the asymmetric desktop two-column composition at `lg` and above.
- [x] Give the right-side image substantial vertical presence.
- [x] Avoid panoramic full-width imagery and disconnected vertical gaps.
- [x] Preserve tablet and mobile responsive behavior.
- [x] Keep the description, CTA, and three short trust statements.
- [x] Remove desktop Local Care and International Care text links while preserving mobile usefulness and destination sections.

### Header

- [x] Remove wordmark translation hacks and align the wordmark through layout and typography.
- [x] Keep `Luma` dominant and `DENTAL ISTANBUL` secondary.
- [x] Keep the header height unchanged.
- [x] Make the compact language switcher quieter while preserving clickability and locale behavior.

### Validation

- [x] Run `pnpm build`.
- [x] Use the build for TypeScript validation.
- [x] Launch the development version if available.
- [x] Check the browser console for hydration warnings.
- [x] Review desktop at 1440px, 1280px, and 1024px.
- [x] Review mobile at 390px and 360px.
- [x] Confirm metrics are balanced and icons are integrated.
- [x] Confirm the hero reads as a desktop composition at large widths.
- [x] Confirm the wordmark is optically centered.
- [x] Confirm the language switcher does not compete with the CTA.
- [x] Confirm chatbot and API files were untouched.

## Handoff report

Report:

- Exact cause of the hydration mismatch.
- Files changed.
- Hero changes.
- Trust metric changes.
- Build and validation result.
- Confirmation that chatbot/API files were untouched.
