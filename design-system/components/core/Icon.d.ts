import * as React from "react";

export interface IconProps {
  /** Lucide icon name, e.g. "target", "bar-chart-3" */
  name: string;
  /** Pixel size (width & height). Default 20. */
  size?: number;
  /** Stroke width. Default 1.85. */
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
}
export function Icon(props: IconProps): JSX.Element;
