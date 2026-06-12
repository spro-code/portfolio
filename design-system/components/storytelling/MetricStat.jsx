import { Icon } from "../core/Icon.jsx";

/**
 * MetricStat — a large editorial number with label and optional delta.
 * Use inside a Metrics story block or a results grid.
 */
export function MetricStat({ value, unit, label, delta, deltaDir = "up", className = "", ...rest }) {
  return (
    <div className={["as-metric", className].filter(Boolean).join(" ")} {...rest}>
      <div className="as-metric__value">
        {value}{unit && <span className="as-metric__unit">{unit}</span>}
      </div>
      {label && <div className="as-metric__label">{label}</div>}
      {delta && (
        <div className={`as-metric__delta as-metric__delta--${deltaDir}`}>
          <Icon name={deltaDir === "up" ? "arrow-up-right" : "arrow-down-right"} size={14} />
          {delta}
        </div>
      )}
    </div>
  );
}
