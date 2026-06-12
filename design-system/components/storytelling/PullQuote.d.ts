import * as React from "react";

export interface PullQuoteProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  name?: React.ReactNode;
  role?: React.ReactNode;
  avatarSrc?: string;
}
export function PullQuote(props: PullQuoteProps): JSX.Element;
