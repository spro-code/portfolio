import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic — driven by CSS variables, theme-aware (light/dark)
        paper: "var(--surface-page)",
        sunk: "var(--surface-sunk)",
        card: "var(--surface-card)",
        "card-2": "var(--surface-card-2)",
        inverse: "var(--surface-inverse)",
        ink: "var(--text-strong)",
        body: "var(--text-body)",
        muted: "var(--text-muted)",
        faint: "var(--text-faint)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        spring: "var(--interactive)",
        "spring-soft": "var(--interactive-soft)",
        clay: "var(--warm)",
        "clay-soft": "var(--warm-soft)",
        hairline: "var(--border-soft)",
        "hairline-faint": "var(--border-faint)",
        "hairline-strong": "var(--border-strong)",
        // Raw evergreen ramp for fixed dark sections
        evergreen: {
          50: "#EAF3EE",
          100: "#CDE5D8",
          200: "#9FCBB2",
          300: "#6BAC8A",
          400: "#3E8A64",
          500: "#237A5C",
          600: "#1B5C45",
          700: "#154836",
          800: "#103729",
          900: "#0C2B20",
          950: "#081A14",
        },
        bone: "#F4EFE5",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        hero: ["clamp(3.25rem, 1.6rem + 6.6vw, 6.5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        display: ["clamp(2.5rem, 1.5rem + 4.2vw, 4.25rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        "title-1": ["clamp(2rem, 1.4rem + 2.4vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "title-2": ["clamp(1.625rem, 1.3rem + 1.4vw, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "title-3": ["1.5rem", { lineHeight: "1.2" }],
        eyebrow: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.16em" }],
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "10px",
        lg: "16px",
        xl: "22px",
        "2xl": "30px",
      },
      boxShadow: {
        xs: "0 1px 2px rgba(15,14,10,0.05)",
        sm: "0 1px 2px rgba(15,14,10,0.06), 0 1px 1px rgba(15,14,10,0.04)",
        md: "0 6px 16px -4px rgba(15,14,10,0.09), 0 2px 6px -2px rgba(15,14,10,0.06)",
        lg: "0 20px 44px -14px rgba(15,14,10,0.18), 0 6px 14px -8px rgba(15,14,10,0.10)",
        xl: "0 40px 80px -24px rgba(15,14,10,0.26), 0 12px 28px -16px rgba(15,14,10,0.14)",
        glow: "0 0 0 4px var(--interactive-soft)",
      },
      maxWidth: {
        prose: "44rem",
        content: "72rem",
        wide: "84rem",
        page: "90rem",
      },
      spacing: {
        section: "clamp(4rem, 2rem + 8vw, 9rem)",
        "section-tight": "clamp(2.5rem, 1.5rem + 4vw, 5rem)",
        gutter: "clamp(1.25rem, 0.5rem + 3vw, 3rem)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
        spring: "cubic-bezier(0.34, 1.4, 0.5, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
