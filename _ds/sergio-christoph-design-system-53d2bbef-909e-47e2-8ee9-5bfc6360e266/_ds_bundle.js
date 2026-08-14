/* @ds-bundle: {"format":4,"namespace":"SergioChristophDesignSystem_53d2bb","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Price","sourcePath":"components/commerce/Price.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Divider","sourcePath":"components/display/Divider.jsx"},{"name":"SectionHeading","sourcePath":"components/display/SectionHeading.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"b12bfc351b6c","components/buttons/IconButton.jsx":"469e885148ba","components/commerce/Price.jsx":"42aeb5de0874","components/commerce/ProductCard.jsx":"c8288a57b1c7","components/display/Badge.jsx":"17dc23a769e0","components/display/Divider.jsx":"0d9326f84f34","components/display/SectionHeading.jsx":"99a54dfd5865","components/forms/Checkbox.jsx":"2b42e2ae52ee","components/forms/Input.jsx":"794ebda9e62b","components/forms/Radio.jsx":"c8a23d2cd96f","components/forms/Select.jsx":"b712f1207463","components/navigation/Accordion.jsx":"5584558e4e1a","components/navigation/Breadcrumbs.jsx":"f26c1b7316b8","components/overlay/Dialog.jsx":"0c0ee18e2fcc","ui_kits/website/CartDrawer.jsx":"ad6cc567cad1","ui_kits/website/Footer.jsx":"c6ccc7633f21","ui_kits/website/HomeScreen.jsx":"8de3804d7c2e","ui_kits/website/NavBar.jsx":"1a89c9d21574","ui_kits/website/ProductScreen.jsx":"8393ce3e6ada","ui_kits/website/ShopScreen.jsx":"fada85750313","ui_kits/website/app.jsx":"b131fa65835a","ui_kits/website/data.js":"d3e33f295f03"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SergioChristophDesignSystem_53d2bb = window.SergioChristophDesignSystem_53d2bb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = "primary",
  size = "md",
  inverse = false,
  href,
  icon,
  children,
  className = "",
  ...rest
}) {
  const cls = ["sc-btn", "sc-btn--" + variant, size === "sm" ? "sc-btn--sm" : "", inverse ? "sc-btn--inverse" : "", className].filter(Boolean).join(" ");
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, children, icon ? /*#__PURE__*/React.createElement("span", {
    className: "sc-btn__icon",
    "aria-hidden": "true"
  }, icon) : null);
  return href ? /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: cls
  }, rest), inner) : /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  label,
  inverse = false,
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    className: ["sc-iconbtn", inverse ? "sc-iconbtn--inverse" : "", className].filter(Boolean).join(" ")
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/commerce/Price.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Price({
  amount,
  currency = "IDR",
  was,
  muted = false,
  className = "",
  ...rest
}) {
  const fmt = n => currency + " " + new Intl.NumberFormat("id-ID").format(n);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["sc-price", muted ? "sc-price--muted" : "", className].filter(Boolean).join(" ")
  }, rest), was != null ? /*#__PURE__*/React.createElement("s", {
    className: "sc-price--was"
  }, fmt(was)) : null, fmt(amount));
}
Object.assign(__ds_scope, { Price });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/Price.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProductCard({
  name,
  caption,
  price,
  img,
  alt,
  badge,
  href,
  onClick,
  className = "",
  ...rest
}) {
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    type: href ? undefined : "button",
    onClick: onClick,
    className: ["sc-product-card", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "sc-product-card__media"
  }, img ? /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: alt || name,
    loading: "lazy"
  }) : /*#__PURE__*/React.createElement("span", {
    className: "sc-product-card__placeholder",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sc-mark-sparkle"
  })), badge ? /*#__PURE__*/React.createElement("span", {
    className: "sc-product-card__badge sc-badge sc-badge--cream"
  }, badge) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "5px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sc-product-card__name"
  }, name), caption ? /*#__PURE__*/React.createElement("span", {
    className: "sc-product-card__caption"
  }, caption) : null, price != null ? /*#__PURE__*/React.createElement("span", {
    className: "sc-product-card__price"
  }, typeof price === "number" ? "IDR " + new Intl.NumberFormat("id-ID").format(price) : price) : null));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  variant = "outline",
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["sc-badge", "sc-badge--" + variant, className].filter(Boolean).join(" ")
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  mark = false,
  glyph = "sparkle",
  className = "",
  ...rest
}) {
  if (mark) return /*#__PURE__*/React.createElement("div", _extends({
    className: ["sc-divider-mark", className].filter(Boolean).join(" "),
    role: "separator"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: glyph === "diamond" ? "sc-mark-diamond" : "sc-mark-sparkle"
  }));
  return /*#__PURE__*/React.createElement("hr", _extends({
    className: ["sc-divider", className].filter(Boolean).join(" ")
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Divider.jsx", error: String((e && e.message) || e) }); }

// components/display/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  lede,
  center = false,
  as = "h2",
  className = "",
  ...rest
}) {
  const H = as;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["sc-section-heading", center ? "sc-section-heading--center" : "", className].filter(Boolean).join(" ")
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("span", {
    className: "sc-eyebrow"
  }, eyebrow) : null, /*#__PURE__*/React.createElement(H, {
    className: "sc-section-heading__title"
  }, title), lede ? /*#__PURE__*/React.createElement("p", {
    className: "sc-section-heading__lede"
  }, lede) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["sc-choice", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    className: "sc-checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error = false,
  className = "",
  type = "text",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["sc-field", error ? "sc-field--error" : "", className].filter(Boolean).join(" ")
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "sc-field__label"
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    className: "sc-input",
    type: type
  }, rest)), hint ? /*#__PURE__*/React.createElement("span", {
    className: "sc-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["sc-choice", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    className: "sc-radio"
  }, rest)), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error = false,
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["sc-field", error ? "sc-field--error" : "", className].filter(Boolean).join(" ")
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "sc-field__label"
  }, label) : null, /*#__PURE__*/React.createElement("select", _extends({
    className: "sc-input sc-select"
  }, rest), children), hint ? /*#__PURE__*/React.createElement("span", {
    className: "sc-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  defaultOpen = 0,
  className = "",
  ...rest
}) {
  const [open, setOpen] = React.useState(function () { return new Set(defaultOpen == null ? [] : [].concat(defaultOpen)); });
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["sc-accordion", className].filter(Boolean).join(" ")
  }, rest), items.map((it, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "sc-accordion__item" + (isOpen ? " sc-accordion__item--open" : "")
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "sc-accordion__trigger",
      "aria-expanded": isOpen,
      onClick: () => setOpen(function (prev) { var next = new Set(prev); if (next.has(i)) { next.delete(i); } else { next.add(i); } return next; })
    }, it.title, /*#__PURE__*/React.createElement("span", {
      className: "sc-accordion__icon",
      "aria-hidden": "true"
    }, "+")), isOpen ? /*#__PURE__*/React.createElement("div", {
      className: "sc-accordion__panel"
    }, it.content) : null);
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumbs({
  items = [],
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    className: ["sc-breadcrumbs", className].filter(Boolean).join(" ")
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, !last && (it.href || it.onClick) ? /*#__PURE__*/React.createElement("a", {
      href: it.href || "#",
      onClick: it.onClick
    }, it.label) : /*#__PURE__*/React.createElement("span", {
      className: last ? "sc-breadcrumbs__current" : undefined,
      "aria-current": last ? "page" : undefined
    }, it.label), !last && /*#__PURE__*/React.createElement("span", {
      className: "sc-breadcrumbs__sep",
      "aria-hidden": "true"
    }, "/"));
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  label,
  width = 520,
  children,
  className = ""
}) {
  React.useEffect(() => {
    if (!open) return;
    const h = e => {
      if (e.key === "Escape" && onClose) onClose();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-dialog-scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": label,
    className: ["sc-dialog", className].filter(Boolean).join(" "),
    style: {
      maxWidth: width
    },
    onClick: e => e.stopPropagation()
  }, onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sc-iconbtn sc-dialog__close",
    "aria-label": "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1.5 1.5l13 13M14.5 1.5l-13 13",
    stroke: "currentColor",
    strokeWidth: "1.1"
  }))) : null, children));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CartDrawer.jsx
