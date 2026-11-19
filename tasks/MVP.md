# MVP Implementation Roadmap & Tasks — Dolonda

**Status:** Ready for Stage 2 Execution upon Founder Approval  
**Target Delivery:** High-Polish Single-Page Portfolio & Business Website  
**Deployment Target:** Cloudflare Pages (`dolonda.com`)  

---

## Stage 1 — Workspace Inspection & Planning (Current Stage)

- [x] **TASK-01: Inspect Workspace & Tooling Environment**
  - **Prerequisites:** Workspace access.
  - **Details:** Checked Node.js (`v24.16.0`), npm (`11.13.0`), git status (uninitialized repo). Verified clean workspace.
  - **Acceptance Criteria:** Environment capabilities confirmed; no conflicting tooling.
  - **Status:** COMPLETED.

- [x] **TASK-02: Establish Project Foundations & Architectural Documentation**
  - **Prerequisites:** Project brief analysis.
  - **Details:** Author `AGENTS.md`, `docs/PRD.md`, `docs/ARCHITECTURE.md`, `docs/DESIGN_SYSTEM.md`, `tasks/MVP.md`, `tasks/BACKLOG.md`, `README.md`.
  - **Acceptance Criteria:** All files present, aligned with brief constraints, zero missing dependencies or unapproved code.
  - **Status:** COMPLETED (awaiting founder sign-off to proceed to Stage 2).

---

## Stage 2 — Project Foundation

- [x] **TASK-03: Initialize Git Repository & Core Configuration**
  - **Prerequisites:** Founder sign-off on Stage 1.
  - **Details:** Initialize `git init`. Create comprehensive `.gitignore` for Node/Vite/macOS artifacts.
  - **Acceptance Criteria:** Git repository initialized; initial documentation committed with clean history.
  - **Status:** COMPLETED.

- [x] **TASK-04: Initialize Vite + React + TypeScript Project**
  - **Prerequisites:** TASK-03.
  - **Details:** Scaffold React 18/19 with TypeScript via Vite. Configure `tsconfig.json` with strict mode enabled.
  - **Acceptance Criteria:** Clean Vite project structure created; zero initial TypeScript or build errors.
  - **Status:** COMPLETED.

- [x] **TASK-05: Configure Tailwind CSS & Design System Tokens**
  - **Prerequisites:** TASK-04.
  - **Details:** Install Tailwind CSS, PostCSS, Autoprefixer. Configure `tailwind.config.js` with custom color tokens (`canvas`, `ink`, `lime`, `indigo`), custom font families (`Space Grotesk`, `Inter`, `JetBrains Mono`), and container widths. Configure Google Fonts preconnects in `index.html`.
  - **Acceptance Criteria:** Tailwind utility classes render custom colors and fonts accurately; verified via local dev server.
  - **Status:** COMPLETED.

- [x] **TASK-06: Scaffold Folder Structure & Typed Data Schemas**
  - **Prerequisites:** TASK-05.
  - **Details:** Create directories: `src/components/layout`, `src/components/sections`, `src/components/ui`, `src/data`, `src/types`, `src/assets`. Create TypeScript interfaces (`Project`, `Service`, `TechItem`, `NavLink`) and typed static content files (`projects.ts`, `services.ts`, `techStack.ts`, `navigation.ts`, `contact.ts`).
  - **Acceptance Criteria:** All static content separated from JSX; TypeScript interfaces compile with strict types.
  - **Status:** COMPLETED.

---

## Stage 3 — Section-by-Section Implementation

- [ ] **TASK-07: Implement Navigation Bar & Mobile Menu Drawer**
  - **Prerequisites:** TASK-06.
  - **Components:** `src/components/layout/Navbar.tsx`, `src/components/layout/MobileMenu.tsx`.
  - **Details:** Build sticky header with Dolonda wordmark, desktop navigation links, responsive mobile hamburger toggle, accessible slide-over/dropdown mobile menu, smooth anchor scrolling, and visible focus rings.
  - **Acceptance Criteria:**
    - Desktop nav links navigate smoothly to `#home`, `#work`, `#services`, `#about`, `#contact`.
    - Mobile menu opens/closes smoothly, traps focus or closes on link click / ESC key.
    - Header background responds to scroll with backdrop blur.
  - **Status:** PENDING.

- [ ] **TASK-08: Implement Hero Section**
  - **Prerequisites:** TASK-07.
  - **Components:** `src/components/sections/Hero.tsx`, `src/components/ui/Button.tsx`.
  - **Details:** Construct editorial Hero layout featuring headline: *"Building thoughtful digital experiences."*, authentic Suardi bio copy, primary CTA button (`Explore My Work` -> `#work`), secondary CTA button (`Let's Talk` -> `#contact`), and subtle editorial visual accents.
  - **Acceptance Criteria:**
    - Space Grotesk headline renders with strong typographic hierarchy.
    - CTAs trigger smooth scroll to target anchors.
    - Fully responsive across mobile (320px) to wide desktop (1440px+).
  - **Status:** PENDING.

