export type Metric = { value: string; label: string };

export type CaseStudy = {
  num: string;
  slug: string;
  title: string;
  tagline: string;
  role: string;
  focus: string[];
  year: string;
  accent: "evergreen" | "clay" | "spring" | "slate";
  summary: string;
  heroMetrics: Metric[];
  // Documentary chapters
  overview: string;
  problem: string;
  research: string[];
  insights: string[];
  constraints: string[];
  solution: string;
  execution: string[];
  impact: Metric[];
  learnings: string[];
  reflection: string;
};

export const systems: CaseStudy[] = [
  {
    num: "01",
    slug: "ai-powered-iep-system",
    title: "AI-Powered IEP System",
    tagline: "Building the operating system for special education.",
    role: "Product Manager",
    focus: ["Leadership", "AI", "Workflow Design", "Scale"],
    year: "2026 — Now",
    accent: "evergreen",
    summary:
      "A configurable compliance platform that replaced fragmented IEP workflows — now used across 20 districts, with every district feeling it was built for them.",
    heroMetrics: [
      { value: "100", label: "schools" },
      { value: "20", label: "districts" },
      { value: "1000+", label: "IEPs created" },
      { value: "75%", label: "AI adoption" },
    ],
    overview:
      "Special education runs on documentation — IEP goals, daily data, progress monitoring, compliance. For decades that work lived in spreadsheets, binders, and six disconnected systems. I led the product that replaced all of it with a single operating system, then made AI the quiet engine underneath the teacher's day.",
    problem:
      "Teachers were spending more time documenting learning than supporting it. Every district had a different legacy tool, none of them talked to each other, and switching cost was brutal: years of student history trapped in formats nobody could export cleanly. To win schools we had to be dramatically better AND make leaving the old world painless.",
    research: [
      "Sat with SPED teachers and SLPs through full data-collection days to see where the minutes actually went.",
      "Audited 6 competing legacy systems to map the migration surface — what data shapes existed, what we had to import.",
      "Interviewed district administrators on the real buying trigger: compliance risk, not features.",
      "Watched session replays of teachers abandoning goal-creation halfway through.",
    ],
    insights: [
      "The teacher's unit of work isn't a 'feature' — it's a student goal followed across a year. The whole system had to orient around that object.",
      "AI only earns trust when it drafts inside the teacher's existing flow, never as a separate 'AI tool' tab.",
      "Migration wasn't a one-time import; it was the product. Make leaving legacy effortless and adoption follows.",
    ],
    constraints: [
      "Compliance and legal review gated every AI-generated artifact.",
      "Importing from 6 incompatible legacy schemas with messy real-world data.",
      "Teachers have zero tolerance for tools that add steps — net workflow had to get shorter.",
    ],
    solution:
      "We rebuilt the day around the goal object: one-tap data collection, automatic progress monitoring, and AI that drafts goals, strategies and notes in place. A guided migration pipeline ingested legacy data and reconstructed student histories so a school could switch in days, not terms. AI was scoped tightly — always a draft a human approves, never an autonomous actor.",
    execution: [
      "Shipped the goal-centric data model and one-tap collection as the spine everything else hangs off.",
      "Built the AI drafting layer with human-in-the-loop approval and tight prompt scoping per artifact type.",
      "Stood up a migration pipeline + white-glove playbook to move 456 schools off legacy systems.",
      "Drove adoption with in-context nudges instead of training decks — the workflow taught itself.",
    ],
    impact: [
      { value: "1000+", label: "schools onboarded" },
      { value: "456", label: "schools migrated from legacy" },
      { value: "85%", label: "AI feature adoption" },
      { value: "1000s", label: "of student IEPs created" },
    ],
    learnings: [
      "Distribution beats elegance: the migration pipeline mattered more than any single feature.",
      "AI adoption is a trust curve — scope narrow, keep the human in the loop, expand once they believe it.",
      "When you orient a product around the user's real unit of work, the roadmap writes itself.",
    ],
    reflection:
      "This is the system where I stopped thinking in screens and started thinking in institutions. A teacher's tap rolls up to a district's compliance posture rolls up to whether a kid gets served. Once you see that chain, you can't unsee it — you keep zooming out.",
  },
  {
    num: "02",
    slug: "ai-worksheet-generator",
    title: "AI Worksheet Generator",
    tagline: "Turning 40 minutes of manual work into 10.",
    role: "Product Manager",
    focus: ["Product Thinking", "AI", "User Empathy"],
    year: "2026",
    accent: "spring",
    summary:
      "An AI tool that drafts classroom worksheets teachers actually keep — cutting prep from forty minutes to ten with minimal editing.",
    heroMetrics: [
      { value: "40+", label: "schools adopted" },
      { value: "4x", label: "faster creation" },
      { value: "High", label: "acceptance, minimal edits" },
    ],
    overview:
      "Worksheet prep is invisible labor — forty minutes a night, every night, that no one sees. We built an AI generator that produces classroom-ready worksheets teachers trust enough to use with light edits, giving them their evenings back.",
    problem:
      "Generic AI text generators produced output teachers had to rewrite from scratch — wrong reading level, wrong format, no curriculum alignment. The 'time saved' was a myth; editing took as long as starting fresh. The real bar wasn't 'can AI write' but 'can AI write something a teacher keeps.'",
    research: [
      "Collected real worksheets teachers had made by hand to learn the implicit format rules.",
      "Ran generation experiments and measured edit distance between AI draft and final used version.",
      "Interviewed teachers on what made a worksheet feel 'classroom-ready' vs 'AI slop.'",
    ],
    insights: [
      "Acceptance correlates with edit distance, not output quality in the abstract — measure how much they change it.",
      "Constraints are the product: grade level, subject, and format scoping mattered more than model choice.",
      "Teachers will adopt AI instantly if the first draft is 90% there; they abandon it at 70%.",
    ],
    constraints: [
      "Output had to match grade-appropriate reading levels precisely.",
      "Had to fit existing print/format conventions teachers already used.",
      "Fast enough to fit into a between-classes moment.",
    ],
    solution:
      "We narrowed the input space hard — structured controls for grade, subject, and worksheet type — and tuned generation against real teacher-made examples. The output dropped straight into the AbleSpace flow, editable inline, so the draft was a starting point, not a wall of text to fight.",
    execution: [
      "Designed structured generation controls instead of an open prompt box.",
      "Built an evaluation loop scoring drafts by edit distance to teacher-finalized versions.",
      "Integrated generation directly into the lesson workflow, not a separate tool.",
    ],
    impact: [
      { value: "40+", label: "schools adopted" },
      { value: "~4x", label: "reduction in creation time" },
      { value: "High", label: "acceptance with minimal editing" },
    ],
    learnings: [
      "The metric that matters for AI features is 'kept with minimal edits,' not 'generated.'",
      "Narrowing inputs increases output quality more reliably than a bigger model.",
    ],
    reflection:
      "Small surface, big lesson: AI products live or die on the last 10% of trust. Saving a teacher thirty minutes a night is not a small thing — it's the kind of quiet leverage I want every system I build to have.",
  },
  {
    num: "03",
    slug: "ai-progress-notes",
    title: "AI Progress Notes",
    tagline: "Making documentation effortless.",
    role: "Product Manager",
    focus: ["AI Product Development"],
    year: "2025",
    accent: "slate",
    summary:
      "AI-assisted progress notes that lifted documentation adoption and efficiency by drafting from the data teachers already collected.",
    heroMetrics: [
      { value: "+40%", label: "adoption" },
      { value: "+35%", label: "efficiency" },
    ],
    overview:
      "Progress notes are where good teaching goes to die in a blank text field at 6pm. We made the note write its own first draft from the data that was already there.",
    problem:
      "Teachers collected rich daily data but still faced an empty box when it was time to write progress notes. The blank page tax meant notes were late, thin, or skipped — and the data they'd carefully gathered never turned into a narrative anyone read.",
    research: [
      "Mapped the gap between data collected and notes written.",
      "Found documentation was abandoned most at the synthesis step, not data entry.",
      "Tested AI-drafted notes generated from existing goal data.",
    ],
    insights: [
      "The hard part of documentation isn't typing — it's synthesizing scattered data into a story.",
      "AI is perfectly suited to the first draft of synthesis when the source data is structured.",
      "Adoption rises when the tool removes the most-avoided step, not the easiest one.",
    ],
    constraints: [
      "Generated notes had to be accurate to the underlying data — no hallucinated progress.",
      "Teachers needed full edit control before anything was saved.",
    ],
    solution:
      "We generated progress-note drafts directly from the goal data teachers had already collected, presented as an editable starting point. The blank page became a near-finished note they refined in a minute.",
    execution: [
      "Built note generation grounded strictly in the student's recorded data.",
      "Designed an inline review-and-edit step before save.",
      "Measured adoption and time-to-complete against the manual baseline.",
    ],
    impact: [
      { value: "+40%", label: "increase in adoption" },
      { value: "+35%", label: "improvement in efficiency" },
    ],
    learnings: [
      "Target the most-avoided step in a workflow — that's where AI leverage compounds.",
      "Grounding generation in real data is what separates a tool teachers trust from a gimmick.",
    ],
    reflection:
      "Effortless is a design achievement, not an accident. When documentation stops being a chore, teachers write more and better — and the whole system gets smarter about each student.",
  },
  {
    num: "04",
    slug: "abha-integration",
    title: "ABHA Integration",
    tagline: "Learning product complexity through healthcare infrastructure.",
    role: "Associate Product Manager",
    focus: ["Compliance", "Government APIs", "Stakeholder Management", "Technical Complexity"],
    year: "2025",
    accent: "slate",
    summary:
      "A national health-ID integration that taught me to ship inside hard constraints — government APIs, compliance, and many stakeholders.",
    heroMetrics: [{ value: "50,000+", label: "ABHA accounts created" }],
    overview:
      "Integrating with India's national health ID (ABHA) was my crash course in product complexity you can't design your way out of — only navigate. Fifty thousand accounts later, I think differently about constraints.",
    problem:
      "We needed to create and link ABHA (Ayushman Bharat Health Account) IDs at scale, against government APIs that were strict, evolving, and unforgiving. Compliance wasn't a checkbox; it shaped the entire flow. And no single team owned all the moving parts.",
    research: [
      "Reverse-engineered government API documentation and edge-case behavior.",
      "Mapped every compliance and consent requirement into the user flow.",
      "Aligned engineering, legal, and external government-integration stakeholders on one sequence.",
    ],
    insights: [
      "In regulated products, the constraint is the spec — you design within it, not around it.",
      "Stakeholder alignment is a product skill, not an overhead cost.",
      "Edge cases in government APIs aren't edge cases — they're the main case at scale.",
    ],
    constraints: [
      "Strict government API contracts and consent flows.",
      "Compliance and data-handling requirements on every step.",
      "Many external stakeholders with no shared roadmap.",
    ],
    solution:
      "We built a resilient account-creation flow that handled the API's strictness gracefully — clear consent, robust error handling, and retries — and I ran the cross-team coordination that kept legal, engineering, and the integration partner moving in lockstep.",
    execution: [
      "Translated dense API and compliance docs into a buildable spec.",
      "Designed consent and error states for a flow that couldn't fail silently.",
      "Drove weekly alignment across engineering, legal, and government partners.",
    ],
    impact: [{ value: "50,000+", label: "ABHA accounts created" }],
    learnings: [
      "Complexity you can't remove must be absorbed by the product, never pushed onto the user.",
      "Shipping inside hard constraints is its own craft — and great training for everything after.",
    ],
    reflection:
      "ABHA was hard, formative, and unforgiving. It's where I learned that 'technical complexity' and 'stakeholder management' are the same skill wearing two hats — and that the systems worth building are usually the tangled ones.",
  },
  {
    num: "05",
    slug: "instant-calling",
    title: "Instant Calling",
    tagline: "What happens when user behavior disagrees with assumptions?",
    role: "Associate Product Manager",
    focus: ["Discovery", "Research", "Behavioral Insight"],
    year: "2024",
    accent: "clay",
    summary:
      "A discovery-led rework of a booking flow that more than doubled conversion by trusting behavior over assumptions.",
    heroMetrics: [
      { value: "4.58% → 10.57%", label: "conversion rate" },
      { value: "+75%", label: "booking completion" },
      { value: "−90%", label: "cancellations" },
    ],
    overview:
      "We assumed users wanted to schedule a call for later. The data quietly disagreed. Instant Calling is the story of what happens when you stop defending the roadmap and follow what people actually do.",
    problem:
      "Our booking flow was built on a clean assumption: users browse, pick a time, and schedule a call. But conversion was stuck at 4.58% and cancellations were brutal. People were booking and then vanishing. The funnel looked fine on paper and bled users in reality.",
    research: [
      "Pulled session replays of the booking flow and watched where intent died.",
      "Segmented drop-off by time-to-call and found scheduled calls cancelled far more than immediate ones.",
      "Interviewed users who cancelled — the friction was the wait, not the call.",
    ],
    insights: [
      "Intent is perishable. The gap between 'I want help' and 'the call' is where conversion leaks out.",
      "A scheduled call is a promise the user breaks the moment the urgency fades.",
      "The winning move wasn't a better calendar — it was removing the calendar.",
    ],
    constraints: [
      "Agent availability had to be matched to instant demand in real time.",
      "Couldn't break the existing scheduled-call path for users who genuinely wanted it.",
    ],
    solution:
      "We let users talk to someone now. Instead of optimizing the scheduling UI, we collapsed the wait entirely with an instant-calling path that routed live intent straight to an available agent — capturing the moment instead of asking users to come back to it.",
    execution: [
      "Prototyped instant routing against live agent availability.",
      "A/B tested instant vs scheduled as the default path.",
      "Rolled out instant-first while preserving scheduling as a fallback.",
    ],
    impact: [
      { value: "4.58% → 10.57%", label: "conversion rate" },
      { value: "+75%", label: "increase in booking completion" },
      { value: "−90%", label: "reduction in cancellations" },
    ],
    learnings: [
      "When behavior disagrees with your assumption, the behavior is right.",
      "The best optimization is often deletion — we removed a step instead of polishing it.",
    ],
    reflection:
      "This is the project that taught me to distrust my own roadmap. Discovery isn't a phase you finish; it's a posture. I keep the 4.58% → 10.57% jump close because it came entirely from humility.",
  },
];

export const getSystem = (slug: string) => systems.find((s) => s.slug === slug);
