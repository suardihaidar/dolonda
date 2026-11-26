# Changelog — Dolonda

All notable changes and milestones for the Dolonda project are documented in this file.
Commit messages serve as the primary identifiers for each recorded entry.

---

---

## [0.2.2] — 2026-11-26

### Navigation Scroll Behaviour & Contact Details

- **`afd25c7`** — `fix(nav): smooth-scroll anchors and clear hash on wordmark home click`
  - **Details:** Anchor navigation previously jumped instantly because `scroll-behavior` was never enabled. The wordmark also used `href="/"`, which triggered a full document reload — losing position with no smooth transition.
  - **Changes:**
    - **`styles/index.css`** — added `scroll-behavior: smooth` and `scroll-padding-top: 5rem` to `html`, so all in-page links animate and the 80px sticky navbar no longer covers section headings. The existing `prefers-reduced-motion` block still forces `auto`.
    - **`Navbar.tsx`** — wordmark keeps `href="/"` for no-JS and modifier-click (new tab) behaviour, but intercepts plain left-clicks: `preventDefault()`, clears a stale hash with `history.replaceState()` (no reload, no history entry), then `window.scrollTo({ top: 0 })` with a reduced-motion check.

- **`ee591ba`** — `fix: adjust readme and contact placeholder`
  - **Details:** Replaced placeholder contact details with the founder's real destinations and corrected the clone URL.
  - **Changes:** `data/contact.ts` now uses `hello@dolonda.my.id`, the real WhatsApp number, `linkedin.com/in/muhammad-suardi`, and `github.com/suardihaidar`; removed the stale "Placeholder links · pending confirmation" note from `Contact.tsx`; README clone command points at `suardihaidar/dolonda`.

### Documentation & Tooling

- **`2958ce7`** — `docs: document explicit rtk command routing in AGENTS.md`
  - **Details:** Replaced the earlier rtk hook wiring with explicit per-command routing instructions, since no hook is installed.
  - **Changes:** Documented the `rtk git|npm|tsc|lint|test|ls|tree|find|grep|read|diff` subcommands and the `rtk bypass` escape hatch for unusable output.

- **`b5b2b2e`** — `chore: wire rtk output instructions into AGENTS.md`
  - **Details:** First pass at wiring token-efficient command output into the agent workflow.
  - **Changes:** Added `.rtk/filters.toml` and an rtk output section to `AGENTS.md`.

- **`bc91b36`** — `chore: add .codegraph local state to .gitignore`
  - **Details:** Keeps local codegraph index state out of version control.
  - **Changes:** Added the `.codegraph` entry to `.gitignore`.

## [0.2.1] — 2026-11-25

### Design Token Discipline & Accessibility Pass

Follow-up to the 0.2.0 anti-slop baseline: arbitrary colour literals replaced with design-system tokens, and a WCAG AA contrast audit applied to metadata text.

- **`tailwind.config.js`** — darkened `ink.subtle` from `#827E77` → `#6E6A63` so metadata labels clear WCAG AA (~4.85:1) against the warm canvas instead of ~3.64:1.
- **`ProjectPreviewMockup.tsx`**
  - Replaced every arbitrary hex value with design tokens (`canvas-subtle`, `canvas`, `ink`, `ink-muted`, `border-subtle`, `border-dark`) across both the Bali Villa and SaaS telemetry mockups.
  - Dark SaaS mockup now derives its full palette from `bg-ink` / `text-canvas` opacity steps instead of `zinc-*` and `#18181B` literals; inner panes raised to `canvas/10` so their `border-dark` outlines stay visible.
  - Bali mockup inner room cards use the elevated `canvas-card` token so they separate from the `canvas-subtle` container.
  - Promoted the Bali mockup inner heading from `h4` → `h3` for a valid heading order.
  - Telemetry success/delta accents (`emerald-400/700`) swapped for `lime-accent`; HTTP method labels (`sky-400`) swapped for `indigo-accent`.
