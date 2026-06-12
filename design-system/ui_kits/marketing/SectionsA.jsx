// AbleSpace marketing site — sections. Composes design-system components.
const DS = window.AbleSpaceDesignSystem_737c4f;
const { Button, Eyebrow, Badge, SectionHeader, StoryModule, Journey, MetricStat, PullQuote, Card, Avatar, ProgressBar } = DS;
const Icon = DS.Icon;

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector(".site-scroll") || window;
    const onScroll = () => {
      const y = (el === window) ? window.scrollY : el.scrollTop;
      setScrolled(y > 8);
    };
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={"nav" + (scrolled ? " nav--scrolled" : "")}>
      <div className="nav__brand">
        <img src="../../assets/logo-mark.svg" alt="AbleSpace" />
        <span className="wm">Able<span className="s">Space</span></span>
      </div>
      <div className="nav__links">
        <a href="#product">Product</a>
        <a href="#story">Why AbleSpace</a>
        <a href="#impact">Impact</a>
        <a href="#districts">Districts</a>
      </div>
      <div className="nav__right">
        <Button variant="ghost" size="sm">Log in</Button>
        <Button variant="primary" size="sm" iconAfter="arrow-right">Start free</Button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero" id="product">
      <div className="wrap hero__grid">
        <div>
          <Eyebrow tone="brand" rule>IEP goal tracking · built for SPED teams</Eyebrow>
          <h1>Every data point <em>tells a story.</em> We help you read it.</h1>
          <p className="hero__lead">AbleSpace turns daily observations into clear progress — one tap to collect, one place to see it all. So you spend less time on paperwork and more with students.</p>
          <div className="hero__cta">
            <Button variant="primary" size="lg" iconAfter="arrow-right">Start free for a month</Button>
            <Button variant="ghost" size="lg" icon="play">Watch the 2-min tour</Button>
          </div>
          <div className="hero__trust">
            <span className="dots"><Avatar name="A B" size="sm" /><Avatar name="C D" size="sm" style={{marginLeft:-10}} /><Avatar name="E F" size="sm" style={{marginLeft:-10}} /></span>
            Trusted by IEP teams in 600+ schools · FERPA &amp; HIPAA compliant
          </div>
        </div>
        <HeroVisual />
      </div>
    </header>
  );
}

function HeroVisual() {
  const bars = [42,51,49,58,63,71,78,86];
  return (
    <div className="hero__visual" aria-hidden="true">
      <div className="float float--main">
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
          <div>
            <div style={{fontFamily:"var(--font-mono)",fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--evergreen-600)"}}>Articulation</div>
            <div style={{fontSize:15,fontWeight:600,color:"var(--text-strong)",marginTop:4,maxWidth:"30ch"}}>Produce /r/ in initial position · 80% accuracy</div>
          </div>
          <Badge tone="success" dot>Improving</Badge>
        </div>
        <div className="mini-chart">{bars.map((b,i)=><div className="b" key={i} style={{height:`${b}%`}} />)}</div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <span style={{fontFamily:"var(--font-mono)",fontSize:12,color:"var(--text-muted)"}}>8 sessions</span>
          <span style={{fontFamily:"var(--font-mono)",fontSize:12,color:"var(--text-muted)"}}>Target 80%</span>
        </div>
        <ProgressBar value={86} tone="spring" style={{marginTop:10}} />
      </div>
      <div className="float float--badge">
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <span style={{display:"inline-flex",width:34,height:34,borderRadius:9,background:"var(--success-soft)",color:"var(--success)",alignItems:"center",justifyContent:"center"}}><Icon name="check" size={18} /></span>
          <div><div style={{fontSize:13,fontWeight:600,color:"var(--text-strong)"}}>Data point saved</div><div style={{fontSize:11,color:"var(--text-faint)"}}>Graph updated · 1 tap</div></div>
        </div>
      </div>
      <div className="float float--metric">
        <MetricStat value="12.5" unit="h" label="saved per week" delta="vs. paper" deltaDir="up" />
      </div>
    </div>
  );
}

function Strip() {
  return (
    <div className="strip">
      <div className="wrap strip__inner">
        <span className="strip__label">Built with SLPs, teachers &amp; admins</span>
        <div className="strip__logos">
          <span>Riverside USD</span><span>Lincoln Elem.</span><span>Northgate</span><span>Pine Valley</span><span>Westbrook</span>
        </div>
      </div>
    </div>
  );
}

function StorySection() {
  return (
    <section className="section wrap" id="story">
      <div className="section__head as-reveal">
        <SectionHeader
          eyebrow="01 — The problem"
          title="Special educators were drowning in <em>data that didn't add up.</em>"
          lead="We shadowed 40 teachers across 9 districts. The story was the same everywhere."
        />
      </div>
      <div className="story-grid">
        <div className="as-reveal" data-reveal-delay="1">
          <StoryModule kind="challenge" title="Data lived everywhere — and nowhere."
            body="Sticky notes, binders, and six disconnected tools. Hours each week spent reconciling sheets instead of teaching." />
        </div>
        <div className="as-reveal" data-reveal-delay="2">
          <StoryModule kind="opportunity" title="The IEP was a compass no one could read in real time."
            body="Goals were authored once a year, then disappeared into a PDF — invisible during the daily work that actually moves them." />
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section className="section section--tight wrap">
      <div className="journey-split">
        <div className="as-reveal">
          <SectionHeader
            eyebrow="02 — Our approach"
            title="We followed the work, not the spec sheet."
            lead="Every feature traces back to a moment we watched a teacher struggle — and a decision about how to make it disappear."
          />
        </div>
        <div className="as-reveal" data-reveal-delay="1">
          <Journey steps={[
            {title:"Problem discovery", desc:"Shadowed 40 SPED teachers across 9 districts", icon:"search", state:"done"},
            {title:"User research", desc:"120 interviews with teachers, SLPs & admins", icon:"users-round", state:"done"},
            {title:"Insight", desc:"The bottleneck was capture, not analysis", icon:"lightbulb", state:"done"},
            {title:"Execution", desc:"One-tap data collection, auto-graphed", icon:"rocket", state:"active"},
            {title:"Impact", desc:"Time returned to students", icon:"trending-up", state:"upcoming"},
          ]} />
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className="section wrap">
      <div className="section__head center as-reveal">
        <SectionHeader center
          eyebrow="03 — The solution"
          title="A product that thinks like an <em>IEP team.</em>"
          lead="Collect, monitor, collaborate, and report — without leaving the flow of your day."
        />
      </div>
      <div className="story-grid story-grid--3">
        <div className="as-reveal"><StoryModule kind="solution" icon="clipboard-check" title="One-tap data collection" body="10+ data types — frequency, duration, trial-by-trial, rubric — captured on phone or tablet." /></div>
        <div className="as-reveal" data-reveal-delay="1"><StoryModule kind="solution" icon="bar-chart-3" title="Graphs that write themselves" body="Beautiful, meeting-ready charts and reports generated automatically from your data." /></div>
        <div className="as-reveal" data-reveal-delay="2"><StoryModule kind="solution" icon="sparkles" title="AI that does the writing" body="Generate goals, strategies, and progress notes in your voice — grounded in real data." /></div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, Strip, StorySection, JourneySection, SolutionSection });
