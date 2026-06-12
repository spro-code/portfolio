/* ============================================================
   AbleSpace IEP — interactive product documentary content.
   Authored in a first-person, documentary voice.
   ============================================================ */

export const iepMeta = {
  title: "AbleSpace IEP",
  subtitle:
    "How we replaced fragmented IEP workflows with a configurable compliance platform now used across 20 districts.",
  tags: ["0 → 1 Product", "B2B SaaS", "Compliance", "Special Education", "AI", "Platform Strategy"],
  heroQuote:
    "The challenge wasn't building an IEP system. The challenge was building one that every district believed was built specifically for them.",
};

export const chapters = [
  { id: "why", num: "01", label: "Why it existed" },
  { id: "problem", num: "02", label: "The invisible problem" },
  { id: "conversations", num: "03", label: "Conversations" },
  { id: "discovery", num: "04", label: "Discovery" },
  { id: "insight", num: "05", label: "The insight" },
  { id: "decision", num: "06", label: "The decision" },
  { id: "configurable", num: "07", label: "What became configurable" },
  { id: "architecture", num: "08", label: "Architecture" },
  { id: "ai", num: "09", label: "AI decisions" },
  { id: "not-built", num: "10", label: "What we didn't build" },
  { id: "launch", num: "11", label: "Launch & adoption" },
  { id: "outcomes", num: "12", label: "Unexpected outcomes" },
  { id: "mistakes", num: "13", label: "What I'd do differently" },
  { id: "lessons", num: "14", label: "Lessons" },
];

export const metricWall = [
  { value: 100, suffix: "", label: "Schools" },
  { value: 20, suffix: "", label: "Districts" },
  { value: 1000, suffix: "+", label: "IEPs created" },
  { value: 75, suffix: "%", label: "AI adoption" },
  { value: 60, suffix: "%", label: "of deals influenced" },
];

export const beforeWorkflow = [
  "Frontline / SameGoal / EasyIEP",
  "Create the IEP in the external system",
  "Export the data",
  "Track progress somewhere else",
  "Re-enter it into AbleSpace",
  "Nightly sync between systems",
  "Engineering reviews the failures",
  "Duplicate, drifting data",
];

export const painPoints = [
  { who: "Teachers", quote: "I have to update the same information twice." },
  { who: "Schools", quote: "We can't customize anything to how we actually work." },
  { who: "Engineers", quote: "We're fixing sync issues almost every night." },
  { who: "Founders", quote: "We can't scale a business on nightly patches." },
];

export type ChatTurn = { speaker: string; role?: string; text: string; side: "them" | "me" };

export const conversations: ChatTurn[] = [
  { speaker: "School Director", side: "them", text: "We love AbleSpace. But we're not replacing our IEP system." },
  { speaker: "Me", role: "Product", side: "me", text: "Could we integrate with it instead, at least for now?" },
  { speaker: "School Director", side: "them", text: "For now. Not forever." },
  {
    speaker: "SPED Director",
    side: "them",
    text: "Every state has different forms and rules. Software would have to bend to us, not the other way around.",
  },
  {
    speaker: "District Admin",
    side: "them",
    text: "Honestly, I don't want to learn new software. I want my workflow — just with fewer steps.",
  },
  { speaker: "Me", role: "Product", side: "me", text: "What if it were the same platform, configured for your district?" },
  {
    speaker: "School Psychologist",
    side: "them",
    text: "If it respected our compliance rules exactly, we'd move off Frontline tomorrow.",
  },
];

export const stakeholders = [
  { role: "Special Education Directors", n: 11 },
  { role: "District Administrators", n: 8 },
  { role: "Occupational Therapists", n: 6 },
  { role: "School Psychologists", n: 6 },
];

export const totalConversations = 31;

export const thoughtVsLearned = [
  { thought: "Teachers know their IEP system inside out.", learned: "Most know only their own corner of the workflow." },
  { thought: "AI is the biggest unmet need.", learned: "Configuration is — by a wide margin." },
  { thought: "Districts want new software.", learned: "Districts want their workflow respected." },
  { thought: "Compliance is the moat.", learned: "Customization is the moat." },
  { thought: "One excellent template fits most districts.", learned: "Every district is certain theirs is the exception." },
];

export const insightQuote =
  "Districts don't want different software. They want the same software, configured differently.";

