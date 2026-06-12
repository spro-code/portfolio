import { Avatar } from "../core/Avatar.jsx";

/**
 * PullQuote — editorial italic-serif quote with attribution.
 */
export function PullQuote({ children, name, role, avatarSrc, className = "", ...rest }) {
  return (
    <figure className={["as-quote", className].filter(Boolean).join(" ")} style={{ margin: 0 }} {...rest}>
      <blockquote className="as-quote__text" style={{ margin: 0 }}>{children}”</blockquote>
      {(name || role) && (
        <figcaption className="as-quote__attr">
          {(avatarSrc || name) && <Avatar src={avatarSrc} name={name} size="sm" />}
          <span className="as-quote__attr-text">
            {name && <span className="as-quote__attr-name">{name}</span>}
            {role && <span className="as-quote__attr-role">{role}</span>}
          </span>
        </figcaption>
      )}
    </figure>
  );
}
