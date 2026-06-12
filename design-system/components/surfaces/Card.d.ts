import * as React from "react";

/**
 * @startingPoint section="Surfaces" subtitle="Surface container with elevation, hover lift & padding options" viewport="700x320"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "flat" | "sunk";
  interactive?: boolean;
  pad?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
