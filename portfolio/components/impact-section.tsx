"use client";

import { motion } from "framer-motion";
import { impactMetrics } from "@/lib/content";
import { Counter } from "./ui";

export function ImpactSection() {
  return (
    <section className="bg-evergreen-900 text-bone">
      <div className="mx-auto max-w-content px-gutter py-section">
        <div className="mb-14 flex items-center gap-4">
          <span className="font-mono text-sm text-[var(--interactive)]">04</span>
          <span className="h-px flex-1 bg-[rgba(244,239,229,0.18)]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[rgba(244,239,229,0.6)]">
            Chapter 04 — Impact
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl font-display text-display font-medium leading-[1.05] text-bone"
        >
          Outcomes first.
          <br />
          <span style={{ fontStyle: "italic", color: "#6FE3AE" }}>Then</span> the projects.
        </motion.h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-[rgba(244,239,229,0.72)]">
          A metric only earns its place when it means something for a real person — a teacher&apos;s
          evening, a student served, a user who finally got help.
        </p>

        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {impactMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="min-w-0 border-t border-[rgba(244,239,229,0.18)] pt-5"
            >
              <div className="flex min-h-[clamp(2.75rem,5vw,4rem)] items-end font-display font-medium leading-none text-bone">
                {m.display ? (
                  <span className="whitespace-nowrap text-[clamp(1.75rem,2.6vw,2.5rem)]">{m.display}</span>
                ) : (
                  <span className="text-[clamp(2.75rem,5vw,4rem)]">
                    <Counter value={m.value ?? 0} suffix={m.suffix} />
                  </span>
                )}
              </div>
              <div className="mt-3 font-sans text-base font-medium text-bone">{m.label}</div>
              <div className="mt-1 text-sm text-[rgba(244,239,229,0.6)]">{m.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
