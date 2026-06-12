import * as React from "react";

/**
 * @startingPoint section="Core" subtitle="Primary action control with variants, sizes & icons" viewport="700x260"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "danger" | "on-dark";
  size?: "sm" | "md" | "lg" | "xl";
  /** Lucide icon name, leading */
  icon?: string;
  /** Lucide icon name, trailing */
  iconAfter?: string;
  block?: boolean;
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
