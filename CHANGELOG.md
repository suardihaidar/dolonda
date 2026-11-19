# Changelog — Dolonda

All notable changes and milestones for the Dolonda project are documented in this file.
Commit messages serve as the primary identifiers for each recorded entry.

---

## [Unreleased]

---

## [0.1.0] — 2026-11-19

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
