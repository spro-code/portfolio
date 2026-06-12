"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Counter } from "@/components/ui";
import {
  iepMeta,
  chapters,
  metricWall,
  beforeWorkflow,
  painPoints,
  conversations,
  stakeholders,
  totalConversations,
  thoughtVsLearned,
  insightQuote,
  decision,
  configMatrix,
  architecture,
  aiDoes,
  aiDoesnt,
  aiPhilosophy,
  decisionsNotBuilt,
  launchCharts,
  outcomes,
  mistake,
  lessons,
  closingTakeaway,
} from "@/lib/iep";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ---------- small primitives ---------- */

function Rise({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

function Kicker({ num, children }: { num: string; children: ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="font-mono text-sm text-accent">{num}</span>
      <span className="h-px w-10 bg-accent" />
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">{children}</span>
    </div>
  );
}

function Section({
  id,
  children,
  className = "",
  tone = "paper",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "paper" | "sunk" | "dark";
}) {
  const toneClass =
    tone === "sunk"
      ? "bg-[var(--surface-sunk)] border-y border-hairline"
      : tone === "dark"
        ? "bg-evergreen-900 text-bone"
        : "";
  return (
    <section id={id} className={`scroll-mt-24 py-section ${toneClass} ${className}`}>
      <div className="mx-auto max-w-content px-gutter">{children}</div>
    </section>
  );
}

/* ---------- sticky chapter rail + reading progress ---------- */

function ReadingProgress({ targetRef }: { targetRef: React.RefObject<HTMLElement> }) {
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });
  return (
    <div className="fixed inset-x-0 top-16 z-40 h-[2px] bg-transparent">
      <motion.div className="h-full origin-left bg-accent" style={{ scaleX }} />
    </div>
  );
}

