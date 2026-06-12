import { Icon } from "../core/Icon.jsx";

/**
 * Input — single-line text field with optional leading icon.
 */
export function Input({ icon, invalid = false, className = "", ...rest }) {
  const input = (
    <input
      className={["as-input", className].filter(Boolean).join(" ")}
      aria-invalid={invalid || undefined}
      {...rest}
    />
  );
  if (!icon) return input;
  return (
    <span className="as-input-wrap">
      <span className="as-input-wrap__icon"><Icon name={icon} size={16} /></span>
      {input}
    </span>
  );
}

/** Textarea — multi-line text field. */
export function Textarea({ invalid = false, className = "", ...rest }) {
  return (
    <textarea
      className={["as-textarea", className].filter(Boolean).join(" ")}
      aria-invalid={invalid || undefined}
      {...rest}
    />
  );
}
