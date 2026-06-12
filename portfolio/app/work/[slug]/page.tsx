import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { systems, getSystem } from "@/lib/systems";
import { CaseStudyView } from "@/components/case-study";
import { IepCaseStudy } from "@/components/iep/IepCaseStudy";
import { site } from "@/lib/site";

/** Slugs that get a bespoke, custom-built case study instead of the shared template. */
const BESPOKE = new Set(["ai-powered-iep-system"]);

export function generateStaticParams() {
  return systems.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = getSystem(params.slug);
  if (!study) return {};
  const title = `${study.title} — ${study.tagline}`;
  const description = study.summary;
  return {
    title: study.title,
    description,
    openGraph: {
      title,
      description,
      url: `${site.url}/work/${study.slug}`,
      type: "article",
    },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `${site.url}/work/${study.slug}` },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getSystem(params.slug);
  if (!study) notFound();
  const idx = systems.findIndex((s) => s.slug === params.slug);
  const next = systems[(idx + 1) % systems.length];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.summary,
    author: { "@type": "Person", name: site.name },
    url: `${site.url}/work/${study.slug}`,
  };

  return (
    <>
      {BESPOKE.has(study.slug) ? <IepCaseStudy /> : <CaseStudyView study={study} next={next} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </>
  );
}
