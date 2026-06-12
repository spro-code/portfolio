import { Icon } from "./Icon.jsx";

/**
 * IconButton — square, icon-only button. Pair with a Tooltip / aria-label.
 * variant: primary | secondary | ghost | outline | danger
 * size: sm | md | lg
 */
export function IconButton({
  icon,
  variant = "ghost",
  size = "md",
  label,
  disabled = false,
  className = "",
  ...rest
}) {
  const cls = [
    "as-btn", "as-btn--icon",
    `as-btn--${variant}`,
    size !== "md" ? `as-btn--${size}` : "",
    className,
  ].filter(Boolean).join(" ");
  const iconSize = size === "sm" ? 15 : size === "lg" ? 20 : 18;
  return (
    <button type="button" className={cls} aria-label={label} title={label} disabled={disabled} {...rest}>
      <Icon name={icon} size={iconSize} />
    </button>
  );
}
