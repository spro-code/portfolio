# AbleSpace Design System

> Enterprise product clarity with the storytelling sophistication of a modern product studio — for the people who do the most human work in education.

AbleSpace is an IEP goal-tracking and caseload-management platform purpose-built for special-education teachers, SLPs, therapists, paraprofessionals, and district administrators. The product digitizes daily SPED workflows: one-tap **data collection**, **progress monitoring**, **scheduling & service time**, **Medicaid billing**, **assessments**, **team collaboration**, and **AI-assisted** goals/strategies/notes — across web, iOS, and Android.

This design system gives design agents everything needed to produce well-branded AbleSpace interfaces and narrative assets: foundations (color, type, spacing, motion), reusable components, a set of **storytelling modules**, and full-screen UI-kit recreations of the product and marketing site.

---

## Design principles
1. **A guided journey, not a dashboard.** Every surface should feel like uncovering a story — problem → insight → decision → impact. Use large type, generous whitespace, and section reveals.
2. **Calm, expert, human.** We speak to educators as peers. Warm neutrals, confident evergreen, restrained motion. Never corporate, never cutesy.
3. **Data with meaning.** Numbers earn their place. A metric always pairs with what it means for a student.
4. **Systems thinking.** Components compose; tokens drive everything; the same vocabulary spans product and marketing.

---

## Sources & provenance
No codebase, Figma, or brand assets were provided. This system was authored from the public product context at **ablespace.io** (homepage, /schools-and-districts, /pricing, /enterprise, blog, and the iOS/Android store listings) combined with the brief's aspirational direction (editorial / product-studio storytelling). Treat the visual identity below as a **proposed, aspirational** system — see *Caveats* at the bottom.

- Product: https://www.ablespace.io/
- Districts: https://www.ablespace.io/schools-and-districts/
- Android: https://play.google.com/store/apps/details?id=io.ablespace.androidapp

---

## CONTENT FUNDAMENTALS — how AbleSpace writes

**Voice:** warm, direct, expert. We are practitioners talking to practitioners (the team includes SLPs and SPED teachers). Confident but never boastful; plain but never dumbed-down.

**Person & address:** Speak to the reader as **"you"** ("You enter data with a click"). Use **"we"** for the product/company sparingly. Refer to the people we serve as **educators, teachers, SLPs, therapists, paraprofessionals, admins** — not "users."

**Casing:** Sentence case for everything — headlines, buttons, nav, labels. Reserve Title Case only for proper product-feature names when listed (e.g. "IEP Goal Tracking, Reporting, Service Time Tracking"). Eyebrows/labels are UPPERCASE mono, letterspaced.

**Tone moves:**
- Lead with the human stakes, then the mechanism: *"You taught the lesson. We'll handle the paperwork."*
- Concrete > abstract: *"Collect data on a goal with one tap. 10+ data types."*
- Quietly confident proof: *"15 years and 6 data systems later, finally the perfect solution."*

**Numbers & claims:** Always tie a number to meaning ("87% of goals on track"). Use tabular figures. Spell out the unit in plain language.

**Do** (real-voice examples):
- "Collect data on a goal with one tap."
- "Beautiful reports, automatically generated for your next IEP meeting."
- "See exactly where each student stands."

**Avoid:**
- "Leverage our solution to optimize outcomes."
- "Best-in-class, end-to-end synergy."
- "Users can utilize the platform's functionality."

**Emoji:** none in product or marketing. Iconography carries visual punctuation instead.

---

## VISUAL FOUNDATIONS

