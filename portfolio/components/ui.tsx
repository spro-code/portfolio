"use client";

import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { accentMap, type Accent } from "@/lib/accent";

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

export function Pill({ children, accent }: { children: ReactNode; accent?: Accent }) {
  return (
    <span
      className="inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em]"
      style={{
        color: accent ? accentMap[accent] : "var(--text-muted)",
        borderColor: "var(--border-soft)",
      }}
    >
      {children}
    </span>
  );
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "inverse";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  const base =
    "group inline-flex h-12 items-center gap-2 rounded-md px-6 font-sans text-sm font-medium transition-all duration-200 ease-out active:scale-[0.985]";
  const styles = {
    primary: "bg-accent text-[var(--accent-on)] hover:bg-[var(--accent-hover)] shadow-sm",
    ghost: "border border-hairline text-ink hover:bg-accent-soft",
    inverse: "bg-bone text-evergreen-900 hover:bg-white",
  }[variant];
  const isExternal = href.startsWith("http") || href.startsWith("mailto");

  const inner = (
    <>
      {children}
      <span className="transition-transform duration-200 ease-out group-hover:translate-x-0.5">→</span>
    </>
  );

  if (isExternal) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`} target="_blank" rel="noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {inner}
    </Link>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="font-mono text-sm text-accent">{index}</span>
      <span className="h-px flex-1 bg-hairline" />
      <span className="eyebrow">{label}</span>
    </div>
  );
}

/** Count-up that fires when scrolled into view. Respects reduced motion. */
export function Counter({
  value,
  suffix = "",
  prefix = "",
  duration = 1.6,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    let start: number | null = null;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export function MagneticArrow() {
  return (
    <motion.span
      className="inline-block"
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    >
      ↓
    </motion.span>
  );
}
