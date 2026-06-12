import { Icon } from "../core/Icon.jsx";

/**
 * Checkbox — labeled checkbox. `radio` renders the radio variant.
 */
export function Checkbox({ label, radio = false, className = "", ...rest }) {
  return (
    <label className={["as-check", radio ? "as-check--radio" : "", className].filter(Boolean).join(" ")}>
      <input type={radio ? "radio" : "checkbox"} {...rest} />
      <span className="as-check__box">{!radio && <Icon name="check" size={14} />}</span>
      {label && <span>{label}</span>}
    </label>
  );
}

/** Radio — convenience alias for Checkbox with radio styling. */
export function Radio(props) {
  return <Checkbox radio {...props} />;
}
