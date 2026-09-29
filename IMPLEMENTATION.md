## 13. Luma Patient Assistant frontend shell plan

### Status and objective

This is the next proposed implementation pass. It adds the first frontend-only version of a floating `Luma Patient Assistant` so clinics can review how a guided patient conversation could fit into the existing premium website. It is an interaction shell and demonstration of the future flow, not an AI product or a production patient communication channel.

The assistant should help visitors choose among three needs:

- Starting a treatment plan.
- Booking or discussing a consultation.
- Asking a question about treatment, travel, or the clinic.

All behavior in this pass remains local and deterministic. The assistant must not send, store, or transmit patient information.

### Product boundaries

Keep the existing `PrimaryCta`, `TreatmentPlanProvider`, `TreatmentPlanModal`, treatment-plan form, and mobile sticky CTA working exactly as they do now. The assistant must not replace the Treatment Plan workflow, open it automatically, or change its submission behavior.

Do not add an AI model, n8n workflow, API route, database, Google Sheets, Calendar, WhatsApp integration, external chatbot platform, authentication, analytics, file uploads, medical diagnosis, RAG, backend transport, or new dependency. Do not add a second lead form inside the assistant.

The assistant should be presented as a patient-facing helper. Do not prominently advertise `AI`; use the name `Luma Patient Assistant` and clear patient language.

### Architecture

Create a dedicated feature directory:

`components/patient-assistant/`

Prefer small, focused components. The suggested structure is:

- `patient-assistant-provider.tsx` — local state, open/close/reset actions, and a lightweight future-facing context API.
- `patient-assistant.tsx` — feature composition and responsive panel visibility.
- `assistant-launcher.tsx` — fixed floating entry point and accessible label.
- `assistant-panel.tsx` — desktop floating panel and mobile conversational surface.
- `message-bubble.tsx` — patient and assistant message presentation.
- `quick-replies.tsx` — welcome and mock-flow actions.
- `assistant-composer.tsx` — local message entry and send behavior.

Filenames may be adjusted if the existing architecture suggests a clearer equivalent, but the feature must remain isolated and modular rather than becoming a large page component.

The provider should support a future contextual API without wiring it into page sections yet. Keep the context small and extensible, with a shape capable of supporting a future call such as:

`openAssistant({ intent, source, patientType, treatment })`

Possible future values are:

- `intent`: `treatment-plan`, `consultation`, or `question`.
- `source`: `floating-launcher`, `hero`, `treatment-card`, `international-care`, or `final-cta`.
- `patientType`: `local` or `international`.
- `treatment`: an existing `TreatmentId`.

Do not implement contextual page-section calls in this pass.

### Provider composition and page integration

Mount the assistant globally inside the existing provider architecture so it can eventually be opened from anywhere on the site. A composition such as the following is acceptable if it matches the current implementation:

`LocaleProvider → TreatmentPlanProvider → PatientAssistantProvider → page content`

Do not disturb the existing Treatment Plan provider or move unrelated page state into the new provider.

### Launcher

Use a fixed floating launcher in the bottom-right on desktop and mobile. It should:

- Use existing Luma color tokens, typography, spacing, and border radii.
- Use an appropriate existing Lucide icon rather than a stereotypical chatbot or AI graphic.
- Have a clear accessible name and visible keyboard focus.
- Meet a reasonable touch target size.
- Respect mobile safe-area insets.
- Leave deliberate clearance from the mobile sticky Treatment Plan CTA and from the footer.
- Use only subtle Motion behavior consistent with the site and respect reduced-motion preferences.

Avoid gradients, glow effects, excessive animation, notification badges without a real state, and visual treatment that makes the assistant feel like a generic SaaS widget.

### Panel and responsive behavior

On desktop, show a polished floating conversation panel near the launcher. It should be substantial enough for a real conversation while preserving the page as the primary experience and without covering most of the viewport.

On mobile, use a near-full-screen or full-height conversational surface with safe-area padding. The panel must contain its own message scrolling, keep the composer reachable, avoid unintended body scroll, and behave reasonably when the virtual keyboard opens. The assistant must not cover the mobile sticky CTA or make the page impossible to close.

Include:

- Panel title: `Luma Patient Assistant`.
- Close control.
- Start/reset conversation control.
- A labelled message area with clear patient and assistant roles.
- Quick replies in the welcome and mock-flow states.
- A composer with a text input or textarea and a send button.

### Initial experience and local mock flow

When opened for the first time, show:

> Hi, I’m Luma’s virtual patient assistant. How can I help today?

Show three primary quick actions:

- `Start a treatment plan`.
- `Book a consultation`.
- `Ask a question`.

Keep the flow small, polished, and deterministic. For example, selecting `Start a treatment plan` can append a patient message and a local assistant response:

> I’d be happy to help. Are you currently based in Türkiye, or are you planning to travel to Istanbul?

