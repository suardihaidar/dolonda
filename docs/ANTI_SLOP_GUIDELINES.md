# Anti-UI Slop Guidelines — Dolonda Design & Architecture Standard

This document establishes the anti-slop visual and architectural guidelines for **Dolonda** (`dolonda.com`). It ensures that AI agents, design contributors, and developers reject generic, vibe-coded template clichés in favor of authentic, senior-level frontend craft.

---

## 1. The Core Mandate

When unguided, AI models converge on generic design averages: bloated card stacks, purple-indigo glow blobs, raw emojis, fake dashboard charts, and uniform checkmark columns. 

**Dolonda strictly rejects generic AI slop.** Every layout, typography decision, and interaction must stem from genuine human craftsmanship, clear engineering utility, and the founder's authentic voice.

---

## 2. Banned Visual Tropes (Zero Tolerance)

| Banned AI Trope | Why It Is Slop | Dolonda Alternative |
| :--- | :--- | :--- |
| **Pulsing Green Ping Badges** (`animate-ping`) | Overused on almost every AI portfolio; creates nervous visual distraction. | Clean monospace status rows: `Suardi · Independent Creative Developer · Indonesia (UTC+7)`. |
| **Fake Dashboard Telemetry & Random Bar Charts** | Cheesy, fictional graphs ("Vortex Pulse", random bar heights) that look synthetic. | Grounded, realistic engineering interfaces: clean API endpoint tables, real latency metrics, and authentic component hierarchy. |
| **Generic Checkmark Lists (`✓`)** | Repetitive 3-card templates with green checkmarks feel like cheap SaaS sales pages. | Editorial delivery dashes (`—`), horizontal tags, or structured typographic columns. |
| **Cards-in-Cards Nesting** | Wrapping every subsection in redundant rounded boxes with identical padding. | Clean hairline dividers (`divide-y divide-border-subtle`), generous whitespace, and typographic contrast. |
| **Blurry Radial Neon Glow Blobs** (`blur-3xl bg-*-*/10`) | Lazy attempts to create "depth" that clutter the background and kill contrast. | Crisp 1px hairline borders (`border-border-subtle`), high-contrast surfaces, and sharp typography. |
| **Raw Emojis as Icons** | Inconsistent across OS platforms; looks unprofessional and childish. | Clean, uniform SVG vector icons or monospace mathematical glyphs (`→`, `↑`, `↗`, `↳`). |

---

## 3. Editorial Visual Hierarchy

1. **Typographic Contrast Over Decorative Fluff:**
   * **Display (Geist):** Scaled aggressively (`text-4xl` to `text-7xl` / `5.25rem`), tight negative tracking (`tracking-tight`), and strong visual anchors.
   * **Body (Geist):** Generous line height (`leading-relaxed`), natural reading rhythm, and high contrast against the Warm Off-White canvas (`#FCFAF5`).
   * **Monospace Metadata (Geist Mono):** Crisp uppercase coordinates, section indexes (`01 / Work`), and technical labels.
2. **Intentional Palette Discipline:**
   * **Base:** Warm Off-White (`#FCFAF5`) for the canvas and Charcoal (`#202020`) for typography.
   * **Surgical Accents:** Electric Lime (`#C7F36B`) is reserved exclusively for focal points (wordmark dot, primary CTA hover, core badges). Never used as large wash backgrounds.
   * **Secondary Accent:** Blue (`#1D4ED8`) used for technical badges, category labels, and links on light surfaces. On dark surfaces use Blue Light (`#8FB0FF`).
3. **True Asymmetric Compositions:**
   * Avoid symmetrical 3x3 box grids everywhere. Vary column spans (7-to-5 splits), alternating preview card directions, and structural dividers.

---

## 4. Interactive & State Coverage Standards

* **Focus States:** Every interactive link and button must have a high-contrast visible focus ring (`focus-visible:ring-2 focus-visible:ring-offset-2`).
* **Motion Restraint:** Subtle, tactile translations (`-translate-y-0.5`), duration `150ms–250ms`, respecting `prefers-reduced-motion: reduce`.
* **Honest Attribution:** All non-commissioned projects are clearly badged as **Concept Work**, accompanied by the Dolonda Integrity Guarantee.
