/* @ds-bundle: {"format":3,"namespace":"AbleSpaceDesignSystem_737c4f","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Radio","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Journey","sourcePath":"components/storytelling/Journey.jsx"},{"name":"MetricStat","sourcePath":"components/storytelling/MetricStat.jsx"},{"name":"PullQuote","sourcePath":"components/storytelling/PullQuote.jsx"},{"name":"SectionHeader","sourcePath":"components/storytelling/SectionHeader.jsx"},{"name":"StoryModule","sourcePath":"components/storytelling/StoryModule.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"ProgressBar","sourcePath":"components/surfaces/ProgressBar.jsx"},{"name":"Tabs","sourcePath":"components/surfaces/Tabs.jsx"},{"name":"Tooltip","sourcePath":"components/surfaces/Tooltip.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"9e0d79e3083c","components/core/Badge.jsx":"0989271f2aae","components/core/Button.jsx":"0114530d8ba5","components/core/Eyebrow.jsx":"61ac1fca26c5","components/core/Icon.jsx":"0a82d1bea83a","components/core/IconButton.jsx":"fbfa540e3e14","components/core/Tag.jsx":"449a81689d44","components/forms/Checkbox.jsx":"1a00995c5cf5","components/forms/Field.jsx":"d8be5df46303","components/forms/Input.jsx":"ec9312e7408a","components/forms/Select.jsx":"5f47d289a403","components/forms/Switch.jsx":"7abdce3a1b9d","components/storytelling/Journey.jsx":"f3b1c0062681","components/storytelling/MetricStat.jsx":"75b6f62aae5a","components/storytelling/PullQuote.jsx":"524dcfa3354e","components/storytelling/SectionHeader.jsx":"6268967022d3","components/storytelling/StoryModule.jsx":"4f106ea6204c","components/surfaces/Card.jsx":"5f031f4cff9f","components/surfaces/ProgressBar.jsx":"4fbde490a6c5","components/surfaces/Tabs.jsx":"ece8fdea017f","components/surfaces/Tooltip.jsx":"3818790f5562","ui_kits/marketing/SectionsA.jsx":"758a8e94f15d","ui_kits/marketing/SectionsB.jsx":"c5074e62b515","ui_kits/web_app/CaseloadScreen.jsx":"d381e58eebec","ui_kits/web_app/CollectDrawer.jsx":"1f3d816986ad","ui_kits/web_app/DashboardScreen.jsx":"840971da272b","ui_kits/web_app/Sidebar.jsx":"8ce742eefda8","ui_kits/web_app/StudentScreen.jsx":"953c1eb72f13","ui_kits/web_app/TopBar.jsx":"9e7bf5f37191","ui_kits/web_app/data.js":"bbc504aad57b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AbleSpaceDesignSystem_737c4f = window.AbleSpaceDesignSystem_737c4f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — user/student identity. Renders an image, or initials fallback.
 * size: sm | md | lg ; shape via `square`.
 */
function Avatar({
  src,
  name = "",
  size = "md",
  square = false,
  className = "",
  ...rest
}) {
  const cls = ["as-avatar", size !== "md" ? `as-avatar--${size}` : "", square ? "as-avatar--square" : "", className].filter(Boolean).join(" ");
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(p => p[0]).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    title: name
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : /*#__PURE__*/React.createElement("span", null, initials || "?"));
}

/** AvatarGroup — overlapping stack of avatars. */
function AvatarGroup({
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["as-avatar-group", className].filter(Boolean).join(" ")
  }, rest), children);
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — compact status / category label.
 * tone: neutral | brand | success | warning | danger | info | warm | solid
 */
