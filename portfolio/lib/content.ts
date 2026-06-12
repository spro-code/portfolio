export type ImpactMetric = {
  value?: number;
  suffix?: string;
  display?: string;
  label: string;
  sub: string;
};

export const impactMetrics: ImpactMetric[] = [
  {
    value: 130,
    suffix: "%+",
    label: "Conversion growth",
    sub: "Redesigned the booking journey around user behavior and decision-making patterns.",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Schools onboarded",
    sub: "Helped build a special-education platform adopted by schools across districts.",
  },
  {
    value: 50000,
    suffix: "+",
    label: "ABHA accounts created",
    sub: "Integrated India's national health-ID system into the patient onboarding experience.",
  },
  {
    value: 40,
    suffix: "%",
    label: "Feature adoption growth",
    sub: "Introduced AI-assisted progress notes that became part of daily workflows.",
  },
  {
    value: 35,
    suffix: "%",
    label: "Faster documentation",
    sub: "Reduced therapist documentation time through AI-generated session summaries.",
  },
  {
    value: 95,
    suffix: "%",
    label: "Release predictability",
    sub: "Built delivery processes that improved execution consistency across teams.",
  },
  {
    value: 30,
    suffix: "%",
    label: "Monthly active user growth",
    sub: "Drove sustained engagement through continuous product improvements.",
  },
  {
    display: "40 → 10 min",
    label: "Worksheet creation time",
    sub: "Launched AI-powered worksheet generation for educators.",
  },
  {
    value: 75,
    suffix: "%",
    label: "Successful booking rate",
    sub: "Created an instant-call experience that reduced drop-offs during consultation booking.",
  },
];

export const principles = [
  {
    num: "01",
    title: "Build from reality",
    body: "I've been wrong enough times to stop guessing. The best answers usually come from spending time with the people living the problem.",
    proof: [
      "40+ user interviews conducted",
      "300+ support tickets reviewed",
      "250+ session recordings analyzed",
      "10+ product verticals launched",
    ],
  },
  {
    num: "02",
    title: "Think in systems",
    body: "Most problems aren't where they first appear. I like following the thread until I understand what's really causing the friction.",
    proof: [
      "15+ end-to-end workflows mapped",
      "50+ process bottlenecks identified",
      "Cross-functional work across Product, Design, Engineering, and Operations",
      "User needs translated into business outcomes",
    ],
  },
  {
    num: "03",
    title: "Own outcomes",
    body: "Launch days are exciting, but they don't tell the whole story. I care more about what changes a few weeks later.",
    proof: [
      "20+ product experiments launched",
      "30%+ engagement growth",
      "KPI frameworks implemented",
      "Adoption and retention tracked post-launch",
    ],
  },
] as const;

export const chapter1 = {
  eyebrow: "Chapter 1 — Curiosity",
  title: "No playbook. Just curiosity.",
  story: [
    "I never planned to move from design into product.",
    "I was simply curious.",
    "One question led to another. A screen led to a user problem. A user problem led to a workflow. A workflow led to a business decision.",
    "The deeper I looked, the bigger the picture became.",
    "I've been following that trail of curiosity ever since.",
  ],
} as const;

export const timeline = [
  {
    role: "UX Designer",
    note: "I thought I was designing interfaces. I was actually learning how people think.",
    year: "Then",
  },
  {
    role: "Associate Product Manager",
    note: "For the first time, I wasn't just asking what to build. I was asking why it mattered.",
    year: "2024",
  },
  {
    role: "Product Manager",
    note: "The work became less about screens and more about decisions, priorities, and trade-offs.",
    year: "2025",
  },
  {
    role: "Product Leader",
    note: "Still zooming out. Still learning. Still building.",
    year: "Now",
  },
] as const;

export const exposures = [
  "Design",
  "Product",
  "Marketing",
  "Customer Support",
  "Operations",
  "Engineering",
  "Business",
] as const;

export const thinkingPieces = [
  {
    slug: "ablespace-teardown",
    kind: "Product Teardown",
    title: "AbleSpace Product Teardown",
    dek: "What an IEP operating system gets right about orienting around the user's real unit of work — and where the next leverage hides.",
    readTime: "8 min read",
    accent: "evergreen" as const,
  },
  {
    slug: "thence-product-build",
    kind: "Product Build",
    title: "Thence Product Build",
    dek: "Notes from building a product from a blank page — the decisions that compound and the ones that don't matter.",
    readTime: "6 min read",
    accent: "clay" as const,
  },
  {
    slug: "cars24-buy-flow",
    kind: "Flow Improvement",
    title: "Cars24 Buy Flow Improvement",
    dek: "A teardown of a high-stakes purchase funnel, and where behavior would tell a different story than the design assumes.",
    readTime: "7 min read",
    accent: "slate" as const,
  },
] as const;

export const aboutSections = [
  {
    title: "A gold medal from a place no one was watching",
    body: "I came up through a tier-4 college — the kind that doesn't make anyone's shortlist. I left it a gold medalist. That gap, between where I started and what I did there, is the whole story. I learned early that the room you're in doesn't set your ceiling. Your questions do.",
  },
  {
    title: "Designer first",
    body: "I started in design because I wanted to make things people could feel. But the closer I got to the pixels, the more I saw what sat behind them: a confused user, an unspoken business goal, an engineering constraint nobody had named. Design was the door. Systems were the room.",
  },
  {
    title: "The evolution",
    body: "Designer → Associate PM → PM. Each step was a zoom-out. I stopped asking 'is this screen good?' and started asking 'is this the right screen to exist at all?' Startup chaos accelerated it — I got dropped into marketing, support, ops, and engineering, and the edges between disciplines dissolved.",
  },
  {
    title: "What curiosity cost — and paid",
    body: "Curiosity is expensive. It makes you the person asking the uncomfortable question in the review. But it's the only thing that's ever moved a metric for me. Every result I'm proud of started as a 'why is this like this?' that I refused to drop.",
  },
  {
    title: "Still zooming out",
    body: "I build systems now — products that orient whole institutions around the people they serve. But I can already feel the next zoom: from building products to building companies. I don't think the zoom-out ever really stops. I've made peace with that. I've made it my whole approach.",
  },
] as const;
