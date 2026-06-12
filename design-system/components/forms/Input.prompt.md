Form fields — text input, textarea, select, checkbox/radio, switch, and a Field wrapper for label + hint/error.

```jsx
<Field label="Student name" hint="First and last">
  <Input icon="search" placeholder="Search caseload…" />
</Field>
<Select options={[{value:"r",label:"Reading"},{value:"m",label:"Math"}]} />
<Checkbox label="Met goal today" defaultChecked />
<Radio name="data" label="Frequency" />
<Switch label="Notify team" defaultChecked />
```

Inputs accept a leading `icon` and an `invalid` flag. Field shows `error` instead of `hint` when present.
