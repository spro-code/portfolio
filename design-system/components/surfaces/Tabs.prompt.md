Tab bar — `segmented` (pill group) or `underline` (editorial). Controlled.

```jsx
const [tab, setTab] = React.useState("goals");
<Tabs
  items={[{value:"goals",label:"Goals",icon:"target"},{value:"data",label:"Data"}]}
  value={tab} onChange={setTab}
/>
```
