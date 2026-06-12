/**
 * Icon — renders a Lucide icon by name using currentColor.
 * Requires the host page to load Lucide UMD before _ds_bundle.js:
 *   <script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js"></script>
 */
export function Icon({ name, size = 20, strokeWidth = 1.85, className = "", style = {} }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = `<i data-lucide="${name}"></i>`;
    try {
      window.lucide.createIcons({
        attrs: { "stroke-width": strokeWidth, width: size, height: size },
        nameAttr: "data-lucide",
      });
    } catch (e) { /* lucide not ready */ }
  }, [name, size, strokeWidth]);

  return (
    <span
      ref={ref}
      className={className}
      aria-hidden="true"
      style={{ display: "inline-flex", width: size, height: size, lineHeight: 0, ...style }}
    />
  );
}
