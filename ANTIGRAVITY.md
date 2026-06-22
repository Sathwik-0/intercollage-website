# Antigravity Developer Guide (Vanguard Academy)

This file documents the core commands and design rules for building the digital headquarters of the premium junior college.

## CLI Build & Run Commands

- **Run Dev Server**: `npm run dev`
- **Build Production Bundle**: `npm run build`
- **Run Linter**: `npm run lint`
- **Preview Production Build**: `npm run preview`

---

## Coding Guidelines & Design Rules (Hallmark + UI/UX Pro Max)

### 1. Structural Variety & Anti-Slop
- Never copy-paste layouts between sections.
- Avoid SaaS-default gray schemes; use the bespoke **Obsidian & Neon Glass** palette.
- Do not draw mock browser bars (URL inputs, red-yellow-green dots) or phone frames. Wrap images in a hairline `<figure>` or let them stand alone.
- Do not use emoji icons. Always use custom SVGs or Lucide React icons.

### 2. State & Interaction Discipline
- Interactive components must have explicit styled states for **all 8 states**:
  - `default`
  - `hover`
  - `focus-visible` (using high contrast ring styling)
  - `active` (e.g., `-translate-y-px` active scaling)
  - `disabled`
  - `loading`
  - `error`
  - `success`
- Add `cursor-pointer` to all interactive components.

### 3. Spacing & Spacers
- Spacing must follow the layout guidelines:
  - Sections: high breathing room `py-20 md:py-28`.
  - Margin: `max-w-7xl mx-auto px-6`.
  - Floating items must be offset from boundaries (e.g. `top-4 left-4 right-4` for navbars).

### 4. Honest Copy & Real Metrics
- Never fabricate metrics. If a metric is unconfirmed, write it as a placeholder (`—` with a labeled gray block, "metric to confirm").
- Testimony content must contain authentic before-and-after selection data.

### 5. Typography Standards
- Headings are always `Plus Jakarta Sans` or display sans-serif in `normal` weight style.
- No italic headers (e.g., `Built to <em>think</em>`). Italicization is reserved solely for paragraph body emphasis.

### 6. Pre-Emit Self-Critique Stamp
All components and layouts must start with a critique stamp matching this style:
`/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */`
representing: Philosophy, Hierarchy, Execution, Specificity, Restraint, Variety.
