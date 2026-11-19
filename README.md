# Dolonda — Founder-Led Creative Development

> *"Building thoughtful digital experiences."*

**Dolonda** (`dolonda.com`) is the personal brand and portfolio website of **Suardi (Ardi)**, an independent creative developer with over seven years of professional software engineering experience.

Dolonda bridges disciplined frontend engineering with creative problem-solving, turning complex ideas into functional, responsive, and user-friendly digital products. Initially established as an independent developer practice, the brand and technical foundation are structured to evolve naturally into a boutique digital studio.

---

## 🚀 Project Overview

- **Founder:** Suardi (Ardi)
- **Current Positioning:** Independent Creative Developer
- **Future Direction:** Small Creative Development Studio
- **Core Offerings:**
  1. *Website Development* — Responsive business sites, landing pages, conversion experiences.
  2. *Frontend Development* — React applications, TypeScript architectures, Figma-to-code implementation.
  3. *UI Improvements* — Layout diagnostics, CSS/Tailwind refinements, frontend bug fixes, accessibility enhancements.
- **Showcase Projects (MVP):**
  - **Bali Villa Website** (Hospitality Concept)
  - **SaaS Dashboard** (Web Application Interface Concept)

---

## 🛠️ Technology Stack

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | [React](https://react.dev/) | Component-driven UI architecture |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Strict type checking & interfaces |
| **Build Tool** | [Vite](https://vitejs.dev/) | Instant HMR and optimized static rollup bundling |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | Custom editorial design system tokens |
| **Typography** | Space Grotesk, Inter, JetBrains Mono | Editorial typography hierarchy |
| **Deployment** | [Cloudflare Pages](https://pages.cloudflare.com/) | Global edge CDN static hosting |

---

## 📚 Project Documentation

The project documentation serves as the single source of truth for design, engineering, and roadmap decisions:

- **[AGENTS.md](file:///Users/suard/Project/dolonda/AGENTS.md):** Rules of engagement, engineering persona, and code standards for AI collaborators and developers.
- **[docs/PRD.md](file:///Users/suard/Project/dolonda/docs/PRD.md):** Product Requirements Document detailing user personas, functional specifications, and non-functional requirements.
- **[docs/ARCHITECTURE.md](file:///Users/suard/Project/dolonda/docs/ARCHITECTURE.md):** Architectural decisions, component hierarchy, data flow, and trade-off analysis.
- **[docs/DESIGN_SYSTEM.md](file:///Users/suard/Project/dolonda/docs/DESIGN_SYSTEM.md):** Color tokens, typography scales, layout grids, button styles, and motion rules.
- **[tasks/MVP.md](file:///Users/suard/Project/dolonda/tasks/MVP.md):** Stage-by-stage development roadmap and atomic acceptance criteria.
- **[tasks/BACKLOG.md](file:///tasks/BACKLOG.md):** Post-MVP backlog and future studio expansion initiatives.
- **[docs/PROJECT_BRIEF.md](file:///Users/suard/Project/dolonda/docs/PROJECT_BRIEF.md):** Verbatim original project brief preserved as historical baseline.

---

## 📁 Repository Structure

```
dolonda/
├── public/                 # Favicons, social preview images, robots.txt
├── src/
│   ├── assets/             # WebP graphics, concept mockups, brand vectors
│   ├── components/         # Reusable presentation and layout components
│   │   ├── layout/         # Navbar, MobileMenu, Footer, Container
│   │   ├── sections/       # Hero, SelectedWork, Services, About, TechStack, Contact
│   │   └── ui/             # Button, ProjectCard, ServiceCard, TechBadge
│   ├── data/               # Strongly-typed content fixtures (projects, services, etc.)
│   ├── types/              # Domain TypeScript interfaces
│   ├── styles/             # Global styles and Tailwind configuration
│   ├── App.tsx             # Main single-page application layout
│   └── main.tsx            # DOM mount point
├── docs/                   # Product, architecture, and design specifications
├── tasks/                  # MVP execution checklists and backlog
├── AGENTS.md               # AI collaborator and code guidelines
└── README.md               # Project guide and documentation index
```

---

## 💻 Getting Started (Development Setup)

### Prerequisites
- **Node.js:** v18.0.0 or later (Tested on `v24.16.0`)
- **npm:** v9.0.0 or later (Tested on `11.13.0`)
- **Git**

### Installation & Local Run (Stage 2 onwards)

```bash
# 1. Clone repository (if applicable)
git clone https://github.com/suard/dolonda.git
cd dolonda

# 2. Install dependencies (Stage 2)
npm install

# 3. Start local development server
npm run dev

# 4. Build for production (Cloudflare Pages target)
npm run build

# 5. Preview production build locally
npm run preview
```

---

## ☁️ Deployment Pipeline (Cloudflare Pages)

Dolonda is pre-configured for static deployment on **Cloudflare Pages**:

1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select the `dolonda` repository and choose the `main` branch.
4. Configure the build settings:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**.
6. Set up your custom domain `dolonda.com` under **Custom domains**.

---

## ⚖️ Brand Principles & Integrity

1. **Direct Access:** Visitors work directly with Suardi. Do not reference fictional staff, agency hierarchies, or non-existent client counts.
2. **Transparent Concepts:** All portfolio items without verified commercial contracts are explicitly tagged as **Concept Projects**.
3. **Craft Over Trends:** Prioritize clean semantics, accessible UX, and fast load times over fragile aesthetic gimmicks.