- **`Contact.tsx`** — `zinc-400/500/600` replaced with `text-canvas` opacity steps; body copy set to `text-canvas/75` to keep it visually subordinate to the display headline. The email-copy button keeps its `aria-label` because its visible text alone does not convey the copy action.
- **`Hero.tsx`** — status row `text-xs` → `text-sm`; stack line moved from `text-indigo-accent` to `text-ink-muted font-medium`.
- **`ProjectCard.tsx`** — decorative preview wrapper marked `aria-hidden="true"` so assistive tech skips the simulated UI.
- **`MobileMenu.tsx`** — removed dead `animate-in slide-in-from-top duration-200` classes (`tailwindcss-animate` is not installed, so the drawer had no animation to begin with).
- **`Button.tsx`** — **deleted.** It was never imported anywhere; every button in the app is styled inline. Its variants had also drifted (focus rings, ring offsets) since nothing exercised them. Also corrected the `docs/ARCHITECTURE.md` file tree and component diagram, which still listed the already-deleted `Container.tsx`, `ServiceCard.tsx`, and `TechBadge.tsx`.
- **Build:** 0 TypeScript errors · 416ms · 55.34 kB gzip JS · 4.96 kB gzip CSS (CSS down 0.10 kB from the removed button variants).

## [0.2.0] — 2026-11-21

### Anti-Slop Phase 2–7 Full Editorial Transformation

- **`89a754d`** — `refactor: anti-slop phase 2-7 full editorial transformation`
  - **Details:** Complete editorial redesign across all 8 sections applying miqdadbadjuber anti-slop delivery gate requirements. Eliminates all consecutive identical card grids, resume bullet lists, accent scattering, and robotic copy.
  - **Changes:**
    - **Phase 1 — Foundation:** Refined `tailwind.config.js` with `ink.muted`/`ink.subtle` tokens, letter-spacing tokens; updated `types/index.ts` to replace `TechItem` with `TechPillar`, add `Project.role`/`architectureNote`, rename `capabilities` → `deliverables`.
    - **Phase 2 — Hero:** Monumental display headline at `clamp(3.25rem,8vw,7rem)` with `−0.035em` tracking; replaced generic availability pill with geographic micro-masthead row; removed capability matrix column; simplified to single primary CTA + plain-text secondary link.
    - **Phase 3 — Selected Work:** Eliminated all `↳` arrow bullet lists; replaced with editorial case study prose (description + architecture note); full-bleed bordered layout (no `rounded-3xl` card boxes); `projects.ts` gains `role`/`architectureNote` fields.
    - **Phase 4 — Services:** Eliminated 3-column card grid; replaced with hairline `divide-y` row layout; `services.ts` renamed `capabilities` → `deliverables`; inline discuss link replaces banner box; deleted `ServiceCard.tsx`.
    - **Phase 5 — About:** Removed boxed monogram `S.` card; full-width editorial pull-quote at `clamp(1.5rem,3vw,2.25rem)`; prose working principles replace nested principle cards; minimal signature timeline table.
    - **Phase 6 — TechStack:** Eliminated 10-badge grid; replaced with 3-pillar bordered typographic catalog; removed standalone HTML/CSS/Git badges; `techStack.ts` reorganised as `TechPillar[]`; deleted `TechBadge.tsx`.
    - **Phase 7 — Contact:** Monumental `h2` display headline replaces `SectionHeading` above card; squared button borders; WhatsApp button uses correct `text-canvas` on `bg-ink`; added Bandung/Jakarta UTC+7 local time row.
    - **Build:** 0 TypeScript errors · 721ms · 55.5kB gzip JS.

