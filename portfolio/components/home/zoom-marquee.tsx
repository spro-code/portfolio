"use client";

const phrase = ["Designer", "Users", "Products", "Systems", "Businesses", "Still zooming out"];

export function ZoomMarquee() {
  const seq = [...phrase, ...phrase];
  return (
    <div className="relative flex overflow-hidden border-y border-hairline bg-[var(--surface-sunk)] py-5 select-none">
      <div className="marquee-track flex shrink-0 items-center gap-8 whitespace-nowrap pr-8">
        {seq.map((word, i) => (
          <span key={i} className="flex items-center gap-8">
            <span
              className={`font-display text-2xl ${
                word === "Still zooming out" ? "serif-em" : "text-muted"
              }`}
            >
              {word}
            </span>
            <span className="text-accent" aria-hidden>
              ✳
            </span>
          </span>
        ))}
      </div>
      <div className="marquee-track flex shrink-0 items-center gap-8 whitespace-nowrap pr-8" aria-hidden>
        {seq.map((word, i) => (
          <span key={i} className="flex items-center gap-8">
            <span
              className={`font-display text-2xl ${
                word === "Still zooming out" ? "serif-em" : "text-muted"
              }`}
            >
              {word}
            </span>
            <span className="text-accent">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
