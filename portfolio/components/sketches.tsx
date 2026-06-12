"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/* ============================================================
   Notebook sketches — narrative tools, not decoration.
   Hand-drawn-feel SVG paths that "draw on" as they enter view.
   Stroke = currentColor so they invert cleanly in dark mode.
   ============================================================ */

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (i: number = 0) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
      opacity: { duration: 0.3, delay: i * 0.12 },
    },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

function Frame({ children, viewBox, className = "" }: { children: ReactNode; viewBox: string; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.svg
      viewBox={viewBox}
      className={`h-auto w-full overflow-visible text-ink ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      aria-hidden
    >
      {children}
    </motion.svg>
  );
}

function P(props: React.ComponentProps<typeof motion.path> & { i?: number }) {
  const { i = 0, ...rest } = props;
  return <motion.path variants={draw} custom={i} {...rest} />;
}

function Label({ x, y, children, i = 0, anchor = "middle", small = false }: {
  x: number; y: number; children: ReactNode; i?: number; anchor?: "start" | "middle" | "end"; small?: boolean;
}) {
  return (
    <motion.text
      x={x}
      y={y}
      textAnchor={anchor}
      variants={fadeIn}
      custom={i}
      fill="currentColor"
      stroke="none"
      style={{ fontFamily: "var(--font-hand), cursive", fontSize: small ? 15 : 19, opacity: 0.85 }}
    >
      {children}
    </motion.text>
  );
}

/* --- Scene 1: a single screen ("products were screens") --- */
export function ScreenSketch({ className }: { className?: string }) {
  return (
    <Frame viewBox="0 0 320 220" className={className}>
      <P d="M40 30 Q160 24 280 30 Q284 95 280 160 Q160 166 40 160 Q36 95 40 30 Z" i={0} />
      <P d="M62 56 L210 54" i={1} />
      <P d="M62 78 L170 77" i={1.4} />
      <P d="M62 100 L230 99" i={1.8} />
      <P d="M62 122 L150 121" i={2.1} />
      <P d="M210 132 q26 -3 40 0 q3 12 0 20 q-22 3 -40 0 q-3 -10 0 -20 Z" i={2.4} />
      <P d="M120 160 L120 188 M90 190 Q160 184 230 190" i={2.8} />
      <Label x={160} y={210} i={0}>just a screen</Label>
    </Frame>
  );
}

/* --- Scene 2: screen surrounded by people/functions ("products are people") --- */
export function PeopleSketch({ className }: { className?: string }) {
  const nodes = [
    { x: 60, y: 50, label: "Users" },
    { x: 250, y: 44, label: "Support" },
    { x: 295, y: 130, label: "Design" },
    { x: 240, y: 215, label: "Engineering" },
    { x: 70, y: 220, label: "Growth" },
    { x: 22, y: 135, label: "Business" },
    { x: 160, y: 16, label: "AI" },
  ];
  return (
    <Frame viewBox="0 0 320 250" className={className}>
      {/* center screen */}
      <P d="M128 108 q32 -4 64 0 q3 22 0 44 q-32 4 -64 0 q-3 -22 0 -44 Z" i={0} />
      {/* connections */}
      {nodes.map((n, idx) => (
        <P key={n.label} d={`M160 130 Q${(160 + n.x) / 2} ${(130 + n.y) / 2 - 8} ${n.x} ${n.y}`} i={0.6 + idx * 0.18} strokeWidth={1.4} opacity={0.6} />
      ))}
      {/* node dots */}
      {nodes.map((n, idx) => (
        <motion.circle key={n.label + "d"} cx={n.x} cy={n.y} r={4} fill="currentColor" stroke="none" variants={fadeIn} custom={idx} />
      ))}
      {nodes.map((n, idx) => (
        <Label key={n.label + "l"} x={n.x} y={n.y - 10} i={idx} small>
          {n.label}
        </Label>
      ))}
    </Frame>
  );
}

/* --- Scene 3: everything interconnects ("products are systems") --- */
export function SystemSketch({ className }: { className?: string }) {
  const pts = [
    { x: 60, y: 60 },
    { x: 160, y: 40 },
    { x: 260, y: 70 },
    { x: 285, y: 165 },
    { x: 200, y: 220 },
    { x: 95, y: 215 },
    { x: 35, y: 150 },
    { x: 160, y: 130 },
  ];
  // a connective mesh
  const edges: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 0],
    [7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6],
    [0, 2], [1, 7], [3, 5],
  ];
  return (
    <Frame viewBox="0 0 320 250" className={className}>
      {edges.map(([a, b], idx) => (
        <P
          key={idx}
          d={`M${pts[a].x} ${pts[a].y} Q${(pts[a].x + pts[b].x) / 2 + 6} ${(pts[a].y + pts[b].y) / 2 - 6} ${pts[b].x} ${pts[b].y}`}
          i={idx * 0.08}
          strokeWidth={1.4}
          opacity={0.55}
        />
      ))}
      {pts.map((p, idx) => (
        <motion.circle key={idx} cx={p.x} cy={p.y} r={idx === 7 ? 7 : 5} fill="currentColor" stroke="none" variants={fadeIn} custom={idx} />
      ))}
      <Label x={160} y={244} i={2}>one connected system</Label>
    </Frame>
  );
}

/* --- Zoom-out rings — the identity anchor sketch --- */
export function ZoomRings({ className }: { className?: string }) {
  const rings = [
    { r: 30, label: "Screen" },
    { r: 64, label: "Product" },
    { r: 100, label: "System" },
    { r: 138, label: "Business" },
  ];
  return (
    <Frame viewBox="0 0 320 320" className={className}>
      {rings.map((ring, idx) => (
        <P
          key={ring.label}
          d={describeWobblyCircle(160, 160, ring.r)}
          i={idx * 0.25}
          strokeWidth={idx === 0 ? 2.2 : 1.6}
          opacity={idx === 0 ? 1 : 0.7 - idx * 0.07}
        />
      ))}
      <motion.circle cx={160} cy={160} r={5} fill="currentColor" stroke="none" variants={fadeIn} custom={0} />
      {rings.map((ring, idx) => (
        <Label key={ring.label + "l"} x={160} y={160 - ring.r + 16} i={idx} small>
          {ring.label}
        </Label>
      ))}
      {/* outward arrow */}
      <P d="M196 160 q40 0 70 -28" i={1.4} strokeWidth={1.4} />
      <P d="M256 130 l10 2 l-3 10" i={1.6} strokeWidth={1.4} />
      <Label x={250} y={108} i={4}>still zooming out</Label>
    </Frame>
  );
}

/* --- A 24-year-old waving hello — the greeting on the hero reveal --- */
export function WavingGirl({ className }: { className?: string }) {
  return (
    <Frame viewBox="0 0 320 380" className={className}>
      {/* head */}
      <P d={describeWobblyCircle(158, 110, 42)} i={0} />
      {/* hair — shoulder-length */}
      <P d="M116 112 q-8 -58 42 -64 q50 6 42 64" i={0.5} />
      <P d="M116 112 q-5 30 8 50" i={0.9} strokeWidth={1.6} />
      <P d="M200 112 q5 30 -8 50" i={1.0} strokeWidth={1.6} />
      <P d="M132 80 q26 -16 52 0" i={1.1} strokeWidth={1.5} opacity={0.7} />
      {/* eyes + smile */}
      <motion.circle cx={146} cy={108} r={2.6} fill="currentColor" stroke="none" variants={fadeIn} custom={2} />
      <motion.circle cx={172} cy={108} r={2.6} fill="currentColor" stroke="none" variants={fadeIn} custom={2.2} />
      <P d="M145 126 q13 11 27 0" i={1.4} strokeWidth={1.6} />
      {/* neck */}
      <P d="M150 150 L150 168 M168 150 L168 168" i={1.6} strokeWidth={1.6} />
      {/* shoulders + a-line dress */}
      <P d="M120 178 Q159 166 198 178" i={1.8} />
      <P d="M120 178 L106 282 Q159 300 212 282 L198 178" i={2.0} />
      {/* legs + feet */}
      <P d="M140 284 L136 346 M178 284 L184 346" i={2.4} strokeWidth={1.8} />
      <P d="M136 346 q-11 5 -1 9 M184 346 q11 5 1 9" i={2.7} strokeWidth={1.6} />
      {/* left arm, resting */}
      <P d="M122 184 Q104 216 113 254" i={2.2} strokeWidth={1.8} />
      <P d="M113 254 q-6 9 2 13 q9 2 8 -7" i={2.5} strokeWidth={1.6} />
      {/* right arm, raised to wave */}
      <P d="M196 184 Q232 174 250 118" i={2.2} strokeWidth={1.8} />
      {/* waving hand — open palm, fingers spread */}
      <P d="M240 120 q9 -9 20 -5" i={2.7} strokeWidth={1.6} />
      <P d="M244 114 L240 92" i={2.8} strokeWidth={1.6} />
      <P d="M251 111 L251 88" i={2.9} strokeWidth={1.6} />
      <P d="M258 111 L263 90" i={3.0} strokeWidth={1.6} />
      <P d="M264 114 L272 97" i={3.1} strokeWidth={1.6} />
      <P d="M240 122 L227 116" i={3.2} strokeWidth={1.6} />
      {/* motion arcs — the wave */}
      <P d="M280 98 q11 -2 15 7" i={3.4} strokeWidth={1.4} opacity={0.6} />
      <P d="M285 82 q12 0 16 11" i={3.6} strokeWidth={1.4} opacity={0.5} />
      <Label x={296} y={74} i={3}>hi!</Label>
    </Frame>
  );
}

/* --- Curiosity trail: one question leads to another; the picture gets bigger --- */
export function CuriosityTrail({ className }: { className?: string }) {
  const nodes = [
    { x: 36, y: 224, r: 5, label: "screen" },
    { x: 118, y: 178, r: 9, label: "user" },
    { x: 198, y: 120, r: 14, label: "workflow" },
    { x: 280, y: 58, r: 24, label: "business" },
  ];
  return (
    <Frame viewBox="0 0 332 272" className={className}>
      {/* the trail */}
      <P d="M42 220 Q86 214 116 182 Q150 146 196 120 Q244 92 272 62" i={0} strokeWidth={1.6} />
      {/* growing nodes */}
      {nodes.map((n, idx) => (
        <P key={n.label} d={describeWobblyCircle(n.x, n.y, n.r)} i={0.5 + idx * 0.35} strokeWidth={1.8} />
      ))}
      {/* node centers */}
      {nodes.map((n, idx) => (
        <motion.circle
          key={n.label + "d"}
          cx={n.x}
          cy={n.y}
          r={Math.max(2, n.r * 0.18)}
          fill="currentColor"
          stroke="none"
          variants={fadeIn}
          custom={idx + 1}
        />
      ))}
      {/* labels echoing the copy */}
      {nodes.map((n, idx) => (
        <Label key={n.label + "l"} x={n.x} y={n.y + n.r + 17} i={idx + 1} small>
          {n.label}
        </Label>
      ))}
      {/* still going — the trail continues outward */}
      <P d="M300 46 q20 -10 28 -30" i={2.4} strokeWidth={1.4} opacity={0.6} />
      <P d="M328 16 l-3 11 l-9 -6" i={2.7} strokeWidth={1.4} opacity={0.6} />
    </Frame>
  );
}

/* --- Small idea→product arrow sketch for chapter dividers --- */
export function IdeaSketch({ className }: { className?: string }) {
  return (
    <Frame viewBox="0 0 200 120" className={className}>
      <P d="M40 60 q-2 -26 20 -30 q24 -3 26 22 q14 6 8 24 q-4 14 -22 12 q-6 12 -20 6 q-16 -4 -10 -22 q-8 -8 -2 -14 Z" i={0} />
      <P d="M52 96 L72 96 M56 106 L68 106" i={1.2} strokeWidth={1.6} />
      <P d="M104 60 L150 60" i={1.6} strokeWidth={1.6} />
      <P d="M150 60 l-10 -7 M150 60 l-10 7" i={1.9} strokeWidth={1.6} />
      <P d="M160 42 q22 -2 22 18 q0 20 -22 18 q-22 -2 -22 -18 q0 -20 22 -18 Z" i={2.2} />
      <P d="M152 60 l6 6 l12 -14" i={2.6} strokeWidth={1.8} />
    </Frame>
  );
}

/* ============================================================
   Per-system sketches — each case study gets its own narrative doodle.
   ============================================================ */

/* System 01 — screens chaining into a workflow */
export function WorkflowSketch({ className }: { className?: string }) {
  const screens = [
    { x: 30, y: 40 },
    { x: 130, y: 30 },
    { x: 230, y: 50 },
    { x: 200, y: 150 },
    { x: 90, y: 160 },
  ];
  return (
    <Frame viewBox="0 0 290 220" className={className}>
      {screens.map((s, i) => (
        <P key={i} d={`M${s.x} ${s.y} q30 -3 50 0 q3 18 0 34 q-25 3 -50 0 q-3 -16 0 -34 Z`} i={i * 0.3} />
      ))}
      {screens.map((s, i) => {
        const n = screens[(i + 1) % screens.length];
        return <P key={"c" + i} d={`M${s.x + 25} ${s.y + 17} Q${(s.x + n.x) / 2 + 18} ${(s.y + n.y) / 2} ${n.x + 25} ${n.y + 17}`} i={1.4 + i * 0.18} strokeWidth={1.4} opacity={0.55} />;
      })}
      <Label x={145} y={205} i={2}>screens → one system</Label>
    </Frame>
  );
}

/* System 02 — 40 minutes shrinking to 10 */
export function TimeSketch({ className }: { className?: string }) {
  return (
    <Frame viewBox="0 0 290 200" className={className}>
      <P d={describeWobblyCircle(70, 90, 50)} i={0} />
      <P d="M70 90 L70 52 M70 90 L98 104" i={0.8} strokeWidth={2.2} />
      <Label x={70} y={170} i={0}>40 min</Label>
      <P d="M140 90 L196 90" i={1.4} strokeWidth={1.8} />
      <P d="M196 90 l-12 -8 M196 90 l-12 8" i={1.7} strokeWidth={1.8} />
      <P d={describeWobblyCircle(238, 90, 30)} i={2} />
      <P d="M238 90 L238 68 M238 90 L254 98" i={2.6} strokeWidth={2} />
      <Label x={238} y={150} i={2} small>10 min</Label>
    </Frame>
  );
}

/* System 03 — a funnel that suddenly widens (conversion jump) */
export function FunnelSketch({ className }: { className?: string }) {
  return (
    <Frame viewBox="0 0 240 230" className={className}>
      <P d="M30 30 L210 30 L150 110 L150 160 L90 190 L90 110 Z" i={0} />
      <P d="M60 60 L180 60" i={1} strokeWidth={1.2} opacity={0.5} />
      <P d="M80 88 L160 88" i={1.2} strokeWidth={1.2} opacity={0.5} />
      <Label x={120} y={20} i={0} small>4.58%</Label>
      <P d="M120 195 q0 18 0 26" i={1.8} strokeWidth={1.8} />
      <P d="M120 221 l-7 -9 M120 221 l7 -9" i={2.1} strokeWidth={1.8} />
      <Label x={170} y={215} i={3}>10.57%</Label>
    </Frame>
  );
}

/* System 04 — a note that writes itself */
export function NoteSketch({ className }: { className?: string }) {
  return (
    <Frame viewBox="0 0 240 220" className={className}>
      <P d="M50 24 L170 24 Q190 24 190 44 L190 186 Q190 196 178 196 L62 196 Q50 196 50 184 Z" i={0} />
      <P d="M70 60 L168 58" i={0.8} strokeWidth={1.4} />
      <P d="M70 82 L150 81" i={1} strokeWidth={1.4} />
      <P d="M70 104 L168 103" i={1.2} strokeWidth={1.4} />
      <P d="M70 126 L130 125" i={1.4} strokeWidth={1.4} />
      <P d="M150 150 l8 10 l18 -24" i={1.8} strokeWidth={2.4} />
      <P d="M186 40 l4 -10 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 Z" i={2.2} strokeWidth={1.4} />
      <Label x={120} y={214} i={2} small>drafts itself</Label>
    </Frame>
  );
}

/* System 05 — compliance shield wired to government APIs */
export function ComplianceSketch({ className }: { className?: string }) {
  return (
    <Frame viewBox="0 0 260 220" className={className}>
      <P d="M130 26 Q170 44 196 44 Q200 120 130 168 Q60 120 64 44 Q90 44 130 26 Z" i={0} />
      <P d="M108 92 l16 18 l30 -40" i={1} strokeWidth={2.6} />
      <P d="M30 60 L62 70 M30 100 L60 100 M30 140 L66 126" i={1.6} strokeWidth={1.6} opacity={0.6} />
      <P d="M230 60 L198 70 M230 100 L200 100 M230 140 L194 126" i={2} strokeWidth={1.6} opacity={0.6} />
      <Label x={130} y={210} i={2}>compliant by design</Label>
    </Frame>
  );
}

/** Single named client component so RSC can resolve it across the boundary. */
export function CaseSketch({ slug, className }: { slug: string; className?: string }) {
  switch (slug) {
    case "ai-powered-iep-system":
      return <WorkflowSketch className={className} />;
    case "ai-worksheet-generator":
      return <TimeSketch className={className} />;
    case "instant-calling":
      return <FunnelSketch className={className} />;
    case "ai-progress-notes":
      return <NoteSketch className={className} />;
    case "abha-integration":
      return <ComplianceSketch className={className} />;
    default:
      return null;
  }
}

function describeWobblyCircle(cx: number, cy: number, r: number) {
  // a near-circle with hand-drawn overshoot at the start point
  const k = r * 0.5523;
  return [
    `M${cx} ${cy - r}`,
    `C${cx + k} ${cy - r} ${cx + r} ${cy - k} ${cx + r} ${cy}`,
    `C${cx + r} ${cy + k} ${cx + k} ${cy + r} ${cx} ${cy + r}`,
    `C${cx - k} ${cy + r} ${cx - r} ${cy + k} ${cx - r} ${cy}`,
    `C${cx - r} ${cy - k} ${cx - k} ${cy - r} ${cx + 3} ${cy - r + 1}`,
  ].join(" ");
}
