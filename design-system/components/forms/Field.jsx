/**
 * Field — label + control + hint/error wrapper.
 */
export function Field({ label, hint, error, htmlFor, children, className = "", ...rest }) {
  return (
    <div className={["as-field", className].filter(Boolean).join(" ")} {...rest}>
      {label && <label className="as-field__label" htmlFor={htmlFor}>{label}</label>}
      {children}
      {error
        ? <span className="as-field__error">{error}</span>
        : hint ? <span className="as-field__hint">{hint}</span> : null}
    </div>
  );
}
