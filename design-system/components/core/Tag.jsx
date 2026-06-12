import { Icon } from "./Icon.jsx";

/**
 * Tag — pill-shaped filter / chip. Optionally selectable and removable.
 */
export function Tag({ children, selected = false, onRemove, className = "", ...rest }) {
  const cls = ["as-tag", selected ? "as-tag--selected" : "", className].filter(Boolean).join(" ");
  return (
    <span className={cls} {...rest}>
      {children}
      {onRemove && (
        <button type="button" className="as-tag__x" aria-label="Remove" onClick={onRemove}>
          <Icon name="x" size={13} />
        </button>
      )}
    </span>
  );
}
