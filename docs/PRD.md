# Product Requirements Document (PRD) — Dolonda

**Product Name:** Dolonda  
**Live Target Domain:** dolonda.com  
**Founder:** Suardi (Ardi)  
**Status:** MVP Specification  
**Version:** 1.0.0  
**Last Updated:** November 2026  

---

## 1. Executive Summary & Product Vision

### 1.1 Product Vision
**Dolonda** is a founder-led creative development brand dedicated to building thoughtful websites and digital experiences for businesses, startups, and individuals. By bridging rigorous frontend engineering with creative problem-solving, Dolonda transforms complex ideas and designs into functional, high-performance, and delightful web applications.

### 1.2 Core Tagline
> *"Building thoughtful digital experiences."*

### 1.3 Strategic Brand Positioning
- **Current Phase:** Independent Creative Developer portfolio and personal brand. The website must make it unmistakably clear that clients engage and work directly with **Suardi**, an experienced software engineer with over seven years in the field.
- **Future Evolution:** A boutique creative development studio. The brand identity, design architecture, and codebase must scale gracefully into a studio model without necessitating a total rebrand or codebase rewrite.
- **Brand Personality:**
  - *Creative, but not overly artistic* — Distinctive and stylish, but always prioritizing usability and business utility.
  - *Technical, but approachable* — Deeply knowledgeable in code and architecture, yet speaking plain, transparent language to clients.
  - *Independent, but professional* — Reliable, communicative, and disciplined like a high-end partner.
  - *Modern, but timeless* — Clean editorial layouts that avoid fleeting aesthetic fads (no glassmorphism, heavy neon gradients, or bloated decorative animations).

---

## 2. Problem Statement & Value Proposition

### 2.1 The Problem
1. **The Generic Agency Gap:** Many small businesses and startups find large digital agencies too expensive, slow-moving, and impersonal, often assigning junior developers once the contract is signed.
2. **The Fragile Freelancer Dilemma:** Typical low-cost freelance development frequently yields poorly structured code, broken responsiveness, inaccessible markup, and maintenance nightmares that require costly rewrites.
3. **The Design-to-Code Disconnect:** Beautiful Figma designs often lose their precision, polish, and fluid responsiveness when translated into code by teams lacking creative frontend sensitivity.

### 2.2 The Dolonda Value Proposition
- **Direct Senior Access:** Clients work directly with Suardi, leveraging >7 years of software engineering expertise from first conversation to final deployment.
- **Engineering Rigor + Creative Craft:** Flawless Figma-to-code execution, responsive precision, accessible semantics, and clean TypeScript/React code that can be maintained or scaled effortlessly.
- **Thoughtful & Focused Scope:** Specialization in what matters most: high-converting landing pages, modern React/TypeScript web apps, and systematic UI/Tailwind refinements.

---

## 3. Target Audience & Personas

The website caters to both Indonesian and international English-speaking markets:

| Persona | Description | Primary Need from Dolonda |
| :--- | :--- | :--- |
| **Startup Founder** | Early-stage founder launching an MVP or redesigning a marketing site. | Fast, pixel-perfect landing page or interactive frontend prototype; trustworthy senior engineer who requires zero handholding. |
| **Small/Medium Business Owner** | Business owner needing a modernized, credible online presence (e.g., hospitality, professional services). | Responsive, conversion-focused business website with clear CTAs (e.g., WhatsApp, booking, direct inquiry). |
| **Digital Agency Lead** | Creative director or agency producer needing specialized frontend engineering support. | Reliable collaborator for overflow Figma-to-code React/TypeScript builds who respects design fidelity and deadline commitments. |
| **Independent Professional** | Consultant, author, or creator needing a tailored web presence. | Editorial, high-taste portfolio or landing page that elevates their personal brand. |

---

## 4. Business Model & Services

Dolonda operates on a project-based and retainer consulting model. The MVP communicates three core service pillars:

### Service 01: Website Development
- High-converting landing pages.
- Professional business websites.
- Responsive, mobile-first website development.
- Performance-optimized, user-friendly digital experiences.

### Service 02: Frontend Development
- Custom React application development.
- Type-safe TypeScript architecture.
- Pixel-perfect Figma-to-code implementation.
- Modular, reusable UI component libraries.
- Third-party UI and API integration.

### Service 03: UI Improvements
- Responsive layout diagnostics and fixes across screen sizes.
- Frontend bug fixes and performance triage.
- CSS, Tailwind CSS architecture cleanups and optimization.
- Component-level polish and interaction refinements.
- Form validation, UX enhancements, and accessibility remediations.

