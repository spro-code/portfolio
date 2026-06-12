"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out ${
        scrolled ? "border-b border-hairline bg-[var(--surface-page)]/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-page items-center justify-between px-gutter">
        <Link href="/" className="group flex items-center gap-3" aria-label="Sancharini Basak — home">
          <BrandMark />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-sans text-sm font-semibold text-ink">Sancharini Basak</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
              Product strategist
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {site.nav.slice(1).map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                data-cursor="Open →"
                className={`relative rounded-md px-3 py-2 font-sans text-sm transition-colors ${
                  active ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <div className="ml-2"><ThemeToggle /></div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-hairline text-ink"
          >
            <span className="flex flex-col gap-1">
              <span className={`h-px w-4 bg-current transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
              <span className={`h-px w-4 bg-current transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-hairline bg-[var(--surface-page)]/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col px-gutter py-4">
              {site.nav.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-hairline-faint py-3 font-display text-2xl text-ink last:border-0"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function BrandMark({ size = 30 }: { size?: number }) {
  return (
    <span
      className="grid place-items-center rounded-[8px] bg-accent text-[var(--accent-on)] transition-transform duration-300 ease-out group-hover:scale-105"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg width={size} height={size} viewBox="0 0 32 32">
        <text
          x="16"
          y="16"
          textAnchor="middle"
          dominantBaseline="central"
          fill="currentColor"
          style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 20, fontWeight: 500 }}
        >
          S
        </text>
      </svg>
    </span>
  );
}
