/**
 * Eyebrow — editorial kicker label above section titles.
 * tone: default | brand | warm | on-dark
 * rule: show a leading hairline rule
 */
export function Eyebrow({ children, tone = "default", rule = false, className = "", ...rest }) {
  const cls = [
    "as-eyebrow-c",
    tone !== "default" ? `as-eyebrow-c--${tone}` : "",
    className,
  ].filter(Boolean).join(" ");
  return (
    <span className={cls} {...rest}>
      {rule && <span className="as-eyebrow-c__rule" />}
      {children}
    </span>
  );
}
