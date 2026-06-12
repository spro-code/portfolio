function StudentScreen({ studentId, onBack, onCollect }) {
  const DS = window.AbleSpaceDesignSystem_737c4f;
  const { Card, Badge, Button, Avatar, Tabs, ProgressBar, Tag } = DS;
  const Icon = DS.Icon;
  const d = window.AS_DATA;
  const st = d.students.find((s) => s.id === studentId) || d.students[0];
  const [tab, setTab] = React.useState("goals");

  const trendBadge = (t) => {
    if (t === "up") return <Badge tone="success" dot>Improving</Badge>;
    if (t === "down") return <Badge tone="danger" dot>Declining</Badge>;
    return <Badge tone="neutral" dot>Stable</Badge>;
  };

  return (
    <div className="content__inner">
      <Button variant="ghost" size="sm" icon="arrow-left" onClick={onBack} style={{marginBottom:"14px"}}>Caseload</Button>

      <div className="stu-head">
        <Avatar name={st.name} size="lg" />
        <div className="h-meta">
          <h2>{st.name}</h2>
          <div className="sub">
            <span>{st.grade}</span><span>·</span><span>{st.disability}</span>
            <Badge tone={st.reviewIn <= 7 ? "danger" : "info"}>IEP review in {st.reviewIn} days</Badge>
          </div>
        </div>
        <div className="h-actions">
          <Button variant="secondary" icon="file-text">Generate report</Button>
          <Button variant="primary" icon="plus" onClick={() => onCollect(st.goals[0])}>Collect data</Button>
        </div>
      </div>

      <div style={{marginBottom:"18px"}}>
        <Tabs variant="underline" value={tab} onChange={setTab} items={[
          {value:"goals",label:"Goals"},{value:"data",label:"Data"},
          {value:"notes",label:"Notes"},{value:"accom",label:"Accommodations"},{value:"reports",label:"Reports"},
        ]} />
      </div>

      {st.goals.map((g) => (
        <Card className="goal-card" key={g.id}>
          <div className="goal-top">
            <div>
              <div className="area">{g.area}</div>
              <div className="gtext">{g.text}</div>
            </div>
            <div className="gright">{trendBadge(g.trend)}</div>
          </div>

          <div className="chart">
            {d.series.map((v, i) => (
              <div className="bar" key={i} style={{height: `${v}%`}} title={`Session ${i+1}: ${v}%`} />
            ))}
          </div>

          <div className="goal-meta" style={{marginTop:"16px"}}>
            <div className="m"><div className="k">Type</div><div className="v">{g.type}</div></div>
            <div className="m"><div className="k">Baseline</div><div className="v">{g.baseline}%</div></div>
            <div className="m"><div className="k">Target</div><div className="v">{g.target}%</div></div>
            <div className="m"><div className="k">Last data</div><div className="v">{g.last}</div></div>
            <div className="grow" />
            <div className="m" style={{minWidth:"150px"}}>
              <div className="k">Progress · {g.progress}%</div>
              <ProgressBar value={g.progress} tone={g.progress>=75?"spring":g.progress>=50?"brand":"warm"} style={{marginTop:"6px"}} />
            </div>
            <Button variant="outline" size="sm" icon="plus" onClick={() => onCollect(g)}>Data</Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
Object.assign(window, { StudentScreen });
