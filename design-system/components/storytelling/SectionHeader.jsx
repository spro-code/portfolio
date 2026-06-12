import { Eyebrow } from "../core/Eyebrow.jsx";

/**
 * SectionHeader — eyebrow + serif title + lead. The opening of any
 * story section. Use `em` markup in `title` for italic emphasis.
 */
export function SectionHeader({
  eyebrow,
  eyebrowTone = "brand",
  title,
  lead,
  center = false,
  className = "",
  ...rest
}) {
  return (
    <header className={["as-section-header", center ? "as-section-header--center" : "", className].filter(Boolean).join(" ")} {...rest}>
      {eyebrow && <Eyebrow tone={eyebrowTone} rule>{eyebrow}</Eyebrow>}
      {typeof title === "string"
        ? <h2 className="as-section-header__title" dangerouslySetInnerHTML={{ __html: title }} />
        : <h2 className="as-section-header__title">{title}</h2>}
      {lead && <p className="as-section-header__lead">{lead}</p>}
    </header>
  );
}