*Note: In accordance with brand integrity, backend development, advanced UI/UX strategy, or services outside current core capabilities are explicitly excluded from marketing copy.*

---

## 5. Functional Requirements (Section-by-Section)

The MVP is structured as a responsive single-page application with smooth section anchor navigation.

```
┌────────────────────────────────────────────────────────┐
│ [Navbar] Dolonda Wordmark | Home Work Services About Contact │
├────────────────────────────────────────────────────────┤
│ [Hero] "Building thoughtful digital experiences."      │
│        Suardi bio intro | [Explore Work] [Let's Talk]   │
├────────────────────────────────────────────────────────┤
│ [Selected Work] Concept 01 (Bali Villa) & 02 (SaaS)    │
├────────────────────────────────────────────────────────┤
│ [Services] 01 Website Dev | 02 Frontend | 03 UI Fixes  │
├────────────────────────────────────────────────────────┤
│ [About] Founder Story (>7 yrs exp, React, TypeScript)  │
├────────────────────────────────────────────────────────┤
│ [Tech Stack] React, TS, Tailwind, Git, GitHub, etc.    │
├────────────────────────────────────────────────────────┤
│ [Contact] Clear CTA, Placeholder Email/WhatsApp/Social │
├────────────────────────────────────────────────────────┤
│ [Footer] Wordmark, Brand Statement, Copyright, Links   │
└────────────────────────────────────────────────────────┘
```

### 5.1 Navigation Header (`Navbar`)
- **Dolonda Wordmark:** Distinctive text logo linking to the top (`#home`).
- **Desktop Links:** Smooth anchor links to `#home`, `#work`, `#services`, `#about`, `#contact`.
- **Active State / Focus:** Clear keyboard navigation indicators and visible active states.
- **Mobile Navigation:** Responsive hamburger toggle opening an accessible mobile menu drawer with backdrop blur.
- **Sticky / Fixed Behavior:** Remains accessible at top with subtle background backdrop filter when scrolled.

### 5.2 Hero Section (`Hero`)
- **Headline:** *"Building thoughtful digital experiences."* (Geist, bold editorial sizing).
- **Supporting Text:** *"I'm Suardi, an independent creative developer with more than seven years of professional software engineering experience. I help businesses turn ideas into responsive websites and intuitive web applications."*
- **Primary Call to Action:** Button: `Explore My Work` (scrolls to `#work`).
- **Secondary Call to Action:** Button/Link: `Let's Talk` (scrolls to `#contact`).
- **Visual Design:** Editorial composition, generous whitespace, subtle background accents utilizing Warm Off-White (`#FCFAF5`), Charcoal (`#202020`), and subtle Electric Lime (`#C7F36B`) highlights.

### 5.3 Selected Work Section (`SelectedWork`)
Showcases two high-polish concept projects, clearly labeled as **Concept Project** to ensure 100% honesty.

1. **Project 01 — Bali Villa Website**
   - *Category:* Hospitality Landing Page (Concept).
   - *Tech:* React, TypeScript, Tailwind CSS.
   - *Key Features:* Responsive landing page, property showcase, accommodation highlights, booking CTA, WhatsApp contact integration placeholder.
   - *Visuals:* Square hairline-framed preview spread (radius reserved for CTAs only), tag badges, and live demo / code repository placeholder links.
2. **Project 02 — SaaS Dashboard**
   - *Category:* Web Application Interface (Concept).
   - *Tech:* React, TypeScript, Tailwind CSS.
   - *Key Features:* Clean dashboard overview, realistic mock analytics data, interactive charts and tables, search and filtering controls, fully responsive layout.
   - *Visuals:* High-contrast card with crisp preview, technical metadata tags, and descriptive overview.

### 5.4 Services Section (`Services`)
- Three distinct service cards highlighting **01 Website Development**, **02 Frontend Development**, and **03 UI Improvements**.
- Concise, problem-solution copy addressing pain points directly.
- Monospace numbering (`01`, `02`, `03`) using `Geist Mono`.

### 5.5 About Section (`About`)
- Introduces **Suardi** as the founder and lead developer behind Dolonda.
- Highlights:
  - More than seven years of professional software engineering experience.
  - Deep frontend background with React, React Native, and TypeScript.
  - Dedication to craftsmanship, clean code, accessibility, and thoughtful digital experiences.
- Authentic, warm, and concise tone.
- Strictly no fabricated achievements, fake awards, or fictional former employers.

### 5.6 Technology Stack Section (`TechStack`)
- Clean badge/grid display of core capabilities:
  - React, React Native, TypeScript, JavaScript, Tailwind CSS, HTML, CSS, Git, GitHub.
