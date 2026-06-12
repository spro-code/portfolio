import * as React from "react";

export interface JourneyStep {
  title: React.ReactNode;
  desc?: React.ReactNode;
  /** Lucide icon name (else step number shows) */
  icon?: string;
  state?: "done" | "active" | "upcoming";
}
export interface JourneyProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: JourneyStep[];
}
export function Journey(props: JourneyProps): JSX.Element;