export const decision = {
  optionA: {
    label: "Option A",
    title: "An Illinois-specific IEP product",
    pros: ["Faster to launch", "Simpler first version", "One set of forms to perfect"],
    cons: ["Technical debt baked in", "A rebuild for every new state", "Hard to scale past one region"],
  },
  optionB: {
    label: "Option B",
    title: "A configurable compliance engine",
    pros: ["Effectively infinite scalability", "Reusable architecture across states", "Every district feels bespoke"],
    cons: ["Longer to build", "A harder, slower first version", "Far more upfront design"],
  },
  chose: "B",
  reasoning:
    "Option A would have shipped two months sooner and trapped us for two years. The moment a second state asked for different forms, we'd be rebuilding. We chose to spend the hard months once — building a product that builds products — instead of paying for them forever.",
};

export const configMatrix = [
  "IEP sections",
  "Goal templates",
  "Terminology",
  "Approval flows",
  "Service models",
  "User roles",
  "Signature routing",
  "Compliance rules",
  "Progress reports",
  "District programs",
];

export const architecture = [
  { node: "District Admin", note: "Sets the rules, never writes code." },
  { node: "Program Builder", note: "Turns those rules into a configuration." },
  { node: "Compliance Engine", note: "Enforces state and district requirements." },
  { node: "District Template", note: "A bespoke shape of the product." },
  { node: "Teacher Workflow", note: "Feels native, fewer steps." },
  { node: "Student IEP", note: "Compliant by construction." },
];

export const aiDoes = [
  { title: "Generate present levels", note: "From the data teachers already collected." },
  { title: "Suggest goals", note: "Drafted, never decided — a starting point." },
  { title: "Draft IEP content", note: "Inside the flow, fully editable." },
  { title: "Rewrite terminology", note: "Into each district's own language." },
];

export const aiDoesnt = [
  { title: "Make compliance decisions", note: "A wrong call is a legal and human risk." },
  { title: "Configure districts", note: "Structure is an admin's deliberate choice." },
  { title: "Create programs autonomously", note: "One bad program misconfigures a whole district." },
  { title: "Act as a conversational copilot", note: "Open-ended chat invites unbounded, unauditable risk." },
];

export const aiPhilosophy =
  "In special education, the cost of a confident mistake isn't a bad UX — it's a student who doesn't get served and a district out of compliance. So AI drafts; humans decide. Every generated word lands somewhere a person approves.";

export const decisionsNotBuilt = [
  {
    num: "01",
    title: "No conversational AI",
    tradeoff:
      "A chat box feels magical in a demo. But it invites questions no one can audit and answers no one signed off on. Structured, scoped generation is less flashy and infinitely more trustworthy in a compliance product.",
  },
  {
    num: "02",
    title: "No full auto-migrations",
    tradeoff:
      "Auto-importing years of legacy records sounds like a growth hack until it silently corrupts a legally binding document. We built guided import with a human in the loop instead of a one-click gamble.",
  },
  {
    num: "03",
    title: "No autonomous program creation",
    tradeoff:
      "Letting AI assemble a district program would save admins hours — and could misconfigure compliance for thousands of students at once. Admins stay in control of structure; AI assists inside it.",
  },
  {
    num: "04",
    title: "No state-specific product",
    tradeoff:
      "The fastest path was one state, one set of forms. We turned it down on purpose. A product that only works in Illinois isn't a platform — it's a liability with a launch date.",
  },
];

export const launchCharts = {
  creationTime: { before: 2, after: 1, unit: "months", reduction: "50%" },
  aiAdoption: 75,
  districts: 20,
  ieps: 1000,
};

export const outcomes = [
  {
    title: "The Program Builder became a daily tool",
    note: "We built it as setup infrastructure. Admins opened it constantly — it became how they ran their programs, not just how they configured them.",
  },
  {
    title: "Schools left Frontline faster than expected",
    note: "Once one district saw its own workflow respected, the switch stopped feeling like a migration and started feeling like an upgrade.",
  },
  {
    title: "AI adoption beat the forecast",
    note: "Scoping AI tightly — drafts, not decisions — is exactly what made teachers trust it enough to use it every day.",
  },
  {
    title: "Retention moved with the platform",
    note: "Owning the IEP workflow turned AbleSpace from a useful tool into the system of record. It influenced 60% of deals.",
  },
];

export const mistake = {
  title: "What I'd do differently",
  body: "I spent nearly two months trying to understand everything before building anything. Looking back, I optimized for certainty. I should have started validating with rough prototypes much earlier and let customer feedback guide the remaining research, instead of trying to de-risk the whole thing in my head first.",
};

export const lessons = [
  "Customization turned out to be a bigger moat than compliance.",
  "Teachers don't want software. They want fewer steps.",
  "The hardest product problems are usually architecture decisions wearing the costume of a feature request.",
];

export const closingTakeaway =
  "Build the thing that builds the things. The configurable engine was slower to ship and the only decision on this project I'd make again without hesitating.";
