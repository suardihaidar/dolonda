# Design System — Dolonda

**Brand:** Dolonda  
**Aesthetic:** Creative Editorial, Minimalist & Engineering-Led  
**Status:** Living Design System  
**Version:** 1.0.0  

---

## 1. Visual Direction & Design Philosophy

Dolonda embraces a **creative editorial visual direction** — a sophisticated balance between structural engineering precision and contemporary design craft.

### Core Design Tenets
1. **Editorial Restraint:** We favor strong typographic hierarchy, asymmetrical compositions, and generous whitespace over decorative fluff.
2. **Anti-Template:** Explicitly avoid generic developer portfolio tropes — no heavy neon gradients, no excessive frosted glassmorphism, no spinning 3D canvas objects, and no gratuitous animations that delay content consumption.
3. **Founder Authenticity:** The visual language communicates clarity, direct senior-level competence, and approachable technical mastery.
4. **Purposeful Motion:** Micro-interactions exist solely to provide feedback and delight, never to distract or hinder performance.

---

## 2. Color Palette & Semantic Tokens

The color palette is deliberately compact, centered around high-contrast editorial neutrals accented by energetic modern tones.

### 2.1 Color Swatches

| Name | Hex Code | Tailwind Token | Semantic Usage | Contrast Ratio on Canvas |
| :--- | :--- | :--- | :--- | :--- |
| **Warm Off-White** | `#F5F3EE` | `bg-canvas` / `canvas` | Primary page canvas, light card background | N/A (Base) |
| **Charcoal** | `#202020` | `text-ink` / `bg-ink` | Primary typography, dark buttons, high-contrast containers | 12.8:1 (AAA) |
| **Electric Lime** | `#C7F36B` | `accent-lime` | Primary highlight, CTA hover accents, active indicators | 1.2:1 (Use with Charcoal text) |
| **Indigo** | `#7067E8` | `accent-indigo` | Secondary interaction, technical links, subtle badges | 3.8:1 on Canvas / 4.6:1 on Charcoal |
| **Muted Ink** | `#555555` | `text-ink-muted` | Secondary body text, subheadings, metadata | 5.8:1 (AA) |
| **Border Neutral** | `#E2DFD8` | `border-canvas-subtle` | Subtle hairline borders, divider rules, card outlines | N/A |

### 2.2 Color Usage Rules
- **Canvas Rule:** The primary background of the site is Warm Off-White (`#F5F3EE`), providing an organic, editorial paper feel compared to harsh pure white (`#FFFFFF`).
- **Typography Rule:** Primary headings and body copy use Charcoal (`#202020`). Secondary supporting copy uses Muted Ink (`#555555`).
- **Electric Lime Rule:** Never set white or light text on Electric Lime. Always pair Electric Lime backgrounds (`#C7F36B`) with Charcoal text (`#202020`) for optimal legibility.
- **Dark Surface Rule:** Dark cards or footer regions use Charcoal (`#202020`) with Warm Off-White (`#F5F3EE`) typography.

---

## 3. Typography System

The typography pairs a bold, geometric display sans with a hyper-legible body face and a crisp monospace for technical metadata.

### 3.1 Font Families

| Role | Font Family | Google Fonts Fallback | Usage |
| :--- | :--- | :--- | :--- |
| **Headings / Display** | **Space Grotesk** | `sans-serif` | H1, H2, H3, section titles, hero statement, brand wordmark |
| **Body / UI** | **Inter** | `system-ui, sans-serif` | Body copy, descriptions, nav links, button text |
| **Technical / Accent** | **JetBrains Mono** | `ui-monospace, monospace` | Service numbers (`01`), code snippets, technology tags, metadata |

### 3.2 Typographic Hierarchy Scale

