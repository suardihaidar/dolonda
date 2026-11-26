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

The color palette is deliberately compact: warm editorial neutrals, a single brand accent (lime) for dark surfaces and signature moments, and a single legible interactive accent (blue) for anything that must be read on light surfaces.

> **Note on the accent split:** lime and blue are not interchangeable. Lime is a *light* colour — it only works as a fill, or as text on `bg-ink`. Blue is a *dark* colour — it works as text on the canvas but disappears on `bg-ink`. Neither can replace the other, which is why both exist.

### 2.1 Color Swatches

| Name | Hex Code | Tailwind Token | Semantic Usage | Contrast Ratio on Canvas |
| :--- | :--- | :--- | :--- | :--- |
| **Warm Off-White** | `#FCFAF5` | `bg-canvas` / `canvas` | Primary page canvas | N/A (Base) |
| **Pure White** | `#FFFFFF` | `bg-canvas-card` / `canvas-card` | Elevated surface (cards, mockups) — must stay **lighter** than canvas | N/A |
| **Recessed Sand** | `#F1EFE9` | `bg-canvas-subtle` / `canvas-subtle` | Recessed surface, hover fills | N/A |
| **Charcoal** | `#202020` | `text-ink` / `bg-ink` | Primary typography, dark buttons, high-contrast containers | 15.6:1 (AAA) |
| **Electric Lime** | `#C7F36B` | `lime-accent` | Brand signature + **the only accent legible on `bg-ink`** | 1.2:1 (decorative on canvas) / 12.8:1 on Charcoal |
| **Blue** | `#1D4ED8` | `blue-accent` | Interactive accent: links, labels, tags, focus rings on light surfaces | 6.4:1 (AA) |
| **Blue Light** | `#8FB0FF` | `blue-light` | Blue **on dark surfaces** (`bg-ink`) where `blue-accent` would fail | 7.6:1 on Charcoal |
| **Muted Ink** | `#52504C` | `text-ink-muted` | Secondary body text, subheadings | 7.7:1 (AAA) |
| **Subtle Ink** | `#6E6A63` | `text-ink-subtle` | Metadata, secondary labels | 5.2:1 (AA) |
| **Border Neutral** | `#E2DFD8` | `border-subtle` | Subtle hairline borders, divider rules, card outlines | N/A |

### 2.2 Color Usage Rules
- **Canvas Rule:** The primary background is Warm Off-White (`#FCFAF5`) — bright enough to read as paper, but still warmer than pure white.
- **Elevation Rule:** Surfaces must stack *lighter* than the canvas. `canvas-card` (`#FFFFFF`) sits above `canvas`, which sits above `canvas-subtle`. Never let a card go darker than the page — it will read as a recessed well, not a raised surface.
- **Typography Rule:** Primary headings and body copy use Charcoal (`#202020`). Secondary copy uses `ink-muted` (`#52504C`); metadata uses `ink-subtle` (`#6E6A63`).
- **Electric Lime Rule:** Never set white or light text on Electric Lime. Pair lime backgrounds with Charcoal text (12.8:1). Lime is **not** usable for text on the canvas (1.2:1) — it is a surface fill and a dark-surface accent only.
- **Blue Rule:** `blue-accent` is the only accent that passes AA for body text on the canvas, so it carries all interactive/link duty on light surfaces. On `bg-ink` it fails (2.4:1), so switch to `blue-light` there — never use `blue-accent` on dark.
- **Dark Surface Rule:** Dark cards or footer regions use Charcoal (`#202020`) with Warm Off-White typography, and take **lime** or **blue-light** as accents — never `blue-accent` or `ink-muted`.

---

## 3. Typography System

The typography pairs a bold, geometric display sans with a hyper-legible body face and a crisp monospace for technical metadata.

### 3.1 Font Families

| Role | Font Family | Fallback | Usage |
| :--- | :--- | :--- | :--- |
| **Headings / Display** | **Geist** | `sans-serif` | H1, H2, H3, section titles, hero statement, brand wordmark |
| **Body / UI** | **Geist** | `sans-serif` | Body copy, descriptions, nav links, button text |
| **Technical / Accent** | **Geist Mono** | `monospace` | Service numbers (`01`), code snippets, technology tags, metadata |

> **Why one family?** The display and body roles intentionally share Geist, following the structure of x.ai's typographic system (one grotesque for headings *and* body, one mono for technical text). x.ai's own display face, XVF, is proprietary and not licensable; Geist is the closest open-source equivalent. Hierarchy is therefore carried by **size, weight, and tracking** rather than by a typeface switch — which makes the `tracking-tight` / `leading-[0.95]` discipline mandatory, not optional.

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

