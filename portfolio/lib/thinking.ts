import type { Accent } from "@/lib/accent";

export type Article = {
  slug: string;
  kind: string;
  title: string;
  dek: string;
  readTime: string;
  accent: Accent;
  date: string;
  body: { h: string; p: string[] }[];
  resource?: {
    kind: "figma" | "notion";
    url: string;
    label: string;
  };
};

/** Build an embeddable iframe src for a resource. */
export function embedSrc(resource: NonNullable<Article["resource"]>): string {
  if (resource.kind === "figma") {
    return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(resource.url)}`;
  }
  return resource.url;
}

export const articles: Article[] = [
  {
    slug: "ablespace-teardown",
    kind: "Product Teardown",
    title: "AbleSpace Product Teardown",
    dek: "What an IEP operating system gets right about orienting around the user's real unit of work — and where the next leverage hides.",
    readTime: "8 min read",
    accent: "evergreen",
    date: "2026",
    resource: {
      kind: "figma",
      url: "https://www.figma.com/slides/IS0ZdrxiEiiZ9S5shqVzbl/A-Product-Teardown?node-id=2-848&t=eiRyU14p5rxSI3qk-0",
      label: "Open the full teardown in Figma",
    },
    body: [
      {
        h: "The thesis",
        p: [
          "Most ed-tech tools treat documentation as a feature surface. AbleSpace treats it as the spine. The whole product orients around one object — the student goal — and that single decision cascades into everything that feels good about the experience.",
          "When you pick the right unit of work, the roadmap stops being a debate. Every feature either serves the goal object or it doesn't.",
        ],
      },
      {
        h: "Where it wins",
        p: [
          "One-tap data collection respects the teacher's real constraint: time between students measured in seconds, not minutes. AI shows up as a draft inside the flow, never a separate destination — which is exactly how you earn trust with a skeptical, time-poor user.",
          "Migration is treated as a product, not a support ticket. That's the quiet moat: the cost of leaving legacy is what actually decides adoption.",
        ],
      },
      {
        h: "Where the next leverage hides",
        p: [
          "The richest unexploited surface is the roll-up: a teacher's taps already contain a district's compliance posture. Surfacing that chain — tap → student → caseload → district — turns a data tool into an institutional nervous system.",
          "If I owned the roadmap, I'd invest there next. The data already exists; it just isn't zoomed out yet.",
        ],
      },
    ],
  },
  {
    slug: "thence-product-build",
    kind: "Product Build",
    title: "Thence Product Build",
    dek: "Notes from building a product from a blank page — the decisions that compound and the ones that don't matter.",
    readTime: "6 min read",
    accent: "clay",
    date: "2026",
    body: [
      {
        h: "Blank page, real stakes",
        p: [
          "Building from zero is mostly about deciding what not to decide yet. The temptation is to architect everything; the discipline is to find the one loop that has to work and build only that.",
        ],
      },
      {
        h: "Decisions that compound",
        p: [
          "The data model. The first user's first five minutes. The thing you measure. Get these wrong and every later decision inherits the debt.",
          "Everything else — visual polish, edge-case handling, settings — is reversible. Treat it as reversible.",
        ],
      },
      {
        h: "What didn't matter",
        p: [
          "Most of what felt urgent in week one. The product taught me what mattered by being used, not by being planned.",
        ],
      },
    ],
  },
  {
    slug: "cars24-buy-flow",
    kind: "Flow Improvement",
    title: "Cars24 Buy Flow Improvement",
    dek: "A teardown of a high-stakes purchase funnel, and where behavior would tell a different story than the design assumes.",
    readTime: "7 min read",
    accent: "slate",
    date: "2026",
    resource: {
      kind: "notion",
      url: "https://app.notion.com/p/Improving-the-buy-flow-of-Cars24-34fcdc52754880a2b786d09f623f19a4?source=copy_link",
      label: "Read the full case on Notion",
    },
    body: [
      {
        h: "The assumption baked into the funnel",
        p: [
          "High-consideration purchases get designed as long, rational, multi-step flows — because that's how we imagine buyers behave. But intent is perishable, and every step is a place for it to evaporate.",
        ],
      },
      {
        h: "Where behavior would disagree",
        p: [
          "I'd instrument the gap between intent signals and completion, then look for the steps where confident users slow down. Those aren't UX polish problems — they're moments where the flow asks the user to come back to a feeling they've already lost.",
          "The Instant Calling lesson applies directly: sometimes the highest-leverage change is deleting a step, not improving it.",
        ],
      },
      {
        h: "How I'd test it",
        p: [
          "Session replays first to form a hypothesis, then a clean A/B against the shortest path that still captures trust. Let behavior, not the org chart, decide.",
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
