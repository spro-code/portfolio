import type { Metadata } from "next";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { ButtonLink, Eyebrow } from "@/components/ui";
import { ZoomRings, PeopleSketch } from "@/components/sketches";
import { Circled, MarginNote } from "@/components/doodles";
import { aboutSections } from "@/lib/content";
import { zoomOutLadder, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "From a tier-4 college gold medalist and designer to a systems-minded product manager and future founder. The human story behind the work.",
  alternates: { canonical: `${site.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 paper-edge" aria-hidden />
        <div className="relative mx-auto grid max-w-content items-center gap-12 px-gutter pb-section-tight pt-32 md:grid-cols-[1.3fr_1fr]">
          <div>
            <Reveal>
              <Eyebrow>About</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 max-w-2xl font-display text-hero font-medium leading-[1.02] text-ink">
                I kept{" "}
                <Circled>
                  <span className="serif-em">zooming out</span>
                </Circled>
                .
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-xl leading-relaxed text-body">
                This is the part that isn&apos;t on a resume — where I started, what curiosity cost
                me, and why I think in systems now.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="mx-auto w-full max-w-sm text-accent">
            <ZoomRings />
          </Reveal>
        </div>
      </section>

      {/* The zoom-out ladder */}
      <section className="border-y border-hairline bg-[var(--surface-sunk)]">
        <div className="mx-auto max-w-content px-gutter py-section-tight">
          <RevealGroup className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {zoomOutLadder.map((line, i) => (
              <RevealItem key={line}>
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-accent">{`0${i + 1}`}</span>
                  <p className="font-display text-title-3 leading-snug text-ink">{line}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Narrative sections */}
      <section className="mx-auto max-w-content px-gutter py-section">
        <div className="flex flex-col gap-y-section-tight">
          {aboutSections.map((s, i) => (
            <div key={s.title} className="grid gap-x-16 gap-y-4 md:grid-cols-[1fr_1.4fr]">
              <Reveal className="md:sticky md:top-24 md:self-start">
                <h2 className="font-display text-title-1 font-medium leading-tight text-ink">{s.title}</h2>
              </Reveal>
              <Reveal delay={0.05} className="max-w-prose">
                <p className="text-xl leading-relaxed text-body">{s.body}</p>
                {i === 2 && (
                  <div className="mt-10 w-full max-w-xs text-clay">
                    <PeopleSketch />
                    <p className="mt-3 text-center">
                      <MarginNote>a product is never just a product</MarginNote>
                    </p>
                  </div>
                )}
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-hairline">
        <div className="mx-auto max-w-content px-gutter py-section text-center">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-display text-display font-medium leading-[1.05] text-ink">
              The next zoom is from products to <span className="serif-em">companies</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/work">See the systems</ButtonLink>
              <ButtonLink href="/contact" variant="ghost">Say hello</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
