import * as React from "react";

export interface MetricStatProps extends React.HTMLAttributes<HTMLDivElement> {
  value: React.ReactNode;
  unit?: React.ReactNode;
  label?: React.ReactNode;
  delta?: React.ReactNode;
  deltaDir?: "up" | "down";
}
export function MetricStat(props: MetricStatProps): JSX.Element;