### Color
Warm, intelligent, growth-oriented — deliberately *not* the cool blue/violet of generic SaaS.
- **Stone** (warm neutral ramp) is the canvas: a warm bone **paper** (`--surface-page` `#FBF8F2`) and a warm near-black **ink** (`--text-strong` `#181611`). Everything sits on paper, not pure white; cards are white to lift off it.
- **Evergreen** is the brand — deep, confident, growth. `--accent` is `#154836` (evergreen-700). Used for primary actions, brand surfaces, links, and full-bleed dark narrative sections (evergreen-900).
- **Spring** (`#21B97B`) is the *live/interactive* signal — focus glows, active nav, success, the "saved" moment, the brightest node in the logo. Used as a small, energetic accent, never as a fill for large areas.
- **Clay** (`#CC7C4F`) is human warmth — highlights, "new," editorial accents.
- **Status:** success (spring-600), warning (amber `#C98A21`), danger (rust `#B14730`), info (slate `#3E647D`). Each has a soft tinted background companion.
- **Data-viz:** a categorical 6-set led by evergreen + clay + slate (warm, legible on paper).
- **Vibe of imagery:** warm, natural light, real classrooms and people — never cold stock. Pair photography with paper backgrounds. (Imagery is a placeholder concern here — see Caveats.)

### Typography
A three-voice system: editorial serif for narrative, grotesque for product, mono for labels/data.
- **Display — Newsreader** (serif). Used large and tight for hero/section titles; *italics* carry emphasis (`em` inside titles renders evergreen italic). This is the "magazine" voice.
- **UI / body — Hanken Grotesk**. The product-OS workhorse — titles, body, controls. Clean, humanist, a little character.
- **Mono — JetBrains Mono**. Eyebrows (UPPERCASE, `0.16em` tracking), data figures (tabular), code, meta.
- Fluid display scale via `clamp()` (hero 52→104px); fixed UI scale (body 16/1.62 for long-form reading). Minimum body 14px in UI, 16px in prose.

### Spacing & layout
- 4px base grid; generous section rhythm (`--section-y` clamps 64→144px) for editorial breathing room.
- Content widths: prose 44rem, content 72rem, wide 84rem. Fluid `--gutter`.
- Layout leans on CSS grid/flex with `gap`. Long-form measure ~68ch.

### Radii & cards
- Restrained, editorial radii: controls 10px (`--r-md`), cards 16px (`--r-lg`), large modules 22px (`--r-xl`), pills for chips/tags.
- **Cards:** white surface, 1px faint warm border, soft `--shadow-sm`. Interactive cards lift (`translateY(-2px)` + `--shadow-lg`) on hover. A "sunk" variant recesses into paper. Storytelling modules add a 4px colored left rail keyed to their kind.

### Elevation & shadows
Warm ink-based, soft, layered (xs → xl). Shadows imply gentle height, never hard drop. Overlays/drawers use `--shadow-xl`. Focus uses a 3px spring-green ring (`--glow-focus`); live elements get a soft spring glow.

### Motion
Confident and unhurried. Primary easing `--ease-out` `cubic-bezier(0.22,1,0.36,1)`; dramatic reveals use `--ease-out-expo`; a gentle `--ease-spring` for toggles/checks. Durations 90–800ms.
- **Reveals:** content rises 24px + fades over `--dur-reveal` (800ms) as it enters the viewport (`.as-reveal[data-revealed]`), gated on `prefers-reduced-motion`.
- **Hover:** color shift + subtle lift. **Press:** slight scale-down (0.992) + darker shade. No bounces on content; no infinite decorative loops.

### Borders, transparency & blur
Hairlines are warm ink at low alpha (`--border-faint/soft/strong`). The sticky nav uses a translucent paper background + `backdrop-filter: blur` that gains a hairline border on scroll. Scrims are warm-black at 55% with a light blur.

### Backgrounds
Mostly flat warm paper. One dark motif: evergreen-900 sections for impact/metrics (inverts text to bone). No gradients-as-decoration, no noise textures by default. Whitespace and type do the work.

---

