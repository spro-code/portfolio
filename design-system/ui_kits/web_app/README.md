# AbleSpace — Web App UI kit

High-fidelity recreation of the AbleSpace caseload-management web app for special-education professionals. Built entirely from the design-system components.

## Run
Open `index.html`. Requires `_ds_bundle.js` (auto-generated) and the root `styles.css`.

## Screens & flow
- **Dashboard** — greeting, key metrics (goals on track, service time, data points), today's schedule, and goals-to-review. Click a student in "Goals to review" to open their record.
- **Caseload** — filterable student table (status chips, sort, progress bars). Click any row → Student detail.
- **Student detail** — header with IEP-review status, tabbed record (Goals / Data / Notes / Accommodations / Reports), per-goal cards with an 8-session progress chart, baseline/target meta, and a "Data" action.
- **Collect data drawer** — slides in from the right. Tally counter, trial-by-trial +/− entry with live accuracy %, session date, AI-assisted note, Medicaid-billable toggle. Save → toast confirmation.

## Files
- `index.html` — app shell + routing + drawer/toast state
- `Sidebar.jsx`, `TopBar.jsx` — chrome
- `DashboardScreen.jsx`, `CaseloadScreen.jsx`, `StudentScreen.jsx` — main views
- `CollectDrawer.jsx` — data-collection drawer
- `kit.css` — kit-local layout (token-driven)
- `data.js` — fake caseload data (not production)

## Components used
Button, IconButton, Input, Select, Textarea, Switch, Field, Card, Badge, Tag, Avatar, Tabs, ProgressBar, Tooltip, MetricStat, Eyebrow, Icon.

> Recreation for design reference — interactions are cosmetic, data is fictional.
