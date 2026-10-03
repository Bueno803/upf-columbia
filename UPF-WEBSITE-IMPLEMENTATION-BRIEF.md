# UPF website: design and enrollment implementation brief

Prepared October 3, 2026, as a handoff for GPT Sol.

## 1. Objective and scope

UPF is a business hub with three core divisions:

1. Martial arts school.
2. Personal training facility.
3. Children's programs: aftercare, summer camp, and an online school hub.

The website must help visitors quickly understand what UPF offers, determine which service fits their needs, and navigate to the correct signup or booking action. The user specifically wants interactive, information-driven design. Prioritize interactions that answer questions or help people make decisions over decorative motion.

This document translates a source-based review into an implementation plan. It is not evidence that business details, Calendly destinations, or production behavior have been verified. The previous review inspected all six pages and shared components but could not start a local browser preview. Validate the rendered site during implementation.

Implement the recommendations in this repository. Preserve unrelated existing work. Do not publish, fabricate business facts, introduce paid services, or expand UPF's service catalog merely to fill gaps. Use the existing Next.js project rather than rebuilding it with another platform.

## 2. Desired visitor journey

**Choose a service → assess eligibility, schedule, location, and price → choose an appropriate class or program → book or request enrollment → receive a clear confirmation and next steps.**

Support both visitors who already know what they want and visitors who need help choosing. A finder must be optional; direct service navigation must remain available.

### Primary audiences

| Audience | Main questions | Appropriate next action |
| --- | --- | --- |
| Parent seeking martial arts | Is my child eligible? Are beginners welcome? When are classes? What does it cost? | Book a verified trial or martial arts consultation |
| Adult seeking martial arts | Are adult beginners welcome? What is the training style and schedule? | Book a verified trial or consultation |
| Personal training prospect | Who will train me? Where? What happens first? What packages are available? | Schedule a personal training consultation |
| Parent seeking aftercare | Is pickup available from our school? What are the hours and costs? | Request enrollment or book the correct program consultation |
| Parent seeking camp | Which weeks and daily hours are offered? Is there space? What is the cost? | Select a week and request/register through a supported enrollment flow |
| Parent seeking online school support | Is this onsite or remote? What ages and schoolwork are supported? Who supervises? | Request information or enrollment for the online school hub |

Do not label a consultation as completed enrollment. A booking is not a reserved class/camp place unless the actual business workflow guarantees that.

## 3. Repository context and preservation

- Next.js App Router, React, TypeScript, Tailwind CSS, and DaisyUI.
- `next.config.ts` configures static export, trailing slashes, and a long deployment base path. Preserve deployment compatibility; do not casually remove the base path to make local preview easier.
- Relevant routes: `/`, `/taekwondo`, `/personal-training`, `/summer-camp`, `/about`, `/faqs`.
- Shared UI lives in `src/app/components`.
- Before editing, inspect current source, any applicable `AGENTS.md`, and Git status. Source may have changed since the review.
- At handoff creation, existing changes were present in `src/app/components/get-started-modal.tsx` and `src/app/personal-training/page.tsx`; `calendly-links.md` was untracked. Preserve and integrate that work rather than reverting it.
- `calendly-links.md` lists existing calendar URLs and TODOs, including investment, weapons safety, and massage. Those TODOs are not authorization to expand this redesign beyond the user's three core divisions. Establish whether those additional services belong in the main experience before exposing or building them.

## 4. Current findings and affected files