function Badge({
  children,
  tone = "neutral",
  dot = false,
  className = "",
  ...rest
}) {
  const cls = ["as-badge", `as-badge--${tone}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "as-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — editorial kicker label above section titles.
 * tone: default | brand | warm | on-dark
 * rule: show a leading hairline rule
 */
function Eyebrow({
  children,
  tone = "default",
  rule = false,
  className = "",
  ...rest
}) {
  const cls = ["as-eyebrow-c", tone !== "default" ? `as-eyebrow-c--${tone}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    className: "as-eyebrow-c__rule"
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/**
 * Icon — renders a Lucide icon by name using currentColor.
 * Requires the host page to load Lucide UMD before _ds_bundle.js:
 *   <script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js"></script>
 */
function Icon({
  name,
  size = 20,
  strokeWidth = 1.85,
  className = "",
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = `<i data-lucide="${name}"></i>`;
    try {
      window.lucide.createIcons({
        attrs: {
          "stroke-width": strokeWidth,
          width: size,
          height: size
        },
        nameAttr: "data-lucide"
      });
    } catch (e) {/* lucide not ready */}
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: className,
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      lineHeight: 0,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary action control.
 * variant: primary | secondary | ghost | outline | danger | on-dark
 * size: sm | md | lg | xl
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  // lucide icon name, leading
  iconAfter,
  // lucide icon name, trailing
  block = false,
  disabled = false,
  type = "button",
  className = "",
  ...rest
}) {
  const cls = ["as-btn", `as-btn--${variant}`, size !== "md" ? `as-btn--${size}` : "", block ? "as-btn--block" : "", className].filter(Boolean).join(" ");
  const iconSize = size === "sm" ? 15 : size === "lg" ? 19 : size === "xl" ? 22 : 17;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: disabled
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize
  }), children, iconAfter && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: iconSize
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — square, icon-only button. Pair with a Tooltip / aria-label.
 * variant: primary | secondary | ghost | outline | danger
 * size: sm | md | lg
 */
function IconButton({
  icon,
  variant = "ghost",
  size = "md",
  label,
  disabled = false,
  className = "",
  ...rest
}) {
  const cls = ["as-btn", "as-btn--icon", `as-btn--${variant}`, size !== "md" ? `as-btn--${size}` : "", className].filter(Boolean).join(" ");
  const iconSize = size === "sm" ? 15 : size === "lg" ? 20 : 18;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label,
    title: label,
    disabled: disabled
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — pill-shaped filter / chip. Optionally selectable and removable.
 */
function Tag({
  children,
  selected = false,
  onRemove,
  className = "",
  ...rest
}) {
  const cls = ["as-tag", selected ? "as-tag--selected" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "as-tag__x",
    "aria-label": "Remove",
    onClick: onRemove
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 13
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox — labeled checkbox. `radio` renders the radio variant.
 */
function Checkbox({
  label,
  radio = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["as-check", radio ? "as-check--radio" : "", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: radio ? "radio" : "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "as-check__box"
  }, !radio && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}

/** Radio — convenience alias for Checkbox with radio styling. */
function Radio(props) {
  return /*#__PURE__*/React.createElement(Checkbox, _extends({
    radio: true
  }, props));
}
Object.assign(__ds_scope, { Checkbox, Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Field — label + control + hint/error wrapper.
 */
function Field({
  label,
  hint,
  error,
  htmlFor,
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["as-field", className].filter(Boolean).join(" ")
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    className: "as-field__label",
    htmlFor: htmlFor
  }, label), children, error ? /*#__PURE__*/React.createElement("span", {
    className: "as-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "as-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — single-line text field with optional leading icon.
 */
function Input({
  icon,
  invalid = false,
  className = "",
  ...rest
}) {
  const input = /*#__PURE__*/React.createElement("input", _extends({
    className: ["as-input", className].filter(Boolean).join(" "),
    "aria-invalid": invalid || undefined
  }, rest));
  if (!icon) return input;
  return /*#__PURE__*/React.createElement("span", {
    className: "as-input-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "as-input-wrap__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  })), input);
}

/** Textarea — multi-line text field. */
function Textarea({
  invalid = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: ["as-textarea", className].filter(Boolean).join(" "),
    "aria-invalid": invalid || undefined
  }, rest));
}
Object.assign(__ds_scope, { Input, Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — native dropdown with brand styling.
 * Pass <option> children or an `options` array of {value,label}.
 */
function Select({
  options,
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "as-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: ["as-select", className].filter(Boolean).join(" ")
  }, rest), options ? options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)) : children), /*#__PURE__*/React.createElement("span", {
    className: "as-select-wrap__chevron"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Switch — on/off toggle with optional label.
 */
function Switch({
  label,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["as-switch", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "as-switch__track"
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/storytelling/Journey.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Journey — vertical journey visualization for narrative flow
 * (discovery → research → insight → decision → execution → impact).
 * steps: [{ title, desc, icon?, state? }]  state: done | active | upcoming
 */
function Journey({
  steps = [],
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["as-journey", className].filter(Boolean).join(" ")
  }, rest), steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: ["as-journey__step", s.state === "active" ? "as-journey__step--active" : "", s.state === "done" ? "as-journey__step--done" : ""].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("div", {
    className: "as-journey__rail"
  }, /*#__PURE__*/React.createElement("span", {
    className: "as-journey__node"
  }, s.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 18
  }) : i + 1), /*#__PURE__*/React.createElement("span", {
    className: "as-journey__line"
  })), /*#__PURE__*/React.createElement("div", {
    className: "as-journey__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "as-journey__title"
  }, s.title), s.desc && /*#__PURE__*/React.createElement("div", {
    className: "as-journey__desc"
  }, s.desc)))));
}
Object.assign(__ds_scope, { Journey });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/storytelling/Journey.jsx", error: String((e && e.message) || e) }); }

// components/storytelling/MetricStat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MetricStat — a large editorial number with label and optional delta.
 * Use inside a Metrics story block or a results grid.
 */
function MetricStat({
  value,
  unit,
  label,
  delta,
  deltaDir = "up",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["as-metric", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "as-metric__value"
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    className: "as-metric__unit"
  }, unit)), label && /*#__PURE__*/React.createElement("div", {
    className: "as-metric__label"
  }, label), delta && /*#__PURE__*/React.createElement("div", {
    className: `as-metric__delta as-metric__delta--${deltaDir}`
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: deltaDir === "up" ? "arrow-up-right" : "arrow-down-right",
    size: 14
  }), delta));
}
Object.assign(__ds_scope, { MetricStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/storytelling/MetricStat.jsx", error: String((e && e.message) || e) }); }

// components/storytelling/PullQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PullQuote — editorial italic-serif quote with attribution.
 */
function PullQuote({
  children,
  name,
  role,
  avatarSrc,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: ["as-quote", className].filter(Boolean).join(" "),
    style: {
      margin: 0
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    className: "as-quote__text",
    style: {
      margin: 0
    }
  }, children, "\u201D"), (name || role) && /*#__PURE__*/React.createElement("figcaption", {
    className: "as-quote__attr"
  }, (avatarSrc || name) && /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: avatarSrc,
    name: name,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    className: "as-quote__attr-text"
  }, name && /*#__PURE__*/React.createElement("span", {
    className: "as-quote__attr-name"
  }, name), role && /*#__PURE__*/React.createElement("span", {
    className: "as-quote__attr-role"
  }, role))));
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/storytelling/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/storytelling/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionHeader — eyebrow + serif title + lead. The opening of any
 * story section. Use `em` markup in `title` for italic emphasis.
 */
function SectionHeader({
  eyebrow,
  eyebrowTone = "brand",
  title,
  lead,
  center = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    className: ["as-section-header", center ? "as-section-header--center" : "", className].filter(Boolean).join(" ")
  }, rest), eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: eyebrowTone,
    rule: true
  }, eyebrow), typeof title === "string" ? /*#__PURE__*/React.createElement("h2", {
    className: "as-section-header__title",
    dangerouslySetInnerHTML: {
      __html: title
    }
  }) : /*#__PURE__*/React.createElement("h2", {
    className: "as-section-header__title"
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    className: "as-section-header__lead"
  }, lead));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/storytelling/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/storytelling/StoryModule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const KIND_META = {
  challenge: {
    icon: "alert-triangle",
    label: "Challenge"
  },
  opportunity: {
    icon: "compass",
    label: "Opportunity"
  },
  insight: {
    icon: "lightbulb",
    label: "Insight"
  },
  solution: {
    icon: "check-circle-2",
    label: "Solution"
  },
  metrics: {
    icon: "trending-up",
    label: "Metrics"
  },
  learnings: {
    icon: "book-open",
    label: "Learnings"
  },
  future: {
    icon: "telescope",
    label: "Future Vision"
  }
};

/**
 * StoryModule — the reusable narrative content block.
 * kind: challenge | opportunity | insight | solution | metrics | learnings | future
 * Each kind carries its own accent color, icon, and default kicker.
 * Pass `points` for a checklist, or arbitrary `children`.
 */