- [ ] **TASK-09: Implement Selected Work Section**
  - **Prerequisites:** TASK-08.
  - **Components:** `src/components/sections/SelectedWork.tsx`, `src/components/ui/ProjectCard.tsx`.
  - **Details:** Render the two concept projects from `src/data/projects.ts`:
    1. *Bali Villa Website* (Hospitality Landing Page, React/TS/Tailwind, booking CTA & WhatsApp placeholder).
    2. *SaaS Dashboard* (Web Application, React/TS/Tailwind, mock analytics, charts/tables).
  - **Acceptance Criteria:**
    - Both cards clearly display "Concept Project" badge.
    - Rounded visual preview container with subtle hover interaction.
    - Tech stack pills rendered cleanly.
    - No broken images or broken links.
  - **Status:** PENDING.

- [ ] **TASK-10: Implement Services Section**
  - **Prerequisites:** TASK-09.
  - **Components:** `src/components/sections/Services.tsx`, `src/components/ui/ServiceCard.tsx`.
  - **Details:** Render 3 service offerings (`01 Website Development`, `02 Frontend Development`, `03 UI Improvements`) from `src/data/services.ts`. Display monospace numbering, concise problem-solution descriptions, and itemized feature lists.
  - **Acceptance Criteria:**
    - Clean 3-column desktop layout collapsing to single-column on mobile.
    - Monospace numbers (`01`, `02`, `03`) styled with `JetBrains Mono`.
    - No mention of backend or non-relevant services.
  - **Status:** PENDING.

- [ ] **TASK-11: Implement About Section**
  - **Prerequisites:** TASK-10.
  - **Components:** `src/components/sections/About.tsx`.
  - **Details:** Present Suardi as founder/developer. Highlight >7 years software engineering experience, frontend background (React, React Native, TypeScript), and craft-first mindset. Editorial layout with pull quote or key stat callout.
  - **Acceptance Criteria:**
    - Authentic, non-exaggerated copy.
    - Strict adherence to brief: no fabricated clients, awards, or former employer logos.
    - High-contrast readability.
  - **Status:** PENDING.

- [ ] **TASK-12: Implement Technology Stack Section**
  - **Prerequisites:** TASK-11.
  - **Components:** `src/components/sections/TechStack.tsx`, `src/components/ui/TechBadge.tsx`.
  - **Details:** Showcase vetted technologies: React, React Native, TypeScript, JavaScript, Tailwind CSS, HTML, CSS, Git, GitHub.
  - **Acceptance Criteria:**
    - Grid or flex-wrap layout of clean technical badges.
    - Subtle hover states with `JetBrains Mono` labels.
  - **Status:** PENDING.

- [ ] **TASK-13: Implement Contact Section**
  - **Prerequisites:** TASK-12.
  - **Components:** `src/components/sections/Contact.tsx`.
  - **Details:** Build high-impact contact banner inviting project inquiries. Provide clear placeholders for `hello@dolonda.com`, WhatsApp direct chat, LinkedIn, and GitHub. Include quick "Copy Email" interaction.
  - **Acceptance Criteria:**
    - Prominent headline and friendly guidance.
    - Placeholders clearly labeled and functional.
    - Working click-to-copy interaction for email placeholder.
  - **Status:** PENDING.

- [ ] **TASK-14: Implement Footer & Root Assembly**
  - **Prerequisites:** TASK-13.
  - **Components:** `src/components/layout/Footer.tsx`, `src/App.tsx`.
  - **Details:** Render Dolonda wordmark, short brand statement, quick navigation links, social placeholders, and copyright notice (`© 2026 Dolonda. All rights reserved.`).
  - **Acceptance Criteria:**
    - Full single-page composition assembled seamlessly in `App.tsx`.
    - Footer completes the visual baseline of the page.
  - **Status:** PENDING.

---

## Stage 4 — Quality & Refinement Audit

- [ ] **TASK-15: Responsive & Cross-Browser Verification**
  - **Prerequisites:** TASK-14.
  - **Details:** Test layout across 375px, 640px, 768px, 1024px, 1280px, and 1440px viewports. Confirm zero horizontal scrollbar overflow.
  - **Acceptance Criteria:** Zero layout breakage or clipped text across all viewports.
  - **Status:** PENDING.

- [ ] **TASK-16: Accessibility & Usability Audit (WCAG AA)**
  - **Prerequisites:** TASK-15.
  - **Details:** Verify keyboard tab order, `focus-visible` styling, image `alt` texts, semantic headings hierarchy (`h1` -> `h2` -> `h3`), and `prefers-reduced-motion` compliance.
  - **Acceptance Criteria:** Complete keyboard navigability; WCAG 2.1 AA color contrast compliance verified.
  - **Status:** PENDING.

- [ ] **TASK-17: SEO, Open Graph & Asset Optimization**
  - **Prerequisites:** TASK-16.
  - **Details:** Configure title, meta description, favicon, Open Graph and Twitter Card tags in `index.html`. Compress and verify all visual assets.
  - **Acceptance Criteria:** High-fidelity social previews verified; Google Lighthouse score >= 95.
  - **Status:** PENDING.

---

## Stage 5 — Cloudflare Pages Deployment

- [ ] **TASK-18: Cloudflare Pages Build Configuration & Verification**
  - **Prerequisites:** TASK-17.
  - **Details:** Verify `npm run build` runs cleanly and generates static files in `dist/`. Document Cloudflare Pages dashboard setup instructions for repository connection.
  - **Acceptance Criteria:** Build succeeds with zero warnings; step-by-step connection guide prepared for founder.
  - **Status:** PENDING.
