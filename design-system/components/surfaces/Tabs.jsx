import { Icon } from "../core/Icon.jsx";

/**
 * Tabs — segmented (default) or underline tab bar.
 * Controlled via `value` + `onChange`; items: [{value,label,icon?}]
 */
export function Tabs({ items = [], value, onChange, variant = "segmented", className = "" }) {
  const cls = [
    "as-tabs",
    variant === "underline" ? "as-tabs--underline" : "",
    className,
  ].filter(Boolean).join(" ");
  return (
    <div className={cls} role="tablist">
      {items.map((it) => (
        <button
          key={it.value}
          role="tab"
          aria-selected={value === it.value}
          className="as-tab"
          onClick={() => onChange && onChange(it.value)}
        >
          {it.icon && <Icon name={it.icon} size={15} />}
          {it.label}
        </button>
      ))}
    </div>
  );
}
