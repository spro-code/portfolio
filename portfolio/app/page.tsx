import Link from "next/link";
import { OpeningSequence } from "@/components/home/opening-sequence";
import { ZoomMarquee } from "@/components/home/zoom-marquee";
import { ImpactSection } from "@/components/impact-section";
import { SystemCard } from "@/components/system-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { ButtonLink, Eyebrow, SectionLabel } from "@/components/ui";
import { CuriosityTrail } from "@/components/sketches";
import { Circled, Underlined, MarginNote, ArrowDoodle } from "@/components/doodles";
import { systems } from "@/lib/systems";
import { chapter1, timeline, exposures, principles } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* ===== Opening documentary ===== */}
      <OpeningSequence />

      <ZoomMarquee />

      {/* ===== Chapter 1 — Curiosity ===== */}
      <section className="mx-auto max-w-content px-gutter py-section">
        <SectionLabel index="01" label="Chapter 01 — Curiosity" />
        <div className="grid gap-12 md:grid-cols-[1fr_0.7fr] md:gap-16">
          <div>
            <Reveal>
              <h2 className="max-w-xl font-display text-display font-medium leading-[1.05] text-ink">
                {chapter1.title}
              </h2>
            </Reveal>
            <RevealGroup className="mt-8 max-w-xl space-y-5">
              {chapter1.story.map((line) => (
                <RevealItem key={line}>
                  <p className="text-xl leading-relaxed text-body">{line}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
          <Reveal delay={0.1} className="flex items-center justify-center">
            <div className="relative w-full max-w-[320px] text-clay">
              <ArrowDoodle className="absolute -left-8 -top-6 hidden h-10 w-12 -scale-x-100 lg:block" />
              <CuriosityTrail />
              <p className="mt-4 text-center">
                <MarginNote>the picture kept getting bigger</MarginNote>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Chapter 2 — Learning to zoom out ===== */}
      <section className="border-t border-hairline bg-[var(--surface-sunk)]">
        <div className="mx-auto max-w-content px-gutter py-section">
          <SectionLabel index="02" label="Chapter 02 — Learning to zoom out" />
          <Reveal>
            <h2 className="max-w-2xl font-display text-display font-medium leading-[1.05] text-ink">
              I kept asking <span className="serif-em">bigger</span> questions.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-body">
              Working in startups meant there was rarely a clear lane to stay in. One day I was
              designing screens, the next I was speaking to users, tracking metrics, or helping shape
              product decisions. Looking back, those experiences mattered more than the titles
              themselves.
            </p>
          </Reveal>

          {/* Timeline */}
          <ol className="mt-14 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((step, i) => (
              <RevealGroup key={step.role} className="h-full bg-card">
                <RevealItem className="h-full">
                  <li className="flex h-full flex-col p-7">
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{step.year}</span>
                    <span className="mt-4 block min-h-[2.6em] font-display text-title-3 font-medium leading-snug text-ink">
                      {step.role}
                    </span>
                    <span className="mt-3 block text-sm leading-relaxed text-muted">{step.note}</span>
                    <span className="mt-auto pt-6 font-mono text-2xl text-faint">{`0${i + 1}`}</span>
                  </li>
                </RevealItem>
              </RevealGroup>
            ))}
          </ol>

          {/* Exposures */}
          <Reveal className="mt-14">
            <p className="eyebrow mb-5">One role, seven classrooms</p>
            <div className="flex flex-wrap gap-3">
              {exposures.map((e) => (
                <span key={e} className="rounded-full border border-hairline bg-card px-5 py-2.5 font-sans text-sm text-body">
                  {e}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Chapter 3 — What I believe ===== */}
      <section className="mx-auto max-w-content px-gutter py-section">
        <SectionLabel index="03" label="Chapter 03 — What I believe" />
        <Reveal>
          <h2 className="max-w-2xl font-display text-display font-medium leading-[1.05] text-ink">
            Three things I refuse to{" "}
            <Circled>
              <span className="serif-em">compromise</span>
            </Circled>{" "}
            on.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-xl border border-hairline bg-card p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
                <span className="font-mono text-sm text-accent">{p.num}</span>
                <h3 className="mt-4 block min-h-[2.4em] font-display text-title-2 font-medium leading-[1.15] text-ink">
                  {p.title}
                </h3>
                <p className="mt-4 block text-base leading-relaxed text-body lg:min-h-[6.5em]">{p.body}</p>
                <ul className="mt-6 space-y-2 border-t border-hairline pt-5">
                  {p.proof.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-muted">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-spring" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== Chapter 4 — Impact ===== */}
      <ImpactSection />

      {/* ===== Chapter 5 — Featured systems ===== */}
      <section className="mx-auto max-w-content px-gutter py-section">
        <SectionLabel index="05" label="Chapter 05 — Featured systems" />
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <h2 className="max-w-2xl font-display text-display font-medium leading-[1.05] text-ink">
              Not projects.{" "}
              <Underlined>
                <span className="serif-em">Systems</span>
              </Underlined>
              .
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/work" className="link-underline font-sans text-sm font-medium text-accent">
              View all systems →
            </Link>
          </Reveal>
        </div>
        <Reveal delay={0.05}>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-body">
            Looking back, each system marks a different stage of my journey. New responsibilities,
            bigger problems, and a lot of back-and-forth before finding what worked.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6">
          {systems.map((s, i) => (
            <SystemCard key={s.slug} system={s} index={i} />
          ))}
        </div>
      </section>

      {/* ===== Closing CTA ===== */}
      <section className="border-t border-hairline">
        <div className="mx-auto max-w-content px-gutter py-section text-center">
          <Reveal>
            <Eyebrow className="justify-center">The zoom-out continues</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-display font-medium leading-[1.05] text-ink">
              I started by designing screens. I&apos;m building systems now.
              <br />
              <span className="serif-em">Companies next.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contact">Let&apos;s build something ambitious</ButtonLink>
              <ButtonLink href="/resume" variant="ghost">
                See the resume
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
