import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/thinking";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/ui";
import { accentColor } from "@/lib/accent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thinking",
  description:
    "How I think, not just how I execute — product teardowns, builds, and flow critiques in an editorial format.",
  alternates: { canonical: `${site.url}/thinking` },
};

export default function ThinkingPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 paper-edge" aria-hidden />
        <div className="relative mx-auto max-w-content px-gutter pb-section-tight pt-32">
          <Reveal>
            <Eyebrow>Thinking</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-3xl font-display text-hero font-medium leading-[1.02] text-ink">
              How I <span className="serif-em">think</span>, not just how I ship.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-body">
              Teardowns, builds, and critiques. The execution lives in the case studies — this is the
              reasoning underneath it. More pieces will land here over time.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-content px-gutter pb-section">
        <div className="grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.05}>
              <Link
                href={`/thinking/${a.slug}`}
                data-cursor="Read →"
                className="group flex flex-col gap-4 bg-card p-8 transition-colors hover:bg-[var(--surface-card-2)] sm:flex-row sm:items-center sm:justify-between sm:p-10"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.14em]" style={{ color: accentColor(a.accent) }}>
                      {a.kind}
                    </span>
                    <span className="font-mono text-xs text-faint">{a.readTime}</span>
                    {a.resource && (
                      <span className="rounded-full border border-hairline px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                        {a.resource.kind === "figma" ? "Figma ↗" : "Notion ↗"}
                      </span>
                    )}
                  </div>
                  <h2 className="mt-3 font-display text-title-1 font-medium leading-tight text-ink transition-colors group-hover:text-accent">
                    {a.title}
                  </h2>
                  <p className="mt-3 text-lg leading-snug text-muted">{a.dek}</p>
                </div>
                <span className="font-display text-3xl text-faint transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
