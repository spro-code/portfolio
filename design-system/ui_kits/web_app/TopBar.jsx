function TopBar({ title, crumbs, onCollect }) {
  const { Input, IconButton, Button } = window.AbleSpaceDesignSystem_737c4f;
  return (
    <header className="topbar">
      <div>
        {crumbs ? <div className="crumbs">{crumbs}</div> : null}
        <h1>{title}</h1>
      </div>
      <div className="topbar__search">
        <Input icon="search" placeholder="Search students, goals…" />
      </div>
      <div className="topbar__actions">
        <IconButton icon="bell" variant="ghost" label="Notifications" />
        <IconButton icon="circle-help" variant="ghost" label="Help" />
        <Button variant="primary" icon="plus" onClick={onCollect}>Collect data</Button>
      </div>
    </header>
  );
}
Object.assign(window, { TopBar });
