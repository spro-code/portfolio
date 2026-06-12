// AbleSpace marketing site — sections (part B).
const DSb = window.AbleSpaceDesignSystem_737c4f;
const { Button: BtnB, Eyebrow: EyebrowB, SectionHeader: SHB, StoryModule: SMB, MetricStat: MSB, PullQuote: PQB, Card: CardB } = DSb;
const IconB = DSb.Icon;

function ImpactSection() {
  return (
    <section className="section wrap" id="impact">
      <div className="impact as-reveal">
        <EyebrowB tone="on-dark" rule>04 — Impact</EyebrowB>
        <h2 className="as-display" style={{marginTop:16,maxWidth:"20ch"}}>Less paperwork. More of the work that matters.</h2>
        <div className="impact__grid">
          <MSB value="12.5" unit="h" label="saved per educator each week" />
          <MSB value="87" unit="%" label="of goals on track across caseloads" delta="12 pts" deltaDir="up" />
          <MSB value="600" unit="+" label="schools collecting data on AbleSpace" />
          <MSB value="6→1" label="data tools consolidated into one" />
        </div>
      </div>
    </section>
  );
}

function QuoteSection() {
  return (
    <section className="section section--tight wrap">
      <div className="quote-band as-reveal">
        <PQB name="Jordan Ellis" role="Speech-Language Pathologist · Lincoln Elementary">
          Fifteen years and six data systems later, I finally found the perfect solution for data collection. It is so easy, yet so powerful — this will be my most-used app all year.
        </PQB>
      </div>
    </section>
  );
}

function FeatureSection() {
  const feats = [
    { icon:"target", h:"IEP goal tracking", p:"Track every goal and objective in real time, with baselines and targets always in view." },
    { icon:"calendar-clock", h:"Scheduling & service time", p:"Plan sessions, track minutes, and stay ahead of service-delivery requirements." },
    { icon:"receipt", h:"Medicaid billing", p:"Auto-generate billing notes and district invoices with a click." },
    { icon:"users-round", h:"Team collaboration", p:"Share and collect data securely across clinicians, assistants, and case managers." },
    { icon:"list-checks", h:"Built-in assessments", p:"Progress-monitoring assessments keep objective skill data always available." },
    { icon:"shield-check", h:"Compliance & security", p:"FERPA, HIPAA, and statewide regulations — encryption and access controls throughout." },
  ];
  return (
    <section className="section wrap" id="districts">
      <div className="section__head as-reveal">
        <SHB eyebrow="05 — The platform" title="Everything a caseload needs, in one place." />
      </div>
      <div className="feat">
        {feats.map((f, i) => (
          <div className="as-reveal" data-reveal-delay={(i % 3)} key={i}>
            <CardB className="feat__card" interactive>
              <span className="feat__icon"><IconB name={f.icon} size={22} /></span>
              <h4>{f.h}</h4>
              <p>{f.p}</p>
            </CardB>
          </div>
        ))}
      </div>
    </section>
  );
}

function FutureSection() {
  return (
    <section className="section section--tight wrap">
      <div className="as-reveal" style={{maxWidth:"46rem"}}>
        <SMB kind="future" title="Where we're headed"
          body="A future where every IEP team starts the year with a living plan — and where the next right decision for a student is always one glance away. We're building toward insight that's proactive, not retrospective." />
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="cta wrap as-reveal">
      <EyebrowB tone="brand" rule>Get started</EyebrowB>
      <h2 style={{marginTop:16}}>Give your team back their <em>time.</em></h2>
      <p>Free for a month. No credit card. Roll out to a school or a whole district.</p>
      <div style={{display:"flex",gap:12,justifyContent:"center"}}>
        <BtnB variant="primary" size="xl" iconAfter="arrow-right">Start free</BtnB>
        <BtnB variant="secondary" size="xl">Book a demo</BtnB>
      </div>
    </section>
  );
}

function Footer() {
  const col = (title, links) => (
    <div>
      <h5>{title}</h5>
      {links.map((l) => <a href="#" key={l}>{l}</a>)}
    </div>
  );
  return (
    <footer className="footer wrap">
      <div className="footer__grid">
        <div className="footer__brand">
          <div className="nav__brand"><img src="../../assets/logo-mark.svg" alt="" style={{width:26,height:26}} /><span className="wm" style={{fontWeight:700,fontSize:17,letterSpacing:"-0.02em"}}>Able<span style={{color:"var(--evergreen-700)"}}>Space</span></span></div>
          <p>The caseload-management platform purpose-built for special education.</p>
        </div>
        {col("Product", ["Goal tracking","Data collection","Reports","Medicaid billing","AI assistant"])}
        {col("For", ["Teachers","SLPs & therapists","Administrators","Schools & districts"])}
        {col("Company", ["About","Blog","Security","Contact"])}
      </div>
      <div className="footer__bottom">
        <span>© 2026 AbleSpace. FERPA &amp; HIPAA compliant.</span>
        <span>Privacy · Terms</span>
      </div>
    </footer>
  );
}

Object.assign(window, { ImpactSection, QuoteSection, FeatureSection, FutureSection, CTASection, Footer });