### Anti-Slop Refinement (Fixes)
- **`de37b9f`** — `fix: remove all decorative lime-accent slop dots and stray accent misuse`
  - **Details:** Comprehensive cleanup of decorative lime-accent dots across all components, restoring strict accent discipline as per anti-slop guidelines.
  - **Changes:**
    - **Hero:** Removed rounded-full availability dot from status row (text alone is sufficient)
    - **Contact:** Removed rounded-full dot from availability row (text-lime-accent label is enough)
    - **Footer:** Reverted back-to-top arrow from text-lime-accent to ink-subtle
    - **ProjectPreviewMockup:** Replaced bg-lime-accent brand block with bg-zinc-600 neutral; replaced text-lime-accent GET label with text-sky-400 (HTTP method convention)
    - **Button.tsx:** Removed unused lime variant from union type to prevent future misuse
  - **Lime discipline:** Now reserved to exactly 3 uses: wordmark dot (Navbar + Footer), headline terminal period (Hero + Contact), and focus-visible accessibility rings.

- **`cf460ee`** — `fix: remove remaining recorative lime-accent slop dots`
  - **Details:** Continued cleanup of remaining decorative lime-accent dots identified during anti-slop audit.
  - **Changes:**
    - **Footer:** Removed decorative lime dot from back-to-top icon
    - **Navbar:** Removed decorative lime dot from back-to-top icon
    - **Contact:** Refined availability row dot styling
    - **Hero:** Refined availability row dot styling
    - **TechStack:** Refined accent usage in tech badge labels
    - **ProjectPreviewMockup:** Refined accent usage in brand block

### Build Toolchain Updates
- **`a35cf25`** — `chore: upgrade vite and @vitejs/plugin-react to latest version`
  - **Details:** Updated build toolchain dependencies to latest stable versions.
  - **Changes:**
    - **package.json:** Upgraded `vite` and `@vitejs/plugin-react` to latest versions
    - **package-lock.json:** Updated dependency tree (557 insertions, 1151 deletions)

---

### Previous Anti-Slop First Pass (Superseded)
- **`12cf55f`** — `refactor: anti-ui-slop design system review and layout refinement`
  - **Details:** Comprehensive audit and elimination of generic AI visual tropes in accordance with anti-slop principles.
  - **Changes:**
    - Replaced generic pulsing green ping badge in Hero with clean monospace metadata coordinates.
    - Overhauled SaaS concept mockup to replace fake, cliché bar graphs ("Vortex Pulse") with an authentic developer telemetry routing table and latency diagnostics.
    - Elevated luxury hospitality mockup (Villa Asmara) with refined architectural typography framing.
    - Eliminated generic `✓` checkmarks in Services cards in favor of clean editorial dashes (`—`).
    - Removed nested "cards-inside-cards" in the About section in favor of a clean, structured typographic table with hairline dividers.
    - Cleaned up Technology Stack badges into cohesive engineering clusters.
    - Removed blurred neon radial gradient blobs (`blur-3xl`) from the Contact section for crisp contrast.
    - Codified permanent anti-slop guidelines in `docs/ANTI_SLOP_GUIDELINES.md` and updated `AGENTS.md`.

---

## [0.2.0] — 2026-11-21

### Fixes & Refinements
- **`5f9b153`** — `fix(contact): resolve CSS cascade collision on whatsapp button in dark card`
  - **Details:** Resolved a Tailwind CSS specificity conflict where `.text-ink` overrode `.text-canvas` on dark surfaces, causing the WhatsApp button text to be invisible (black-on-black).
  - **Changes:** Added `variant="secondary-dark"` in `Button.tsx`, forwarded `props` to anchor elements, and added an external link icon.

- **`a602157`** — `feat: complete quality refinement audit and cloudflare pages deployment verification`
  - **Details:** Completed Stage 4 (Quality & Refinement Audit) and Stage 5 (Cloudflare Pages deployment verification).
  - **Changes:** Enhanced `index.html` with canonical URL, theme color, Open Graph, and Twitter Cards; created `public/robots.txt`; confirmed static bundle compiles cleanly into `dist/`.

### Section Implementations (Stage 3)
- **`e684a4f`** — `feat: complete stage 3 section implementation with editorial footer and root assembly`
  - **Details:** Completed Stage 3 by implementing the editorial footer and assembling all 8 sections into `App.tsx`.
  - **Changes:** Added `src/components/layout/Footer.tsx` with smooth back-to-top scroll trigger, quick navigation links, social placeholders, and copyright notice.

