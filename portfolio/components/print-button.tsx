"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      data-cursor="Resume →"
      className="group inline-flex h-12 items-center gap-2 rounded-md bg-accent px-6 font-sans text-sm font-medium text-[var(--accent-on)] shadow-sm transition-all duration-200 hover:bg-[var(--accent-hover)] active:scale-[0.985] print:hidden"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
      </svg>
      Download PDF
    </button>
  );
}