### 4.3 Border Radius Scale

The radius system is deliberately closed — exactly the values below, ordered by element size. Do not introduce other steps (`rounded`, `rounded-lg`, `rounded-2xl`, `rounded-3xl` and friends are not part of this system).

| Token | Radius | Applied To |
| :--- | :--- | :--- |
| `rounded-full` | Pill / circle | **Every badge, chip, tag and pill** — status badges, tech tags, deliverable tags, mockup chips, plus all buttons and CTAs, icon-only buttons (gallery arrows, close), dots, progress indicators |
| `rounded-xl` | 12px | Nested panels inside a larger surface — mockup metric cards, terminal panels, table wrappers |
| `rounded-sm` | 2px | Focus-ring wrappers on plain text links only (never visible unless focused) |

**Rules:**
- **One shape for badges:** anything that reads as a badge, chip, tag or pill is `rounded-full` — no exceptions. This includes static metadata chips. A badge is a badge regardless of whether it is interactive; keeping them all pill-shaped is what makes the interface coherent, and it matches the button treatment.
- **Full-width sweep:** Every clickable control uses `rounded-full`, regardless of whether it is filled, outlined, or ghost. Never mix a sharp button with a pill button in the same interface.
- **Sharp by default for surfaces:** Section frames, project card containers, dividers, and image frames stay square (`0`). The editorial identity depends on hard edges; rounding is reserved for badges, interactive elements and nested content panels.
- **No double framing:** A mockup or preview with its own radius must sit inside a square container, and vice versa. Never nest a rounded surface directly inside an equally rounded frame — the curves misalign and leave visible gaps at the corners.
- **Containment test:** If an element clips its children (`overflow-hidden`), its radius is the outermost of the pair. Inner content is either square or one step smaller.

---

## 5. UI Component Specifications

### 5.1 Buttons

#### Primary Button (`Button variant="primary"`)
- Background: Charcoal (`#202020`)
- Text: Warm Off-White (`#FCFAF5`), medium weight
- Hover State: Background transitions to Charcoal with subtle upward shift (`-translate-y-0.5`) and Electric Lime accent border/shadow or Electric Lime text pop.
- Border Radius: Always `rounded-full` (see §4.3). Applies to every variant, including outlined and ghost buttons.

#### Secondary Button (`Button variant="secondary"`)
- Background: Transparent
- Border: 1px solid Charcoal (`border-[#202020]`)
- Text: Charcoal (`#202020`)
- Hover State: Inverted to solid Charcoal background with Off-White text.
- Border Radius: Always `rounded-full`, matching the primary button.

### 5.2 Project Card (`ProjectCard`)
- Container: Square, hairline-bordered editorial spread (`border border-border-subtle`, no radius), split 7/5 on a 12-column grid with the media side alternating via `lg:order-*`. Background `#F1EFE9` for the media column only.
- Header / Tag: Concept tag badge (`Client Work` / `Concept Study`) styled with `Geist Mono`. Rendered as a **pill** (`rounded-full`) — it is a status pill, not metadata. `commissioned` uses a solid lime fill with Charcoal text; `concept` uses a blue hairline border with blue text.
- Preview Area: Full-bleed inside the square media frame (`object-contain`, no radius), subtle zoom on hover (`scale-[1.015]`). A `ProjectPreviewMockup` fallback fills the same frame; it carries no radius of its own because the frame is square.
- Content Area: Project title (Geist), short descriptive narrative, tech tags (`React`, `TypeScript`, `Tailwind CSS`) rendered as hairline pills (`rounded-full`) with a `border-subtle` outline.
- CTAs: External link indicators or preview buttons, underlining on hover rather than rounding.

### 5.3 Service Card (`ServiceCard`)
- Editorial layout with monospace counter (`01`, `02`, `03`) in Electric Lime or Blue.
- Title: Bold Geist.
- Deliverable tags: hairline pills (`rounded-full`), `Geist Mono`, `border-subtle` outline, no fill.
- Feature Checklist: Clean unordered list with subtle custom bullet or dash indicators.
- Hover Effect: Subtle border color transition to Charcoal or Blue.

### 5.4 Technology Badges (`TechBadge`)
- Minimalist pill (`rounded-full`) with `Geist Mono` font — hairline border.
- Border: `border border-[#E2DFD8]` with light Warm Off-White background.
- Hover: Soft border darkening and crisp text feedback.

> Note: **all** badges, chips and tags are pills (`rounded-full`) — status badges (project `Client Work` / `Concept Study`), tech tags, deliverable tags, and mockup chips alike. This matches the button treatment and keeps every badge the same shape. Only structural surfaces (section frames, cards, image frames) stay square.

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
