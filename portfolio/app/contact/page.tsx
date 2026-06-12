import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/ui";
import { CopyEmail } from "@/components/copy-email";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Let's build something ambitious. Reach Sancharini Basak by email, LinkedIn, Dribbble, or Behance.",
  alternates: { canonical: `${site.url}/contact` },
};

const channels = [
  { label: "LinkedIn", value: "Let's connect professionally", href: site.socials.linkedin },
  { label: "Dribbble", value: "Design explorations", href: site.socials.dribbble },
  { label: "Behance", value: "Selected case studies", href: site.socials.behance },
];

export default function ContactPage() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 paper-edge" aria-hidden />
      <div className="relative mx-auto max-w-content px-gutter pb-section pt-32">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-6 max-w-4xl font-display text-hero font-medium leading-[1.0] text-ink">
            Let&apos;s build something <span className="serif-em">ambitious</span>.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-body">
            Building a product, a team, or a company? I&apos;m most useful where users, business, and
            technology tangle together. If that&apos;s your problem, let&apos;s talk.
          </p>
        </Reveal>

        {/* Big email CTA */}
        <Reveal delay={0.15}>
          <div className="mt-16 border-t border-hairline pt-10">
            <p className="eyebrow mb-4">Email — the fastest way</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={`mailto:${site.email}`}
                data-cursor="Let's Build →"
                className="link-underline font-display text-[clamp(1.75rem,4vw,3rem)] font-medium leading-tight text-ink"
              >
                {site.email}
              </a>
              <CopyEmail email={site.email} />
            </div>
          </div>
        </Reveal>

        {/* Channels */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={0.05 * i}>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="Let's Build →"
                className="group flex h-full flex-col justify-between gap-8 bg-card p-7 transition-colors hover:bg-[var(--surface-card-2)]"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-title-3 font-medium text-ink">{c.label}</span>
                  <span className="text-faint transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </div>
                <span className="text-sm text-muted">{c.value}</span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-16 font-display text-title-2 italic leading-snug text-muted">
            Building systems. <span className="serif-em">Still zooming out.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
