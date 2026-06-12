export const site = {
  name: "Sancharini Basak",
  shortName: "Sancharini",
  tagline: "Building systems. Still zooming out.",
  role: "Product Manager · Builder · Product Leader",
  url: "https://sancharini.com",
  email: "sancharini.design@gmail.com",
  metaTitle: "Sancharini Basak — Building Systems. Still Zooming Out.",
  metaDescription:
    "Product Manager, Builder, and Product Leader creating AI-powered systems that simplify complex workflows.",
  socials: {
    linkedin: "https://www.linkedin.com/in/sancharini-basak-2b67a31b8/",
    dribbble: "https://dribbble.com/Sancharini_Basak",
    behance: "https://www.behance.net/sancharinibasak02",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Thinking", href: "/thinking" },
    { label: "About", href: "/about" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const identities = [
  "Product Manager",
  "System Thinker",
  "Builder",
  "Product Strategist",
  "Product Leader",
] as const;

export const zoomOutLadder = [
  "I started as a designer.",
  "Then I learned about users.",
  "Then products.",
  "Then systems.",
  "Then businesses.",
  "And I am still zooming out.",
] as const;
