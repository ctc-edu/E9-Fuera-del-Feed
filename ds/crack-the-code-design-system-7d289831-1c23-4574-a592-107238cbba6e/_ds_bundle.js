/* @ds-bundle: {"format":4,"namespace":"CrackTheCodeDesignSystem_7d2898","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"cdb895cb19b0","components/core/Button.jsx":"13c6b1a68d56","components/core/Card.jsx":"7789b4a16a1f","components/data/StatCard.jsx":"25bbafe50ab5","components/data/Table.jsx":"2bf48be02981","components/feedback/Accordion.jsx":"b77e61abc0df","components/feedback/Alert.jsx":"f986d0e0d3bb","components/feedback/Modal.jsx":"754ab15067d5","components/feedback/Progress.jsx":"89fc435e643e","components/feedback/Tooltip.jsx":"6419f88a98de","components/forms/Checkbox.jsx":"a08f8516a16a","components/forms/Input.jsx":"c86967c2c3ab","components/forms/Select.jsx":"055d05f538c4","components/forms/Switch.jsx":"28c54120d82a","components/navigation/Tabs.jsx":"b51b55bb313d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CrackTheCodeDesignSystem_7d2898 = window.CrackTheCodeDesignSystem_7d2898 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const TONES = {
  neutral: {
    background: "var(--neutral-100)",
    color: "var(--text-secondary)"
  },
  brand: {
    background: "var(--primary-100)",
    color: "var(--primary-800)"
  },
  success: {
    background: "var(--color-success-100)",
    color: "var(--color-success-700)"
  },
  warning: {
    background: "var(--color-warning-100)",
    color: "var(--color-warning-700)"
  },
  danger: {
    background: "var(--color-danger-100)",
    color: "var(--color-danger-700)"
  },
  info: {
    background: "var(--color-info-100)",
    color: "var(--color-info-700)"
  }
};
function Badge({
  children,
  tone = "neutral"
}) {
  return React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "3px 10px",
      borderRadius: "var(--radius-pill)",
      fontSize: "var(--fs-caption)",
      fontWeight: "var(--fw-medium)",
      fontFamily: "var(--font-functional)",
      letterSpacing: "var(--ls-overline)",
      ...TONES[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    padding: "8px 14px",
    fontSize: "var(--fs-body-s)",
    height: 36
  },
  md: {
    padding: "11px 20px",
    fontSize: "var(--fs-body)",
    height: 44
  },
  lg: {
    padding: "14px 26px",
    fontSize: "var(--fs-body-l)",
    height: 52
  }
};
const VARIANTS = {
  primary: {
    background: "var(--mint-500)",
    color: "var(--primary-900)",
    border: "1px solid transparent"
  },
  secondary: {
    background: "var(--action-secondary)",
    color: "var(--text-primary)",
    border: "1px solid var(--border-default)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-primary)",
    border: "1px solid transparent"
  },
  danger: {
    background: "var(--color-danger-500)",
    color: "var(--text-inverse)",
    border: "1px solid transparent"
  },
  inverse: {
    background: "#fff",
    color: "var(--primary-900)",
    border: "1px solid transparent"
  }
};
const HOVER = {
  primary: {
    background: "#fff",
    border: "1px solid var(--mint-500)"
  },
  secondary: {
    background: "var(--action-secondary-hover)"
  },
  ghost: {
    background: "var(--bg-surface-secondary)"
  },
  danger: {
    background: "var(--color-danger-700)"
  },
  inverse: {
    background: "var(--mint-500)",
    color: "var(--primary-900)"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  disabled = false,
  fullWidth = false,
  onClick
}) {
  const s = SIZES[size];
  const v = VARIANTS[variant];
  return React.createElement("button", {
    disabled,
    onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      width: fullWidth ? "100%" : undefined,
      padding: s.padding,
      fontSize: s.fontSize,
      fontFamily: "var(--font-functional)",
      fontWeight: "var(--fw-medium)",
      borderRadius: "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background var(--motion-fast) var(--ease-out), transform var(--motion-fast) var(--ease-out)",
      ...v,
      ...(disabled ? {
        background: "var(--action-disabled-bg)",
        color: "var(--action-disabled-text)",
        border: "1px solid transparent"
      } : {})
    },
    onMouseEnter: e => {
      if (disabled) return;
      Object.assign(e.currentTarget.style, HOVER[variant]);
    },
    onMouseLeave: e => {
      if (disabled) return;
      Object.assign(e.currentTarget.style, v);
    },
    onMouseDown: e => {
      if (disabled) return;
      e.currentTarget.style.transform = "scale(0.98)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, iconLeft ? React.createElement("span", {
    style: {
      display: "flex"
    }
  }, iconLeft) : null, children, iconRight ? React.createElement("span", {
    style: {
      display: "flex"
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padding = "var(--space-6)",
  elevated = false
}) {
  return React.createElement("div", {
    style: {
      background: "var(--bg-surface)",
      borderRadius: "var(--radius-md)",
      border: elevated ? "1px solid transparent" : "1px solid var(--border-subtle)",
      boxShadow: elevated ? "var(--shadow-md)" : "none",
      padding,
      fontFamily: "var(--font-functional)"
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
const PLASTA = {
  neutral: {
    background: "var(--bg-surface)",
    border: "1px solid var(--border-subtle)",
    value: "var(--text-brand)",
    label: "var(--text-secondary)"
  },
  dark: {
    background: "var(--primary-900)",
    border: "1px solid transparent",
    value: "#fff",
    label: "var(--primary-200)"
  },
  mint: {
    background: "var(--mint-500)",
    border: "1px solid transparent",
    value: "var(--primary-900)",
    label: "var(--primary-800)"
  },
  blue: {
    background: "var(--blue-500)",
    border: "1px solid transparent",
    value: "#fff",
    label: "var(--blue-100)"
  },
  purple: {
    background: "var(--purple-500)",
    border: "1px solid transparent",
    value: "#fff",
    label: "var(--purple-100)"
  },
  peach: {
    background: "var(--peach-500)",
    border: "1px solid transparent",
    value: "var(--primary-900)",
    label: "var(--primary-800)"
  },
  sky: {
    background: "var(--sky-500)",
    border: "1px solid transparent",
    value: "var(--primary-900)",
    label: "var(--primary-800)"
  }
};
function StatCard({
  value,
  label,
  delta,
  deltaTone = "success",
  tone = "neutral"
}) {
  const t = PLASTA[tone] || PLASTA.neutral;
  const deltaColor = tone === "neutral" ? {
    success: "var(--color-success-700)",
    danger: "var(--color-danger-700)",
    neutral: "var(--text-tertiary)"
  }[deltaTone] : t.label;
  return React.createElement("div", {
    style: {
      fontFamily: "var(--font-functional)",
      padding: "var(--space-6)",
      background: t.background,
      border: t.border,
      borderRadius: "var(--radius-md)"
    }
  }, React.createElement("div", {
    className: "emotional",
    style: {
      fontFamily: "var(--font-emotional)",
      fontSize: "var(--fs-display-s)",
      color: t.value,
      lineHeight: "var(--lh-tight)"
    }
  }, value), React.createElement("div", {
    style: {
      fontSize: "var(--fs-body-s)",
      color: t.label,
      marginTop: 6
    }
  }, label), delta ? React.createElement("div", {
    style: {
      fontSize: "var(--fs-caption)",
      color: deltaColor,
      marginTop: 8,
      fontWeight: "var(--fw-medium)",
      opacity: tone === "neutral" ? 1 : 0.85
    }
  }, delta) : null);
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function Table({
  columns = [],
  rows = []
}) {
  return React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-functional)",
      fontSize: "var(--fs-body-s)"
    }
  }, React.createElement("thead", {}, React.createElement("tr", {}, columns.map(c => React.createElement("th", {
    key: c,
    style: {
      textAlign: "left",
      padding: "10px 12px",
      color: "var(--text-tertiary)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--fs-caption)",
      letterSpacing: "var(--ls-overline)",
      textTransform: "uppercase",
      borderBottom: "1px solid var(--border-default)"
    }
  }, c)))), React.createElement("tbody", {}, rows.map((r, i) => React.createElement("tr", {
    key: i
  }, r.map((cell, j) => React.createElement("td", {
    key: j,
    style: {
      padding: "12px",
      borderBottom: "1px solid var(--border-subtle)",
      color: "var(--text-primary)"
    }
  }, cell))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
const {
  useState
} = React;
function Accordion({
  items = []
}) {
  const [open, setOpen] = useState(0);
  return React.createElement("div", {
    style: {
      fontFamily: "var(--font-functional)",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, items.map((it, i) => React.createElement("div", {
    key: it.title,
    style: {
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "16px 0",
      fontSize: "var(--fs-body)",
      fontFamily: "var(--font-functional)",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-primary)"
    }
  }, it.title, React.createElement("span", {
    style: {
      transform: open === i ? "rotate(45deg)" : "rotate(0)",
      transition: "transform var(--motion-fast) var(--ease-out)",
      fontSize: 18,
      color: "var(--text-tertiary)"
    }
  }, "+")), open === i ? React.createElement("div", {
    style: {
      paddingBottom: 16,
      color: "var(--text-secondary)",
      fontSize: "var(--fs-body-s)"
    }
  }, it.content) : null)));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const TONES = {
  info: {
    bg: "var(--blue-50)",
    border: "var(--blue-100)",
    accent: "var(--blue-600)"
  },
  success: {
    bg: "var(--color-success-100)",
    border: "var(--color-success-100)",
    accent: "var(--color-success-700)"
  },
  warning: {
    bg: "var(--orange-50)",
    border: "var(--orange-100)",
    accent: "var(--color-warning-700)"
  },
  danger: {
    bg: "var(--color-danger-100)",
    border: "var(--color-danger-100)",
    accent: "var(--color-danger-700)"
  }
};
function Alert({
  tone = "info",
  title,
  children
}) {
  const t = TONES[tone];
  return React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      padding: "14px 16px",
      borderRadius: "var(--radius-sm)",
      background: t.bg,
      border: `1px solid ${t.border}`,
      fontFamily: "var(--font-functional)"
    }
  }, React.createElement("span", {
    style: {
      width: 4,
      borderRadius: 2,
      background: t.accent,
      flexShrink: 0
    }
  }), React.createElement("div", {}, title ? React.createElement("div", {
    style: {
      fontWeight: "var(--fw-medium)",
      color: "var(--text-primary)",
      marginBottom: 2
    }
  }, title) : null, React.createElement("div", {
    style: {
      fontSize: "var(--fs-body-s)",
      color: "var(--text-secondary)"
    }
  }, children)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
function Modal({
  open = true,
  title,
  children,
  onClose
}) {
  if (!open) return null;
  return React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(8,11,9,.5)",
      backdropFilter: "blur(2px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 100,
      fontFamily: "var(--font-functional)"
    },
    onClick: onClose
  }, React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--bg-surface)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      padding: "var(--space-8)",
      width: 420,
      maxWidth: "90vw"
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "start",
      marginBottom: "var(--space-4)"
    }
  }, React.createElement("h3", {
    style: {
      fontSize: "var(--fs-h3)"
    }
  }, title), React.createElement("button", {
    onClick: onClose,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: 20,
      color: "var(--text-tertiary)"
    }
  }, "\u00d7")), React.createElement("div", {
    style: {
      color: "var(--text-secondary)",
      fontSize: "var(--fs-body-s)"
    }
  }, children)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Progress.jsx
try { (() => {
function Progress({
  value = 0,
  label,
  tone = "brand"
}) {
  const color = {
    brand: "var(--action-primary)",
    success: "var(--color-success-500)",
    info: "var(--blue-500)"
  }[tone];
  return React.createElement("div", {
    style: {
      fontFamily: "var(--font-functional)",
      width: "100%"
    }
  }, label ? React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "var(--fs-caption)",
      color: "var(--text-secondary)",
      marginBottom: 6
    }
  }, React.createElement("span", {}, label), React.createElement("span", {}, `${value}%`)) : null, React.createElement("div", {
    style: {
      height: 8,
      borderRadius: "var(--radius-pill)",
      background: "var(--neutral-200)",
      overflow: "hidden"
    }
  }, React.createElement("div", {
    style: {
      height: "100%",
      width: `${value}%`,
      background: color,
      borderRadius: "var(--radius-pill)",
      transition: "width var(--motion-slow) var(--ease-out)"
    }
  })));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Progress.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  children,
  label,
  side = "top"
}) {
  const [show, setShow] = useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    }
  }[side] || {};
  return React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show ? React.createElement("span", {
    style: {
      position: "absolute",
      ...pos,
      background: "var(--neutral-900)",
      color: "var(--text-inverse)",
      padding: "6px 10px",
      borderRadius: "var(--radius-xs)",
      fontSize: "var(--fs-caption)",
      fontFamily: "var(--font-functional)",
      whiteSpace: "nowrap",
      boxShadow: "var(--shadow-sm)",
      pointerEvents: "none",
      zIndex: 10
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled
}) {
  return React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-functional)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1
    }
  }, React.createElement("input", {
    type: "checkbox",
    checked,
    defaultChecked,
    onChange,
    disabled,
    style: {
      appearance: "none",
      width: 20,
      height: 20,
      margin: 0,
      borderRadius: "var(--radius-xs)",
      border: "1.5px solid var(--border-default)",
      background: "var(--bg-surface)",
      display: "grid",
      placeItems: "center",
      cursor: "inherit",
      accentColor: "var(--action-primary)"
    }
  }), label ? React.createElement("span", {
    style: {
      fontSize: "var(--fs-body)",
      color: "var(--text-primary)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const {
  useState
} = React;
function Input({
  label,
  placeholder,
  type = "text",
  helpText,
  error,
  disabled,
  defaultValue
}) {
  const [focused, setFocused] = useState(false);
  return React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-functional)"
    }
  }, label ? React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-s)",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-primary)"
    }
  }, label) : null, React.createElement("input", {
    type,
    placeholder,
    disabled,
    defaultValue,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      padding: "11px 14px",
      fontSize: "var(--fs-body)",
      fontFamily: "var(--font-functional)",
      borderRadius: "var(--radius-sm)",
      color: "var(--text-primary)",
      background: disabled ? "var(--neutral-100)" : "var(--bg-surface)",
      border: error ? "1px solid var(--color-danger-500)" : focused ? "1px solid var(--border-focus)" : "1px solid var(--border-default)",
      boxShadow: focused ? "var(--focus-ring)" : "none",
      outline: "none",
      transition: "box-shadow var(--motion-fast) var(--ease-out), border-color var(--motion-fast) var(--ease-out)"
    }
  }), helpText || error ? React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: error ? "var(--color-danger-500)" : "var(--text-tertiary)"
    }
  }, error || helpText) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  defaultValue,
  disabled
}) {
  return React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-functional)"
    }
  }, label ? React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-s)",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-primary)"
    }
  }, label) : null, React.createElement("select", {
    defaultValue,
    disabled,
    style: {
      padding: "11px 14px",
      fontSize: "var(--fs-body)",
      fontFamily: "var(--font-functional)",
      borderRadius: "var(--radius-sm)",
      border: "1px solid var(--border-default)",
      background: disabled ? "var(--neutral-100)" : "var(--bg-surface)",
      color: "var(--text-primary)",
      outline: "none",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, options.map(o => React.createElement("option", {
    key: o.value ?? o,
    value: o.value ?? o
  }, o.label ?? o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
const {
  useState
} = React;
function Switch({
  label,
  defaultChecked = false,
  onChange,
  disabled
}) {
  const [on, setOn] = useState(defaultChecked);
  const toggle = () => {
    if (disabled) return;
    const v = !on;
    setOn(v);
    onChange && onChange(v);
  };
  return React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-functional)"
    }
  }, React.createElement("span", {
    onClick: toggle,
    style: {
      width: 40,
      height: 24,
      borderRadius: "var(--radius-pill)",
      position: "relative",
      background: on ? "var(--action-primary)" : "var(--neutral-300)",
      transition: "background var(--motion-fast) var(--ease-out)",
      flexShrink: 0
    }
  }, React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: on ? 19 : 3,
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "var(--shadow-xs)",
      transition: "left var(--motion-fast) var(--ease-out)"
    }
  })), label ? React.createElement("span", {
    style: {
      fontSize: "var(--fs-body)",
      color: "var(--text-primary)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const {
  useState
} = React;
function Tabs({
  items = [],
  defaultActive = 0
}) {
  const [active, setActive] = useState(defaultActive);
  return React.createElement("div", {
    style: {
      fontFamily: "var(--font-functional)"
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, items.map((it, i) => React.createElement("button", {
    key: it.label,
    onClick: () => setActive(i),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "10px 2px",
      fontSize: "var(--fs-body)",
      fontFamily: "var(--font-functional)",
      fontWeight: i === active ? "var(--fw-medium)" : "var(--fw-regular)",
      color: i === active ? "var(--text-primary)" : "var(--text-tertiary)",
      borderBottom: i === active ? "2px solid var(--action-primary)" : "2px solid transparent",
      marginBottom: -1,
      transition: "color var(--motion-fast) var(--ease-out)"
    }
  }, it.label))), React.createElement("div", {
    style: {
      padding: "var(--space-4) 0",
      color: "var(--text-secondary)",
      fontSize: "var(--fs-body-s)"
    }
  }, items[active]?.content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
