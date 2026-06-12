"use client";

import { AnimatePresence, motion, useSpring } from "framer-motion";
import type { CursorVisualProps } from "./cursor.types";

// No-overshoot tween for morph/scale; springs below are overdamped for follow.
const SOFT = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.32 } as const;

export function Cursor({ enabled, label, scrolling, x, y }: CursorVisualProps) {
  // Precise dot — tight, overdamped (no bounce, no laggy trail).
  const dotX = useSpring(x, { stiffness: 900, damping: 45, mass: 0.3 });
  const dotY = useSpring(y, { stiffness: 900, damping: 45, mass: 0.3 });
  // Bubble — follows a touch softer for editorial ease, still overdamped.
  const bubbleX = useSpring(x, { stiffness: 380, damping: 34, mass: 0.5 });
  const bubbleY = useSpring(y, { stiffness: 380, damping: 34, mass: 0.5 });

  if (!enabled) return null;
  const isPencil = label === "pencil";
  const active = Boolean(label);
  const showBubble = active && !isPencil;

  return (
    <>
      {/* Default precise dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[200] rounded-full bg-[var(--text-strong)] will-change-transform"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: active ? 0 : 9,
          height: active ? 0 : 9,
          opacity: active ? 0 : 1,
          scale: scrolling ? 0.5 : 1,
        }}
        transition={SOFT}
      />

      {/* Pencil variant — a hand-drawn writing tip at the pointer */}
      <AnimatePresence>
        {isPencil && (
          <motion.div
            aria-hidden
            className="pointer-events-none fixed left-0 top-0 z-[200] text-[var(--text-strong)] will-change-transform"
            style={{ x: dotX, y: dotY }}
            initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
            animate={{ opacity: 1, scale: scrolling ? 0.85 : 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.6, rotate: -10 }}
            transition={SOFT}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transform: "translate(-3px, -29px)" }}
            >
              {/* tip sits at the lower-left, pointing at the actual cursor position */}
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19.5 3 21l1.5-4Z" />
              <path d="M15 5l4 4" />
              <path d="M3 21l2.5-0.9" stroke="var(--interactive)" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover circle with contextual label */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            key="cursor-bubble"
            aria-hidden
            className="pointer-events-none fixed left-0 top-0 z-[200] flex items-center justify-center will-change-transform"
            style={{ x: bubbleX, y: bubbleY, translateX: "-50%", translateY: "-50%" }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: scrolling ? 0.92 : 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={SOFT}
          >
            <span className="relative grid place-items-center whitespace-nowrap rounded-[40px] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-strong)]">
              <span
                className="absolute inset-0 rounded-[40px] backdrop-blur-[2px]"
                style={{ backgroundColor: "color-mix(in srgb, var(--surface-card) 82%, transparent)" }}
              />
              <SketchOutline />
              <span className="relative">{label}</span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/** Subtle, slightly-imperfect hand-drawn outline that draws on. */
function SketchOutline() {
  return (
    <svg
      className="absolute inset-0 h-full w-full overflow-visible text-[var(--text-strong)]"
      viewBox="0 0 120 48"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
    >
      <motion.path
        d="M14 5 Q60 1.5 106 5.5 Q117.5 8 116 24 Q118 40.5 103 43.5 Q60 47 17 43 Q3 41 4.5 24 Q2.5 8 14 5 Z"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        opacity={0.5}
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}
