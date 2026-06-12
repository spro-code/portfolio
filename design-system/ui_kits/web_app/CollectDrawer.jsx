function CollectDrawer({ open, goal, onClose, onSaved }) {
  const DS = window.AbleSpaceDesignSystem_737c4f;
  const { Button, IconButton, Field, Select, Textarea, Badge, Switch } = DS;
  const Icon = DS.Icon;
  const [count, setCount] = React.useState(0);
  const [trials, setTrials] = React.useState([]); // array of true/false

  React.useEffect(() => { if (open) { setCount(0); setTrials([]); } }, [open, goal]);

  const g = goal || {};
  const correct = trials.filter(Boolean).length;
  const pct = trials.length ? Math.round((correct / trials.length) * 100) : 0;

  return (
    <>
      <div className={"scrim" + (open ? " scrim--open" : "")} onClick={onClose} />
      <div className={"drawer" + (open ? " drawer--open" : "")} role="dialog" aria-label="Collect data">
        <div className="drawer__head">
          <span style={{display:"inline-flex",width:36,height:36,borderRadius:10,background:"var(--accent-soft)",color:"var(--evergreen-700)",alignItems:"center",justifyContent:"center"}}>
            <Icon name="clipboard-check" size={20} />
          </span>
          <div style={{flex:1}}>
            <div className="crumbs" style={{fontFamily:"var(--font-mono)",fontSize:11,color:"var(--text-faint)"}}>{g.area || "Goal"} · {g.type || "Frequency"}</div>
            <h3>Collect data</h3>
          </div>
          <IconButton icon="x" variant="ghost" label="Close" onClick={onClose} />
        </div>

        <div className="drawer__body">
          <div style={{fontSize:14,lineHeight:1.5,color:"var(--text-body)",background:"var(--surface-sunk)",padding:"12px 14px",borderRadius:10}}>
            {g.text || "Produce target with 80% accuracy across 3 sessions."}
          </div>

          <Field label="Session date">
            <Select defaultValue="today" options={[{value:"today",label:"Today · Mar 19"},{value:"yest",label:"Yesterday · Mar 18"}]} />
          </Field>

          <div>
            <div style={{fontSize:13,fontWeight:600,color:"var(--text-strong)",marginBottom:10}}>Tally count</div>
            <div className="tally">
              <button className="tally__btn" onClick={() => setCount(Math.max(0,count-1))} aria-label="minus"><Icon name="minus" size={22} /></button>
              <span className="tally__num">{count}</span>
              <button className="tally__btn tally__btn--plus" onClick={() => setCount(count+1)} aria-label="plus"><Icon name="plus" size={22} /></button>
            </div>
          </div>

          <div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
              <span style={{fontSize:13,fontWeight:600,color:"var(--text-strong)"}}>Trial-by-trial</span>
              {trials.length > 0 && <Badge tone={pct>=80?"success":"warning"}>{correct}/{trials.length} · {pct}%</Badge>}
            </div>
            <div className="trial-dots">
              {trials.map((t, i) => (
                <span key={i} className={"trial-dot " + (t ? "trial-dot--plus" : "trial-dot--minus")}>{t ? "+" : "–"}</span>
              ))}
              <span className="trial-dot" onClick={() => setTrials([...trials, true])} title="Correct">+</span>
              <span className="trial-dot" onClick={() => setTrials([...trials, false])} title="Incorrect" style={{borderColor:"var(--danger)",color:"var(--danger)"}}>–</span>
            </div>
          </div>

          <Field label="Quick note" hint="AI can expand this into a progress note">
            <Textarea placeholder="Independent on initial /r/; needed a model for blends." />
          </Field>

          <Switch label="Mark as Medicaid billable" defaultChecked />
        </div>

        <div className="drawer__foot">
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button variant="primary" icon="check" block onClick={onSaved}>Save data point</Button>
        </div>
      </div>
    </>
  );
}
Object.assign(window, { CollectDrawer });