## ICONOGRAPHY
- **System: [Lucide](https://lucide.dev)** — loaded from CDN (`unpkg.com/lucide@0.469.0`). Line style, **1.75–2px stroke**, rounded caps & joins, `currentColor`. Never filled, never multi-color.
- Rendered in-app via the `Icon` component (`<Icon name="target" />`), which wraps Lucide. The host page must include the Lucide UMD script before `_ds_bundle.js`.
- Common names in use: `target` (goals), `bar-chart-3` (reports), `calendar-clock` (schedule), `clipboard-check` (data collection), `users-round` (team), `sparkles` (AI), `trending-up` (progress), `shield-check` (security), `graduation-cap` (student), `compass`/`lightbulb`/`telescope` (storytelling kinds).
- **No emoji.** No unicode-glyph icons. Curly quotes (" ") are used typographically in pull quotes.
- **Logo:** `assets/logo-mark.svg` (on paper) and `assets/logo-mark-light.svg` (on evergreen) — a rounded-square mark with an ascending "journey" path and a spring-green milestone node. The wordmark is set in Hanken Grotesk 700 ("Able" ink + "Space" evergreen). ⚠️ Placeholder — see Caveats.

> **Substitution flag:** Fonts (Newsreader, Hanken Grotesk, JetBrains Mono) are loaded from the Fontsource CDN as stand-ins because no brand binaries were supplied. The logo is a placeholder mark. Lucide is a substitute icon set. All three should be confirmed or replaced.

---

## INDEX / manifest

**Root**
- `styles.css` — global entry point (import-only). Consumers link this.
- `components.css` — class-based component styles (hover/focus/active), imported by `styles.css`.
- `readme.md` — this guide. · `SKILL.md` — Agent-Skill wrapper.

**`tokens/`** (each `@import`ed by `styles.css`)
- `fonts.css` (@font-face) · `colors.css` · `typography.css` · `spacing.css` · `elevation.css` (shadows + motion) · `base.css` (reset, helpers, `.as-reveal`).

**`assets/`**
- `logo-mark.svg`, `logo-mark-light.svg`.

**`guidelines/`** — foundation specimen cards (Design System tab)
- Colors: evergreen, accents, stone, semantic, status. Type: display, ui, eyebrow, pairing. Spacing: scale, radii, elevation, motion. Brand: logo, voice, iconography.

**`components/`** — namespace `window.AbleSpaceDesignSystem_737c4f`
- `core/` — Button, IconButton, Badge, Tag, Eyebrow, Avatar / AvatarGroup, Icon
- `forms/` — Input, Textarea, Select, Checkbox, Radio, Switch, Field
- `surfaces/` — Card, Tabs, ProgressBar, Tooltip
- `storytelling/` — SectionHeader, StoryModule, MetricStat, Journey, PullQuote
- Each has `.jsx` + `.d.ts` + `.prompt.md`; each group has a `*.card.html` thumbnail.

**`ui_kits/`**
- `web_app/` — caseload dashboard, caseload table, student record, one-tap data-collection drawer. (`index.html` + screen JSX + `kit.css` + `data.js`)
- `marketing/` — editorial scroll-driven landing page. (`index.html` + `SectionsA/B.jsx` + `kit.css`)

**Storytelling modules** (the special sauce) — `StoryModule` kinds map to the brief's content blocks: `challenge`, `opportunity`, `insight`, `solution`, `metrics`, `learnings`, `future`. Compose with `SectionHeader`, `Journey`, `MetricStat`, and `PullQuote` to narrate problem discovery → research → insight → decision → prioritization → execution → impact.

---

## Using the system (consumers)
```html
<link rel="stylesheet" href="styles.css">
<script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js"></script>
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, StoryModule, MetricStat } = window.AbleSpaceDesignSystem_737c4f;
</script>
```
For static artifacts, copy assets out and write standalone HTML. For production, read the tokens/components as the source of truth.

---

## Caveats
- **No source files were provided.** Identity is authored from public context + the brief. The current ablespace.io look-and-feel was not reverse-engineered from code.
- **Fonts are CDN substitutes** (Newsreader / Hanken Grotesk / JetBrains Mono). Replace with licensed/self-hosted brand binaries.
- **Logo is a placeholder mark.** Swap in the real AbleSpace logo (and add favicon/app-icon variants).
- **Imagery** is represented with composed UI, not photography. Provide a real photo library to wire in.
- Icon set (Lucide) is a sensible substitute, not a confirmed brand choice.
