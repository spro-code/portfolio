/**
 * Badge — compact status / category label.
 * tone: neutral | brand | success | warning | danger | info | warm | solid
 */
export function Badge({ children, tone = "neutral", dot = false, className = "", ...rest }) {
  const cls = ["as-badge", `as-badge--${tone}`, className].filter(Boolean).join(" ");
  return (
    <span className={cls} {...rest}>
      {dot && <span className="as-badge__dot" />}
      {children}
    </span>
  );
}
