import * as React from "react";

export type StoryKind =
  | "challenge" | "opportunity" | "insight" | "solution"
  | "metrics" | "learnings" | "future";

/**
 * @startingPoint section="Storytelling" subtitle="Reusable narrative block — Challenge, Insight, Solution, Metrics & more" viewport="700x300"
 */
export interface StoryModuleProps extends React.HTMLAttributes<HTMLElement> {
  kind?: StoryKind;
  /** Override the kicker label (defaults to the kind's name) */
  kicker?: React.ReactNode;
  title?: React.ReactNode;
  body?: React.ReactNode;
  /** Renders a checklist */
  points?: string[];
  /** Override the kind's default Lucide icon */
  icon?: string;
  children?: React.ReactNode;
}
export function StoryModule(props: StoryModuleProps): JSX.Element;
