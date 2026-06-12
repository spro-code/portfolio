export const accentMap = {
  evergreen: "var(--accent)",
  clay: "var(--warm)",
  spring: "var(--interactive)",
  slate: "#5e86a0",
} as const;

export type Accent = keyof typeof accentMap;

export const accentColor = (a: Accent) => accentMap[a];
