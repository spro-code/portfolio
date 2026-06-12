The signature reusable narrative block. Each `kind` carries its own accent color, icon, and kicker — use them to structure a case-study or product story.

```jsx
<StoryModule
  kind="challenge"
  title="Data lived on paper, sticky notes, and six disconnected tools."
  body="Educators spent hours each week reconciling data sheets instead of teaching."
/>

<StoryModule
  kind="solution"
  title="One tap to collect, one place to see it all."
  points={["10+ data types", "Auto-generated graphs", "Team collaboration"]}
/>
```

Kinds: `challenge | opportunity | insight | solution | metrics | learnings | future`. Pass `points` for a checklist or `children` for custom content (e.g. a MetricStat grid inside `kind="metrics"`).