Offer:

- `I live in Türkiye`.
- `I’m travelling from abroad`.

A selected reply may append one additional realistic assistant message. The consultation and question paths can use similarly short mocked responses. Do not create a complex state machine or imply that a clinician has reviewed the conversation.

Typed messages may append locally and receive a short mocked response. Make the future transport boundary obvious in code so a backend adapter can replace the mock later without changing the panel components. Do not fake network requests.

Reset must return the assistant to its welcome state and clear the local conversation for the current page session.

### Internationalisation

Use the existing `lib/i18n.tsx` architecture. Do not hardcode visible assistant strings throughout components. Add English and Turkish translations for the title, introduction, quick actions, mock replies, controls, composer labels, empty state, and any status text introduced by this feature.

Do not refactor the broader i18n implementation. Verify long Turkish labels and messages at mobile widths.

### Accessibility and interaction behavior

Preserve the current accessibility standard. Specifically verify:

- Keyboard access to the launcher, quick replies, composer, close button, and reset control.
- A visible focus indicator on every interactive control.
- An accessible launcher name and panel label.
- Native semantics for buttons, inputs, and the message list wherever possible.
- Sensible message-area semantics without unnecessary ARIA.
- Focus moves into the panel when opened and returns to the launcher when closed.
- Escape closes the panel when appropriate.
- Focus does not escape a mobile conversational surface unintentionally.
- Reduced-motion users do not receive animated opening or message transitions.
- Touch targets remain comfortable and do not overlap the existing sticky CTA.

### Visual direction

Use the existing Luma system so the assistant looks as if it was designed with the website:

- Ivory, deep ink, sage, and restrained champagne tokens.
- Existing Geist and Instrument Serif typography.
- Existing Button and UI primitives where appropriate.
- Quiet borders, soft surfaces, selective rounding, and generous but efficient spacing.
- Calm Motion behavior and the existing reduced-motion conventions.

Do not redesign the site or introduce a second visual identity. The panel should feel clinical, human, and considered rather than promotional or technical.

### Implementation sequence

1. Inspect `components/site-page.tsx`, `components/shared/treatment-plan-provider.tsx`, `components/shared/treatment-plan-modal.tsx`, `components/shared/primary-cta.tsx`, `components/layout/mobile-sticky-cta.tsx`, `components/ui/*`, `lib/i18n.tsx`, and `app/globals.css` before editing.
2. Define the small assistant state and future-facing context types.
3. Add English and Turkish assistant copy to the existing i18n model.
4. Build the provider and modular launcher, panel, message, quick-reply, and composer components.
5. Mount the provider and assistant globally without modifying the Treatment Plan workflow.
6. Implement the deterministic welcome and mock conversation flows with local-only state.
7. Add focus management, Escape handling, reset behavior, safe-area spacing, scroll containment, and reduced-motion support.
8. Review desktop and mobile layouts, including the relationship between the assistant launcher and mobile sticky CTA.
9. Run the production build and TypeScript checks, then verify English and Turkish rendering and the unchanged Treatment Plan flow.
10. Review the implementation against the no-backend and no-data-transmission boundaries before handoff.

### Assistant implementation checklist

- [x] Inspect the existing architecture and confirm the assistant can be mounted without changing Treatment Plan behavior.
- [x] Add the isolated patient-assistant feature directory and focused components.
- [x] Add the local provider with a small extensible context API.
- [x] Add English and Turkish assistant copy through the existing i18n system.
- [x] Add the responsive launcher with safe-area, focus, reduced-motion, and sticky-CTA clearance behavior.
- [x] Add desktop and mobile panel layouts with contained scrolling and a reachable composer.
- [x] Add the welcome state, three quick actions, reset/close controls, and deterministic mock responses.
- [x] Add local typed-message handling without fake network requests.
- [x] Verify focus management, keyboard navigation, Escape behavior, touch targets, and reduced motion.
- [x] Verify the existing Treatment Plan CTA, modal, form, mobile sticky CTA, menu, and page sections remain unchanged.
- [x] Run build and TypeScript checks and review English/Turkish desktop and mobile rendering.
- [x] Confirm no AI model, backend, external service, database, analytics, authentication, file upload, or medical diagnosis was introduced.

## 14. Patient Assistant mobile launcher positioning correction

### Scope

Make one focused responsive correction to the existing Patient Assistant launcher. Keep the assistant design, conversation flow, panel, Treatment Plan workflow, copy, and desktop behavior unchanged.

The launcher currently uses a fixed mobile offset that assumes the mobile sticky Treatment Plan CTA is always visible. Reuse the existing `[data-hide-sticky-cta]` visibility model so the launcher can distinguish these states:

