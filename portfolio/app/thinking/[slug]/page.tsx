import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle, embedSrc } from "@/lib/thinking";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui";
import { accentColor } from "@/lib/accent";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getArticle(params.slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.dek,
    openGraph: { title: a.title, description: a.dek, type: "article", url: `${site.url}/thinking/${a.slug}` },
    twitter: { card: "summary_large_image", title: a.title, description: a.dek },
    alternates: { canonical: `${site.url}/thinking/${a.slug}` },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = getArticle(params.slug);
  if (!a) notFound();
  const color = accentColor(a.accent);

  return (
    <>
      <article className="mx-auto max-w-prose px-gutter pt-32">
        <Reveal>
          <Link href="/thinking" className="link-underline font-mono text-xs uppercase tracking-[0.14em] text-muted">
            ← All thinking
          </Link>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-8 flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.14em]" style={{ color }}>
              {a.kind}
            </span>
            <span className="font-mono text-xs text-faint">
              {a.readTime} · {a.date}
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-5 font-display text-display font-medium leading-[1.05] text-ink">{a.title}</h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 font-display text-title-2 italic leading-snug text-muted">{a.dek}</p>
        </Reveal>

        {a.resource && (
          <Reveal delay={0.2}>
            <div className="mt-8">
              <ButtonLink href={a.resource.url}>{a.resource.label}</ButtonLink>
            </div>
          </Reveal>
        )}

        <div className="mt-14 space-y-12">
          {a.body.map((section) => (
            <Reveal key={section.h}>
              <section>
                <h2 className="font-display text-title-2 font-medium text-ink">{section.h}</h2>
                <div className="mt-5 space-y-5">
                  {section.p.map((para, i) => (
                    <p key={i} className="text-xl leading-relaxed text-body">
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </article>

      {a.resource && (
        <section className="mx-auto mt-16 max-w-content px-gutter">
          <Reveal>
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="eyebrow mb-2">The artifact</p>
                <h2 className="font-display text-title-2 font-medium text-ink">
                  {a.resource.kind === "figma" ? "The full teardown" : "The full case study"}
                </h2>
              </div>
              <a
                href={a.resource.url}
                target="_blank"
                rel="noreferrer"
                className="link-underline font-mono text-xs uppercase tracking-[0.14em] text-accent"
              >
                Open in {a.resource.kind === "figma" ? "Figma" : "Notion"} ↗
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div
              className={`overflow-hidden rounded-xl border border-hairline bg-card shadow-sm ${
                a.resource.kind === "figma" ? "aspect-video" : "h-[80vh]"
              }`}
            >
              <iframe
                src={embedSrc(a.resource)}
                title={`${a.title} — embedded ${a.resource.kind}`}
                className="h-full w-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
          {a.resource.kind === "notion" && (
            <Reveal delay={0.1}>
              <p className="mt-3 text-sm text-faint">
                If the embed shows a sign-in wall, the Notion page needs “Share to web” enabled —
                use the “Open in Notion” link above in the meantime.
              </p>
            </Reveal>
          )}
        </section>
      )}

      <div className="mx-auto max-w-prose px-gutter pb-section">
        <Reveal>
          <div className="mt-16 border-t border-hairline pt-8">
            <p className="font-display text-title-3 italic text-muted">
              Building systems. <span className="serif-em">Still zooming out.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </>
  );
}
