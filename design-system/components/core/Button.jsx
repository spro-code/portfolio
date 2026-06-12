import { Icon } from "./Icon.jsx";

/**
 * Button — primary action control.
 * variant: primary | secondary | ghost | outline | danger | on-dark
 * size: sm | md | lg | xl
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,            // lucide icon name, leading
  iconAfter,       // lucide icon name, trailing
  block = false,
  disabled = false,
  type = "button",
  className = "",
  ...rest
}) {
  const cls = [
    "as-btn",
    `as-btn--${variant}`,
    size !== "md" ? `as-btn--${size}` : "",
    block ? "as-btn--block" : "",
    className,
  ].filter(Boolean).join(" ");

  const iconSize = size === "sm" ? 15 : size === "lg" ? 19 : size === "xl" ? 22 : 17;

  return (
    <button type={type} className={cls} disabled={disabled} {...rest}>
      {icon && <Icon name={icon} size={iconSize} />}
      {children}
      {iconAfter && <Icon name={iconAfter} size={iconSize} />}
    </button>
  );
}