| Finding | Evidence / location | Consequence |
| --- | --- | --- |
| Hero uses broad slogans and hides explanatory subtitles | `components/Hero.tsx`: subtitle rendering is commented out | First-time visitors do not immediately understand the business |
| Automatic hero rotation every 10 seconds; no pause control | `components/Hero.tsx` | Core information changes while visitors are reading |
| Seasonal summer 2026 promotion is hard-coded | `components/Hero.tsx` | Promotions can remain visible after their season |
| Homepage service presentation uses three tall stacked rows and the same image | `page.tsx`, `components/service-card.tsx` | Slow comparison and weak visual differentiation |
| Explore link points to `#services`, but no matching section ID exists | `components/Hero.tsx`, `components/service-card.tsx` | Main navigation action does not reach its intended target |
| Children's division has inconsistent naming and shares `/summer-camp` | `TopNav.tsx`, `page.tsx`, `summer-camp/page.tsx` | Aftercare and school support are less discoverable |
| Class/program buttons open a general blank form | Service pages, `get-started-modal.tsx` | Previously selected context is lost |
| All three children's programs map to the personal-training calendar | `get-started-modal.tsx` | Visitors are routed to the wrong service |
| “Sign Up” / “Enroll Now” lead to a consultation | `taekwondo/page.tsx`, `summer-camp/page.tsx` | Button promise and actual outcome differ |
| Contact fallback opens the same general booking modal | `personal-training/page.tsx` | Visitors without a suitable appointment have no true alternative |
| First form only updates local state and advances to Calendly | `get-started-modal.tsx` | It does not independently save a lead; do not imply it does |
| Referral-source field is collected but not forwarded | `get-started-modal.tsx` | Unnecessary input with no implemented use |
| Placeholder address/phone and inconsistent full business name | `Footer.tsx`, `page.tsx`, `about/page.tsx` | Weak trust and unclear identity |
| Privacy and terms links have no corresponding routes | `Footer.tsx` and route inventory | Broken destinations |
| Logo is not a home link; social icons are plain SVGs | `TopNav.tsx`, `SocialIcons.tsx` | Expected navigation is missing |
| Modal has no implemented dialog focus management or Escape handling | `get-started-modal.tsx` | Keyboard interaction needs improvement |
| Mobile menu and FAQ state announcements are incomplete | `TopNav.tsx`, `faq-accordion.tsx` | Assistive technology receives insufficient state information |
| Site metadata is still the Next.js default | `layout.tsx` | Poor identification in tabs, search, and sharing |
| About page contains incomplete “Years of” text and repeated 35+ statistics | `about/page.tsx` | Content appears unfinished |

These are code observations, not measured conversion losses or a complete accessibility audit.

## 5. Implementation phases

### Phase 1 — Correct broken and misleading flows

1. **Use correct booking destinations for every exposed service.**
   - Verify the existing martial arts and training URLs in `calendly-links.md` before relying on them.
   - Camp, aftercare, and online school must not silently fall back to personal training.
   - When a correct destination is unknown, use a verified contact route and truthful wording. If no contact route is known, keep the missing integration explicit in the handoff and do not simulate a successful request.
   - Reason: a visitor must reach the service they chose.

2. **Make action labels accurately describe the next step.**
   - Use “Schedule a Consultation” for consultation calendars.
   - Use “Book a Trial” only where an actual trial booking is supported and its terms are verified.
   - Use “Request Enrollment” only for an implemented, delivered enrollment request.
   - Use “Enroll” or “Reserve a Spot” only for workflows that actually perform those actions.
   - Explain duration, price/free status, and expected follow-up when known.
   - Reason: visitors should understand what commitment they are making.

3. **Carry context into the booking flow.**
   - Accept an initial service and optional class/program context in the shared booking UI.
   - Preserve selected age group, session, camp week, or pickup school where relevant and supported.
   - Show a readable selection summary and permit changes.
   - Ensure switching services cannot leave stale incompatible options selected.
   - Reason: avoid redundant input and routing mistakes.

4. **Repair essential navigation.**
   - Add the `services` anchor and enough scroll offset for the sticky header.
   - Link the logo home; mark the current navigation destination.
   - Link social icons only to verified profiles, with accessible labels; remove decorative icons that imply unavailable links.
   - Replace broken legal links with approved pages when content exists. Do not invent business-specific legal terms; omit broken links until approved content is available and record the remaining content dependency.
   - Reason: prominent links should produce predictable results.

5. **Implement a real contact alternative.**
   - Use confirmed telephone, email, address, operating hours, and directions.
   - Include `tel:` and `mailto:` links where appropriate.
   - A “Can't find a time?” action must offer a different path from the same calendar.
   - Reason: scheduling friction should not become a dead end.

### Phase 2 — Clarify information architecture and page hierarchy

#### Navigation

Use consistent top-level service names:

- Martial Arts / Taekwondo.
- Personal Training.
- Kids & Education, with visible destinations for Aftercare, Summer Camp, and Online School Hub.

