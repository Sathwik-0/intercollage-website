# Antigravity Developer Guide (Vanguard Academy)

This file documents the core commands and design rules for building the digital headquarters of the premium junior college.

## CLI Build & Run Commands

- **Run Dev Server**: `npm run dev`
- **Build Production Bundle**: `npm run build`
- **Run Linter**: `npm run lint`
- **Preview Production Build**: `npm run preview`

---

## 🔒 THE GOLDEN RULE (STRICT ADDITIVE PROTOCOL)
**Under absolutely NO circumstances** should any previously built section be redesigned, refactored, rewritten, restructured, or replaced unless explicitly requested by the user.
- **Do NOT modify:** Hero layout, Navbar layout, Motion systems, Typography systems, Color systems, Grid systems, or existing responsive behaviors.
- **Strictly Additive:** Any new logic, components, or feature integrations must be attached *additively* without breaking the visual integrity or structure of the existing code.
- **[FROZEN] Hero Component:** The `Book Campus Visit` CTA button in the Hero section and `src/components/ui/campus-visit-modal.tsx` are perfectly functional and strictly locked.
- **[FROZEN] Academic Pathways:** The `src/components/sections/programs-bento-grid.tsx` section and its underlying `src/components/ui/program-details-modal.tsx` are completely locked.
- **[FROZEN] Premium Counseling:** The `src/components/sections/premium-counseling-experience.tsx` ecosystem and its underlying `src/components/ui/counseling-modal.tsx` are functionally complete, rigorously tested, and structurally locked. They must absolutely NEVER be modified.
- **[FROZEN] Campus Experience (Tour Site):** The `src/components/sections/campus-experience.tsx` section and the `src/components/ui/campus-visit-dialog.tsx` are 100% locked. This specific Tour Website System functionality must not be modified unless explicitly overridden.
- **[FROZEN] Footer Subscription:** The email subscription form functionality within `src/components/sections/footer.tsx` is completely locked and functionally approved. It must not be altered.
- **[FROZEN] Transformation Stories CTA:** The "Schedule Free Counseling" card functionality inside `src/components/sections/transformation-stories.tsx` is completely locked. Its integration with `counseling-modal.tsx` is approved and must not be touched.
- **[FROZEN] Navbar Navigation System:** The `src/components/ui/navbar.tsx` active state tracking logic, smooth scrolling integration, and the IDs mapped across all 7 main sections are completely locked and functionally approved. They must absolutely NEVER be modified.
- **[FROZEN] Navbar CTAs (Desktop & Mobile):** The "Book Campus Visit" buttons inside the navbar and their unmount-safe integration with `CampusVisitDialog` are 100% complete and functionally approved. They must never be altered or refactored.
- **[FROZEN] FutureMap AI Advisor:** The `FutureMapAI` floating dock system, its right-edge CSS alignment, lazy loading logic, and z-index overlap fixes are completely locked and functionally approved. They must absolutely NEVER be modified or redesigned.
- **[FROZEN] Routing & Core App Structure:**
  - `src/app/layout.tsx` (Root Layout)
  - `src/app/page.tsx` (Main Page composition)
  - `src/app/globals.css` (Tailwind & custom glassmorphism styling)
  - `src/app/favicon.ico`
- **[FROZEN] AI Orchestrator & Voice/Chat Components:**
  - `src/components/FutureMapAI.tsx` (Core Groq/TTS Integration)
  - `src/components/FutureMapAILazy.tsx` (Lazy loader)
  - `src/components/VoiceAssistant.tsx` (ElevenLabs Voice Widget integration)
  - `src/components/ui/ai-input.tsx` (MorphPanel sliding input card)
  - `src/components/ui/voice-input.tsx` (Voice capture HUD visualizer)
- **[FROZEN] Backend API Routes:**
  - `src/app/api/chat/route.ts` (Groq API Endpoint)
  - `src/app/api/elevenlabs/signed-url/route.ts` (ElevenLabs Signed URL Auth)
  - `src/app/api/tts/route.ts` (ElevenLabs TTS Generation Proxy)
- **[FROZEN] Interactive Page Sections:**
  - `src/components/sections/hero.tsx` (Obsidian glass hero section)
  - `src/components/sections/authority-wall.tsx` (Logos & stats)
  - `src/components/sections/performance-command-center.tsx` (Interactive bento charts & academic command deck)
  - `src/components/sections/faculty-excellence.tsx` (Premium faculty cards)
  - `src/components/sections/futuremap.tsx` (Bespoke AI roadmap interactive grid)
  - `src/components/sections/learning-journey.tsx` (Timeline slider)
  - `src/components/sections/parent-confidence-center.tsx` (FAQ accordions & trust metrics)
  - `src/components/sections/proof-center.tsx` (Accreditations grid)
  - `src/components/sections/urgency-layer.tsx` (Seats availability bar)
- **[FROZEN] Shared Primitives & Layout Wrappers:**
  - `src/components/ui/button.tsx`
  - `src/components/ui/card.tsx`
  - `src/components/ui/input.tsx`
  - `src/components/ui/textarea.tsx`
  - `src/components/ui/label.tsx`
  - `src/components/ui/dialog.tsx`
- **[FROZEN] Bespoke Motion & UI Transitions:**
  - `src/components/ui/colorful-bento-grid.tsx`
  - `src/components/ui/colorful-bento-demo.tsx`
  - `src/components/ui/data-card-display.tsx`
  - `src/components/ui/demo.tsx`
  - `src/components/ui/ink-reveal.tsx`
  - `src/components/ui/liquid-glass.tsx`
  - `src/components/ui/marquee.tsx`
  - `src/components/ui/ruixen-moon-chat.tsx`
  - `src/components/ui/team-showcase.tsx`
  - `src/components/ui/testimonial.tsx`
  - `src/components/ui/testimonial-1.tsx`
  - `src/components/ui/testimonial-demo.tsx`
  - `src/components/ui/timeline-animation.tsx`
  - `src/components/ui/timeline-rail.tsx`
  - `src/components/ui/vertical-cut-reveal.tsx`
- **[FROZEN] Libraries & Project Configs:**
  - `src/data/programData.ts` (Static courses list)
  - `src/lib/utils.ts` (cn helper)
  - `design-system/vanguard-academy/MASTER.md` (Design specifications)
  - `package.json`
  - `tsconfig.json`
  - `next.config.ts`
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
