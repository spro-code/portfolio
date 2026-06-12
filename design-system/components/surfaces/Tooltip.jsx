/**
 * Tooltip — hover/focus bubble. Wraps a single trigger child.
 */
export function Tooltip({ label, children, className = "" }) {
  return (
    <span className={["as-tooltip", className].filter(Boolean).join(" ")} tabIndex={0}>
      {children}
      <span className="as-tooltip__bubble" role="tooltip">{label}</span>
    </span>
  );
}
