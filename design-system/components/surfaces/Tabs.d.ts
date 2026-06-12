import * as React from "react";

export interface TabItem { value: string; label: React.ReactNode; icon?: string; }
export interface TabsProps {
  items: TabItem[];
  value?: string;
  onChange?: (value: string) => void;
  variant?: "segmented" | "underline";
  className?: string;
}
export function Tabs(props: TabsProps): JSX.Element;
