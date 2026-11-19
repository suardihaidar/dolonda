# Product Backlog & Future Roadmap — Dolonda

This document catalogs post-MVP enhancements, evolutionary milestones, and architectural upgrades for Dolonda as it scales from an independent creative developer portfolio into a boutique creative development studio.

---

## 1. Studio Evolution & Multi-Page Architecture

- [ ] **BACKLOG-01: Multi-Page Routing Expansion**
  - **Category:** Architecture
  - **Description:** Migrate from single-page anchor navigation to client-side routing (e.g., React Router or TanStack Router) or SSG/hybrid framework as content demands grow.
  - **Prerequisite:** Substantial content expansion warranting standalone URLs.
  - **Planned Pages:**
    - `/` (Home / Overview)
    - `/work` (Expanded project index)
    - `/work/:slug` (Individual case studies)
    - `/services` (In-depth service packages & deliverables)
    - `/about` (Founder story & studio ethos)
    - `/contact` (Dedicated inquiry page)

- [ ] **BACKLOG-02: Studio Brand & Collaborator Showcase**
  - **Category:** Brand Evolution
  - **Description:** Seamlessly transition copy from "Suardi" personal brand to "Dolonda Creative Studio" while retaining founder attribution as Creative Director / Principal Engineer. Introduce trusted specialist collaborators (designers, copywriters) without diluting engineering standards.

---

## 2. Project Deep-Dives & Interactive Demos

- [ ] **BACKLOG-03: Real Client Case Studies**
  - **Category:** Portfolio Content
  - **Description:** Replace or augment concept projects with verified client projects once initial commercial contracts conclude. Include client context, business challenges, technical architecture, and measurable outcomes.

- [ ] **BACKLOG-04: Standalone Hosted Concept Project Demos**
  - **Category:** Frontend Polish
  - **Description:** Deploy live interactive preview subdomains for the concept projects:
    - `bali-villa.dolonda.com` (Live responsive hospitality demo)
    - `saas-preview.dolonda.com` (Live interactive dashboard with mock state, filters, and charts)

- [ ] **BACKLOG-05: Case Study Modal / Drawer Views**
  - **Category:** UX Feature
  - **Description:** Allow visitors on the single-page site to click "View Project Details" to open a slide-over drawer with architectural diagrams, design decisions, and responsive previews without leaving the main page.

---

## 3. Lead Generation & Contact Infrastructure

- [ ] **BACKLOG-06: Serverless Contact Form via Cloudflare Workers**
  - **Category:** Infrastructure / API
  - **Description:** Implement a lightweight Cloudflare Worker endpoint (`POST /api/contact`) to handle form submissions without requiring users to open their desktop email client.
  - **Features:**
    - Server-side email delivery via Resend or Postmark.
    - Rate limiting and bot protection via Cloudflare Turnstile.
    - Graceful fallback to `mailto:` link if API call fails.

- [ ] **BACKLOG-07: Calendar Booking Integration**
  - **Category:** Conversion / Sales
  - **Description:** Embed or link an accessible, non-intrusive Cal.com or Calendly scheduling modal for prospective clients to book a 20-minute discovery call directly with Suardi.

---

## 4. Content Publishing & Thought Leadership

- [ ] **BACKLOG-08: Technical Writing / Engineering Journal**
  - **Category:** Marketing / SEO
  - **Description:** Add a `/writing` or `/notes` section featuring articles on modern frontend engineering, React performance, Tailwind architecture, and design-to-code craft. Drives organic search traffic and demonstrates deep senior competence.

- [ ] **BACKLOG-09: Local MDX or Headless CMS Integration**
  - **Category:** Architecture
  - **Description:** If blog or project updates become weekly, integrate a lightweight local MDX pipeline or headless CMS (e.g., Decap CMS, Sanity) to simplify publishing without code changes.

---

## 5. Visual Craft & Experience Enhancements

- [ ] **BACKLOG-10: Theme Customizer / Dark Mode Support**
  - **Category:** Visual Craft
  - **Description:** Introduce an optional dark theme token set (Inverting Charcoal canvas and Warm Off-White text) respecting system `prefers-color-scheme` with manual toggle.

- [ ] **BACKLOG-11: Privacy-Friendly Analytics**
  - **Category:** Operations
  - **Description:** Implement lightweight, GDPR-compliant analytics using **Cloudflare Web Analytics** (zero-cookie, zero-script-bloat, privacy-respecting traffic metrics).
