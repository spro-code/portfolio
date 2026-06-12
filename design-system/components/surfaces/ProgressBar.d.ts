import * as React from "react";

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 0–100 */
  value?: number;
  tone?: "brand" | "spring" | "warm";
  size?: "md" | "lg";
}
export function ProgressBar(props: ProgressBarProps): JSX.Element;
