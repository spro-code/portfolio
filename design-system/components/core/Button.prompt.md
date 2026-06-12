Primary action control — use for the main action in any view; reach for `secondary`/`ghost` for lesser actions.

```jsx
<Button variant="primary" icon="plus">New goal</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="ghost" size="sm" iconAfter="arrow-right">See report</Button>
```

Variants: `primary` (evergreen), `secondary` (outlined paper), `ghost`, `outline`, `danger`, `on-dark` (spring green for dark sections). Sizes `sm | md | lg | xl`. Pass `icon` / `iconAfter` as Lucide names; `block` for full width.
