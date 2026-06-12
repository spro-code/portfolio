function DashboardScreen({ onOpenStudent }) {
  const DS = window.AbleSpaceDesignSystem_737c4f;
  const { Card, MetricStat, ProgressBar, Badge, Button, Avatar, Eyebrow } = DS;
  const Icon = DS.Icon;
  const d = window.AS_DATA;

  const statusBadge = (s) => {
    if (s === "now") return <Badge tone="success" dot>In session</Badge>;
    if (s === "done") return <Badge tone="neutral">Done</Badge>;
    return <Badge tone="info">Upcoming</Badge>;
  };

  return (
    <div className="content__inner">
      <div className="dash-greet">
        <Eyebrow tone="brand" rule>{d.today}</Eyebrow>
        <h2 style={{marginTop:"10px"}}>Good morning, <em>Dana.</em></h2>
        <p>You have {d.stats.sessionsToday} sessions today and 4 goals to review before Friday.</p>
      </div>

      <div className="stat-row">
        <Card pad="md"><MetricStat value={d.stats.goalsOnTrack} unit="%" label="Goals on track" delta="12 pts" deltaDir="up" /></Card>
        <Card pad="md"><MetricStat value={d.stats.minutesLogged} unit=" min" label={`Service time · ${d.stats.minutesTarget} target`} /></Card>
        <Card pad="md"><MetricStat value={d.stats.dataPoints.toLocaleString()} label="Data points this term" delta="208" deltaDir="up" /></Card>
        <Card pad="md"><MetricStat value="3" label="IEP reviews due soon" /></Card>
      </div>

      <div className="dash-cols">
        <Card>
          <div className="panel-head">
            <h3>Today's schedule</h3>
            <Button variant="ghost" size="sm" iconAfter="arrow-right">Full calendar</Button>
          </div>
          <div className="sched">
            {d.schedule.map((s, i) => (
              <div className="sched__row" key={i}>
                <span className="sched__time">{s.time}</span>
                <div className="sched__who">
                  <b>{s.student}</b>
                  <span>{s.service} · {s.room}</span>
                </div>
                {statusBadge(s.status)}
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="panel-head">
            <h3>Goals to review</h3>
            <Badge tone="warm">4 due</Badge>
          </div>
          <div className="sched">
            {d.students.slice(0,4).map((st) => (
              <div className="sched__row" key={st.id} style={{gridTemplateColumns:"auto 1fr auto", cursor:"pointer"}} onClick={() => onOpenStudent(st.id)}>
                <Avatar name={st.name} size="sm" />
                <div className="sched__who">
                  <b>{st.name}</b>
                  <span>Review in {st.reviewIn} days</span>
                </div>
                <Icon name="chevron-right" size={18} />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
Object.assign(window, { DashboardScreen });
