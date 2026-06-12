import Link from "next/link";
import { site } from "@/lib/site";
import { BrandMark } from "./nav";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-[var(--surface-sunk)]">
      <div className="mx-auto max-w-page px-gutter py-section-tight">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="group inline-flex items-center gap-3">
              <BrandMark />
              <span className="font-sans text-base font-semibold text-ink">Sancharini Basak</span>
            </Link>
            <p className="mt-6 max-w-xs font-display text-2xl leading-tight text-ink">
              Building systems.
              <br />
              <span className="serif-em">Still zooming out.</span>
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="eyebrow mb-1">Pages</p>
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} className="w-fit text-sm text-muted transition-colors hover:text-ink">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="eyebrow mb-1">Elsewhere</p>
            <a href={`mailto:${site.email}`} className="w-fit text-sm text-muted transition-colors hover:text-ink">
              Email
            </a>
            <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="w-fit text-sm text-muted transition-colors hover:text-ink">
              LinkedIn
            </a>
            <a href={site.socials.dribbble} target="_blank" rel="noreferrer" className="w-fit text-sm text-muted transition-colors hover:text-ink">
              Dribbble
            </a>
            <a href={site.socials.behance} target="_blank" rel="noreferrer" className="w-fit text-sm text-muted transition-colors hover:text-ink">
              Behance
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-2 border-t border-hairline pt-6 text-xs text-faint sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Sancharini Basak. Built as a system, not a template.</span>
          <span className="font-mono uppercase tracking-[0.14em]">Designer → PM → Builder → Product Leader</span>
        </div>
      </div>
    </footer>
  );
}
