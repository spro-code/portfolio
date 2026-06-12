/**
 * Card — surface container.
 * variant: default | flat | sunk
 * interactive adds hover lift; pad adjusts padding.
 */
export function Card({
  children,
  variant = "default",
  interactive = false,
  pad = "md",
  className = "",
  ...rest
}) {
  const cls = [
    "as-card",
    variant !== "default" ? `as-card--${variant}` : "",
    interactive ? "as-card--interactive" : "",
    pad === "lg" ? "as-card--pad-lg" : pad === "sm" ? "as-card--pad-sm" : "",
    className,
  ].filter(Boolean).join(" ");
  return <div className={cls} {...rest}>{children}</div>;
}