function ChapterRail() {
  const [active, setActive] = useState(chapters[0].id);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    chapters.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 2xl:block" aria-label="Chapters">
      <ul className="flex flex-col gap-1.5">
        {chapters.map((c) => {
          const on = c.id === active;
          return (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                data-cursor="Jump →"
                className="group flex items-center gap-3"
                aria-current={on ? "true" : undefined}
              >
                <span
                  className={`h-px transition-all duration-300 ${on ? "w-7 bg-accent" : "w-3.5 bg-hairline-strong group-hover:w-5 group-hover:bg-accent"}`}
                />
                <span
                  className={`font-mono text-[10px] uppercase tracking-[0.12em] transition-colors ${on ? "text-ink" : "text-faint group-hover:text-muted"}`}
                >
                  {c.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/* ---------- section-specific pieces ---------- */

function WorkflowDiagram() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-stretch">
      {beforeWorkflow.map((step, i) => (
        <Rise key={step} delay={i * 0.05}>
          <div className="flex flex-col items-center">
            <div
              className={`w-full rounded-lg border px-5 py-3 text-center font-sans text-sm ${
                i === 0
                  ? "border-[var(--warm)] bg-[var(--warm-soft)] font-medium text-ink"
                  : i === beforeWorkflow.length - 1
                    ? "border-[#B14730]/40 bg-[rgba(210,103,74,0.1)] font-medium text-ink"
                    : "border-hairline bg-card text-body"
              }`}
            >
              {step}
            </div>
            {i < beforeWorkflow.length - 1 && <span className="my-1.5 text-faint">↓</span>}
          </div>
        </Rise>
      ))}
    </div>
  );
}

function ChatThread() {
  const reduce = useReducedMotion();
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-4">
      {conversations.map((t, i) => {
        const mine = t.side === "me";
        return (
          <motion.div
            key={i}
            className={`flex flex-col ${mine ? "items-end" : "items-start"}`}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, x: mine ? 16 : -16 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -12% 0px" }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.06, ease: EASE }}
          >
            <span className="mb-1.5 px-1 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
              {t.speaker}
              {t.role ? ` · ${t.role}` : ""}
            </span>
            <p
              className={`max-w-[85%] rounded-2xl px-5 py-3.5 text-[17px] leading-relaxed ${
                mine
                  ? "rounded-br-md bg-accent text-[var(--accent-on)]"
                  : "rounded-bl-md border border-hairline bg-card text-body"
              }`}
            >
              {t.text}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}

function DecisionToggle({ d, open, onToggle }: { d: (typeof decisionsNotBuilt)[number]; open: boolean; onToggle: () => void }) {
  return (
    <div className="overflow-hidden rounded-xl border border-hairline bg-card">
      <button
        type="button"
        onClick={onToggle}
        data-cursor={open ? "Close" : "Open"}
        className="flex w-full items-center gap-5 p-6 text-left transition-colors hover:bg-[var(--surface-card-2)]"
        aria-expanded={open}
      >
        <span className="font-mono text-sm text-faint">{d.num}</span>
        <span className="flex-1 font-display text-title-3 font-medium text-ink">{d.title}</span>
        <span className={`text-2xl text-accent transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <p className="border-t border-hairline px-6 py-5 pl-[3.75rem] text-lg leading-relaxed text-muted">
              {d.tradeoff}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Bar({ label, fraction, caption, delay = 0 }: { label: string; fraction: number; caption: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-faint">{label}</span>
        <span className="font-display text-xl font-medium text-ink">{caption}</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-[var(--surface-sunk)]">
        <motion.div
          className="h-full rounded-full bg-accent"
          initial={{ width: reduce ? `${fraction * 100}%` : 0 }}
          whileInView={{ width: `${fraction * 100}%` }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 1, delay, ease: EASE }}
        />
      </div>
    </div>
  );
}

function AdoptionRing({ value }: { value: number }) {
  const reduce = useReducedMotion();
  const r = 52;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative grid h-40 w-40 place-items-center">
      <svg className="h-40 w-40 -rotate-90" viewBox="0 0 120 120" aria-hidden>
        <circle cx="60" cy="60" r={r} fill="none" stroke="var(--border-soft)" strokeWidth="6" />
        <motion.circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: reduce ? c * (1 - value / 100) : c }}
          whileInView={{ strokeDashoffset: c * (1 - value / 100) }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: EASE }}
        />
      </svg>
      <div className="absolute text-center">
        <div className="font-display text-3xl font-medium text-ink">
          <Counter value={value} suffix="%" />
        </div>
        <div className="mt-0.5 text-xs text-muted">AI adoption</div>
      </div>
    </div>
  );
}

/* ============================================================
   PAGE
   ============================================================ */

export function IepCaseStudy() {
  const ref = useRef<HTMLElement>(null);
  const [openDecision, setOpenDecision] = useState<string | null>("01");

  return (
    <article ref={ref}>
      <ReadingProgress targetRef={ref} />
      <ChapterRail />

      {/* ===== 01 · HERO ===== */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 paper-edge" aria-hidden />
        <div className="relative mx-auto max-w-content px-gutter pb-section-tight pt-32">
          <Rise>
            <Link href="/work" className="link-underline font-mono text-xs uppercase tracking-[0.14em] text-muted">
              ← All systems
            </Link>
          </Rise>
          <Rise delay={0.05}>
            <p className="mt-10 font-mono text-xs uppercase tracking-[0.18em] text-accent">
              System 01 · 2026 — Now · A product documentary
            </p>
          </Rise>
          <Rise delay={0.1}>
            <h1 className="mt-5 font-display text-[clamp(3.5rem,9vw,8rem)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
              AbleSpace <span className="serif-em">IEP</span>
            </h1>
          </Rise>
          <Rise delay={0.15}>
            <p className="mt-8 max-w-2xl text-2xl leading-snug text-muted">{iepMeta.subtitle}</p>
          </Rise>
          <Rise delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-2">
              {iepMeta.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-hairline px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </Rise>
        </div>

        {/* hero quote band */}
        <div className="border-y border-hairline bg-[var(--surface-sunk)]">
          <div className="mx-auto max-w-content px-gutter py-section-tight">
            <Rise>
              <p className="max-w-4xl font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-medium italic leading-[1.2] text-ink">
                “The challenge wasn&apos;t building an IEP system. The challenge was building one that{" "}
                <span className="text-accent">every district believed was built specifically for them.</span>”
              </p>
            </Rise>
          </div>
        </div>
      </header>

      {/* ===== 02 · WHY THIS EXISTED ===== */}
      <Section id="why">
        <Kicker num="01">Why this project existed</Kicker>
        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[1.1fr_1fr]">
          <Rise>
            <h2 className="font-display text-display font-medium leading-[1.05] text-ink">
              AbleSpace was already succeeding. But there was one workflow we didn&apos;t own.
            </h2>
          </Rise>
          <Rise delay={0.05} className="max-w-prose self-end">
            <p className="text-xl leading-relaxed text-body">
              Thousands of schools already trusted us for data collection and progress monitoring. The
              irony: the most important document in special education — the IEP itself — still lived in
              someone else&apos;s software. We were a passenger in the workflow we cared about most.
            </p>
          </Rise>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline md:grid-cols-3 lg:grid-cols-5">
          {metricWall.map((m, i) => (
            <Rise key={m.label} delay={(i % 5) * 0.06}>
              <div className="h-full bg-card p-7">
                <div className="font-display text-[clamp(2.25rem,4vw,3.25rem)] font-medium leading-none text-ink">
                  <Counter value={m.value} suffix={m.suffix} />
                </div>
                <div className="mt-3 text-sm text-muted">{m.label}</div>
              </div>
            </Rise>
          ))}
        </div>
      </Section>

      {/* ===== 03 · THE INVISIBLE PROBLEM ===== */}
      <Section id="problem" tone="sunk">
        <Kicker num="02">The invisible problem</Kicker>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <Rise>
              <h2 className="max-w-xl font-display text-display font-medium leading-[1.05] text-ink">
                Two systems. One workflow. Endless re-entry.
              </h2>
            </Rise>
            <Rise delay={0.05}>
              <p className="mt-6 max-w-prose text-xl leading-relaxed text-body">
                Schools were forced into external IEP systems — Frontline, SameGoal, EasyIEP — then asked
                to do everything else in AbleSpace. The gap between the two became a nightly tax paid in
                duplicate data and engineering firefighting.
              </p>
            </Rise>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {painPoints.map((p, i) => (
                <Rise key={p.who} delay={i * 0.06}>
                  <div className="h-full rounded-lg border border-hairline bg-card p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">{p.who}</p>
                    <p className="mt-2.5 text-lg leading-snug text-ink">“{p.quote}”</p>
                  </div>
                </Rise>
              ))}
            </div>
          </div>
          <div>
            <Rise>
              <p className="eyebrow mb-6 text-center">Before AbleSpace IEP</p>
            </Rise>
            <WorkflowDiagram />
          </div>
        </div>
      </Section>

      {/* ===== 04 · CONVERSATIONS ===== */}
      <Section id="conversations">
        <Kicker num="03">Conversations that changed the product</Kicker>
        <Rise>
          <h2 className="mx-auto mb-12 max-w-2xl text-center font-display text-display font-medium leading-[1.05] text-ink">
            The roadmap didn&apos;t come from a deck. It came from <span className="serif-em">rooms</span>.
          </h2>
        </Rise>
        <ChatThread />
        <Rise delay={0.1}>
          <p className="mx-auto mt-12 max-w-xl text-center text-lg italic text-muted">
            The same sentence kept surfacing in different words: don&apos;t make me change how I work.
          </p>
        </Rise>
      </Section>

      {/* ===== 05 · DISCOVERY ===== */}
      <Section id="discovery" tone="sunk">
        <Kicker num="04">Discovery</Kicker>
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <Rise>
            <h2 className="max-w-xl font-display text-display font-medium leading-[1.05] text-ink">
              {totalConversations} conversations before a single line of product.
            </h2>
          </Rise>
          <Rise delay={0.05}>
            <div className="font-display text-[clamp(3.5rem,7vw,5.5rem)] font-medium leading-none text-accent">
              <Counter value={totalConversations} />
            </div>
          </Rise>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {stakeholders.map((s, i) => (
            <Rise key={s.role} delay={i * 0.05}>
              <div className="h-full bg-card p-6">
                <div className="font-display text-3xl font-medium text-ink">
                  <Counter value={s.n} />
                </div>
                <div className="mt-2 text-sm leading-snug text-muted">{s.role}</div>
              </div>
            </Rise>
          ))}
        </div>

        <Rise className="mt-16">
          <p className="eyebrow mb-6">What we thought · vs · what we learned</p>
        </Rise>
        <div className="overflow-hidden rounded-xl border border-hairline">
          <div className="grid grid-cols-2 bg-card">
            <div className="border-b border-r border-hairline p-4 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
              What we thought
            </div>
            <div className="border-b border-hairline p-4 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
              What we learned
            </div>
            {thoughtVsLearned.map((row, i) => (
              <div key={i} className="contents">
                <div
                  className={`border-r border-hairline p-5 text-base text-muted line-through decoration-[var(--border-strong)] ${i < thoughtVsLearned.length - 1 ? "border-b" : ""}`}
                >
                  {row.thought}
                </div>
                <div
                  className={`p-5 text-base font-medium text-ink ${i < thoughtVsLearned.length - 1 ? "border-b border-hairline" : ""}`}
                >
                  {row.learned}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== 06 · THE INSIGHT ===== */}
      <Section id="insight" tone="dark" className="text-center">
        <Rise>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#6FE3AE]">The turn</p>
        </Rise>
        <Rise delay={0.1}>
          <blockquote className="mx-auto mt-8 max-w-4xl font-display text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.1] text-bone">
            Districts don&apos;t want different software.{" "}
            <span className="italic text-[#6FE3AE]">They want the same software, configured differently.</span>
          </blockquote>
        </Rise>
        <Rise delay={0.2}>
          <p className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-[rgba(244,239,229,0.7)]">
            One sentence reframed the entire project. We weren&apos;t in the IEP-forms business. We were in
            the business of making one product feel like a hundred bespoke ones.
          </p>
        </Rise>
      </Section>

      {/* ===== 07 · THE DECISION ===== */}
      <Section id="decision">
        <Kicker num="06">The biggest decision</Kicker>
        <Rise>
          <h2 className="max-w-2xl font-display text-display font-medium leading-[1.05] text-ink">
            Ship fast for one state, or build slow for all of them.
          </h2>
        </Rise>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[decision.optionA, decision.optionB].map((opt, idx) => {
            const chosen = (idx === 0 && decision.chose === "A") || (idx === 1 && decision.chose === "B");
            return (
              <Rise key={opt.title} delay={idx * 0.08}>
                <div
                  className={`relative flex h-full flex-col rounded-xl border p-7 ${
                    chosen ? "border-accent bg-accent-soft shadow-md" : "border-hairline bg-card"
                  }`}
                >
                  {chosen && (
                    <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--accent-on)]">
                      We chose this
                    </span>
                  )}
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">{opt.label}</p>
                  <h3 className="mt-2 font-display text-title-2 font-medium text-ink">{opt.title}</h3>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div>
                      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--success)]">Pros</p>
                      <ul className="space-y-2">
                        {opt.pros.map((p) => (
                          <li key={p} className="flex gap-2 text-sm leading-snug text-body">
                            <span className="text-[var(--success)]">+</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#B14730]">Cons</p>
                      <ul className="space-y-2">
                        {opt.cons.map((c) => (
                          <li key={c} className="flex gap-2 text-sm leading-snug text-muted">
                            <span className="text-[#B14730]">−</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Rise>
            );
          })}
        </div>

        <Rise delay={0.1}>
          <div className="mt-10 rounded-xl border-l-2 border-accent bg-card p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">The reasoning</p>
            <p className="mt-3 max-w-3xl font-display text-title-3 leading-snug text-ink">{decision.reasoning}</p>
          </div>
        </Rise>
      </Section>

      {/* ===== 08 · WHAT BECAME CONFIGURABLE ===== */}
      <Section id="configurable" tone="sunk">
        <Kicker num="07">What became configurable</Kicker>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Rise>
            <h2 className="font-display text-display font-medium leading-[1.05] text-ink">
              If a district could imagine it, it became a setting.
            </h2>
            <p className="mt-6 max-w-prose text-xl leading-relaxed text-body">
              Not a fork. Not a feature flag graveyard. Ten dimensions of the product that every district
              could shape into their own — without an engineer in the loop.
            </p>
          </Rise>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2">
            {configMatrix.map((row, i) => (
              <Rise key={row} delay={(i % 4) * 0.05}>
                <div className="flex h-full items-center justify-between gap-3 bg-card p-5">
                  <span className="font-sans text-base text-ink">{row}</span>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--success)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-spring" />
                    Configurable
                  </span>
                </div>
              </Rise>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== 09 · ARCHITECTURE ===== */}
      <Section id="architecture">
        <Kicker num="08">A product that builds products</Kicker>
        <Rise>
          <h2 className="mb-14 max-w-2xl font-display text-display font-medium leading-[1.05] text-ink">
            One engine. A bespoke product at the end of it.
          </h2>
        </Rise>
        <div className="mx-auto flex max-w-3xl flex-col">
          {architecture.map((a, i) => (
            <Rise key={a.node} delay={i * 0.06}>
              <div className="flex flex-col items-center">
                <div className="flex w-full items-center gap-5 rounded-xl border border-hairline bg-card p-5 sm:p-6">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-accent font-mono text-xs text-accent">
                    {i + 1}
                  </span>
                  <span className="font-display text-title-3 font-medium text-ink">{a.node}</span>
                  <span className="ml-auto hidden max-w-[16rem] text-right text-sm text-muted sm:block">{a.note}</span>
                </div>
                {i < architecture.length - 1 && <span className="my-2 text-xl text-accent">↓</span>}
              </div>
            </Rise>
          ))}
        </div>
      </Section>

      {/* ===== 10 · AI DECISIONS ===== */}
      <Section id="ai" tone="sunk">
        <Kicker num="09">AI decisions</Kicker>
        <Rise>
          <h2 className="max-w-2xl font-display text-display font-medium leading-[1.05] text-ink">
            AI drafts. Humans decide.
          </h2>
        </Rise>
        <Rise delay={0.05}>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-body">{aiPhilosophy}</p>
        </Rise>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Rise>
            <div className="h-full rounded-xl border border-accent/30 bg-accent-soft p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">What AI does</p>
              <ul className="mt-5 space-y-5">
                {aiDoes.map((a) => (
                  <li key={a.title}>
                    <p className="font-sans text-lg font-medium text-ink">{a.title}</p>
                    <p className="mt-0.5 text-sm text-muted">{a.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Rise>
          <Rise delay={0.08}>
            <div className="h-full rounded-xl border border-hairline bg-card p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#B14730]">What AI doesn&apos;t do</p>
              <ul className="mt-5 space-y-5">
                {aiDoesnt.map((a) => (
                  <li key={a.title}>
                    <p className="font-sans text-lg font-medium text-ink">{a.title}</p>
                    <p className="mt-0.5 text-sm text-muted">{a.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Rise>
        </div>
      </Section>

      {/* ===== 11 · WHAT WE DIDN'T BUILD ===== */}
      <Section id="not-built">
        <Kicker num="10">What we deliberately didn&apos;t build</Kicker>
        <Rise>
          <h2 className="mb-12 max-w-2xl font-display text-display font-medium leading-[1.05] text-ink">
            The roadmap is also a list of <span className="serif-em">no</span>.
          </h2>
        </Rise>
        <div className="grid gap-3">
          {decisionsNotBuilt.map((d) => (
            <Rise key={d.num}>
              <DecisionToggle
                d={d}
                open={openDecision === d.num}
                onToggle={() => setOpenDecision(openDecision === d.num ? null : d.num)}
              />
            </Rise>
          ))}
        </div>
      </Section>

      {/* ===== 12 · LAUNCH & ADOPTION ===== */}
      <Section id="launch" tone="sunk">
        <Kicker num="11">Launch &amp; adoption</Kicker>
        <Rise>
          <h2 className="mb-12 max-w-2xl font-display text-display font-medium leading-[1.05] text-ink">
            The numbers caught up with the bet.
          </h2>
        </Rise>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <Rise>
            <div className="rounded-xl border border-hairline bg-card p-8">
              <p className="eyebrow mb-8">IEP creation time</p>
              <div className="space-y-7">
                <Bar label="Before" fraction={1} caption="2 months" />
                <Bar label="After" fraction={0.5} caption="1 month" delay={0.2} />
              </div>
              <p className="mt-8 border-t border-hairline pt-5 font-display text-title-3 text-ink">
                <span className="text-accent">50% faster</span> to a finished, compliant IEP.
              </p>
            </div>
          </Rise>
          <div className="grid grid-cols-2 gap-6">
            <Rise delay={0.05} className="col-span-2 sm:col-span-1">
              <div className="flex h-full flex-col items-center justify-center rounded-xl border border-hairline bg-card p-6">
                <AdoptionRing value={launchCharts.aiAdoption} />
              </div>
            </Rise>
            <Rise delay={0.1} className="col-span-2 grid gap-6 sm:col-span-1">
              <div className="rounded-xl border border-hairline bg-card p-6">
                <div className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-medium leading-none text-ink">
                  <Counter value={launchCharts.districts} />
                </div>
                <div className="mt-2 text-sm text-muted">Districts live</div>
                <div className="mt-3 flex flex-wrap gap-1">
                  {Array.from({ length: launchCharts.districts }).map((_, i) => (
                    <span key={i} className="h-1.5 w-1.5 rounded-full bg-spring/70" />
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-hairline bg-card p-6">
                <div className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-medium leading-none text-ink">
                  <Counter value={launchCharts.ieps} suffix="+" />
                </div>
                <div className="mt-2 text-sm text-muted">IEPs created</div>
              </div>
            </Rise>
          </div>
        </div>
      </Section>

      {/* ===== 13 · UNEXPECTED OUTCOMES ===== */}
      <Section id="outcomes">
        <Kicker num="12">Unexpected outcomes</Kicker>
        <Rise>
          <h2 className="mb-12 max-w-2xl font-display text-display font-medium leading-[1.05] text-ink">
            The things we didn&apos;t plan for.
          </h2>
        </Rise>
        <div className="grid gap-6 md:grid-cols-2">
          {outcomes.map((o, i) => (
            <Rise key={o.title} delay={i * 0.06}>
              <div className="h-full rounded-xl border border-hairline bg-card p-7">
                <span className="font-mono text-sm text-accent">{`0${i + 1}`}</span>
                <h3 className="mt-3 font-display text-title-2 font-medium leading-tight text-ink">{o.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{o.note}</p>
              </div>
            </Rise>
          ))}
        </div>
      </Section>

      {/* ===== 14 · MISTAKES ===== */}
      <Section id="mistakes" tone="dark">
        <Kicker num="13">What I&apos;d do differently</Kicker>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Rise>
            <h2 className="font-display text-display font-medium leading-[1.05] text-bone">
              I optimized for <span className="italic text-[#6FE3AE]">certainty</span>.
            </h2>
          </Rise>
          <Rise delay={0.08}>
            <p className="max-w-prose text-2xl leading-relaxed text-[rgba(244,239,229,0.86)]">{mistake.body}</p>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-[rgba(244,239,229,0.5)]">
              The lesson I'm still learning
            </p>
          </Rise>
        </div>
      </Section>

      {/* ===== 15 · LESSONS ===== */}
      <Section id="lessons">
        <Kicker num="14">Lessons</Kicker>
        <div className="space-y-12">
          {lessons.map((l, i) => (
            <Rise key={l} delay={i * 0.05}>
              <blockquote className="border-l-2 border-accent pl-6">
                <span className="font-mono text-sm text-faint">{`0${i + 1}`}</span>
                <p className="mt-2 max-w-4xl font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-medium leading-[1.15] text-ink">
                  {l}
                </p>
              </blockquote>
            </Rise>
          ))}
        </div>

        <Rise delay={0.1}>
          <div className="mt-20 rounded-xl bg-evergreen-900 p-10 text-center sm:p-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6FE3AE]">The takeaway</p>
            <p className="mx-auto mt-6 max-w-3xl font-display text-[clamp(1.75rem,3.6vw,2.75rem)] font-medium leading-[1.15] text-bone">
              {closingTakeaway}
            </p>
          </div>
        </Rise>
      </Section>

      {/* ===== FOOTER NAV ===== */}
      <section className="border-t border-hairline bg-[var(--surface-sunk)]">
        <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-6 px-gutter py-section-tight sm:flex-row sm:items-center">
          <div>
            <p className="eyebrow mb-2">Next system</p>
            <Link
              href="/work/ai-worksheet-generator"
              data-cursor="View System →"
              className="font-display text-title-1 font-medium text-ink transition-colors hover:text-accent"
            >
              AI Worksheet Generator →
            </Link>
          </div>
          <Link
            href="/contact"
            data-cursor="Let's Build →"
            className="group inline-flex h-12 items-center gap-2 rounded-md bg-accent px-6 font-sans text-sm font-medium text-[var(--accent-on)] shadow-sm transition-all hover:bg-[var(--accent-hover)]"
          >
            Work with me
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