Include About, FAQs, and a clear Contact destination or section without overcrowding the header. A global “Find Your Program” or “Get Started” action may open a service chooser; contextual page actions should bypass that choice when it is already known. Keep all five services discoverable on mobile, including Online School Hub.

Suggested routes:

| Route | Purpose |
| --- | --- |
| `/taekwondo` | Martial arts overview, classes, and relevant booking |
| `/personal-training` | Trainer/program details and consultation |
| `/kids-programs` | Comparison overview for the children's division |
| `/aftercare` | Dedicated aftercare information and next action |
| `/summer-camp` | Dedicated camp dates, options, and next action |
| `/online-school-hub` | Dedicated education-support information and next action |

Keep existing working URLs stable. For changed routes, use a solution compatible with static export; do not assume server redirects are available.

#### Homepage order

1. **Stable hero:** concise business explanation, actual location when verified, and clear access to the three divisions. Suggested direction: “Martial arts, personal training, and programs for growing families.” Use final wording that accurately represents UPF.
2. **Compact service comparison:** three balanced cards on larger screens and readable full-width cards on small screens. Kids & Education must list its three distinct programs.
3. **Practical facts:** location, hours, supported ages, and upcoming opportunities when verified.
4. **Optional decision assistance:** help a visitor find an appropriate program without requiring contact details.
5. **Relevant trust evidence:** real instructors, facility photos, and verified testimonials.
6. **Short mission/about preview:** preserve the community story without placing it ahead of essential decision information.
7. **Contact and specific next actions.**

Place seasonal announcements in a separate area with explicit dates and an easy way to retire them. Do not auto-advance the core business explanation. Avoid making a flyer image the only source of important dates or pricing.

Reason: visitors should understand and compare services before investing in a long page.

#### Shared service-page structure

1. Clear heading and one-sentence explanation.
2. “At a glance”: audience/ages, beginner suitability, location or delivery format, days/times, duration, price or truthful pricing process, and primary action.
3. Options/classes with concise comparisons and contextual actions.
4. What to expect, inclusions, and relevant logistics.
5. Staff/facility evidence and service-specific testimonials.
6. Service-specific FAQs.
7. Booking/enrollment/contact with clear completion behavior.

Reduce large generic introductory sections that push useful information down the page. Keep essential facts visible without requiring accordion expansion. Use accordions for secondary questions.

### Phase 3 — Fill the decision-information gaps

Populate the following using verified business information. Unknown values are content dependencies, not permission to invent facts.

| Service | Required details |
| --- | --- |
| Martial arts | Age ranges; beginner entry points for children and adults; schedule and duration; trial process; membership pricing; uniforms/equipment; instructors; what happens during the first visit |
| Personal training | Trainer names and qualifications; session length; facility versus home options; packages/pricing; availability; consultation expectations; confirmed scope of services |
| Aftercare | Eligible schools and pickup arrangements; ages; daily hours; collection arrangements; daily routine; pricing; closure/holiday arrangements; who supervises |
| Summer camp | Exact season/year and dates; selectable weeks; daily hours; full/half-day differences; ages; price; inclusions; what to bring; real availability or truthful inquiry status |
| Online school hub | Onsite versus remote delivery; ages/grades; hours; supervision; tutoring scope; supported schooling arrangements; parent/student equipment responsibilities; pricing |

Specific corrections to evaluate:

- Older Taekwondo classes currently emphasize advanced/competitive training despite an “all levels” promise. Explain beginner suitability accurately.
- The training page currently advertises physical therapy, group classes, and home visits. Verify these offerings and their wording rather than assuming they are established services.
- Clarify the online school hub's delivery model; existing copy conflates support for online schooling with online fitness classes.
- Standardize the full business name. Until confirmed, “UPF” avoids choosing among the inconsistent existing expansions.
- Verify testimonial authenticity and permission, certification claims, statistics, free trials, refunds, membership pauses, and discounts before presenting them as established facts.
- Correct unfinished text and grammar; replace placeholder contact details rather than presenting them as real.

Reason: factual logistics and credible evidence help visitors decide whether a program fits.

### Phase 4 — Add useful interaction

Implement the simplest interaction that addresses a real choice. Do not create a complex questionnaire when a few filters suffice.

