import * as React from "react";

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "default" | "brand" | "warm" | "on-dark";
  /** Show a leading hairline rule */
  rule?: boolean;
  children?: React.ReactNode;
}
export function Eyebrow(props: EyebrowProps): JSX.Element;
