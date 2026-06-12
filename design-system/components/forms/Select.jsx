import { Icon } from "../core/Icon.jsx";

/**
 * Select — native dropdown with brand styling.
 * Pass <option> children or an `options` array of {value,label}.
 */
export function Select({ options, children, className = "", ...rest }) {
  return (
    <span className="as-select-wrap">
      <select className={["as-select", className].filter(Boolean).join(" ")} {...rest}>
        {options
          ? options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)
          : children}
      </select>
      <span className="as-select-wrap__chevron"><Icon name="chevron-down" size={16} /></span>
    </span>
  );
}