1. **Martial arts age/experience filters.** Show matching classes with their actual schedules and an immediate appropriate action. Include “Show all” and useful no-match guidance.
2. **Camp week selection.** Show verified dates and costs, preserve the selected week in the request, and distinguish inquiry availability from genuinely live inventory. Do not display fabricated remaining-space counts.
3. **Aftercare pickup lookup.** Search/filter a verified list of supported schools. For unsupported/unknown schools, show a real inquiry path without promising pickup.
4. **Optional program finder.** Use a few useful inputs, such as adult/child, age, and goal. Explain why the suggested service fits, and link directly to it. Do not require personal contact details to see recommendations.

If the data needed for a tool is unavailable, defer that tool explicitly while completing independent layout/navigation work. Do not ship mock operational data as real information.

Reason: the site's interaction should reduce uncertainty and move visitors toward a suitable service.

### Phase 5 — Booking implementation and accessibility

#### Booking architecture

- Centralize service definitions, destination mappings, and reusable program facts to avoid discrepancies among navigation, cards, pages, and forms.
- Prefer one shared booking implementation with contextual inputs. Avoid multiple independently mounted modals with competing body-scroll side effects.
- Reconcile the inline training calendar and modal so they offer consistent expectations and preserve relevant context.
- Collect only needed details and avoid collecting the same information both locally and in Calendly without a reason.
- Remove the unused referral-source field unless it has a real destination and operational use.
- Verify Calendly field-prefill mappings rather than assuming `a1` always means phone.
- Provide loading/error/fallback behavior and a link to open the correct calendar directly.
- Do not report a completed booking simply because the iframe loaded or the visitor clicked Next. Confirmation must follow an actual booking event or the provider's confirmed completion screen.
- Explain whether the result is a consultation appointment, an inquiry, or completed enrollment, and state next steps accurately.
- Static export provides no server-side form endpoint by itself. Any lead/enrollment form needs an approved real integration. Do not add a fake success screen for an unsent form.

#### Accessibility and responsive behavior

- Modal: accessible dialog name, appropriate dialog semantics, initial focus, trapped focus, Escape dismissal, restored trigger focus, and background interaction prevention while open.
- Navigation: labeled mobile menu trigger, expanded state, controlled region association, keyboard operation, visible focus, and reliable close behavior after selection.
- FAQs: expanded state and panel association; do not hide key purchase-decision facts in accordions.
- Forms: visible labels, clear errors associated with fields, appropriate autocomplete/input modes, and usable validation feedback.
- Layout: readable mobile card widths, no horizontal overflow, sufficiently large touch targets, and no sticky elements obscuring content or controls.
- Motion: respect reduced-motion preferences. If any rotating content remains, provide pause controls and avoid moving essential information.
- Images: distinct relevant photos, appropriate alternative text, stable dimensions, and intentional mobile crops. Avoid applying one fixed background offset to every image.
- Check actual text/background contrast and visible focus indicators in the rendered UI.

Reason: the full decision and booking process must remain usable across devices and input methods.

### Phase 6 — Metadata and measurement

- Replace “Create Next App” metadata with verified UPF branding and page-specific descriptions.
- Add appropriate social preview metadata using real assets and deployment URLs when known.
- Keep metadata compatible with App Router client/server boundaries; move interactive content into child components if necessary.
- If an approved analytics integration exists, measure service selection, booking start, confirmed booking, and contact fallback separately.
- Do not count a button click as an enrollment or send names, emails, phone numbers, or child details in analytics events.
- If analytics is not configured, document the integration dependency and event definitions rather than claiming measurement is operational.

Reason: the site should identify itself accurately and allow actual funnel performance to guide later improvements.

## 6. Visual direction

- Retain a coherent UPF identity and the useful blue/orange foundation unless actual brand guidance indicates otherwise.
- Standardize typography, button hierarchy, spacing, card styles, and colors. Existing CSS contains several competing theme/token definitions; consolidate carefully around the components in use.
- Give each division distinct real imagery while retaining a shared visual system.
- Favor concise factual labels and readable text over large emoji icons and generic paragraphs.
- Use one prominent contextual action per decision area, with an appropriately quieter secondary action.
- Avoid blanket animation, gratuitous hover movement, or adding a carousel merely to make the site feel interactive.
- Keep actual operational or implementation details out of visitor-facing copy. Record missing integrations in development documentation instead.