function StoryModule({
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
  return /*#__PURE__*/React.createElement("article", _extends({
    className: ["as-story", `as-story--${kind}`, className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "as-story__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "as-story__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || meta.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    className: "as-story__kicker"
  }, kicker || meta.label)), title && /*#__PURE__*/React.createElement("h3", {
    className: "as-story__title"
  }, title), body && /*#__PURE__*/React.createElement("p", {
    className: "as-story__body"
  }, body), points && points.length > 0 && /*#__PURE__*/React.createElement("ul", {
    className: "as-story__list"
  }, points.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16
  }), p))), children);
}
Object.assign(__ds_scope, { StoryModule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/storytelling/StoryModule.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — surface container.
 * variant: default | flat | sunk
 * interactive adds hover lift; pad adjusts padding.
 */
function Card({
  children,
  variant = "default",
  interactive = false,
  pad = "md",
  className = "",
  ...rest
}) {
  const cls = ["as-card", variant !== "default" ? `as-card--${variant}` : "", interactive ? "as-card--interactive" : "", pad === "lg" ? "as-card--pad-lg" : pad === "sm" ? "as-card--pad-sm" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProgressBar — horizontal progress / goal completion.
 * tone: brand | spring | warm ; value 0–100
 */
function ProgressBar({
  value = 0,
  tone = "brand",
  size = "md",
  className = "",
  ...rest
}) {
  const fillCls = ["as-progress__fill", tone === "spring" ? "as-progress__fill--spring" : tone === "warm" ? "as-progress__fill--warm" : ""].filter(Boolean).join(" ");
  const v = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["as-progress", size === "lg" ? "as-progress--lg" : "", className].filter(Boolean).join(" "),
    role: "progressbar",
    "aria-valuenow": v,
    "aria-valuemin": 0,
    "aria-valuemax": 100
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: fillCls,
    style: {
      width: `${v}%`
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tabs.jsx
try { (() => {
/**
 * Tabs — segmented (default) or underline tab bar.
 * Controlled via `value` + `onChange`; items: [{value,label,icon?}]
 */
function Tabs({
  items = [],
  value,
  onChange,
  variant = "segmented",
  className = ""
}) {
  const cls = ["as-tabs", variant === "underline" ? "as-tabs--underline" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    role: "tablist"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    role: "tab",
    "aria-selected": value === it.value,
    className: "as-tab",
    onClick: () => onChange && onChange(it.value)
  }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 15
  }), it.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tooltip.jsx
try { (() => {
/**
 * Tooltip — hover/focus bubble. Wraps a single trigger child.
 */
function Tooltip({
  label,
  children,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: ["as-tooltip", className].filter(Boolean).join(" "),
    tabIndex: 0
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "as-tooltip__bubble",
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/SectionsA.jsx
try { (() => {
// AbleSpace marketing site — sections. Composes design-system components.
const DS = window.AbleSpaceDesignSystem_737c4f;
const {
  Button,
  Eyebrow,
  Badge,
  SectionHeader,
  StoryModule,
  Journey,
  MetricStat,
  PullQuote,
  Card,
  Avatar,
  ProgressBar
} = DS;
const Icon = DS.Icon;
function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector(".site-scroll") || window;
    const onScroll = () => {
      const y = el === window ? window.scrollY : el.scrollTop;
      setScrolled(y > 8);
    };
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav" + (scrolled ? " nav--scrolled" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    alt: "AbleSpace"
  }), /*#__PURE__*/React.createElement("span", {
    className: "wm"
  }, "Able", /*#__PURE__*/React.createElement("span", {
    className: "s"
  }, "Space"))), /*#__PURE__*/React.createElement("div", {
    className: "nav__links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#product"
  }, "Product"), /*#__PURE__*/React.createElement("a", {
    href: "#story"
  }, "Why AbleSpace"), /*#__PURE__*/React.createElement("a", {
    href: "#impact"
  }, "Impact"), /*#__PURE__*/React.createElement("a", {
    href: "#districts"
  }, "Districts")), /*#__PURE__*/React.createElement("div", {
    className: "nav__right"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Log in"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconAfter: "arrow-right"
  }, "Start free")));
}
function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    className: "hero",
    id: "product"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap hero__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    rule: true
  }, "IEP goal tracking \xB7 built for SPED teams"), /*#__PURE__*/React.createElement("h1", null, "Every data point ", /*#__PURE__*/React.createElement("em", null, "tells a story."), " We help you read it."), /*#__PURE__*/React.createElement("p", {
    className: "hero__lead"
  }, "AbleSpace turns daily observations into clear progress \u2014 one tap to collect, one place to see it all. So you spend less time on paperwork and more with students."), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconAfter: "arrow-right"
  }, "Start free for a month"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    icon: "play"
  }, "Watch the 2-min tour")), /*#__PURE__*/React.createElement("div", {
    className: "hero__trust"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dots"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "A B",
    size: "sm"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "C D",
    size: "sm",
    style: {
      marginLeft: -10
    }
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "E F",
    size: "sm",
    style: {
      marginLeft: -10
    }
  })), "Trusted by IEP teams in 600+ schools \xB7 FERPA & HIPAA compliant")), /*#__PURE__*/React.createElement(HeroVisual, null)));
}
function HeroVisual() {
  const bars = [42, 51, 49, 58, 63, 71, 78, 86];
  return /*#__PURE__*/React.createElement("div", {
    className: "hero__visual",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "float float--main"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--evergreen-600)"
    }
  }, "Articulation"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text-strong)",
      marginTop: 4,
      maxWidth: "30ch"
    }
  }, "Produce /r/ in initial position \xB7 80% accuracy")), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Improving")), /*#__PURE__*/React.createElement("div", {
    className: "mini-chart"
  }, bars.map((b, i) => /*#__PURE__*/React.createElement("div", {
    className: "b",
    key: i,
    style: {
      height: `${b}%`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, "8 sessions"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, "Target 80%")), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 86,
    tone: "spring",
    style: {
      marginTop: 10
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "float float--badge"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 34,
      height: 34,
      borderRadius: 9,
      background: "var(--success-soft)",
      color: "var(--success)",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, "Data point saved"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--text-faint)"
    }
  }, "Graph updated \xB7 1 tap")))), /*#__PURE__*/React.createElement("div", {
    className: "float float--metric"
  }, /*#__PURE__*/React.createElement(MetricStat, {
    value: "12.5",
    unit: "h",
    label: "saved per week",
    delta: "vs. paper",
    deltaDir: "up"
  })));
}
function Strip() {
  return /*#__PURE__*/React.createElement("div", {
    className: "strip"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap strip__inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "strip__label"
  }, "Built with SLPs, teachers & admins"), /*#__PURE__*/React.createElement("div", {
    className: "strip__logos"
  }, /*#__PURE__*/React.createElement("span", null, "Riverside USD"), /*#__PURE__*/React.createElement("span", null, "Lincoln Elem."), /*#__PURE__*/React.createElement("span", null, "Northgate"), /*#__PURE__*/React.createElement("span", null, "Pine Valley"), /*#__PURE__*/React.createElement("span", null, "Westbrook"))));
}
function StorySection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section wrap",
    id: "story"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head as-reveal"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "01 \u2014 The problem",
    title: "Special educators were drowning in <em>data that didn't add up.</em>",
    lead: "We shadowed 40 teachers across 9 districts. The story was the same everywhere."
  })), /*#__PURE__*/React.createElement("div", {
    className: "story-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "as-reveal",
    "data-reveal-delay": "1"
  }, /*#__PURE__*/React.createElement(StoryModule, {
    kind: "challenge",
    title: "Data lived everywhere \u2014 and nowhere.",
    body: "Sticky notes, binders, and six disconnected tools. Hours each week spent reconciling sheets instead of teaching."
  })), /*#__PURE__*/React.createElement("div", {
    className: "as-reveal",
    "data-reveal-delay": "2"
  }, /*#__PURE__*/React.createElement(StoryModule, {
    kind: "opportunity",
    title: "The IEP was a compass no one could read in real time.",
    body: "Goals were authored once a year, then disappeared into a PDF \u2014 invisible during the daily work that actually moves them."
  }))));
}
function JourneySection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--tight wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "journey-split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "as-reveal"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "02 \u2014 Our approach",
    title: "We followed the work, not the spec sheet.",
    lead: "Every feature traces back to a moment we watched a teacher struggle \u2014 and a decision about how to make it disappear."
  })), /*#__PURE__*/React.createElement("div", {
    className: "as-reveal",
    "data-reveal-delay": "1"
  }, /*#__PURE__*/React.createElement(Journey, {
    steps: [{
      title: "Problem discovery",
      desc: "Shadowed 40 SPED teachers across 9 districts",
      icon: "search",
      state: "done"
    }, {
      title: "User research",
      desc: "120 interviews with teachers, SLPs & admins",
      icon: "users-round",
      state: "done"
    }, {
      title: "Insight",
      desc: "The bottleneck was capture, not analysis",
      icon: "lightbulb",
      state: "done"
    }, {
      title: "Execution",
      desc: "One-tap data collection, auto-graphed",
      icon: "rocket",
      state: "active"
    }, {
      title: "Impact",
      desc: "Time returned to students",
      icon: "trending-up",
      state: "upcoming"
    }]
  }))));
}
function SolutionSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head center as-reveal"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    center: true,
    eyebrow: "03 \u2014 The solution",
    title: "A product that thinks like an <em>IEP team.</em>",
    lead: "Collect, monitor, collaborate, and report \u2014 without leaving the flow of your day."
  })), /*#__PURE__*/React.createElement("div", {
    className: "story-grid story-grid--3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "as-reveal"
  }, /*#__PURE__*/React.createElement(StoryModule, {
    kind: "solution",
    icon: "clipboard-check",
    title: "One-tap data collection",
    body: "10+ data types \u2014 frequency, duration, trial-by-trial, rubric \u2014 captured on phone or tablet."
  })), /*#__PURE__*/React.createElement("div", {
    className: "as-reveal",
    "data-reveal-delay": "1"
  }, /*#__PURE__*/React.createElement(StoryModule, {
    kind: "solution",
    icon: "bar-chart-3",
    title: "Graphs that write themselves",
    body: "Beautiful, meeting-ready charts and reports generated automatically from your data."
  })), /*#__PURE__*/React.createElement("div", {
    className: "as-reveal",
    "data-reveal-delay": "2"
  }, /*#__PURE__*/React.createElement(StoryModule, {
    kind: "solution",
    icon: "sparkles",
    title: "AI that does the writing",
    body: "Generate goals, strategies, and progress notes in your voice \u2014 grounded in real data."
  }))));
}
Object.assign(window, {
  Nav,
  Hero,
  Strip,
  StorySection,
  JourneySection,
  SolutionSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/SectionsA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/SectionsB.jsx
try { (() => {
// AbleSpace marketing site — sections (part B).
const DSb = window.AbleSpaceDesignSystem_737c4f;
const {
  Button: BtnB,
  Eyebrow: EyebrowB,
  SectionHeader: SHB,
  StoryModule: SMB,
  MetricStat: MSB,
  PullQuote: PQB,
  Card: CardB
} = DSb;
const IconB = DSb.Icon;
function ImpactSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section wrap",
    id: "impact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "impact as-reveal"
  }, /*#__PURE__*/React.createElement(EyebrowB, {
    tone: "on-dark",
    rule: true
  }, "04 \u2014 Impact"), /*#__PURE__*/React.createElement("h2", {
    className: "as-display",
    style: {
      marginTop: 16,
      maxWidth: "20ch"
    }
  }, "Less paperwork. More of the work that matters."), /*#__PURE__*/React.createElement("div", {
    className: "impact__grid"
  }, /*#__PURE__*/React.createElement(MSB, {
    value: "12.5",
    unit: "h",
    label: "saved per educator each week"
  }), /*#__PURE__*/React.createElement(MSB, {
    value: "87",
    unit: "%",
    label: "of goals on track across caseloads",
    delta: "12 pts",
    deltaDir: "up"
  }), /*#__PURE__*/React.createElement(MSB, {
    value: "600",
    unit: "+",
    label: "schools collecting data on AbleSpace"
  }), /*#__PURE__*/React.createElement(MSB, {
    value: "6\u21921",
    label: "data tools consolidated into one"
  }))));
}
function QuoteSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--tight wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quote-band as-reveal"
  }, /*#__PURE__*/React.createElement(PQB, {
    name: "Jordan Ellis",
    role: "Speech-Language Pathologist \xB7 Lincoln Elementary"
  }, "Fifteen years and six data systems later, I finally found the perfect solution for data collection. It is so easy, yet so powerful \u2014 this will be my most-used app all year.")));
}
function FeatureSection() {
  const feats = [{
    icon: "target",
    h: "IEP goal tracking",
    p: "Track every goal and objective in real time, with baselines and targets always in view."
  }, {
    icon: "calendar-clock",
    h: "Scheduling & service time",
    p: "Plan sessions, track minutes, and stay ahead of service-delivery requirements."
  }, {
    icon: "receipt",
    h: "Medicaid billing",
    p: "Auto-generate billing notes and district invoices with a click."
  }, {
    icon: "users-round",
    h: "Team collaboration",
    p: "Share and collect data securely across clinicians, assistants, and case managers."
  }, {
    icon: "list-checks",
    h: "Built-in assessments",
    p: "Progress-monitoring assessments keep objective skill data always available."
  }, {
    icon: "shield-check",
    h: "Compliance & security",
    p: "FERPA, HIPAA, and statewide regulations — encryption and access controls throughout."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section wrap",
    id: "districts"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head as-reveal"
  }, /*#__PURE__*/React.createElement(SHB, {
    eyebrow: "05 \u2014 The platform",
    title: "Everything a caseload needs, in one place."
  })), /*#__PURE__*/React.createElement("div", {
    className: "feat"
  }, feats.map((f, i) => /*#__PURE__*/React.createElement("div", {
    className: "as-reveal",
    "data-reveal-delay": i % 3,
    key: i
  }, /*#__PURE__*/React.createElement(CardB, {
    className: "feat__card",
    interactive: true
  }, /*#__PURE__*/React.createElement("span", {
    className: "feat__icon"
  }, /*#__PURE__*/React.createElement(IconB, {
    name: f.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("h4", null, f.h), /*#__PURE__*/React.createElement("p", null, f.p))))));
}
function FutureSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--tight wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "as-reveal",
    style: {
      maxWidth: "46rem"
    }
  }, /*#__PURE__*/React.createElement(SMB, {
    kind: "future",
    title: "Where we're headed",
    body: "A future where every IEP team starts the year with a living plan \u2014 and where the next right decision for a student is always one glance away. We're building toward insight that's proactive, not retrospective."
  })));
}
function CTASection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "cta wrap as-reveal"
  }, /*#__PURE__*/React.createElement(EyebrowB, {
    tone: "brand",
    rule: true
  }, "Get started"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16
    }
  }, "Give your team back their ", /*#__PURE__*/React.createElement("em", null, "time.")), /*#__PURE__*/React.createElement("p", null, "Free for a month. No credit card. Roll out to a school or a whole district."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(BtnB, {
    variant: "primary",
    size: "xl",
    iconAfter: "arrow-right"
  }, "Start free"), /*#__PURE__*/React.createElement(BtnB, {
    variant: "secondary",
    size: "xl"
  }, "Book a demo")));
}
function Footer() {
  const col = (title, links) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, title), links.map(l => /*#__PURE__*/React.createElement("a", {
    href: "#",
    key: l
  }, l)));
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    alt: "",
    style: {
      width: 26,
      height: 26
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "wm",
    style: {
      fontWeight: 700,
      fontSize: 17,
      letterSpacing: "-0.02em"
    }
  }, "Able", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--evergreen-700)"
    }
  }, "Space"))), /*#__PURE__*/React.createElement("p", null, "The caseload-management platform purpose-built for special education.")), col("Product", ["Goal tracking", "Data collection", "Reports", "Medicaid billing", "AI assistant"]), col("For", ["Teachers", "SLPs & therapists", "Administrators", "Schools & districts"]), col("Company", ["About", "Blog", "Security", "Contact"])), /*#__PURE__*/React.createElement("div", {
    className: "footer__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 AbleSpace. FERPA & HIPAA compliant."), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms")));
}
Object.assign(window, {
  ImpactSection,
  QuoteSection,
  FeatureSection,
  FutureSection,
  CTASection,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/SectionsB.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web_app/CaseloadScreen.jsx
try { (() => {
function CaseloadScreen({
  onOpenStudent
}) {
  const DS = window.AbleSpaceDesignSystem_737c4f;
  const {
    Tag,
    Select,
    Avatar,
    Badge,
    ProgressBar,
    Button
  } = DS;
  const d = window.AS_DATA;
  const [filter, setFilter] = React.useState("all");
  const statusBadge = s => {
    if (s === "on-track") return /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      dot: true
    }, "On track");
    if (s === "watch") return /*#__PURE__*/React.createElement(Badge, {
      tone: "warning",
      dot: true
    }, "Watch");
    return /*#__PURE__*/React.createElement(Badge, {
      tone: "danger",
      dot: true
    }, "Review due");
  };
  const avg = st => Math.round(st.goals.reduce((a, g) => a + g.progress, 0) / st.goals.length);
  const list = filter === "all" ? d.students : d.students.filter(s => s.status === filter);
  return /*#__PURE__*/React.createElement("div", {
    className: "content__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "filters"
  }, /*#__PURE__*/React.createElement(Tag, {
    selected: filter === "all",
    onClick: () => setFilter("all")
  }, "All \xB7 ", d.students.length), /*#__PURE__*/React.createElement(Tag, {
    selected: filter === "on-track",
    onClick: () => setFilter("on-track")
  }, "On track"), /*#__PURE__*/React.createElement(Tag, {
    selected: filter === "watch",
    onClick: () => setFilter("watch")
  }, "Watch"), /*#__PURE__*/React.createElement(Tag, {
    selected: filter === "review-due",
    onClick: () => setFilter("review-due")
  }, "Review due"), /*#__PURE__*/React.createElement("div", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "160px"
    }
  }, /*#__PURE__*/React.createElement(Select, {
    defaultValue: "recent",
    options: [{
      value: "recent",
      label: "Recently active"
    }, {
      value: "name",
      label: "Name A–Z"
    }, {
      value: "review",
      label: "Review date"
    }]
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "sliders-horizontal",
    size: "md"
  }, "Filters")), /*#__PURE__*/React.createElement("table", {
    className: "table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Student"), /*#__PURE__*/React.createElement("th", null, "Disability"), /*#__PURE__*/React.createElement("th", null, "Goals"), /*#__PURE__*/React.createElement("th", null, "Avg. progress"), /*#__PURE__*/React.createElement("th", null, "IEP review"), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, list.map(st => /*#__PURE__*/React.createElement("tr", {
    key: st.id,
    onClick: () => onOpenStudent(st.id)
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: "cell-name"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: st.name,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, st.name), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", null, st.grade)))), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--text-muted)"
    }
  }, st.disability), /*#__PURE__*/React.createElement("td", {
    style: {
      fontVariantNumeric: "tabular-nums"
    }
  }, st.goals.length), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: "cell-prog"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pct"
  }, avg(st), "%"), /*#__PURE__*/React.createElement(ProgressBar, {
    value: avg(st),
    tone: avg(st) >= 75 ? "spring" : avg(st) >= 50 ? "brand" : "warm"
  }))), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--text-muted)"
    }
  }, "in ", st.reviewIn, " days"), /*#__PURE__*/React.createElement("td", null, statusBadge(st.status)))))));
}
Object.assign(window, {
  CaseloadScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web_app/CaseloadScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web_app/CollectDrawer.jsx
try { (() => {
function CollectDrawer({
  open,
  goal,
  onClose,
  onSaved
}) {
  const DS = window.AbleSpaceDesignSystem_737c4f;
  const {
    Button,
    IconButton,
    Field,
    Select,
    Textarea,
    Badge,
    Switch
  } = DS;
  const Icon = DS.Icon;
  const [count, setCount] = React.useState(0);
  const [trials, setTrials] = React.useState([]); // array of true/false

  React.useEffect(() => {
    if (open) {
      setCount(0);
      setTrials([]);
    }
  }, [open, goal]);
  const g = goal || {};
  const correct = trials.filter(Boolean).length;
  const pct = trials.length ? Math.round(correct / trials.length * 100) : 0;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "scrim" + (open ? " scrim--open" : ""),
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: "drawer" + (open ? " drawer--open" : ""),
    role: "dialog",
    "aria-label": "Collect data"
  }, /*#__PURE__*/React.createElement("div", {
    className: "drawer__head"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 36,
      height: 36,
      borderRadius: 10,
      background: "var(--accent-soft)",
      color: "var(--evergreen-700)",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clipboard-check",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "crumbs",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-faint)"
    }
  }, g.area || "Goal", " \xB7 ", g.type || "Frequency"), /*#__PURE__*/React.createElement("h3", null, "Collect data")), /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    variant: "ghost",
    label: "Close",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    className: "drawer__body"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.5,
      color: "var(--text-body)",
      background: "var(--surface-sunk)",
      padding: "12px 14px",
      borderRadius: 10
    }
  }, g.text || "Produce target with 80% accuracy across 3 sessions."), /*#__PURE__*/React.createElement(Field, {
    label: "Session date"
  }, /*#__PURE__*/React.createElement(Select, {
    defaultValue: "today",
    options: [{
      value: "today",
      label: "Today · Mar 19"
    }, {
      value: "yest",
      label: "Yesterday · Mar 18"
    }]
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--text-strong)",
      marginBottom: 10
    }
  }, "Tally count"), /*#__PURE__*/React.createElement("div", {
    className: "tally"
  }, /*#__PURE__*/React.createElement("button", {
    className: "tally__btn",
    onClick: () => setCount(Math.max(0, count - 1)),
    "aria-label": "minus"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "minus",
    size: 22
  })), /*#__PURE__*/React.createElement("span", {
    className: "tally__num"
  }, count), /*#__PURE__*/React.createElement("button", {
    className: "tally__btn tally__btn--plus",
    onClick: () => setCount(count + 1),
    "aria-label": "plus"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 22
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, "Trial-by-trial"), trials.length > 0 && /*#__PURE__*/React.createElement(Badge, {
    tone: pct >= 80 ? "success" : "warning"
  }, correct, "/", trials.length, " \xB7 ", pct, "%")), /*#__PURE__*/React.createElement("div", {
    className: "trial-dots"
  }, trials.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "trial-dot " + (t ? "trial-dot--plus" : "trial-dot--minus")
  }, t ? "+" : "–")), /*#__PURE__*/React.createElement("span", {
    className: "trial-dot",
    onClick: () => setTrials([...trials, true]),
    title: "Correct"
  }, "+"), /*#__PURE__*/React.createElement("span", {
    className: "trial-dot",
    onClick: () => setTrials([...trials, false]),
    title: "Incorrect",
    style: {
      borderColor: "var(--danger)",
      color: "var(--danger)"
    }
  }, "\u2013"))), /*#__PURE__*/React.createElement(Field, {
    label: "Quick note",
    hint: "AI can expand this into a progress note"
  }, /*#__PURE__*/React.createElement(Textarea, {
    placeholder: "Independent on initial /r/; needed a model for blends."
  })), /*#__PURE__*/React.createElement(Switch, {
    label: "Mark as Medicaid billable",
    defaultChecked: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "drawer__foot"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "check",
    block: true,
    onClick: onSaved
  }, "Save data point"))));
}
Object.assign(window, {
  CollectDrawer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web_app/CollectDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web_app/DashboardScreen.jsx
try { (() => {
function DashboardScreen({
  onOpenStudent
}) {
  const DS = window.AbleSpaceDesignSystem_737c4f;
  const {
    Card,
    MetricStat,
    ProgressBar,
    Badge,
    Button,
    Avatar,
    Eyebrow
  } = DS;
  const Icon = DS.Icon;
  const d = window.AS_DATA;
  const statusBadge = s => {
    if (s === "now") return /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      dot: true
    }, "In session");
    if (s === "done") return /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Done");
    return /*#__PURE__*/React.createElement(Badge, {
      tone: "info"
    }, "Upcoming");
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "content__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dash-greet"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    rule: true
  }, d.today), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: "10px"
    }
  }, "Good morning, ", /*#__PURE__*/React.createElement("em", null, "Dana.")), /*#__PURE__*/React.createElement("p", null, "You have ", d.stats.sessionsToday, " sessions today and 4 goals to review before Friday.")), /*#__PURE__*/React.createElement("div", {
    className: "stat-row"
  }, /*#__PURE__*/React.createElement(Card, {
    pad: "md"
  }, /*#__PURE__*/React.createElement(MetricStat, {
    value: d.stats.goalsOnTrack,
    unit: "%",
    label: "Goals on track",
    delta: "12 pts",
    deltaDir: "up"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: "md"
  }, /*#__PURE__*/React.createElement(MetricStat, {
    value: d.stats.minutesLogged,
    unit: " min",
    label: `Service time · ${d.stats.minutesTarget} target`
  })), /*#__PURE__*/React.createElement(Card, {
    pad: "md"
  }, /*#__PURE__*/React.createElement(MetricStat, {
    value: d.stats.dataPoints.toLocaleString(),
    label: "Data points this term",
    delta: "208",
    deltaDir: "up"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: "md"
  }, /*#__PURE__*/React.createElement(MetricStat, {
    value: "3",
    label: "IEP reviews due soon"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dash-cols"
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    className: "panel-head"
  }, /*#__PURE__*/React.createElement("h3", null, "Today's schedule"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconAfter: "arrow-right"
  }, "Full calendar")), /*#__PURE__*/React.createElement("div", {
    className: "sched"
  }, d.schedule.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "sched__row",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "sched__time"
  }, s.time), /*#__PURE__*/React.createElement("div", {
    className: "sched__who"
  }, /*#__PURE__*/React.createElement("b", null, s.student), /*#__PURE__*/React.createElement("span", null, s.service, " \xB7 ", s.room)), statusBadge(s.status))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    className: "panel-head"
  }, /*#__PURE__*/React.createElement("h3", null, "Goals to review"), /*#__PURE__*/React.createElement(Badge, {
    tone: "warm"
  }, "4 due")), /*#__PURE__*/React.createElement("div", {
    className: "sched"
  }, d.students.slice(0, 4).map(st => /*#__PURE__*/React.createElement("div", {
    className: "sched__row",
    key: st.id,
    style: {
      gridTemplateColumns: "auto 1fr auto",
      cursor: "pointer"
    },
    onClick: () => onOpenStudent(st.id)
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: st.name,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sched__who"
  }, /*#__PURE__*/React.createElement("b", null, st.name), /*#__PURE__*/React.createElement("span", null, "Review in ", st.reviewIn, " days")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18
  })))))));
}
Object.assign(window, {
  DashboardScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web_app/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web_app/Sidebar.jsx
try { (() => {
function Sidebar({
  active,
  onNav
}) {
  const {
    Avatar
  } = window.AbleSpaceDesignSystem_737c4f;
  const Icon = window.AbleSpaceDesignSystem_737c4f.Icon;
  const item = (id, icon, label, badge) => /*#__PURE__*/React.createElement("button", {
    className: "nav" + (active === id ? " nav--active" : ""),
    onClick: () => onNav(id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18
  }), label, badge ? /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, badge) : null);
  return /*#__PURE__*/React.createElement("aside", {
    className: "side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "side__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-light.svg",
    alt: "AbleSpace"
  }), /*#__PURE__*/React.createElement("span", {
    className: "wm"
  }, "Able", /*#__PURE__*/React.createElement("span", {
    className: "s"
  }, "Space"))), item("dashboard", "layout-dashboard", "Dashboard"), item("caseload", "users-round", "Caseload", "23"), item("schedule", "calendar-clock", "Schedule"), item("data", "clipboard-check", "Data Collection"), item("reports", "bar-chart-3", "Reports"), /*#__PURE__*/React.createElement("div", {
    className: "side__section"
  }, "Tools"), item("assessments", "list-checks", "Assessments"), item("billing", "receipt", "Medicaid Billing"), item("ai", "sparkles", "AI Assistant"), /*#__PURE__*/React.createElement("div", {
    className: "side__spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "side__user"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Dana Whitfield",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("b", null, "Dana Whitfield"), /*#__PURE__*/React.createElement("span", null, "SLP \xB7 Lincoln Elem."))));
}
Object.assign(window, {
  Sidebar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web_app/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web_app/StudentScreen.jsx
try { (() => {
function StudentScreen({
  studentId,
  onBack,
  onCollect
}) {
  const DS = window.AbleSpaceDesignSystem_737c4f;
  const {
    Card,
    Badge,
    Button,
    Avatar,
    Tabs,
    ProgressBar,
    Tag
  } = DS;
  const Icon = DS.Icon;
  const d = window.AS_DATA;
  const st = d.students.find(s => s.id === studentId) || d.students[0];
  const [tab, setTab] = React.useState("goals");
  const trendBadge = t => {
    if (t === "up") return /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      dot: true
    }, "Improving");
    if (t === "down") return /*#__PURE__*/React.createElement(Badge, {
      tone: "danger",
      dot: true
    }, "Declining");
    return /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral",
      dot: true
    }, "Stable");
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "content__inner"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "arrow-left",
    onClick: onBack,
    style: {
      marginBottom: "14px"
    }
  }, "Caseload"), /*#__PURE__*/React.createElement("div", {
    className: "stu-head"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: st.name,
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "h-meta"
  }, /*#__PURE__*/React.createElement("h2", null, st.name), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, /*#__PURE__*/React.createElement("span", null, st.grade), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, st.disability), /*#__PURE__*/React.createElement(Badge, {
    tone: st.reviewIn <= 7 ? "danger" : "info"
  }, "IEP review in ", st.reviewIn, " days"))), /*#__PURE__*/React.createElement("div", {
    className: "h-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "file-text"
  }, "Generate report"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "plus",
    onClick: () => onCollect(st.goals[0])
  }, "Collect data"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "18px"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "underline",
    value: tab,
    onChange: setTab,
    items: [{
      value: "goals",
      label: "Goals"
    }, {
      value: "data",
      label: "Data"
    }, {
      value: "notes",
      label: "Notes"
    }, {
      value: "accom",
      label: "Accommodations"
    }, {
      value: "reports",
      label: "Reports"
    }]
  })), st.goals.map(g => /*#__PURE__*/React.createElement(Card, {
    className: "goal-card",
    key: g.id
  }, /*#__PURE__*/React.createElement("div", {
    className: "goal-top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "area"
  }, g.area), /*#__PURE__*/React.createElement("div", {
    className: "gtext"
  }, g.text)), /*#__PURE__*/React.createElement("div", {
    className: "gright"
  }, trendBadge(g.trend))), /*#__PURE__*/React.createElement("div", {
    className: "chart"
  }, d.series.map((v, i) => /*#__PURE__*/React.createElement("div", {
    className: "bar",
    key: i,
    style: {
      height: `${v}%`
    },
    title: `Session ${i + 1}: ${v}%`
  }))), /*#__PURE__*/React.createElement("div", {
    className: "goal-meta",
    style: {
      marginTop: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "m"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Type"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, g.type)), /*#__PURE__*/React.createElement("div", {
    className: "m"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Baseline"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, g.baseline, "%")), /*#__PURE__*/React.createElement("div", {
    className: "m"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Target"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, g.target, "%")), /*#__PURE__*/React.createElement("div", {
    className: "m"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Last data"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, g.last)), /*#__PURE__*/React.createElement("div", {
    className: "grow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "m",
    style: {
      minWidth: "150px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Progress \xB7 ", g.progress, "%"), /*#__PURE__*/React.createElement(ProgressBar, {
    value: g.progress,
    tone: g.progress >= 75 ? "spring" : g.progress >= 50 ? "brand" : "warm",
    style: {
      marginTop: "6px"
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    icon: "plus",
    onClick: () => onCollect(g)
  }, "Data")))));
}
Object.assign(window, {
  StudentScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web_app/StudentScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web_app/TopBar.jsx
try { (() => {
function TopBar({
  title,
  crumbs,
  onCollect
}) {
  const {
    Input,
    IconButton,
    Button
  } = window.AbleSpaceDesignSystem_737c4f;
  return /*#__PURE__*/React.createElement("header", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("div", null, crumbs ? /*#__PURE__*/React.createElement("div", {
    className: "crumbs"
  }, crumbs) : null, /*#__PURE__*/React.createElement("h1", null, title)), /*#__PURE__*/React.createElement("div", {
    className: "topbar__search"
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Search students, goals\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    className: "topbar__actions"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    variant: "ghost",
    label: "Notifications"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "circle-help",
    variant: "ghost",
    label: "Help"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "plus",
    onClick: onCollect
  }, "Collect data")));
}
Object.assign(window, {
  TopBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web_app/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web_app/data.js
try { (() => {
// Fake data for the AbleSpace web-app UI kit. Not production data.
window.AS_DATA = {
  user: {
    name: "Dana Whitfield",
    role: "Speech-Language Pathologist",
    initials: "DW"
  },
  today: "Thursday, March 19",
  stats: {
    goalsOnTrack: 87,
    minutesLogged: 312,
    minutesTarget: 420,
    sessionsToday: 5,
    dataPoints: 1204
  },
  schedule: [{
    time: "9:00",
    student: "Maya R.",
    service: "Speech · 30 min",
    room: "Rm 12",
    status: "done"
  }, {
    time: "9:45",
    student: "Eli T.",
    service: "Speech · 30 min",
    room: "Rm 4",
    status: "done"
  }, {
    time: "11:00",
    student: "Aaliyah J.",
    service: "Group · 45 min",
    room: "Library",
    status: "now"
  }, {
    time: "1:15",
    student: "Noah B.",
    service: "Speech · 30 min",
    room: "Rm 9",
    status: "upcoming"
  }, {
    time: "2:00",
    student: "Priya S.",
    service: "Eval · 60 min",
    room: "Rm 3",
    status: "upcoming"
  }],
  students: [{
    id: "maya",
    name: "Maya Rodriguez",
    grade: "Grade 3",
    initials: "MR",
    disability: "Speech/Language",
    reviewIn: 21,
    status: "on-track",
    goals: [{
      id: "g1",
      area: "Articulation",
      text: "Produce /r/ in initial position with 80% accuracy across 3 sessions",
      progress: 86,
      trend: "up",
      type: "Frequency",
      baseline: 42,
      target: 80,
      last: "Today"
    }, {
      id: "g2",
      area: "Language",
      text: "Use 4–5 word sentences to request during structured play",
      progress: 64,
      trend: "up",
      type: "Frequency",
      baseline: 30,
      target: 75,
      last: "Yesterday"
    }, {
      id: "g3",
      area: "Fluency",
      text: "Use easy-onset strategy during 3-minute conversation",
      progress: 48,
      trend: "flat",
      type: "Duration",
      baseline: 20,
      target: 70,
      last: "2 days ago"
    }]
  }, {
    id: "eli",
    name: "Eli Thompson",
    grade: "Grade 5",
    initials: "ET",
    disability: "Autism Spectrum",
    reviewIn: 7,
    status: "watch",
    goals: [{
      id: "g4",
      area: "Social",
      text: "Initiate a greeting with a peer in 4 of 5 opportunities",
      progress: 52,
      trend: "up",
      type: "Frequency",
      baseline: 15,
      target: 80,
      last: "Today"
    }, {
      id: "g5",
      area: "Self-Reg",
      text: "Use a coping strategy when frustrated with 70% independence",
      progress: 38,
      trend: "down",
      type: "Frequency",
      baseline: 25,
      target: 70,
      last: "3 days ago"
    }]
  }, {
    id: "aaliyah",
    name: "Aaliyah Jones",
    grade: "Grade 2",
    initials: "AJ",
    disability: "Specific Learning",
    reviewIn: 45,
    status: "on-track",
    goals: [{
      id: "g6",
      area: "Reading",
      text: "Decode CVC words with 90% accuracy",
      progress: 91,
      trend: "up",
      type: "Percentage",
      baseline: 50,
      target: 90,
      last: "Today"
    }, {
      id: "g7",
      area: "Writing",
      text: "Write a complete sentence with capital and period",
      progress: 72,
      trend: "up",
      type: "Rubric",
      baseline: 40,
      target: 85,
      last: "Yesterday"
    }]
  }, {
    id: "noah",
    name: "Noah Brooks",
    grade: "Grade 4",
    initials: "NB",
    disability: "Speech/Language",
    reviewIn: 14,
    status: "on-track",
    goals: [{
      id: "g8",
      area: "Articulation",
      text: "Produce /s/ blends in sentences with 85% accuracy",
      progress: 79,
      trend: "up",
      type: "Frequency",
      baseline: 45,
      target: 85,
      last: "Today"
    }]
  }, {
    id: "priya",
    name: "Priya Singh",
    grade: "Grade 1",
    initials: "PS",
    disability: "Developmental Delay",
    reviewIn: 3,
    status: "review-due",
    goals: [{
      id: "g9",
      area: "Language",
      text: "Follow 2-step directions with 80% accuracy",
      progress: 58,
      trend: "flat",
      type: "Frequency",
      baseline: 30,
      target: 80,
      last: "Yesterday"
    }]
  }],
  // 8-session trial sparkline-ish series for the detail chart (percent accuracy)
  series: [42, 51, 49, 58, 63, 71, 78, 86]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web_app/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Journey = __ds_scope.Journey;

__ds_ns.MetricStat = __ds_scope.MetricStat;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.StoryModule = __ds_scope.StoryModule;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
