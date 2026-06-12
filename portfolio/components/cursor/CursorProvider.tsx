"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { useMotionValue } from "framer-motion";
import { usePathname } from "next/navigation";
import { CursorContext } from "./CursorContext";
import { Cursor } from "./Cursor";
import type { CursorApi, SectionLabelRule } from "./cursor.types";

/** Default discovery label per section. First match wins. */
const SECTION_RULES: SectionLabelRule[] = [
  { test: (p) => p === "/", label: "Explore →" },
  { test: (p) => p.startsWith("/work"), label: "System →" },
  { test: (p) => p.startsWith("/thinking"), label: "Read →" },
  { test: (p) => p.startsWith("/about"), label: "Story →" },
  { test: (p) => p.startsWith("/contact"), label: "Connect →" },
  { test: (p) => p.startsWith("/resume"), label: "Resume →" },
];

const sectionLabel = (pathname: string) =>
  SECTION_RULES.find((r) => r.test(pathname))?.label ?? "Explore →";

/** Elements that should trigger the hover circle. */
const INTERACTIVE = 'a, button, [role="button"], [data-cursor], summary, label';

export function CursorProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [enabled, setEnabled] = useState(false);
  const [override, setOverride] = useState<string | null>(null);
  const [hoverLabel, setHoverLabel] = useState<string | null>(null);
  const [scrolling, setScrolling] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // keep latest pathname available inside stable listeners
  const pathRef = useRef(pathname);
  pathRef.current = pathname;

  const setCursorText = useCallback((text: string | null) => setOverride(text), []);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return; // touch + reduced-motion keep the native cursor

    setEnabled(true);
    document.body.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const resolveTarget = (e: Event) =>
      (e.target instanceof Element ? e.target.closest(INTERACTIVE) : null) as Element | null;

    const onOver = (e: MouseEvent) => {
      const el = resolveTarget(e);
      if (!el) return;
      const explicit = el.getAttribute("data-cursor");
      setHoverLabel(explicit && explicit.trim() ? explicit : sectionLabel(pathRef.current));
    };
    const onOut = (e: MouseEvent) => {
      if (resolveTarget(e)) setHoverLabel(null);
    };

    let scrollTimer: number | undefined;
    const onScroll = () => {
      setScrolling(true);
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => setScrolling(false), 160);
    };

    const onLeave = () => {
      x.set(-100);
      y.set(-100);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      window.removeEventListener("scroll", onScroll);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.clearTimeout(scrollTimer);
    };
  }, [x, y]);

  // override (programmatic) wins over hovered element; null → default dot
  const label = override ?? hoverLabel;

  const api = useMemo<CursorApi>(() => ({ setCursorText }), [setCursorText]);

  return (
    <CursorContext.Provider value={api}>
      {children}
      <Cursor enabled={enabled} label={label} scrolling={scrolling} x={x} y={y} />
    </CursorContext.Provider>
  );
}
