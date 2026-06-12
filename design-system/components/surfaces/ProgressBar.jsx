/**
 * ProgressBar — horizontal progress / goal completion.
 * tone: brand | spring | warm ; value 0–100
 */
export function ProgressBar({ value = 0, tone = "brand", size = "md", className = "", ...rest }) {
  const fillCls = [
    "as-progress__fill",
    tone === "spring" ? "as-progress__fill--spring" : tone === "warm" ? "as-progress__fill--warm" : "",
  ].filter(Boolean).join(" ");
  const v = Math.max(0, Math.min(100, value));
  return (
    <div
      className={["as-progress", size === "lg" ? "as-progress--lg" : "", className].filter(Boolean).join(" ")}
      role="progressbar"
      aria-valuenow={v}
      aria-valuemin={0}
      aria-valuemax={100}
      {...rest}
    >
      <div className={fillCls} style={{ width: `${v}%` }} />
    </div>
  );
}
