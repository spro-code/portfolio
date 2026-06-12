import { Icon } from "../core/Icon.jsx";

const KIND_META = {
  challenge:   { icon: "alert-triangle", label: "Challenge" },
  opportunity: { icon: "compass",        label: "Opportunity" },
  insight:     { icon: "lightbulb",      label: "Insight" },
  solution:    { icon: "check-circle-2", label: "Solution" },
  metrics:     { icon: "trending-up",    label: "Metrics" },
  learnings:   { icon: "book-open",      label: "Learnings" },
  future:      { icon: "telescope",      label: "Future Vision" },
};

/**
 * StoryModule — the reusable narrative content block.
 * kind: challenge | opportunity | insight | solution | metrics | learnings | future
 * Each kind carries its own accent color, icon, and default kicker.
 * Pass `points` for a checklist, or arbitrary `children`.
 */
export function StoryModule({
  kind = "insight",
  kicker,
  title,
  body,
  points,
  icon,
  children,
  className = "",
  ...rest
}) {
  const meta = KIND_META[kind] || KIND_META.insight;
  return (
    <article className={["as-story", `as-story--${kind}`, className].filter(Boolean).join(" ")} {...rest}>
      <div className="as-story__top">
        <span className="as-story__icon"><Icon name={icon || meta.icon} size={20} /></span>
        <span className="as-story__kicker">{kicker || meta.label}</span>
      </div>
      {title && <h3 className="as-story__title">{title}</h3>}
      {body && <p className="as-story__body">{body}</p>}
      {points && points.length > 0 && (
        <ul className="as-story__list">
          {points.map((p, i) => (
            <li key={i}><Icon name="check" size={16} />{p}</li>
          ))}
        </ul>
      )}
      {children}
    </article>
  );
}