## 7. Business inputs to resolve

Ask for unresolved facts in a concise consolidated request when necessary; continue independent work while awaiting answers. Do not ask the user to reconfirm implementation choices already authorized by the task.

- Official full business name, location, phone, email, hours, and social profiles.
- Correct calendars/contact destinations for all five services; whether trials and enrollment are distinct workflows.
- Confirmed ages, class schedules, prices, packages, trial terms, and availability.
- Camp dates/weeks, pickup-school list, and online-school delivery model.
- Approved staff biographies, qualifications, photos, reviews, and policy copy.
- Whether investment, weapons safety, massage, physical therapy, group classes, and home visits belong in the advertised scope.
- Existing form delivery/CRM/analytics integration, if any.

Do not let missing optional content block straightforward navigation or accessibility fixes. Clearly report any remaining launch dependencies.

## 8. Acceptance criteria and verification

### Core journeys

- [ ] A first-time visitor can identify all three divisions and discover all five core services from the homepage without waiting for animation.
- [ ] Every service is accessible through desktop and mobile navigation.
- [ ] “Explore Our Services” reaches the intended section without the header obscuring it.
- [ ] A selected Taekwondo class remains selected through the next action, or is visibly included in the booking/request context.
- [ ] A training consultation goes to the verified training destination.
- [ ] Camp, aftercare, and online school never silently route to training.
- [ ] Every action label accurately describes the outcome.
- [ ] Visitors unable to find an appointment have a working alternative contact route.
- [ ] No UI implies a saved lead, reserved place, or completed enrollment without the corresponding real action.

### Information and presentation

- [ ] Service pages expose the practical facts listed above, or accurately explain the verified inquiry process where specific pricing/availability is not published.
- [ ] Core business naming is consistent; no fake contact details remain.
- [ ] No unverified operational dates, remaining-space counts, credentials, policies, or testimonials are introduced.
- [ ] No broken internal links, missing image assets, or default application metadata remain.
- [ ] Homepage and service pages are checked at representative mobile, tablet, and desktop widths, including long labels and expanded menus.
- [ ] Images and headings remain readable without awkward crops, excessive whitespace, or horizontal overflow.

### Interaction and integration

- [ ] Keyboard-only navigation covers menus, filters, FAQs, modal opening/closing, and forms.
- [ ] Modal focus returns correctly; background scroll and interaction are restored after dismissal.
- [ ] Empty results, invalid input, unavailable dates, and blocked calendar loading have useful behavior.
- [ ] Context resets correctly when choosing a different program or opening a new booking action.
- [ ] Provider prefills and success handling are verified without making an unauthorized real appointment.
- [ ] Base-path assets and links work under the configured static deployment path.

### Technical checks

- Run the repository's lint and build checks with the available runtime; fix issues introduced by this work and distinguish unrelated pre-existing issues.
- Validate browser behavior in addition to source inspection. Do not claim visual QA based only on a successful build.
- Add focused tests where useful for service routing, context preservation, and any nontrivial filtering/confirmation logic. Avoid tests that only mirror static copy or CSS.
- Review the final diff for accidental removal of prior user changes.

Environment note: during the original review, `npm run dev` failed because the npm shim referenced a missing `npm-cli.js`. Invoking `node node_modules/next/dist/bin/next dev --hostname 127.0.0.1` then failed with `EACCES` on port 3000. These were local execution limitations, not proof of an application defect. Resolve the runtime/port environment through permitted means before rendering, and report any verification that remains unavailable.

## 9. Suggested delivery order and handoff

1. Inspect current source and preserve existing changes.
2. Correct routing, labels, context propagation, and broken navigation.
3. Implement the homepage hierarchy, consistent service taxonomy, and dedicated children's pages.
4. Populate verified facts, imagery, and trust content; clearly track missing business inputs.
5. Add useful data-backed decision tools and finish booking/accessibility behavior.
6. Complete metadata, appropriate analytics integration, responsive review, and technical checks.

When finished, report the visitor-facing changes, actual validation performed, unresolved business/integration dependencies, and any material launch limitations. Do not claim the project is ready for real enrollment if delivery or booking routes remain unverified.
