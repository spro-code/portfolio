"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ScreenSketch, PeopleSketch, SystemSketch, WavingGirl } from "@/components/sketches";
import { IdentityRotator } from "./identity-rotator";
import { ButtonLink, MagneticArrow } from "@/components/ui";

type Beat = {
  line: React.ReactNode;
  Sketch: (p: { className?: string }) => JSX.Element;
};

const beats: Beat[] = [
  {
    line: (
      <>
        I thought products were <span className="serif-em">screens</span>.
      </>
    ),
    Sketch: ScreenSketch,
  },
  {
    line: (
      <>
        Then I learned products are <span className="serif-em">people</span>.
      </>
    ),
    Sketch: PeopleSketch,
  },
  {
    line: (
      <>
        Then I learned products are <span className="serif-em">systems</span>.
      </>
    ),
    Sketch: SystemSketch,
  },
];

const TOTAL_MS = 6600; // full intro "load" duration (~2.2s per message)
const EASE = [0.16, 1, 0.3, 1] as const;

export function OpeningSequence() {
  const reduce = useReducedMotion();
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const raf = useRef<number>();

  useEffect(() => {
    if (reduce) {
      setPct(100);
      setDone(true);
      return;
    }
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(((now - start) / TOTAL_MS) * 100, 100);
      setPct(p);
      if (p >= 100) {
        setDone(true);
        return;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [reduce]);

  // Lock page scroll while the intro plays; release once the hero reveals.
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (done) {
      root.style.overflow = "";
      body.style.overflow = "";
      return;
    }
    window.scrollTo(0, 0);
    root.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      root.style.overflow = "";
      body.style.overflow = "";
    };
  }, [done]);

  const skip = () => {
    if (raf.current) cancelAnimationFrame(raf.current);
    setPct(100);
    setDone(true);
  };

  // which loading message is showing (clamped & NaN-safe)
  const safePct = Number.isFinite(pct) ? Math.max(0, Math.min(100, pct)) : 0;
  const idx = Math.min(
    Math.max(Math.floor((safePct / 100) * beats.length), 0),
    beats.length - 1,
  );
  const Sketch = (beats[idx] ?? beats[0]).Sketch;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden py-20">
      {/* Top loading bar */}
      <AnimatePresence>
        {!done && (
          <motion.div
            className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="h-full w-full bg-hairline-faint">
              <div
                className="h-full bg-accent transition-[width] duration-150 ease-linear"
                style={{ width: `${safePct}%` }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto w-full max-w-content px-gutter">
        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div
              key="loading"
              className="grid items-center gap-12 md:grid-cols-2 md:gap-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <div className="order-2 md:order-1">
                <span className="eyebrow text-accent">Loading · {Math.round(safePct)}%</span>
                <div className="mt-5 min-h-[2.4em]">
                  <AnimatePresence mode="wait">
                    <motion.h2
                      key={idx}
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.5, ease: EASE }}
                      className="max-w-xl font-display text-display font-medium leading-[1.05] text-ink"
                    >
                      {beats[idx].line}
                    </motion.h2>
                  </AnimatePresence>
                </div>
              </div>
              <div className="order-1 mx-auto w-full max-w-sm md:order-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: EASE }}
                  >
                    <Sketch />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="reveal"
              className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <div>
                <h2 className="font-display text-hero font-medium leading-[1.0] text-ink">
                  Hi, I&apos;m Sancharini.
                </h2>
                <p className="mt-6 font-display text-title-1 leading-tight text-muted">
                  I&apos;m a <IdentityRotator />
                </p>
                <div className="mt-10 max-w-md border-l-2 border-accent pl-5">
                  <p className="font-display text-title-2 leading-snug text-ink">
                    Building systems.
                    <br />
                    <span className="serif-em">Still zooming out.</span>
                  </p>
                </div>
                <div className="mt-10 flex flex-wrap gap-3">
                  <ButtonLink href="/work">See the systems</ButtonLink>
                  <ButtonLink href="/about" variant="ghost">
                    Read the story
                  </ButtonLink>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[20rem]">
                <WavingGirl />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Skip (while loading) */}
      <AnimatePresence>
        {!done && (
          <motion.button
            type="button"
            onClick={skip}
            data-cursor="pencil"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.16em] text-faint transition-colors hover:text-ink"
          >
            Skip intro
          </motion.button>
        )}
      </AnimatePresence>

      {/* Scroll cue (once revealed) */}
      <AnimatePresence>
        {done && (
          <motion.div
            className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-faint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="flex flex-col items-center gap-1 font-mono text-[10px] uppercase tracking-[0.16em]">
              Scroll <MagneticArrow />
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
