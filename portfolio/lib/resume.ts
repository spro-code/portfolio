export type ExperienceBullet = { label: string; text: string };

export type Job = {
  role: string;
  org: string;
  period: string;
  location: string;
  blurb: string;
  points: ExperienceBullet[];
};

export const experience: Job[] = [
  {
    role: "Product Manager",
    org: "AbleSpace",
    period: "Aug 2025 — Present",
    location: "Remote",
    blurb: "EdTech SaaS platform improving digital workflows for educators and therapists.",
    points: [
      {
        label: "AI Systems & Automation",
        text: "Led development of an AI-powered IEP management system used by 1,000+ educators — building core modules with Claude Code and LLM-driven workflows to create, manage, and track student education plans, cutting development cycles from 6 months to 4 weeks for key features.",
      },
      {
        label: "Feature Development",
        text: "Built an AI worksheet generation engine that dynamically creates grade- and subject-specific learning materials, improving student engagement 22%.",
      },
      {
        label: "Data Infrastructure & Search",
        text: "Designed and shipped Universal Search with intent detection, routing queries between database retrieval and AI-generated insights — reducing information retrieval time 50% and improving task completion 25%.",
      },
      {
        label: "Training Infrastructure",
        text: "Built an internal AI-powered onboarding platform that adapts training modules to each role and knowledge gap, with a customizable admin framework to configure and deploy modules for both platform training and special-education domain onboarding.",
      },
      {
        label: "User Research",
        text: "Conducted 25+ educator interviews and analyzed 200+ support tickets and usage sessions to find workflow friction and prioritize improvements.",
      },
      {
        label: "Team Management",
        text: "Collaborated across engineering, design, and customer success to deliver 15+ product releases at 95% sprint completion.",
      },
      {
        label: "AI Documentation Automation",
        text: "Launched an AI progress-note system that converts session data and goal tracking into structured documentation (e.g. SOAP format) with source references — reducing educator documentation time 68% and driving high feature adoption.",
      },
    ],
  },
  {
    role: "Associate Product Manager",
    org: "Amrutam Pharmaceuticals",
    period: "Feb 2024 — Aug 2025",
    location: "Remote",
    blurb: "D2C pharmaceutical and ecommerce company focused on ayurvedic telemedicine.",
    points: [
      {
        label: "Funnel Optimization",
        text: "Diagnosed leakage across an 8-stage consultation funnel using behavioral analytics and user interviews, lifting conversion 4.58% → 10.57% (130% growth).",
      },
      {
        label: "Product Development",
        text: "Built an Instant Call consultation workflow to cut booking friction, increasing booking completion 75% within 6 weeks.",
      },
      {
        label: "User Research",
        text: "Ran 30+ user interviews and usability evaluations, translating insights into 12 prioritized roadmap initiatives.",
      },
      {
        label: "Product Analytics",
        text: "Built 15+ KPI dashboards tracking retention, repeat consultations, and campaign performance to guide product decisions.",
      },
      {
        label: "Operational Automation",
        text: "Built automated analytics frameworks in Google Sheets, reducing reporting effort 40%.",
      },
      {
        label: "Compliance Analysis",
        text: "Evaluated ABHA healthcare integration, mapping 20+ regulatory checkpoints and surfacing key risks before development.",
      },
      {
        label: "UX Optimization",
        text: "Redesigned 8 major touchpoints across booking and consultation flows, improving session duration 22%.",
      },
      {
        label: "Conversion Optimization",
        text: "Improved CTA hierarchy and information architecture, reducing bounce rate 17%.",
      },
      {
        label: "Product Design Systems",
        text: "Built 25+ wireframes and interactive prototypes aligned with backend architecture, reducing engineering rework 30%.",
      },
    ],
  },
];

export const leadership = [
  {
    role: "National Hackathon Organizer",
    text: "Planned and executed a 72-hour nationwide hackathon, coordinating participation from 200+ colleges and managing end-to-end event operations and engagement.",
  },
];

export const education = [
  {
    school: "University of Engineering and Management",
    detail: "B.Tech, Computer Science & Engineering",
    period: "Aug 2020 — May 2024",
    location: "Jaipur",
  },
];

export const skills = [
  {
    group: "Product Management",
    items: [
      "Product strategy",
      "Roadmapping",
      "PRD writing",
      "Feature prioritization",
      "Sprint planning",
      "Cross-functional execution",
      "API testing",
    ],
  },
  {
    group: "Customer & Research",
    items: ["User interviews", "Customer journey mapping", "Voice of Customer", "Usability testing", "Feedback synthesis"],
  },
  {
    group: "Data & Analytics",
    items: ["Funnel analysis", "Cohort analysis", "SQL", "GA4 event tracking", "Dashboarding (Looker, Tableau)", "KPI tracking"],
  },
  {
    group: "AI & Technology",
    items: ["AI product development", "LLM workflows", "Agentic AI concepts", "API integration", "Data pipelines", "Operational automation"],
  },
  {
    group: "Growth signals",
    items: ["Funnel optimization", "Conversion growth", "Sales funnel", "Stakeholder execution", "Operational problem-solving"],
  },
  {
    group: "Tools",
    items: ["Jira", "Confluence", "Figma", "Miro", "ClickUp", "Postman", "Google Analytics", "Claude Code", "Codex", "Amplitude"],
  },
];
