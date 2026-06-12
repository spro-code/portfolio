"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/lib/systems";
import { accentColor } from "@/lib/accent";

export function SystemCard({ system, index }: { system: CaseStudy; index: number }) {
  const color = accentColor(system.accent);
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/work/${system.slug}`}
        data-cursor="View System →"
        className="group relative block overflow-hidden rounded-xl border border-hairline bg-card p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg sm:p-9"
        style={{ ["--rail" as string]: color }}
      >
        <span className="absolute inset-y-0 left-0 w-1 origin-left scale-x-100 transition-all duration-300 group-hover:w-1.5" style={{ background: color }} />
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm tabular-nums" style={{ color }}>
                System {system.num}
              </span>
              <span className="font-mono text-xs text-faint">{system.year}</span>
            </div>
            <h3 className="mt-3 font-display text-title-1 font-medium leading-tight text-ink">
              {system.title}
            </h3>
            <p className="mt-3 max-w-xl text-lg leading-snug text-muted">{system.tagline}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {system.focus.map((f) => (
                <span key={f} className="rounded-full border border-hairline px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-faint">
                  {f}
                </span>
              ))}
            </div>
          </div>
          <span
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-hairline text-ink transition-all duration-300 group-hover:border-transparent"
            style={{ background: "transparent" }}
          >
            <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </span>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-hairline pt-6 sm:grid-cols-4">
          {system.heroMetrics.map((m) => (
            <div key={m.label}>
              <div className="font-display text-2xl font-medium leading-none text-ink">{m.value}</div>
              <div className="mt-1.5 text-xs leading-tight text-faint">{m.label}</div>
            </div>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
