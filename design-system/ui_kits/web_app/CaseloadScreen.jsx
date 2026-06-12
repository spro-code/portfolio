function CaseloadScreen({ onOpenStudent }) {
  const DS = window.AbleSpaceDesignSystem_737c4f;
  const { Tag, Select, Avatar, Badge, ProgressBar, Button } = DS;
  const d = window.AS_DATA;
  const [filter, setFilter] = React.useState("all");

  const statusBadge = (s) => {
    if (s === "on-track") return <Badge tone="success" dot>On track</Badge>;
    if (s === "watch") return <Badge tone="warning" dot>Watch</Badge>;
    return <Badge tone="danger" dot>Review due</Badge>;
  };
  const avg = (st) => Math.round(st.goals.reduce((a,g)=>a+g.progress,0)/st.goals.length);
  const list = filter === "all" ? d.students : d.students.filter(s => s.status === filter);

  return (
    <div className="content__inner">
      <div className="filters">
        <Tag selected={filter==="all"} onClick={()=>setFilter("all")}>All · {d.students.length}</Tag>
        <Tag selected={filter==="on-track"} onClick={()=>setFilter("on-track")}>On track</Tag>
        <Tag selected={filter==="watch"} onClick={()=>setFilter("watch")}>Watch</Tag>
        <Tag selected={filter==="review-due"} onClick={()=>setFilter("review-due")}>Review due</Tag>
        <div className="spacer" />
        <div style={{width:"160px"}}>
          <Select defaultValue="recent" options={[{value:"recent",label:"Recently active"},{value:"name",label:"Name A–Z"},{value:"review",label:"Review date"}]} />
        </div>
        <Button variant="secondary" icon="sliders-horizontal" size="md">Filters</Button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Student</th><th>Disability</th><th>Goals</th><th>Avg. progress</th><th>IEP review</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {list.map((st) => (
            <tr key={st.id} onClick={() => onOpenStudent(st.id)}>
              <td>
                <div className="cell-name">
                  <Avatar name={st.name} size="sm" />
                  <div><b>{st.name}</b><br/><span>{st.grade}</span></div>
                </div>
              </td>
              <td style={{color:"var(--text-muted)"}}>{st.disability}</td>
              <td style={{fontVariantNumeric:"tabular-nums"}}>{st.goals.length}</td>
              <td>
                <div className="cell-prog">
                  <span className="pct">{avg(st)}%</span>
                  <ProgressBar value={avg(st)} tone={avg(st) >= 75 ? "spring" : avg(st) >= 50 ? "brand" : "warm"} />
                </div>
              </td>
              <td style={{color:"var(--text-muted)"}}>in {st.reviewIn} days</td>
              <td>{statusBadge(st.status)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
Object.assign(window, { CaseloadScreen });