- Accompanied by brief copy reinforcing engineering rigor, type safety, and modern tooling standards.

### 5.7 Contact Section (`Contact`)
- Prominent call-to-action encouraging collaboration on new projects or contract roles.
- Direct contact options with explicit placeholders:
  - Email: `hello@dolonda.com` (placeholder)
  - WhatsApp: Direct chat link placeholder with prefilled message
  - Social / Developer profiles: LinkedIn and GitHub placeholders
- Reassuring copy highlighting direct founder communication and fast turnaround.

### 5.8 Footer (`Footer`)
- Dolonda wordmark.
- Short brand statement: *"Building thoughtful digital experiences for ambitious brands and founders."*
- Quick navigation links (`Home`, `Work`, `Services`, `About`, `Contact`).
- Copyright notice: `© 2026 Dolonda. All rights reserved.`

---

## 6. Non-Functional Requirements (NFRs)

### 6.1 Performance & Optimization
- **Build Output:** Static HTML/JS/CSS assets compiled via Vite with optimal chunking.
- **Page Load:** Target Lighthouse score >= 95 on Desktop, >= 90 on Mobile.
- **Core Web Vitals:** LCP < 2.0s, FID/INP < 100ms, CLS < 0.05.
- **Asset Optimization:** WebP/SVG vector graphics, self-hosted or preconnected Google Fonts, no bulky runtime libraries.

### 6.2 Accessibility (a11y)
- **Standard:** WCAG 2.1 Level AA compliance.
- **Semantic HTML:** Appropriate usage of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<h1>`-`<h3>`.
- **Keyboard Navigation:** Fully navigable via Tab key; all interactive controls feature visible `focus-visible` styling.
- **Screen Reader Support:** Meaningful `alt` text on images; `aria-expanded` and `aria-controls` on mobile navigation toggles.
- **Reduced Motion:** Automatic suppression of transitions and transforms when `prefers-reduced-motion: reduce` is active.
- **Contrast Ratios:** Text-to-background contrast ratio >= 4.5:1 for body text and >= 3:1 for large headings across all color tokens.

### 6.3 Responsiveness & Cross-Browser Compatibility
- Seamless layout scaling across viewports: Mobile (320px–480px), Tablet (768px–1024px), Desktop (1280px+).
- Zero horizontal scrollbars (`overflow-x: hidden` constraint).
- Tested on modern versions of Chrome, Safari (macOS & iOS), Firefox, and Edge.

### 6.4 SEO & Social Metadata
- Clean semantic `<title>` and `<meta name="description">`.
- Complete Open Graph (`og:title`, `og:description`, `og:image`, `og:url`) and Twitter Card tags.
- Custom SVG/PNG favicon and manifest configuration.

---

## 7. Scope Boundaries (MVP vs. Future Backlog)

### In Scope for MVP
- Single-page responsive portfolio website.
- Static data-driven content structure (`src/data/`).
- 2 concept project showcases (Bali Villa, SaaS Dashboard).
- 3 core service presentations.
- Founder introduction & vetted technology stack.
- Working placeholder contact links (Email, WhatsApp, LinkedIn, GitHub).
- Cloudflare Pages static build setup (`npm run build`).

### Out of Scope for MVP (Deferred to Backlog)
- Custom backend or database server.
- Headless CMS integration (e.g., Sanity, Strapi).
- User authentication, login, or client portal.
- Dynamic blog/writing publishing system.
- Direct payment gateway or checkout processing.
- Multi-page dynamic routing.

---

## 8. Requirements Traceability Matrix

| Brief Requirement | PRD Section | Architectural Mapping |
| :--- | :--- | :--- |
| Personal brand first, future studio ready | Section 1.3 | Brand tokens & naming decoupled from individual vs agency |
| No fake team, clients, or awards | Section 1.3, 5.5 | Explicit founder attribution; authentic factual narrative |
| 3 Specific services | Section 4 | `src/data/services.ts` -> `<Services />` |
| Editorial design, Geist / Geist Mono | Section 5, DESIGN_SYSTEM | Tailwind font family extensions & Google Fonts |
| Warm off-white, Charcoal, Electric lime, Blue | Section 5, DESIGN_SYSTEM | Tailwind custom color palette tokens |
| 2 Concept projects (Bali Villa, SaaS Dashboard) | Section 5.3 | `src/data/projects.ts` -> `<ProjectCard />` with `isConcept: true` |
| Cloudflare Pages deployment (no Vercel) | Section 6.1 | Vite static build (`dist/`) output |
| Incremental section-by-section workflow | Section 5 | `tasks/MVP.md` staged execution |
