import { Icon } from "../core/Icon.jsx";

/**
 * Journey — vertical journey visualization for narrative flow
 * (discovery → research → insight → decision → execution → impact).
 * steps: [{ title, desc, icon?, state? }]  state: done | active | upcoming
 */
export function Journey({ steps = [], className = "", ...rest }) {
  return (
    <div className={["as-journey", className].filter(Boolean).join(" ")} {...rest}>
      {steps.map((s, i) => (
        <div
          key={i}
          className={[
            "as-journey__step",
            s.state === "active" ? "as-journey__step--active" : "",
            s.state === "done" ? "as-journey__step--done" : "",
          ].filter(Boolean).join(" ")}
        >
          <div className="as-journey__rail">
            <span className="as-journey__node">
              {s.icon ? <Icon name={s.icon} size={18} /> : i + 1}
            </span>
            <span className="as-journey__line" />
          </div>
          <div className="as-journey__body">
            <div className="as-journey__title">{s.title}</div>
            {s.desc && <div className="as-journey__desc">{s.desc}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}