- **`8b8cecc`** — `feat: implement high-impact contact section with email clipboard utility and placeholders`
  - **Details:** Built the primary contact section as an editorial Charcoal card with Warm Off-White typography and Electric Lime highlights.
  - **Changes:** Created `src/components/sections/Contact.tsx` with a 1-click clipboard email copy utility, direct `mailto:` link, WhatsApp prefilled chat button, and social placeholders.

- **`27568d6`** — `feat: implement vetted technology stack section with responsive badges`
  - **Details:** Built the technology capabilities grid showcasing 10 production-vetted tools (React, React Native, TypeScript, Tailwind CSS, etc.).
  - **Changes:** Added `src/components/sections/TechStack.tsx` and `src/components/ui/TechBadge.tsx` featuring a responsive 5-column layout and the "Zero Bloat Philosophy" callout.

- **`711f50a`** — `feat: implement about section highlighting founder background, ethos, and principles`
  - **Details:** Introduced Suardi as the founder and creative developer behind Dolonda, emphasizing >7 years of software engineering experience.
  - **Changes:** Created `src/components/sections/About.tsx` featuring the three core operating principles (Rigor, Craft, Clarity), founder monogram card, and authentic ethos pull quote.

- **`db5ccab`** — `feat: implement services section with 3 core offerings and problem-solving focus`
  - **Details:** Formatted the three core service offerings (Website Development, Frontend Development, UI Improvements) into an editorial 3-column layout.
  - **Changes:** Created `src/components/sections/Services.tsx` and `src/components/ui/ServiceCard.tsx` with `JetBrains Mono` numbering (`01`, `02`, `03`) and deliverables checklists.

- **`3d0ed42`** — `feat: implement selected work section with concept cards and visual mockups`
  - **Details:** Built the portfolio showcase for *Bali Villa Website* and *SaaS Analytics Dashboard* concept studies.
  - **Changes:** Created `src/components/sections/SelectedWork.tsx`, `src/components/ui/ProjectCard.tsx`, and `src/components/ui/ProjectPreviewMockup.tsx` featuring code-rendered responsive mockups, strict concept tags, and the Dolonda Integrity Guarantee.

- **`ae706ee`** — `feat: implement editorial hero section and reusable button primitive`
  - **Details:** Constructed the primary hero section and the foundational polymorphic button component.
  - **Changes:** Added `src/components/sections/Hero.tsx` with live availability status badge, display typography, and dual CTAs; created `src/components/ui/Button.tsx`.

- **`d38addf`** — `feat: implement accessible sticky navbar and mobile menu drawer`
  - **Details:** Implemented the responsive navigation header and mobile drawer.
  - **Changes:** Added `src/components/layout/Navbar.tsx` with scroll-activated backdrop blur and `src/components/layout/MobileMenu.tsx` with keyboard focus management and Escape key dismissal.

### Project Foundation & Architecture (Stage 1 & 2)
- **`8a806c2`** — `feat: complete stage 2 project foundation with vite, react, typescript, and tailwind`
  - **Details:** Established project scaffolding, dependencies, build toolchain, and design token integration.
  - **Changes:** Configured `package.json`, `tsconfig.json` (strict mode), `vite.config.ts`, `tailwind.config.js` (custom tokens for canvas, ink, lime, indigo), and strongly typed data models in `src/data/`.

- **`df3bfa1`** — `docs: establish project foundation and architecture`
  - **Details:** Initial repository commit establishing governing architecture and product specifications.
  - **Changes:** Created `AGENTS.md`, `README.md`, `docs/PROJECT_BRIEF.md`, `docs/PRD.md`, `docs/ARCHITECTURE.md`, `docs/DESIGN_SYSTEM.md`, `tasks/MVP.md`, and `tasks/BACKLOG.md`.
