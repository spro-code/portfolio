import * as React from "react";

export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
  /** Lucide icon name */
  icon: string;
  variant?: "primary" | "secondary" | "ghost" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  /** Accessible label (also used as title) */
  label?: string;
}
export function IconButton(props: IconButtonProps): JSX.Element;
