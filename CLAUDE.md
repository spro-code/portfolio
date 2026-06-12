# Ideations

## What's in here
- `design-system/` — the **AbleSpace Design System** (reference + runnable kits). Source of truth for all UI.
- `portfolio/` — **Sancharini Basak's portfolio site** (Next.js 14 + TS + Tailwind + Framer Motion),
  built on the design system. Run with `cd portfolio && npm run dev`. See `portfolio/README.md`.

This project is built on the **AbleSpace Design System** (loaded in `design-system/`).
AbleSpace is an IEP goal-tracking and caseload-management platform for special-education
teachers, SLPs, therapists, paraprofessionals, and district admins.

## Design reference — use this for everything

**Any time you build a UI in this project, take design reference from `design-system/`.**
Do not invent a new visual language. Read these first:

- `design-system/readme.md` — the full design guide: content voice, color, type, spacing,
  motion, iconography, and the file/component manifest. **Read it before designing anything.**
- `design-system/styles.css` — the single CSS entry point. Link this and you get every token.
- `design-system/tokens/` — `colors.css`, `typography.css`, `spacing.css`, `elevation.css`,
  `fonts.css`, `base.css`. Reference tokens (CSS custom properties); never hardcode hex/px that
  a token already covers.
- `design-system/components/` — reusable primitives (Button, Input, Card, Badge, Tag, Avatar,
  StoryModule, MetricStat, Journey, PullQuote, …). Each has `.jsx` + `.d.ts` + `.prompt.md`.
- `design-system/ui_kits/` — full-screen recreations: `web_app/` (caseload dashboard) and
  `marketing/` (editorial landing). Compose from these patterns; don't re-implement primitives.

## Design language at a glance

- **Color:** warm bone paper (`--surface-page` `#FBF8F2`), warm near-black ink
  (`--text-strong` `#181611`). Brand is **evergreen** (`--accent` `#154836`). **Spring green**
  (`#21B97B`) is the live/interactive signal (focus, success, active). **Clay** (`#CC7C4F`) is
  human warmth. Cards are white to lift off paper. Avoid cool blue/violet generic-SaaS palettes.
- **Type:** **Newsreader** serif for large display/narrative (italics render evergreen);
  **Hanken Grotesk** for UI/body; **JetBrains Mono** for UPPERCASE letterspaced eyebrows and
  tabular data figures. Sentence case everywhere.
- **Shape:** controls 10px radius, cards 16px, large modules 22px, pills for chips. Soft warm
  ink-based shadows, never hard drops. 3px spring-green focus ring.
- **Motion:** confident, unhurried. Content rises 24px + fades on reveal (`.as-reveal`),
  gated on `prefers-reduced-motion`. Hover = color shift + 2px lift. No bounces, no infinite loops.
- **Voice:** warm, direct, expert — practitioners to practitioners. "You" for the reader.
  Tie every number to meaning ("87% of goals on track"). No emoji.

## Using the components in HTML

```html
<link rel="stylesheet" href="design-system/styles.css">
<script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js"></script>
<script src="design-system/_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, StoryModule, MetricStat } = window.AbleSpaceDesignSystem_737c4f;
</script>
```

Icons are **Lucide** (line, 1.75–2px stroke, `currentColor`) via the `Icon` component or the CDN.
Never hand-draw SVG icons or use emoji.

## Running the designs

The UI kits fetch their `.jsx` over HTTP, so serve the folder rather than opening files directly:

```bash
cd /Users/odile/Desktop/Ideations
python3 -m http.server 8000
# then open http://localhost:8000/  (project home links to the gallery + both kits)
```

## Caveats (from the design handoff)

Fonts (Newsreader / Hanken Grotesk / JetBrains Mono) are CDN substitutes, the logo mark is a
placeholder, and Lucide is a substitute icon set — confirm or replace with real brand binaries
before production. Identity was authored from public ablespace.io context, not a real codebase.
See `design-system/HANDOFF.md` and `design-system/chats/` for provenance.
