# Design System Master File - Vanguard Academy

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Vanguard Academy (Digital Headquarters for JEE/NEET/EAMCET Coaching)
**Style Tone:** 70% Premium SaaS, 20% Educational Authority, 10% Modern Innovation
**Inspirations:** Vercel, Linear, Stripe, Apple, Neura

---

## Global Rules

### Color Palette (Obsidian & Electric Accents)

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary Background | `#030303` | `--background` |
| Card Background | `#08080a` | `--card` |
| Text Primary | `#f8fafc` | `--foreground` |
| Text Secondary | `#94a3b8` | `--muted-foreground` |
| Accent Indigo (JEE) | `#6366f1` | `--color-accent-primary` |
| Accent Emerald (NEET) | `#10b981` | `--color-accent-secondary` |
| Accent Magenta (EAMCET)| `#ec4899` | `--color-accent-tertiary` |
| Glass Borders | `rgba(255, 255, 255, 0.06)` | `--border` |

**Color Strategy:** Obsidian deep backdrop. High-contrast neon highlights for separate exam streams. Glass transparency overlays.

### Typography

- **Heading Font:** Plus Jakarta Sans
- **Body Font:** Plus Jakarta Sans
- **Mood:** Elite, prestigious, ambitious, highly professional, result-driven
- **Google Fonts:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
```

---

## Reusable Styling Specs

### Buttons (Premium Interactive States)

1. **Primary Button:**
   - Obsidian borders with glowing backdrop or vibrant indigo gradient (`bg-gradient-to-r from-indigo-500 to-indigo-600 hover:brightness-110`).
   - Slight active press transform (`active:scale-[0.98]`).
2. **Glass Button:**
   - Translucent background (`bg-white/[0.03] hover:bg-white/[0.08]`), thin border, backdrop blur.
3. **Neon/Accent Button:**
   - Translucent neon border with shadow glow, smooth color transition.

### Cards (Glass Spotlight Design)

- Every card uses a glass layout: `bg-[#08080a]/60 backdrop-blur-xl border border-white/[0.06]`.
- **Spotlight effect:** Hovering over cards triggers a dynamic radial gradient spotlight that follows the cursor coordinate, revealing subtle color glows.

### Spacing & Layout Spacing

- Sections should have high breathing room: padding `py-20 md:py-28`.
- Consistent max-width: `max-w-7xl mx-auto px-6`.
- Floating Navbar is inset: `top-4 left-4 right-4` offset rather than flush `top-0`.

---

## Anti-Patterns (Forbidden Decisions)

- ❌ **Traditional School Designs** — Do not build generic layouts, plain blue/red boxes, or standard badges.
- ❌ **Emojis as Icons** — Always use custom high-fidelity SVG or Lucide Icons (e.g. `CheckCircle2`, `TrendingUp`, `Sparkles`).
- ❌ **Layout-Shifting Hovers** — Interactive scaling must use spring physics with precise transforms without displacing neighboring grid elements.
- ❌ **Low Contrast** — Light gray text on dark gray cards is forbidden. Text must be slate-50 (`#f8fafc`) for headers, slate-400 (`#94a3b8`) for descriptions.
- ❌ **Default shadcn styling** — Components must be customized with custom borders, spring motions, and glassy overlays.

---

## Pre-Delivery Checklist

- [ ] All icons belong to Lucide React and are sized consistently.
- [ ] No emojis are used as UI icons.
- [ ] Every clickable card or action button has `cursor-pointer`.
- [ ] Hover transformations use Framer Motion physics instead of instant stylesheet switches.
- [ ] Fixed navbars do not block top content (appropriate relative margins applied).
- [ ] The app is responsive at Mobile (`375px`), Tablet (`768px`), and Desktop (`1024px+`).
- [ ] No horizontal scrolling layout shifts occur.
