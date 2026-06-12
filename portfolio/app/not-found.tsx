import Link from "next/link";
import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center px-gutter">
      <div className="mx-auto max-w-content text-center">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Error 404</p>
        <h1 className="mt-6 font-display text-hero font-medium leading-[1.02] text-ink">
          You zoomed out <span className="serif-em">too far</span>.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-xl leading-relaxed text-body">
          This page isn&apos;t part of the system. Let&apos;s get you back to the story.
        </p>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/">Back home</ButtonLink>
        </div>
      </div>
    </section>
  );
}
