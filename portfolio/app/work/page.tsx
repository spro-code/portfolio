import type { Metadata } from "next";
import { systems } from "@/lib/systems";
import { SystemCard } from "@/components/system-card";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Five systems — from a special-education operating system to a behavior-led conversion rework. Not projects. Systems.",
  alternates: { canonical: `${site.url}/work` },
};

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 paper-edge" aria-hidden />
        <div className="relative mx-auto max-w-content px-gutter pb-section-tight pt-32">
          <Reveal>
            <Eyebrow>Selected work · 2022 — Now</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-3xl font-display text-hero font-medium leading-[1.02] text-ink">
              Not projects. <span className="serif-em">Systems</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-body">
              I don&apos;t ship features in isolation. Each of these is a chain — a single tap that
              rolls up to a workflow, a workflow that rolls up to a business. Open any one to read it
              as a documentary, not a report.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-content px-gutter pb-section">
        <div className="grid gap-6">
          {systems.map((s, i) => (
            <SystemCard key={s.slug} system={s} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
