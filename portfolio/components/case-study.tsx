import Link from "next/link";
import type { CaseStudy } from "@/lib/systems";
import { Reveal, RevealGroup, RevealItem } from "./reveal";
import { ButtonLink } from "./ui";
import { accentColor } from "@/lib/accent";
import { CaseSketch } from "./sketches";

function Chapter({
  n,
  label,
  children,
  color,
}: {
  n: string;
  label: string;
  children: React.ReactNode;
  color: string;
}) {
  return (
    <section className="border-t border-hairline py-section-tight">
      <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-12">
        <div className="md:sticky md:top-24 md:self-start">
          <div className="flex items-center gap-3 md:flex-col md:items-start">
            <span className="font-mono text-sm" style={{ color }}>
              {n}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">{label}</span>
          </div>
        </div>
        <div className="max-w-prose">{children}</div>
      </div>
    </section>
  );
}

function Para({ children }: { children: React.ReactNode }) {
  return <p className="text-xl leading-relaxed text-body">{children}</p>;
}

function List({ items, color }: { items: readonly string[]; color: string }) {
  return (
    <RevealGroup className="space-y-4">
      {items.map((item) => (
        <RevealItem key={item}>
          <li className="flex gap-3.5 text-lg leading-relaxed text-body">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: color }} />
            <span>{item}</span>
          </li>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

export function CaseStudyView({ study, next }: { study: CaseStudy; next: CaseStudy }) {
  const color = accentColor(study.accent);

  return (
    <article>
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 paper-edge" aria-hidden />
        <div className="relative mx-auto grid max-w-content items-center gap-10 px-gutter pb-section-tight pt-32 md:grid-cols-[1.25fr_0.75fr]">
          <div>
            <Reveal>
              <Link href="/work" className="link-underline font-mono text-xs uppercase tracking-[0.14em] text-muted">
                ← All systems
              </Link>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mt-8 flex items-center gap-3">
                <span className="font-mono text-sm" style={{ color }}>
                  System {study.num}
                </span>
                <span className="h-px w-10" style={{ background: color }} />
                <span className="font-mono text-xs text-faint">{study.year}</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 max-w-3xl font-display text-hero font-medium leading-[1.02] text-ink">
                {study.title}
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl font-display text-title-1 italic leading-snug text-muted">
                {study.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-x-12 gap-y-5">
                <div>
                  <p className="eyebrow mb-2">Role</p>
                  <p className="font-sans text-base text-ink">{study.role}</p>
                </div>
                <div>
                  <p className="eyebrow mb-2">Focus</p>
                  <div className="flex flex-wrap gap-2">
                    {study.focus.map((f) => (
                      <span key={f} className="rounded-full border border-hairline px-3 py-1 text-xs text-body">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="mx-auto w-full max-w-xs md:max-w-none" style={{ color }}>
            <CaseSketch slug={study.slug} />
          </Reveal>
        </div>
      </header>

      {/* Hero metrics band */}
      <div className="bg-evergreen-900 text-bone">
        <div className="mx-auto grid max-w-content grid-cols-2 gap-x-6 gap-y-8 px-gutter py-12 sm:grid-cols-4">
          {study.heroMetrics.map((m) => (
            <Reveal key={m.label}>
              <div>
                <div className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-none text-bone">
                  {m.value}
                </div>
                <div className="mt-2 text-sm text-[rgba(244,239,229,0.66)]">{m.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-content px-gutter">
        <Chapter n="01" label="Overview" color={color}>
          <Reveal><Para>{study.overview}</Para></Reveal>
        </Chapter>

        <Chapter n="02" label="The Problem" color={color}>
          <Reveal><Para>{study.problem}</Para></Reveal>
        </Chapter>

        <Chapter n="03" label="Research" color={color}>
          <List items={study.research} color={color} />
        </Chapter>

        <Chapter n="04" label="Insights" color={color}>
          <RevealGroup className="space-y-6">
            {study.insights.map((ins, i) => (
              <RevealItem key={ins}>
                <div className="rounded-lg border border-hairline bg-card p-6">
                  <span className="font-mono text-xs" style={{ color }}>{`Insight 0${i + 1}`}</span>
                  <p className="mt-3 font-display text-title-3 leading-snug text-ink">{ins}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Chapter>

        <Chapter n="05" label="Constraints" color={color}>
          <List items={study.constraints} color={color} />
        </Chapter>

        <Chapter n="06" label="Solution" color={color}>
          <Reveal><Para>{study.solution}</Para></Reveal>
        </Chapter>

        <Chapter n="07" label="Execution" color={color}>
          <ol className="space-y-6">
            {study.execution.map((step, i) => (
              <Reveal key={step} delay={i * 0.05}>
                <li className="flex gap-5">
                  <span className="font-display text-3xl font-medium leading-none text-faint">{`0${i + 1}`}</span>
                  <p className="pt-1 text-lg leading-relaxed text-body">{step}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Chapter>

        <Chapter n="08" label="Impact" color={color}>
          <div className="grid gap-8 sm:grid-cols-2">
            {study.impact.map((m) => (
              <Reveal key={m.label}>
                <div className="border-t-2 pt-4" style={{ borderColor: color }}>
                  <div className="font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-none text-ink">
                    {m.value}
                  </div>
                  <div className="mt-3 text-base text-muted">{m.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Chapter>

        <Chapter n="09" label="Learnings" color={color}>
          <List items={study.learnings} color={color} />
        </Chapter>

        <Chapter n="10" label="Reflection" color={color}>
          <Reveal>
            <blockquote className="border-l-2 pl-6" style={{ borderColor: color }}>
              <p className="font-display text-title-1 italic leading-snug text-ink">{study.reflection}</p>
            </blockquote>
          </Reveal>
        </Chapter>
      </div>

      {/* Next system */}
      <section className="border-t border-hairline bg-[var(--surface-sunk)]">
        <div className="mx-auto max-w-content px-gutter py-section-tight">
          <p className="eyebrow mb-4">Next system</p>
          <Link href={`/work/${next.slug}`} className="group flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="font-mono text-sm" style={{ color: accentColor(next.accent) }}>
                System {next.num}
              </span>
              <h2 className="mt-2 font-display text-display font-medium leading-tight text-ink transition-colors group-hover:text-accent">
                {next.title}
              </h2>
              <p className="mt-2 max-w-xl text-lg text-muted">{next.tagline}</p>
            </div>
            <span className="font-display text-4xl text-faint transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <div className="mt-12">
            <ButtonLink href="/contact" variant="ghost">Work with me</ButtonLink>
          </div>
        </div>
      </section>
    </article>
  );
}
