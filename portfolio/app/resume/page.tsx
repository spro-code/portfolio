import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/ui";
import { PrintButton } from "@/components/print-button";
import { experience, leadership, education, skills } from "@/lib/resume";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Sancharini Basak — Product Manager building AI-powered systems. Experience, leadership, education, and skills. Building systems. Still zooming out.",
  alternates: { canonical: `${site.url}/resume` },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-hairline py-10 first:border-0">
      <div className="grid gap-6 md:grid-cols-[180px_1fr] md:gap-10">
        <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-faint">{title}</h2>
        <div>{children}</div>
      </div>
    </section>
  );
}

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-content px-gutter pb-section pt-32">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-hairline pb-10">
        <div>
          <Reveal>
            <Eyebrow>Resume</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 font-display text-display font-medium leading-[1.05] text-ink">Sancharini Basak</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 font-display text-title-2 italic text-muted">Building systems. Still zooming out.</p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 font-sans text-sm text-muted">
              Product Manager · AI Systems ·{" "}
              <a href={`mailto:${site.email}`} className="link-underline text-accent">
                {site.email}
              </a>
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <PrintButton />
        </Reveal>
      </div>

      <Section title="Work experience">
        <div className="space-y-12">
          {experience.map((job, i) => (
            <Reveal key={job.role + job.org} delay={i * 0.04}>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-title-2 font-medium text-ink">{job.role}</h3>
                  <span className="font-mono text-xs text-faint">
                    {job.period} · {job.location}
                  </span>
                </div>
                <p className="mt-1 font-sans text-base font-medium text-accent">{job.org}</p>
                <p className="mt-1 text-sm italic text-muted">{job.blurb}</p>
                <ul className="mt-5 space-y-3.5">
                  {job.points.map((pt) => (
                    <li key={pt.label} className="flex gap-3 text-base leading-relaxed text-body">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-spring" />
                      <span>
                        <span className="font-semibold text-ink">{pt.label}.</span> {pt.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title="Leadership">
        <div className="space-y-6">
          {leadership.map((l) => (
            <Reveal key={l.role}>
              <div>
                <h3 className="font-display text-title-3 font-medium text-ink">{l.role}</h3>
                <p className="mt-2 text-base leading-relaxed text-body">{l.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title="Education">
        {education.map((e) => (
          <Reveal key={e.school}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-title-3 font-medium text-ink">{e.school}</h3>
              <span className="font-mono text-xs text-faint">
                {e.period} · {e.location}
              </span>
            </div>
            <p className="mt-1 text-base text-accent">{e.detail}</p>
          </Reveal>
        ))}
      </Section>

      <Section title="Skills">
        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.04}>
              <div>
                <h3 className="font-sans text-sm font-semibold text-ink">{s.group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span key={item} className="rounded-full border border-hairline px-3 py-1 text-xs text-body">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
