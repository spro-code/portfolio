import * as React from "react";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  /** Render as a radio button */
  radio?: boolean;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
export function Radio(props: CheckboxProps): JSX.Element;