try { (() => {
const {
  Button: CBtn,
  IconButton: CIco,
  Price: CPrice,
  Divider: CDiv
} = window.SergioChristophDesignSystem_53d2bb;
function SCCartDrawer({
  open,
  items,
  onClose,
  onRemove,
  go
}) {
  if (!open) return null;
  const total = items.reduce((s, it) => s + it.product.price, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: "var(--z-drawer)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-scrim)",
      animation: "kitFade var(--dur-fast) var(--ease-luxe)"
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      width: 440,
      background: "var(--surface-card)",
      boxShadow: "var(--shadow-overlay)",
      display: "flex",
      flexDirection: "column",
      animation: "kitSlide var(--dur-base) var(--ease-luxe)"
    },
    "aria-label": "Shopping bag"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "22px 28px",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase"
    }
  }, "Your bag \xB7 ", items.length), /*#__PURE__*/React.createElement(CIco, {
    label: "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: "x",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "8px 28px"
    }
  }, items.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: 14,
      marginTop: 24
    }
  }, "Your bag is empty. The stones are waiting.") : items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 16,
      padding: "20px 0",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      aspectRatio: "4/5",
      background: "linear-gradient(165deg,var(--ivory-0) 30%,var(--ivory-100))",
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mark-sparkle-gold.png",
    style: {
      width: 16,
      opacity: .4
    },
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 16,
      color: "var(--text-heading)"
    }
  }, it.product.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, [it.metal, it.size ? "Size " + it.size : null].filter(Boolean).join(" · ") || it.product.caption), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      letterSpacing: ".05em",
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(CPrice, {
    amount: it.product.price
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onRemove(i),
    style: {
      background: "none",
      border: 0,
      cursor: "pointer",
      alignSelf: "flex-start",
      fontSize: 11,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      padding: "4px 0",
      textDecoration: "underline",
      textUnderlineOffset: 3
    }
  }, "Remove")))), items.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 28px 28px",
      borderTop: "1px solid var(--border-hairline)",
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      letterSpacing: "var(--ls-caps-tight)",
      textTransform: "uppercase",
      fontSize: 12,
      fontWeight: 500
    }
  }, "Subtotal"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 18
    }
  }, /*#__PURE__*/React.createElement(CPrice, {
    amount: total
  }))), /*#__PURE__*/React.createElement(CBtn, {
    variant: "gold",
    onClick: () => {}
  }, "Proceed to checkout"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: ".06em",
      color: "var(--text-muted)",
      textAlign: "center"
    }
  }, "Complimentary insured shipping \xB7 IGI certificates enclosed"))));
}
Object.assign(window, {
  SCCartDrawer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CartDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function SCFooter({
  go
}) {
  const col = (title, items) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--ivory-50)",
      marginBottom: 16
    }
  }, title), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    className: "kit-footlink",
    href: "#",
    onClick: e => {
      e.preventDefault();
      go && go("shop");
    }
  }, i)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-dark)",
      color: "var(--text-inverse-muted)",
      padding: "var(--space-3xl) var(--container-pad) var(--space-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: "var(--space-2xl)",
      paddingBottom: "var(--space-2xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-white.png",
    alt: "Sergio Christoph Lab Diamond",
    style: {
      width: 210
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      lineHeight: 1.7,
      maxWidth: 300
    }
  }, "The first lab diamond store in Bali. IGI-certified stones, grown by light and set by hand in Seminyak.")), col("Shop", ["Rings", "Necklaces", "Earrings", "Bracelets"]), col("House", ["Our story", "The atelier", "Journal", "Contact"]), col("Care", ["Shipping & returns", "Ring sizing", "Certification", "Warranty"])), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-inverse)",
      paddingTop: 22,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 11,
      letterSpacing: ".08em"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Sergio Christoph \xB7 Jl. Kayu Aya, Seminyak, Bali"), /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: "uppercase",
      letterSpacing: "var(--ls-caps-tight)"
    }
  }, "IDR pricing \xB7 duties included"))));
}
Object.assign(window, {
  SCFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button,
  SectionHeading,
  Divider,
  ProductCard
} = window.SergioChristophDesignSystem_53d2bb;
function SCHomeScreen({
  go,
  openProduct
}) {
  const feats = window.SCDATA.products.slice(0, 4);
  const tile = (label, grad) => /*#__PURE__*/React.createElement("button", {
    key: label,
    onClick: () => go("shop", {
      cat: label
    }),
    style: {
      border: 0,
      padding: 0,
      cursor: "pointer",
      background: "none",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      placeItems: "center",
      width: "100%",
      aspectRatio: "3/4",
      background: grad
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mark-sparkle-gold.png",
    style: {
      width: 30,
      opacity: .38
    },
    alt: ""
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 24,
      color: "var(--text-heading)"
    }
  }, label));
  return /*#__PURE__*/React.createElement("main", {
    style: {
      animation: "kitFade var(--dur-base) var(--ease-luxe)"
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "linear-gradient(160deg,#33301F 0%,#23211B 45%,#191813 100%)",
      minHeight: 620,
      display: "grid",
      placeItems: "center",
      textAlign: "center",
      padding: "var(--space-2xl) var(--container-pad)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 28,
      animation: "kitRise var(--dur-slow) var(--ease-luxe)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sc-eyebrow",
    style: {
      color: "var(--gold-300)"
    }
  }, "Seminyak \xB7 Bali \xB7 Est. 2024"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-hero)",
      lineHeight: "var(--lh-display)",
      color: "var(--ivory-50)",
      maxWidth: 820
    }
  }, "The first lab diamond store in Bali."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--fs-lede)",
      fontWeight: 300,
      color: "var(--text-inverse-muted)",
      maxWidth: 520
    }
  }, "IGI-certified diamonds grown by light, cut to order and set by hand \u2014 identical to mined, honest in price."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    onClick: () => go("shop")
  }, "Discover the collection"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    inverse: true,
    onClick: () => go("shop", {
      cat: "Rings"
    })
  }, "Engagement rings")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-3xl) var(--container-pad)",
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    center: true,
    eyebrow: "The Collections",
    title: "Chosen for the way you live",
    lede: "Three houses of design, one standard of stone."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--gap-grid)",
      marginTop: "var(--space-2xl)"
    }
  }, tile("Rings", "radial-gradient(120% 130% at 50% 18%,#FFFFFF 35%,var(--ivory-100))"), tile("Necklaces", "radial-gradient(120% 130% at 50% 18%,#FFFFFF 30%,var(--ivory-200))"), tile("Earrings", "radial-gradient(120% 130% at 50% 18%,#FFFFFF 30%,var(--gold-200))"))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-cream)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-3xl) var(--container-pad)",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: "var(--space-3xl)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "4/5",
      background: "linear-gradient(150deg,#3A342A,#191813 75%)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mark-diamond-white.png",
    style: {
      width: 54,
      opacity: .4
    },
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24,
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The Atelier",
    title: "Grown by science, set by hand",
    lede: "Ninety days under plasma light in place of a billion years underground. Same carbon, same fire \u2014 cut in Surabaya, certified by IGI, and finished at our bench in Seminyak."
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go("shop")
  }, "Inside the atelier"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-3xl) var(--container-pad)",
      maxWidth: 960,
      margin: "0 auto",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-lg)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-accent)",
      fontStyle: "italic",
      fontWeight: 500,
      fontSize: 34,
      lineHeight: 1.35,
      color: "var(--text-heading)"
    }
  }, "\u201CAn heirloom, grown in ninety days.\u201D"), /*#__PURE__*/React.createElement(Divider, {
    mark: true
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "linear-gradient(155deg,#43392B 0%,#2A251D 55%,#191813 100%)",
      minHeight: 600,
      display: "grid",
      placeItems: "center",
      textAlign: "center",
      padding: "var(--space-2xl) var(--container-pad)",
      marginBottom: "var(--space-3xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mark-sparkle-white.png",
    style: {
      width: 30,
      opacity: .5
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "sc-eyebrow",
    style: {
      color: "var(--gold-300)"
    }
  }, "The Campaign"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-display)",
      color: "var(--ivory-50)",
      maxWidth: 680,
      lineHeight: "var(--lh-display)"
    }
  }, "Worn at dusk, Uluwatu"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--text-inverse-muted)"
    }
  }, "Full-screen campaign film placeholder \u2014 awaiting photography"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    inverse: true
  }, "Watch the film")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 var(--container-pad) var(--space-3xl)",
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: "var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "New Arrivals",
    title: "This season's stones"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => go("shop")
  }, "View all")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--gap-grid)"
    }
  }, feats.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    name: p.name,
    caption: p.caption,
    price: p.price,
    badge: p.badge,
    onClick: () => openProduct(p.id)
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-dark)",
      padding: "var(--space-2xl) var(--container-pad)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-2xl)",
      textAlign: "center"
    }
  }, [["gem", "IGI certified", "Every stone ships with its independent laboratory report."], ["sparkles", "Grown in 90 days", "Type IIa carbon — chemically identical to mined diamond."], ["shield-check", "Lifetime warranty", "Resizing, re-polishing and re-setting, on the house."]].map(([ic, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 12,
      color: "var(--text-inverse-muted)"
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: ic,
    size: 26,
    stroke: 1,
    style: {
      color: "var(--gold-300)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--ivory-50)"
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      maxWidth: 280,
      lineHeight: 1.7
    }
  }, d))))));
}
Object.assign(window, {
  SCHomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/NavBar.jsx
try { (() => {
const {
  IconButton
} = window.SergioChristophDesignSystem_53d2bb;
function LIcon({
  name,
  size = 20,
  stroke = 1.25,
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = "";
    const i = document.createElement("i");
    i.setAttribute("data-lucide", name);
    el.appendChild(i);
    window.lucide.createIcons({
      attrs: {
        "stroke-width": stroke,
        width: size,
        height: size
      }
    });
  }, [name, size, stroke]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: "inline-flex",
      lineHeight: 0,
      ...style
    }
  });
}
function SCNavBar({
  go,
  cartCount,
  onCart,
  onBook
}) {
  const links = [["High Jewellery", "shop"], ["Rings", "shop:Rings"], ["Necklaces", "shop:Necklaces"], ["Our Story", "home"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: "var(--z-nav)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-dark)",
      color: "var(--text-inverse-muted)",
      textAlign: "center",
      padding: "8px 16px",
      fontSize: 11,
      letterSpacing: "var(--ls-caps-tight)",
      textTransform: "uppercase"
    }
  }, "Complimentary insured delivery across Indonesia"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)",
      borderBottom: "1px solid var(--border-hairline)",
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center",
      height: 78,
      padding: "0 var(--container-pad)"
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 28
    }
  }, links.map(([l, r]) => /*#__PURE__*/React.createElement("button", {
    key: l,
    className: "kit-navlink",
    onClick: () => {
      const [s, c] = r.split(":");
      go(s, c ? {
        cat: c
      } : {});
    }
  }, l))), /*#__PURE__*/React.createElement("button", {
    onClick: () => go("home"),
    style: {
      background: "none",
      border: 0,
      cursor: "pointer",
      padding: 0
    },
    "aria-label": "Sergio Christoph \u2014 home"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-black.png",
    alt: "Sergio Christoph Lab Diamond",
    style: {
      height: 36
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "kit-navlink",
    style: {
      marginRight: 18
    },
    onClick: onBook
  }, "Book an appointment"), /*#__PURE__*/React.createElement(IconButton, {
    label: "Search"
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: "search"
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Wishlist"
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: "heart"
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Shopping bag",
    onClick: onCart,
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: "shopping-bag"
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 4,
      right: 2,
      minWidth: 15,
      height: 15,
      borderRadius: 999,
      background: "var(--gold-500)",
      color: "var(--ivory-0)",
      fontSize: 9,
      fontWeight: 600,
      display: "grid",
      placeItems: "center",
      padding: "0 3px"
    }
  }, cartCount)))));
}
Object.assign(window, {
  SCNavBar,
  LIcon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductScreen.jsx
try { (() => {
const {
  Breadcrumbs: PBc,
  Select: PSel,
  Radio: PRadio,
  Button: PBtn,
  Badge: PBadge,
  Accordion: PAcc,
  Price: PPrice,
  ProductCard: PPc,
  Divider: PDiv
} = window.SergioChristophDesignSystem_53d2bb;
function SCProductScreen({
  id,
  go,
  openProduct,
  addToCart
}) {
  const p = window.SCDATA.products.find(x => x.id === id) || window.SCDATA.products[0];
  const [size, setSize] = React.useState("52");
  const [metal, setMetal] = React.useState("18k Yellow Gold");
  const [shot, setShot] = React.useState(0);
  const grads = ["radial-gradient(120% 130% at 50% 20%,#FFFFFF 40%,var(--ivory-100))", "radial-gradient(120% 130% at 50% 20%,#FFFFFF 30%,var(--ivory-200))", "linear-gradient(150deg,#3A342A,#191813 75%)", "radial-gradient(120% 130% at 50% 20%,#FFFFFF 30%,var(--gold-200))"];
  const also = window.SCDATA.products.filter(x => x.id !== p.id).slice(0, 4);
  const ring = p.cat === "Rings";
  return /*#__PURE__*/React.createElement("main", {
    style: {
      animation: "kitFade var(--dur-base) var(--ease-luxe)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-lg) var(--container-pad) var(--space-3xl)"
    }
  }, /*#__PURE__*/React.createElement(PBc, {
    items: [{
      label: "Home",
      href: "#",
      onClick: e => {
        e.preventDefault();
        go("home");
      }
    }, {
      label: p.cat,
      href: "#",
      onClick: e => {
        e.preventDefault();
        go("shop", {
          cat: p.cat
        });
      }
    }, {
      label: p.name
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.15fr 1fr",
      gap: "var(--space-3xl)",
      marginTop: "var(--space-lg)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, grads.map((g, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: "kit-thumb" + (i === shot ? " kit-thumb--on" : ""),
    style: {
      background: g
    },
    onClick: () => setShot(i),
    "aria-label": "View " + (i + 1)
  }, /*#__PURE__*/React.createElement("img", {
    src: i === 2 ? "../../assets/mark-sparkle-white.png" : "../../assets/mark-sparkle-gold.png",
    style: {
      width: 16,
      opacity: .4
    },
    alt: ""
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      aspectRatio: "4/5",
      background: grads[shot],
      display: "grid",
      placeItems: "center",
      transition: "background var(--dur-base) var(--ease-luxe)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: shot === 2 ? "../../assets/mark-sparkle-white.png" : "../../assets/mark-sparkle-gold.png",
    style: {
      width: 56,
      opacity: .42
    },
    alt: "Product photography placeholder"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 26,
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(PBadge, null, "Lab grown \xB7 IGI certified"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-title)",
      lineHeight: 1.12
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, p.caption), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 22,
      color: "var(--text-heading)"
    }
  }, /*#__PURE__*/React.createElement(PPrice, {
    amount: p.price
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)",
      maxWidth: "46ch"
    }
  }, "Grown under plasma light in ninety days, cut to order, and set at our Seminyak bench. Chemically identical to a mined stone \u2014 brighter in conscience and in price."), ring ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-lg)"
    }
  }, /*#__PURE__*/React.createElement(PSel, {
    label: "Ring size",
    value: size,
    onChange: e => setSize(e.target.value)
  }, ["48", "50", "52", "54", "56"].map(s => /*#__PURE__*/React.createElement("option", {
    key: s
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sc-field__label"
  }, "Metal"), ["18k Yellow Gold", "18k White Gold", "Platinum"].map(m => /*#__PURE__*/React.createElement(PRadio, {
    key: m,
    name: "pdp-metal",
    label: m,
    checked: metal === m,
    onChange: () => setMetal(m)
  })))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(PBtn, {
    onClick: () => addToCart({
      id: p.id,
      size: ring ? size : null,
      metal: ring ? metal : null
    })
  }, "Add to bag \u2014 ", "IDR " + new Intl.NumberFormat("id-ID").format(p.price)), /*#__PURE__*/React.createElement(PBtn, {
    variant: "outline"
  }, "View at the boutique")), /*#__PURE__*/React.createElement(PAcc, {
    defaultOpen: null,
    items: [{
      title: "Details & certification",
      content: p.caption + ". Independent IGI report included; laser-inscribed girdle. Type IIa carbon."
    }, {
      title: "Shipping & returns",
      content: "Complimentary insured delivery across Indonesia (2–4 days) and worldwide (5–8 days). Thirty-day returns, no questions."
    }, {
      title: "Care & warranty",
      content: "Lifetime resizing, re-polishing and re-setting at the Seminyak atelier, on the house."
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-3xl)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement(PDiv, {
    mark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-heading)"
    }
  }, "You may also admire"), /*#__PURE__*/React.createElement(PBtn, {
    variant: "ghost",
    size: "sm",
    onClick: () => go("shop")
  }, "View all")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--gap-grid)"
    }
  }, also.map(x => /*#__PURE__*/React.createElement(PPc, {
    key: x.id,
    name: x.name,
    caption: x.caption,
    price: x.price,
    onClick: () => openProduct(x.id)
  }))))));
}
Object.assign(window, {
  SCProductScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ShopScreen.jsx
try { (() => {
const {
  Breadcrumbs: SCBc,
  Select: SCSel,
  ProductCard: SCPc,
  Button: SCBtn2,
  SectionHeading: SCSh2
} = window.SergioChristophDesignSystem_53d2bb;
function SCShopScreen({
  cat = "All",
  setCat,
  openProduct,
  onBook,
  go
}) {
  const [sort, setSort] = React.useState("Featured");
  let items = window.SCDATA.products.filter(p => cat === "All" || p.cat === cat);
  if (sort === "Price · low to high") items = [...items].sort((a, b) => a.price - b.price);
  if (sort === "Price · high to low") items = [...items].sort((a, b) => b.price - a.price);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      animation: "kitFade var(--dur-base) var(--ease-luxe)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-lg) var(--container-pad) var(--space-3xl)"
    }
  }, /*#__PURE__*/React.createElement(SCBc, {
    items: [{
      label: "Home",
      href: "#",
      onClick: e => {
        e.preventDefault();
        go("home");
      }
    }, {
      label: cat === "All" ? "High Jewellery" : cat
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      margin: "var(--space-xl) 0 var(--space-lg)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-display)"
    }
  }, cat === "All" ? "High Jewellery" : cat), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: ".1em",
      color: "var(--text-muted)",
      textTransform: "uppercase"
    }
  }, items.length, " pieces")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 24,
      paddingBottom: "var(--space-md)",
      borderBottom: "1px solid var(--border-hairline)",
      marginBottom: "var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }, window.SCDATA.cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: "kit-chip" + (c === cat ? " kit-chip--on" : ""),
    onClick: () => setCat(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200
    }
  }, /*#__PURE__*/React.createElement(SCSel, {
    label: "Sort",
    value: sort,
    onChange: e => setSort(e.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "Featured"), /*#__PURE__*/React.createElement("option", null, "Price \xB7 low to high"), /*#__PURE__*/React.createElement("option", null, "Price \xB7 high to low")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--gap-grid)",
      rowGap: "var(--space-2xl)"
    }
  }, items.map(p => /*#__PURE__*/React.createElement(SCPc, {
    key: p.id,
    name: p.name,
    caption: p.caption,
    price: p.price,
    badge: p.badge,
    onClick: () => openProduct(p.id)
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-cream)",
      padding: "var(--space-2xl) var(--container-pad)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(SCSh2, {
    center: true,
    eyebrow: "Private Viewing",
    title: "See the fire in person",
    lede: "Thirty minutes, a loupe, and every stone on your shortlist \u2014 at the Seminyak boutique."
  }), /*#__PURE__*/React.createElement(SCBtn2, {
    variant: "outline",
    onClick: onBook
  }, "Book an appointment"))));
}
Object.assign(window, {
  SCShopScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ShopScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
const {
  Dialog: ADialog,
  Input: AInput,
  Select: ASelect,
  Button: AButton,
  SectionHeading: ASh
} = window.SergioChristophDesignSystem_53d2bb;
function SCApp() {
  const [route, setRoute] = React.useState({
    screen: "home"
  });
  const [cart, setCart] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [bookOpen, setBookOpen] = React.useState(false);
  const [booked, setBooked] = React.useState(false);
  const go = (screen, extra) => {
    setRoute({
      screen,
      ...extra
    });
    window.scrollTo(0, 0);
  };
  const openProduct = id => go("product", {
    id
  });
  const addToCart = ({
    id,
    size,
    metal
  }) => {
    const product = window.SCDATA.products.find(p => p.id === id);
    setCart(c => [...c, {
      product,
      size,
      metal
    }]);
    setCartOpen(true);
  };
  const screen = route.screen === "shop" ? /*#__PURE__*/React.createElement(SCShopScreen, {
    key: "s" + (route.cat || "All"),
    cat: route.cat || "All",
    setCat: c => go("shop", {
      cat: c
    }),
    openProduct: openProduct,
    onBook: () => setBookOpen(true),
    go: go
  }) : route.screen === "product" ? /*#__PURE__*/React.createElement(SCProductScreen, {
    key: "p" + route.id,
    id: route.id,
    go: go,
    openProduct: openProduct,
    addToCart: addToCart
  }) : /*#__PURE__*/React.createElement(SCHomeScreen, {
    go: go,
    openProduct: openProduct
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SCNavBar, {
    go: go,
    cartCount: cart.length,
    onCart: () => setCartOpen(true),
    onBook: () => {
      setBooked(false);
      setBookOpen(true);
    }
  }), screen, /*#__PURE__*/React.createElement(SCFooter, {
    go: go
  }), /*#__PURE__*/React.createElement(SCCartDrawer, {
    open: cartOpen,
    items: cart,
    onClose: () => setCartOpen(false),
    onRemove: i => setCart(c => c.filter((_, j) => j !== i)),
    go: go
  }), /*#__PURE__*/React.createElement(ADialog, {
    open: bookOpen,
    onClose: () => setBookOpen(false),
    label: "Book an appointment"
  }, booked ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      textAlign: "center",
      alignItems: "center",
      padding: "12px 0"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mark-sparkle-gold.png",
    style: {
      width: 34
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 26
    }
  }, "We\u2019ll see you soon"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: "var(--text-muted)",
      maxWidth: "38ch"
    }
  }, "Your private viewing is reserved. A confirmation is on its way to your inbox.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(ASh, {
    eyebrow: "Private Viewing",
    title: "Book an appointment",
    lede: "Thirty minutes at the Seminyak boutique, one on one."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "18px 24px"
    }
  }, /*#__PURE__*/React.createElement(AInput, {
    label: "Name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(AInput, {
    label: "Email",
    placeholder: "you@example.com"
  }), /*#__PURE__*/React.createElement(ASelect, {
    label: "Occasion",
    defaultValue: "Engagement"
  }, /*#__PURE__*/React.createElement("option", null, "Engagement"), /*#__PURE__*/React.createElement("option", null, "Anniversary"), /*#__PURE__*/React.createElement("option", null, "A gift"), /*#__PURE__*/React.createElement("option", null, "For myself")), /*#__PURE__*/React.createElement(ASelect, {
    label: "Preferred time",
    defaultValue: "Afternoon"
  }, /*#__PURE__*/React.createElement("option", null, "Morning"), /*#__PURE__*/React.createElement("option", null, "Afternoon"), /*#__PURE__*/React.createElement("option", null, "Evening"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(AButton, {
    variant: "gold",
    onClick: () => setBooked(true)
  }, "Reserve my visit"), /*#__PURE__*/React.createElement(AButton, {
    variant: "ghost",
    onClick: () => setBookOpen(false)
  }, "Not now")))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(SCApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.SCDATA = {
  products: [{
    id: 1,
    name: "The Ubud Solitaire",
    cat: "Rings",
    caption: "1.2ct round brilliant · 18k yellow gold",
    price: 24500000,
    badge: "New"
  }, {
    id: 2,
    name: "Canggu Tennis Bracelet",
    cat: "Bracelets",
    caption: "3.0ctw round · 18k white gold",
    price: 38900000
  }, {
    id: 3,
    name: "Uluwatu Drop Earrings",
    cat: "Earrings",
    caption: "0.8ctw pear cut · platinum",
    price: 18400000
  }, {
    id: 4,
    name: "The Sanur Pendant",
    cat: "Necklaces",
    caption: "0.5ct oval · 18k rose gold",
    price: 12700000
  }, {
    id: 5,
    name: "Bingin Pavé Band",
    cat: "Rings",
    caption: "0.6ctw micro-pavé · platinum",
    price: 9800000
  }, {
    id: 6,
    name: "The Menjangan Halo",
    cat: "Rings",
    caption: "1.5ct cushion halo · 18k white gold",
    price: 32600000,
    badge: "Bestseller"
  }, {
    id: 7,
    name: "Sidemen Studs",
    cat: "Earrings",
    caption: "1.0ctw round · 18k yellow gold",
    price: 14200000
  }, {
    id: 8,
    name: "Amed Rivière Necklace",
    cat: "Necklaces",
    caption: "5.2ctw graduated · 18k white gold",
    price: 58400000
  }],
  cats: ["All", "Rings", "Necklaces", "Earrings", "Bracelets"]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Price = __ds_scope.Price;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.Dialog = __ds_scope.Dialog;

})();
