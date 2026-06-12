function Sidebar({ active, onNav }) {
  const { Avatar } = window.AbleSpaceDesignSystem_737c4f;
  const Icon = window.AbleSpaceDesignSystem_737c4f.Icon;
  const item = (id, icon, label, badge) => (
    <button className={"nav" + (active === id ? " nav--active" : "")} onClick={() => onNav(id)}>
      <Icon name={icon} size={18} />
      {label}
      {badge ? <span className="badge">{badge}</span> : null}
    </button>
  );
  return (
    <aside className="side">
      <div className="side__brand">
        <img src="../../assets/logo-mark-light.svg" alt="AbleSpace" />
        <span className="wm">Able<span className="s">Space</span></span>
      </div>
      {item("dashboard", "layout-dashboard", "Dashboard")}
      {item("caseload", "users-round", "Caseload", "23")}
      {item("schedule", "calendar-clock", "Schedule")}
      {item("data", "clipboard-check", "Data Collection")}
      {item("reports", "bar-chart-3", "Reports")}

      <div className="side__section">Tools</div>
      {item("assessments", "list-checks", "Assessments")}
      {item("billing", "receipt", "Medicaid Billing")}
      {item("ai", "sparkles", "AI Assistant")}

      <div className="side__spacer" />
      <div className="side__user">
        <Avatar name="Dana Whitfield" size="sm" />
        <div className="meta">
          <b>Dana Whitfield</b>
          <span>SLP · Lincoln Elem.</span>
        </div>
      </div>
    </aside>
  );
}
Object.assign(window, { Sidebar });