| Token | Class Names | Size / Line Height | Tracking | Weight | Used In |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display H1** | `text-4xl md:text-6xl lg:text-7xl` | 3.5rem – 4.5rem / 1.05 | `-0.03em` | Bold (700) | Hero primary statement |
| **Section H2** | `text-3xl md:text-4xl lg:text-5xl` | 2.25rem – 3rem / 1.15 | `-0.02em` | SemiBold (600) | Section headlines ("Selected Work") |
| **Subhead H3** | `text-xl md:text-2xl` | 1.25rem – 1.5rem / 1.3 | `-0.01em` | Medium (500) | Project titles, Service names |
| **Body Large** | `text-lg md:text-xl` | 1.125rem – 1.25rem / 1.6 | `normal` | Regular (400) | Hero bio paragraph, section intros |
| **Body Base** | `text-base` | 1.0rem / 1.65 | `normal` | Regular (400) | Standard descriptive text |
| **Body Small** | `text-sm` | 0.875rem / 1.5 | `normal` | Regular (400) | Footer notes, secondary details |
| **Mono Label** | `text-xs md:text-sm font-mono` | 0.75rem – 0.875rem / 1.4 | `0.05em` | Medium (500) | Section counters (`01 / 03`), badges |

---

## 4. Spacing, Layout & Grid Architecture

### 4.1 Spacing Scale
Built on an 8-point baseline grid:
- `space-1` = 4px
- `space-2` = 8px
- `space-3` = 12px
- `space-4` = 16px
- `space-6` = 24px
- `space-8` = 32px
- `space-12` = 48px
- `space-16` = 64px
- `space-24` = 96px
- `space-32` = 128px

### 4.2 Layout Grid & Containers
- **Max Content Width:** `max-w-6xl` (1152px) or `max-w-7xl` (1280px) with central alignment (`mx-auto`).
- **Horizontal Gutters:** `px-6 sm:px-8 md:px-12` (guarantees breathing room on all screen widths).
- **Section Spacing:** `py-16 md:py-28 lg:py-36` (generous vertical rhythm).
- **Asymmetric Offsets:** Staggered project cards or offset columns on desktop to reinforce the editorial feel.

---

## 5. UI Component Specifications

### 5.1 Buttons

#### Primary Button (`Button variant="primary"`)
- Background: Charcoal (`#202020`)
- Text: Warm Off-White (`#F5F3EE`), medium weight
- Hover State: Background transitions to Charcoal with subtle upward shift (`-translate-y-0.5`) and Electric Lime accent border/shadow or Electric Lime text pop.
- Border Radius: Subtle rounding (`rounded-full` or `rounded-lg`).

#### Secondary Button (`Button variant="secondary"`)
- Background: Transparent
- Border: 1px solid Charcoal (`border-[#202020]`)
- Text: Charcoal (`#202020`)
- Hover State: Inverted to solid Charcoal background with Off-White text.

### 5.2 Project Card (`ProjectCard`)
- Container: Rounded preview container (`rounded-2xl` or `rounded-3xl`), border `border-[#E2DFD8]`, background `#FAF9F5`.
- Header / Tag: Concept tag badge (`Concept Project`) styled with `JetBrains Mono` and subtle lime or indigo dot.
- Preview Area: Polished image showcase with rounded corners (`rounded-xl`), overflow hidden, subtle zoom on hover (`scale-102 transition duration-300`).
- Content Area: Project title (Space Grotesk), short descriptive narrative, list of tech pills (`React`, `TypeScript`, `Tailwind CSS`).
- CTAs: External link indicators or preview buttons.

### 5.3 Service Card (`ServiceCard`)
- Editorial layout with monospace counter (`01`, `02`, `03`) in Electric Lime or Indigo.
- Title: Bold Space Grotesk.
- Feature Checklist: Clean unordered list with subtle custom bullet or dash indicators.
- Hover Effect: Subtle border color transition to Charcoal or Indigo.

### 5.4 Technology Badges (`TechBadge`)
- Minimalist pill with `JetBrains Mono` font.
- Border: `border border-[#E2DFD8]` with light Warm Off-White background.
- Hover: Soft border darkening and crisp text feedback.

---

## 6. Motion & Micro-Interactions

### Guidelines
1. **Transition Timing:** `transition-all duration-200 ease-out` for interactive states (links, buttons, cards).
2. **Transform Restraint:** Limit interactive translations to `translate-y-[-2px]`. No jarring transforms.
3. **Accessibility Safeguard:**
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, ::before, ::after {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: 0.01ms !important;
       scroll-behavior: auto !important;
     }
   }
   ```
