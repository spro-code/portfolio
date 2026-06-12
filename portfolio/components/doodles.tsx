"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const stroke = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }, opacity: { duration: 0.2, delay: 0.25 } },
  },
};

function useDrawState() {
  const reduce = useReducedMotion();
  return {
    initial: reduce ? "show" : "hidden",
    whileInView: "show",
    viewport: { once: true, margin: "0px 0px -10% 0px" },
  } as const;
}

/** Hand-drawn circle scribbled around a word. */
export function Circled({ children, color = "var(--warm)" }: { children: ReactNode; color?: string }) {
  const d = useDrawState();
  return (
    <span className="relative inline-block whitespace-nowrap">
      {children}
      <motion.svg
        className="pointer-events-none absolute -inset-x-3 -inset-y-2 h-[calc(100%+1rem)] w-[calc(100%+1.5rem)] overflow-visible"
        viewBox="0 0 200 80"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden
        {...d}
      >
        <motion.path
          d="M40 12 C12 14 6 36 14 52 C24 72 92 74 140 70 C186 66 198 44 188 26 C176 6 96 4 44 10"
          stroke={color}
          strokeWidth={2.4}
          strokeLinecap="round"
          fill="none"
          variants={stroke}
          vectorEffect="non-scaling-stroke"
        />
      </motion.svg>
    </span>
  );
}

/** Hand-drawn underline beneath a word. */
export function Underlined({ children, color = "var(--accent)" }: { children: ReactNode; color?: string }) {
  const d = useDrawState();
  return (
    <span className="relative inline-block whitespace-nowrap">
      {children}
      <motion.svg
        className="pointer-events-none absolute -bottom-1.5 left-0 h-2.5 w-full overflow-visible"
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden
        {...d}
      >
        <motion.path
          d="M3 7 C50 2 150 12 197 5"
          stroke={color}
          strokeWidth={2.6}
          strokeLinecap="round"
          fill="none"
          variants={stroke}
          vectorEffect="non-scaling-stroke"
        />
      </motion.svg>
    </span>
  );
}

/** A small standalone hand-drawn arrow doodle, for margins. */
export function ArrowDoodle({ className = "", color = "var(--text-faint)" }: { className?: string; color?: string }) {
  const d = useDrawState();
  return (
    <motion.svg
      className={`overflow-visible ${className}`}
      viewBox="0 0 80 60"
      fill="none"
      aria-hidden
      style={{ color }}
      {...d}
    >
      <motion.path d="M6 8 C40 4 60 24 60 48" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" fill="none" variants={stroke} />
      <motion.path d="M60 48 l-12 -8 M60 48 l8 -12" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" fill="none" variants={stroke} />
    </motion.svg>
  );
}

/** A hand-scrawled note in the margin, in the handwriting face. */
export function MarginNote({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      className={`text-muted ${className}`}
      style={{ fontFamily: "var(--font-hand), cursive", fontSize: "1.25rem", lineHeight: 1.2 }}
      initial={reduce ? { opacity: 0 } : { opacity: 0, rotate: -3, y: 8 }}
      whileInView={{ opacity: 1, rotate: -2, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  );
}
