# AbleSpace — Marketing / Storytelling site UI kit

An editorial, scroll-driven landing page that frames AbleSpace as a guided journey rather than a feature list. Built from the design-system components and storytelling modules.

## Run
Open `index.html`. Requires `_ds_bundle.js` (auto-generated) and root `styles.css`.

## Narrative structure
1. **Nav** — sticky, blurs/borders on scroll.
2. **Hero** — large serif headline with italic emphasis, lead, dual CTA, and a composed product visual (floating goal card + saved-toast + time-saved metric).
3. **Logo strip** — trust row.
4. **01 — The problem** (`StoryModule` Challenge + Opportunity), scroll-revealed.
5. **02 — Our approach** — `Journey` visualization (discovery → research → insight → execution → impact).
6. **03 — The solution** — three `StoryModule` Solution cards.
7. **04 — Impact** — dark evergreen band with `MetricStat` grid.
8. **Quote** — `PullQuote` testimonial.
9. **05 — The platform** — six feature cards.
10. **Future vision** — `StoryModule` Future.
11. **CTA + Footer**.

## Motion
Sections use the `.as-reveal` utility (rise + fade) toggled by an IntersectionObserver in `index.html`. Respects `prefers-reduced-motion`.

## Files
- `index.html` — page composition + reveal observer
- `SectionsA.jsx` — Nav, Hero, Strip, Story, Journey, Solution
- `SectionsB.jsx` — Impact, Quote, Features, Future, CTA, Footer
- `kit.css` — kit-local layout (token-driven)

## Components used
Button, Eyebrow, Badge, Avatar, Card, ProgressBar, SectionHeader, StoryModule, Journey, MetricStat, PullQuote, Icon.
