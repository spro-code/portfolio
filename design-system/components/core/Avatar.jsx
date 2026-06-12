/**
 * Avatar — user/student identity. Renders an image, or initials fallback.
 * size: sm | md | lg ; shape via `square`.
 */
export function Avatar({ src, name = "", size = "md", square = false, className = "", ...rest }) {
  const cls = [
    "as-avatar",
    size !== "md" ? `as-avatar--${size}` : "",
    square ? "as-avatar--square" : "",
    className,
  ].filter(Boolean).join(" ");

  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();

  return (
    <span className={cls} title={name} {...rest}>
      {src ? <img src={src} alt={name} /> : <span>{initials || "?"}</span>}
    </span>
  );
}

/** AvatarGroup — overlapping stack of avatars. */
export function AvatarGroup({ children, className = "", ...rest }) {
  return (
    <span className={["as-avatar-group", className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </span>
  );
}
