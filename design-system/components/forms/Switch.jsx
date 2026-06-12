/**
 * Switch — on/off toggle with optional label.
 */
export function Switch({ label, className = "", ...rest }) {
  return (
    <label className={["as-switch", className].filter(Boolean).join(" ")}>
      <input type="checkbox" role="switch" {...rest} />
      <span className="as-switch__track" />
      {label && <span>{label}</span>}
    </label>
  );
}