- When the sticky CTA is hidden, place the launcher near the mobile viewport edge with normal spacing and `env(safe-area-inset-bottom)`.
- When the sticky CTA is visible, raise the launcher enough to clear the CTA with deliberate spacing.
- When the assistant or Treatment Plan modal is open, avoid overlapping floating controls and preserve the current open/close behavior.
- Preserve the desktop launcher position and panel behavior.

Prefer extracting a small shared visibility hook from `MobileStickyCta` rather than duplicating its IntersectionObserver logic or adding a broad context refactor. Keep the launcher touch target and reduced-motion behavior unchanged or better.

### Implementation checklist

- [x] Extract or share the existing sticky CTA visibility calculation without changing its current behavior.
- [x] Drive the mobile launcher offset from actual sticky CTA visibility and preserve desktop positioning.
- [x] Verify the initial hero, a sticky-CTA-visible section, assistant open/close, Treatment Plan modal, safe-area, and desktop states.
- [x] Run the production build and TypeScript checks, review the focused diff, and confirm no unrelated changes.

### Definition of ready for the assistant shell

The assistant pass is ready when the launcher is quiet, accessible, responsive, and visually native to Luma; when the panel works as a contained desktop and mobile conversation surface; when English and Turkish copy is complete; when the welcome, quick-reply, typed-message, reset, close, focus-return, Escape, safe-area, keyboard, and reduced-motion behaviors are verified; when the existing Treatment Plan flow remains unchanged; and when the implementation is clearly local-only and ready for a later backend adapter without including one now.

The implementation handoff should report files created and modified, the component and provider architecture, current local state behavior, what is intentionally mocked, accessibility decisions, build/type-check results, and any follow-up risks. Do not begin backend integration as part of this pass.

## 15. Luma Patient Assistant server transport

### Scope

Add the first real transport path for typed Patient Assistant messages while preserving the existing assistant shell, responsive positioning, accessibility, i18n, Treatment Plan workflow, and quick-reply mock flows. This is transport testing only; it must not become an AI integration.

The browser must call only `POST /api/chat`. The Next.js App Router route will validate the small request contract, forward an allowlisted payload to the server-configured n8n webhook, defensively normalize `{ reply: string }`, and return controlled errors. The n8n URL must never be exposed to the browser or committed to the repository.

### Boundaries and contracts

Use the server-only environment variable `N8N_CHAT_WEBHOOK_URL` and add an empty declaration to `.env.example`. Do not use `NEXT_PUBLIC_` and do not commit a real webhook URL.

Accept only:

```ts
{ message: string; locale: 'en' | 'tr'; sessionId: string }
```

Trim and validate every field, reject empty or overlong messages, require JSON, and forward only those three fields. Normalize a valid n8n response to `{ reply: string }`; treat missing, empty, malformed, non-JSON, non-2xx, timeout, network, and missing-environment responses as controlled backend failures without exposing internal details.

Keep the transport boundary narrow with a small route and optional typed client helper. Use built-in `fetch` with a reasonable timeout and no new dependency. Do not add an LLM, AI SDK, database, CRM, analytics, authentication, file upload transport, medical reasoning, RAG, streaming, or persistent patient data.

### Assistant behavior

Change only the typed free-text path. Append the patient message immediately, keep it visible during the request, disable duplicate submission while pending, show a quiet localized assistant typing state, call `/api/chat`, append the returned reply, and recover the composer after success or failure. Do not add artificial delays. Existing welcome, treatment-plan, consultation, and location quick replies remain local and mocked.

Create one in-memory session ID for the current assistant conversation using `crypto.randomUUID()`. Reuse it across typed messages and replace it when the user explicitly resets the conversation. Do not store patient data in cookies or persistent storage.

Add only the localized strings needed for the loading state and friendly connection failure. The user-facing failure copy is:

- English: `I’m having trouble connecting right now. Please try again in a moment.`
- Turkish: `Şu anda bağlantı kurmakta zorlanıyorum. Lütfen biraz sonra tekrar deneyin.`

### Implementation checklist

- [x] Inspect the current Patient Assistant, App Router route-handler conventions, environment files, and existing provider boundaries.
- [x] Add the server-only `N8N_CHAT_WEBHOOK_URL` declaration to `.env.example` without adding a real URL.
- [x] Add the narrow `POST /api/chat` route with request validation, timeout, allowlisted forwarding, defensive response normalization, and controlled errors.
- [x] Add the minimal typed client/transport types if they improve separation from visual components.
- [x] Add provider-level session ID creation and reset behavior.
- [x] Replace only typed-message mock responses with `/api/chat`, including pending state and duplicate-submit protection.
- [x] Add restrained localized loading and connection-error states with reduced-motion support.
- [x] Verify quick replies, Treatment Plan behavior, launcher positioning, desktop/mobile layout, and EN/TR rendering remain unchanged.
- [x] Test success, validation, timeout/network, malformed-response, and missing-environment paths without exposing internal details.
- [x] Run TypeScript, production build, focused diff, and final security-boundary checks.
