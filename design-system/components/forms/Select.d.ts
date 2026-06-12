import * as React from "react";

export interface SelectOption { value: string; label: string; }
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Convenience array; alternatively pass <option> children */
  options?: SelectOption[];
  children?: React.ReactNode;
}
export function Select(props: SelectProps): JSX.Element;
