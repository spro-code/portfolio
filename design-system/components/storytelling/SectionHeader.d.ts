import * as React from "react";

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: React.ReactNode;
  eyebrowTone?: "default" | "brand" | "warm" | "on-dark";
  /** String (may contain <em>…</em>) or node */
  title?: React.ReactNode;
  lead?: React.ReactNode;
  center?: boolean;
}
export function SectionHeader(props: SectionHeaderProps): JSX.Element;
