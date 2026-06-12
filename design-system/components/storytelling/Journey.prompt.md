Vertical journey/timeline for narrative flow — discovery → research → insight → decision → execution → impact.

```jsx
<Journey steps={[
  {title:"Problem discovery", desc:"Shadowed 40 SPED teachers", icon:"search", state:"done"},
  {title:"User research", desc:"120 interviews", icon:"users-round", state:"done"},
  {title:"Execution", desc:"Shipping one-tap data collection", icon:"rocket", state:"active"},
  {title:"Impact", desc:"Measuring time saved", icon:"trending-up", state:"upcoming"},
]} />
```

`state`: `done | active | upcoming`. Omit `icon` to show step numbers.
