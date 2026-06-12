import * as React from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL; falls back to initials from `name` */
  src?: string;
  /** Full name — used for initials and title */
  name?: string;
  size?: "sm" | "md" | "lg";
  square?: boolean;
}
export function Avatar(props: AvatarProps): JSX.Element;

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}
export function AvatarGroup(props: AvatarGroupProps): JSX.Element;
