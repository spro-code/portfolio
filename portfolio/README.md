# Sancharini Basak — Portfolio

> Building systems. Still zooming out.

An interactive documentary portfolio for a Designer → Product Manager → Builder → Future Founder.
Built on the **AbleSpace design language** (warm paper, evergreen, spring-green; Newsreader serif
display, Hanken Grotesk UI, JetBrains Mono labels), extended with a hand-drawn notebook-sketch
storytelling layer.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **TailwindCSS** (design tokens mapped to CSS variables, light/dark via `next-themes`)
- **Framer Motion** (scroll reveals, draw-on sketches, parallax, transitions)
- Mobile-first, responsive, accessible (skip link, focus rings, `prefers-reduced-motion` honored)
- SEO: per-route metadata, JSON-LD (Person + Article), `sitemap.xml`, `robots.txt`, generated OG image
- **Netlify**-deployable (`netlify.toml` + `@netlify/plugin-nextjs`)

## Run

```bash
cd portfolio
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (typechecks + prerenders all routes)
npm start        # serve the production build
```

## Architecture

```
app/
  layout.tsx              # fonts, SEO, theme provider, nav + footer shell, JSON-LD
  page.tsx                # Home — documentary opening + 5 chapters
  work/page.tsx           # Systems index
  work/[slug]/page.tsx    # Case study (10-chapter documentary template), SSG
  thinking/page.tsx       # Thinking index (editorial)
  thinking/[slug]/page.tsx# Article layout, SSG
  about/page.tsx          # Personal narrative + zoom-out ladder + sketches
  resume/page.tsx         # Interactive resume + print-to-PDF
  contact/page.tsx        # Premium contact
  opengraph-image.tsx     # Generated 1200×630 social card
  sitemap.ts · robots.ts · icon.svg · not-found.tsx
components/
  nav, footer, theme-toggle, reveal, ui (atoms), sketches (notebook SVGs),
  system-card, case-study, impact-section, copy-email, print-button,
  home/ (opening-sequence, identity-rotator, zoom-marquee)
lib/
  site.ts (brand), systems.ts (5 case studies), thinking.ts (articles),
  content.ts (chapters/principles/impact), resume.ts, accent.ts
```

## Content to replace

Real copy is in `lib/`. Placeholders to swap before launch:
- **Social URLs** in `lib/site.ts` (LinkedIn / Dribbble / Behance) and `site.url` (domain).
- Optionally provide a real **resume PDF** — the Resume page currently prints the live page to PDF.
- Imagery: the site uses hand-drawn sketches by design; add photography if desired.

## Design provenance

Tokens, color, type, and motion are ported from the AbleSpace design system in `../design-system/`.
See the root `../CLAUDE.md` for the design reference rules.
