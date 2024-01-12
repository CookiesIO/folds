import { forwardRef, useCallback, useRef, useEffect, useLayoutEffect, useState } from "react";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import classNames from "classnames";
import FocusLock from "react-focus-lock";
import { createPortal } from "react-dom";
var color = { Background: { Container: "var(--oq6d070)", ContainerHover: "var(--oq6d071)", ContainerActive: "var(--oq6d072)", ContainerLine: "var(--oq6d073)", OnContainer: "var(--oq6d074)" }, Surface: { Container: "var(--oq6d075)", ContainerHover: "var(--oq6d076)", ContainerActive: "var(--oq6d077)", ContainerLine: "var(--oq6d078)", OnContainer: "var(--oq6d079)" }, SurfaceVariant: { Container: "var(--oq6d07a)", ContainerHover: "var(--oq6d07b)", ContainerActive: "var(--oq6d07c)", ContainerLine: "var(--oq6d07d)", OnContainer: "var(--oq6d07e)" }, Primary: { Main: "var(--oq6d07f)", MainHover: "var(--oq6d07g)", MainActive: "var(--oq6d07h)", MainLine: "var(--oq6d07i)", OnMain: "var(--oq6d07j)", Container: "var(--oq6d07k)", ContainerHover: "var(--oq6d07l)", ContainerActive: "var(--oq6d07m)", ContainerLine: "var(--oq6d07n)", OnContainer: "var(--oq6d07o)" }, Secondary: { Main: "var(--oq6d07p)", MainHover: "var(--oq6d07q)", MainActive: "var(--oq6d07r)", MainLine: "var(--oq6d07s)", OnMain: "var(--oq6d07t)", Container: "var(--oq6d07u)", ContainerHover: "var(--oq6d07v)", ContainerActive: "var(--oq6d07w)", ContainerLine: "var(--oq6d07x)", OnContainer: "var(--oq6d07y)" }, Success: { Main: "var(--oq6d07z)", MainHover: "var(--oq6d0710)", MainActive: "var(--oq6d0711)", MainLine: "var(--oq6d0712)", OnMain: "var(--oq6d0713)", Container: "var(--oq6d0714)", ContainerHover: "var(--oq6d0715)", ContainerActive: "var(--oq6d0716)", ContainerLine: "var(--oq6d0717)", OnContainer: "var(--oq6d0718)" }, Warning: { Main: "var(--oq6d0719)", MainHover: "var(--oq6d071a)", MainActive: "var(--oq6d071b)", MainLine: "var(--oq6d071c)", OnMain: "var(--oq6d071d)", Container: "var(--oq6d071e)", ContainerHover: "var(--oq6d071f)", ContainerActive: "var(--oq6d071g)", ContainerLine: "var(--oq6d071h)", OnContainer: "var(--oq6d071i)" }, Critical: { Main: "var(--oq6d071j)", MainHover: "var(--oq6d071k)", MainActive: "var(--oq6d071l)", MainLine: "var(--oq6d071m)", OnMain: "var(--oq6d071n)", Container: "var(--oq6d071o)", ContainerHover: "var(--oq6d071p)", ContainerActive: "var(--oq6d071q)", ContainerLine: "var(--oq6d071r)", OnContainer: "var(--oq6d071s)" }, Other: { FocusRing: "var(--oq6d071t)", Shadow: "var(--oq6d071u)", Overlay: "var(--oq6d071v)" } };
var lightTheme = "oq6d071w";
var config = { font: { Inter: "var(--_164xfge1)" }, fontSize: { D400: "var(--_164xfge2)", H1: "var(--_164xfge3)", H2: "var(--_164xfge4)", H3: "var(--_164xfge5)", H4: "var(--_164xfge6)", H5: "var(--_164xfge7)", H6: "var(--_164xfge8)", T500: "var(--_164xfge9)", T400: "var(--_164xfgea)", T300: "var(--_164xfgeb)", T200: "var(--_164xfgec)", B500: "var(--_164xfged)", B400: "var(--_164xfgee)", B300: "var(--_164xfgef)", L400: "var(--_164xfgeg)", O400: "var(--_164xfgeh)", C400: "var(--_164xfgei)" }, lineHeight: { D400: "var(--_164xfgej)", H1: "var(--_164xfgek)", H2: "var(--_164xfgel)", H3: "var(--_164xfgem)", H4: "var(--_164xfgen)", H5: "var(--_164xfgeo)", H6: "var(--_164xfgep)", T500: "var(--_164xfgeq)", T400: "var(--_164xfger)", T300: "var(--_164xfges)", T200: "var(--_164xfget)", B500: "var(--_164xfgeu)", B400: "var(--_164xfgev)", B300: "var(--_164xfgew)", L400: "var(--_164xfgex)", O400: "var(--_164xfgey)", C400: "var(--_164xfgez)" }, letterSpacing: { D400: "var(--_164xfge10)", H1: "var(--_164xfge11)", H2: "var(--_164xfge12)", H3: "var(--_164xfge13)", H4: "var(--_164xfge14)", H5: "var(--_164xfge15)", H6: "var(--_164xfge16)", T500: "var(--_164xfge17)", T400: "var(--_164xfge18)", T300: "var(--_164xfge19)", T200: "var(--_164xfge1a)", B500: "var(--_164xfge1b)", B400: "var(--_164xfge1c)", B300: "var(--_164xfge1d)", L400: "var(--_164xfge1e)", O400: "var(--_164xfge1f)", C400: "var(--_164xfge1g)" }, fontWeight: { W100: "var(--_164xfge1h)", W200: "var(--_164xfge1i)", W300: "var(--_164xfge1j)", W400: "var(--_164xfge1k)", W500: "var(--_164xfge1l)", W600: "var(--_164xfge1m)", W700: "var(--_164xfge1n)", W800: "var(--_164xfge1o)", W900: "var(--_164xfge1p)" }, space: { S0: "var(--_164xfge1q)", S100: "var(--_164xfge1r)", S200: "var(--_164xfge1s)", S300: "var(--_164xfge1t)", S400: "var(--_164xfge1u)", S500: "var(--_164xfge1v)", S600: "var(--_164xfge1w)", S700: "var(--_164xfge1x)" }, radii: { R0: "var(--_164xfge1y)", R300: "var(--_164xfge1z)", R400: "var(--_164xfge20)", R500: "var(--_164xfge21)", Round: "var(--_164xfge22)", Pill: "var(--_164xfge23)" }, borderWidth: { B0: "var(--_164xfge24)", B300: "var(--_164xfge25)", B400: "var(--_164xfge26)", B500: "var(--_164xfge27)", B600: "var(--_164xfge28)", B700: "var(--_164xfge29)" }, zIndex: { Z100: "var(--_164xfge2a)", Z200: "var(--_164xfge2b)", Z300: "var(--_164xfge2c)", Z400: "var(--_164xfge2d)", Max: "var(--_164xfge2e)" }, shadow: { E100: "var(--_164xfge2f)", E200: "var(--_164xfge2g)", E300: "var(--_164xfge2h)", E400: "var(--_164xfge2i)" }, size: { XInherit: "var(--_164xfge2j)", X50: "var(--_164xfge2k)", X100: "var(--_164xfge2l)", X200: "var(--_164xfge2m)", X300: "var(--_164xfge2n)", X400: "var(--_164xfge2o)", X500: "var(--_164xfge2p)", X600: "var(--_164xfge2q)", DialogWidth: "var(--_164xfge2r)", ModalHeight300: "var(--_164xfge2s)", ModalHeight400: "var(--_164xfge2t)", ModalHeight500: "var(--_164xfge2u)", ModalWidth300: "var(--_164xfge2v)", ModalWidth400: "var(--_164xfge2w)", ModalWidth500: "var(--_164xfge2x)", ModalDrawerWidth: "var(--_164xfge2y)" }, transition: {}, opacity: { P500: "var(--_164xfge2z)", P400: "var(--_164xfge30)", P300: "var(--_164xfge31)", Placeholder: "var(--_164xfge32)", Disabled: "var(--_164xfge33)" } };
var configClass = "_164xfge0";
var vars = { outline: { FocusRing: "var(--dw378b1)" } };
var varsClass = "dw378b0";
const pxToRem = (px) => parseFloat((px / 16).toFixed(4));
const toRem = (px) => `${pxToRem(px)}rem`;
const getRelativeFixedPosition = (anchorRect, position, align, offset, alignOffset, itemRect) => {
  const { clientWidth, clientHeight } = document.documentElement;
  const css = {
    top: "unset",
    right: "unset",
    bottom: "unset",
    left: "unset",
    transform: "none"
  };
  if (position === "Top" || position === "Bottom") {
    const top = anchorRect.top - offset;
    const bottom = anchorRect.bottom + offset;
    const canPositionTop = top >= itemRect.height;
    const canPositionBottom = bottom + itemRect.height <= clientHeight;
    if (position === "Top") {
      if (canPositionTop)
        css.bottom = `${clientHeight - top}px`;
      else if (canPositionBottom)
        css.top = `${bottom}px`;
      else
        css.top = `${offset}px`;
    }
    if (position === "Bottom") {
      if (canPositionBottom)
        css.top = `${bottom}px`;
      else if (canPositionTop)
        css.bottom = `${clientHeight - top}px`;
      else
        css.top = `${offset}px`;
    }
    if (align === "Start")
      css.left = `${anchorRect.left + alignOffset}px`;
    if (align === "Center") {
      css.left = `${anchorRect.left + anchorRect.width / 2 + alignOffset}px`;
      css.transform = "translateX(-50%)";
    }
    if (align === "End")
      css.right = `${clientWidth - anchorRect.right + alignOffset}px`;
  } else {
    const left = anchorRect.left - offset;
    const right = anchorRect.right + offset;
    const canPositionLeft = left >= itemRect.width;
    const canPositionRight = right + itemRect.width <= clientWidth;
    if (position === "Left") {
      if (canPositionLeft)
        css.right = `${clientWidth - left}px`;
      else if (canPositionRight)
        css.left = `${right}px`;
      else
        css.left = `${offset}px`;
    }
    if (position === "Right") {
      if (canPositionRight)
        css.left = `${right}px`;
      else if (canPositionLeft)
        css.right = `${clientWidth - left}px`;
      else
        css.left = `${offset}px`;
    }
    if (align === "Start")
      css.top = `${anchorRect.top + alignOffset}px`;
    if (align === "Center") {
      css.transform = "translateY(-50%)";
      css.top = `${anchorRect.top + anchorRect.height / 2 + alignOffset}px`;
    }
    if (align === "End")
      css.bottom = `${clientHeight - anchorRect.bottom + alignOffset}px`;
  }
  return css;
};
const percent = (min, max, value) => (value - min) / (max - min) * 100;
const as = (fc) => forwardRef(fc);
var DefaultReset = "_1mqalmd1 _1mqalmd0";
var TextReset = "_1mqalmd0";
var Disabled = "_1bugis91";
var FocusOutline = "_1bugis90";
var CrossSizeVariant = { "50": "cpipac7", "100": "cpipac8", "200": "cpipac9", "300": "cpipaca", "400": "cpipacb", "500": "cpipacc", "600": "cpipacd", Inherit: "cpipac6" };
var RadiiVariant = { "0": "cpipac1", "300": "cpipac2", "400": "cpipac3", "500": "cpipac4", Inherit: "cpipac0", Pill: "cpipac5" };
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function mapValues(input, fn) {
  var result = {};
  for (var _key in input) {
    result[_key] = fn(input[_key], _key);
  }
  return result;
}
var shouldApplyCompound = (compoundCheck, selections, defaultVariants) => {
  for (var key of Object.keys(compoundCheck)) {
    var _selections$key;
    if (compoundCheck[key] !== ((_selections$key = selections[key]) !== null && _selections$key !== void 0 ? _selections$key : defaultVariants[key])) {
      return false;
    }
  }
  return true;
};
var createRuntimeFn = (config2) => {
  var runtimeFn = (options) => {
    var className = config2.defaultClassName;
    var selections = _objectSpread2(_objectSpread2({}, config2.defaultVariants), options);
    for (var variantName in selections) {
      var _selections$variantNa;
      var variantSelection = (_selections$variantNa = selections[variantName]) !== null && _selections$variantNa !== void 0 ? _selections$variantNa : config2.defaultVariants[variantName];
      if (variantSelection != null) {
        var selection = variantSelection;
        if (typeof selection === "boolean") {
          selection = selection === true ? "true" : "false";
        }
        var selectionClassName = (
          // @ts-expect-error
          config2.variantClassNames[variantName][selection]
        );
        if (selectionClassName) {
          className += " " + selectionClassName;
        }
      }
    }
    for (var [compoundCheck, compoundClassName] of config2.compoundVariants) {
      if (shouldApplyCompound(compoundCheck, selections, config2.defaultVariants)) {
        className += " " + compoundClassName;
      }
    }
    return className;
  };
  runtimeFn.variants = () => Object.keys(config2.variantClassNames);
  runtimeFn.classNames = {
    get base() {
      return config2.defaultClassName.split(" ")[0];
    },
    get variants() {
      return mapValues(config2.variantClassNames, (classNames2) => mapValues(classNames2, (className) => className.split(" ")[0]));
    }
  };
  return runtimeFn;
};
var Avatar$1 = createRuntimeFn({ defaultClassName: "_1684mq51 _1mqalmd1 _1mqalmd0 _1bugis90 _1bugis91", variantClassNames: { size: { "200": "_1684mq52", "300": "_1684mq53", "400": "_1684mq54", "500": "_1684mq55" }, radii: { "0": "cpipac1", "300": "cpipac2", "400": "cpipac3", "500": "cpipac4", Inherit: "cpipac0", Pill: "cpipac5" } }, defaultVariants: { size: "400", radii: "400" }, compoundVariants: [] });
var AvatarFallback$1 = "_1684mq5d _1mqalmd1 _1mqalmd0";
var AvatarImage$1 = "_1684mq5c _1mqalmd1 _1mqalmd0";
const Avatar = as(
  ({ as: AsAvatar = "span", size, radii, className, ...props }, ref) => /* @__PURE__ */ jsx(AsAvatar, { className: classNames(Avatar$1({ size, radii }), className), ...props, ref })
);
const AvatarImage = as(({ as: AsAvatarImage = "img", className, ...props }, ref) => /* @__PURE__ */ jsx(AsAvatarImage, { className: classNames(AvatarImage$1, className), ...props, ref }));
const AvatarFallback = as(
  ({ as: AsAvatarFallback = "span", className, ...props }, ref) => /* @__PURE__ */ jsx(AsAvatarFallback, { className: classNames(AvatarFallback$1, className), ...props, ref })
);
var Badge$1 = createRuntimeFn({ defaultClassName: "_13qe89m6 _1mqalmd1 _1mqalmd0 _1bugis90 _1bugis91", variantClassNames: { size: { "200": "_13qe89m7", "300": "_13qe89m8", "400": "_13qe89m9", "500": "_13qe89ma" }, variant: { Primary: "_13qe89mb", Secondary: "_13qe89mc", Success: "_13qe89md", Warning: "_13qe89me", Critical: "_13qe89mf" }, fill: { Solid: "_13qe89mg", Soft: "_13qe89mh", None: "_13qe89mi" }, outlined: { true: "_13qe89mj" }, radii: { "0": "cpipac1", "300": "cpipac2", "400": "cpipac3", "500": "cpipac4", Inherit: "cpipac0", Pill: "cpipac5" } }, defaultVariants: { size: "400", variant: "Primary", fill: "Soft", radii: "300" }, compoundVariants: [] });
const Badge = as(
  ({ as: AsBadge = "span", className, size, variant, fill, radii, outlined, ...props }, ref) => /* @__PURE__ */ jsx(
    AsBadge,
    {
      className: classNames(Badge$1({ size, variant, fill, radii, outlined }), className),
      ...props,
      ref
    }
  )
);
var Box$1 = createRuntimeFn({ defaultClassName: "prxiv40 _1mqalmd1 _1mqalmd0", variantClassNames: { display: { Flex: "prxiv41", InlineFlex: "prxiv42" }, direction: { Inherit: "prxiv43", Row: "prxiv44", RowReverse: "prxiv45", Column: "prxiv46", ColumnReverse: "prxiv47" }, wrap: { Inherit: "prxiv48", NoWrap: "prxiv49", Wrap: "prxiv4a", WrapReverse: "prxiv4b" }, justifyContent: { Inherit: "prxiv4c", Start: "prxiv4d", End: "prxiv4e", Stretch: "prxiv4f", Center: "prxiv4g", Baseline: "prxiv4h", SpaceBetween: "prxiv4i", SpaceAround: "prxiv4j", SpaceEvenly: "prxiv4k" }, justifyItems: { Inherit: "prxiv4l", Start: "prxiv4m", End: "prxiv4n", Stretch: "prxiv4o", Center: "prxiv4p", Baseline: "prxiv4q" }, justifySelf: { Inherit: "prxiv4r", Start: "prxiv4s", End: "prxiv4t", Stretch: "prxiv4u", Center: "prxiv4v", Baseline: "prxiv4w" }, alignContent: { Inherit: "prxiv4x", Start: "prxiv4y", End: "prxiv4z", Stretch: "prxiv410", Center: "prxiv411", Baseline: "prxiv412", SpaceBetween: "prxiv413", SpaceAround: "prxiv414", SpaceEvenly: "prxiv415" }, alignItems: { Inherit: "prxiv416", Start: "prxiv417", End: "prxiv418", Stretch: "prxiv419", Center: "prxiv41a", Baseline: "prxiv41b" }, alignSelf: { Inherit: "prxiv41c", Start: "prxiv41d", End: "prxiv41e", Stretch: "prxiv41f", Center: "prxiv41g", Baseline: "prxiv41h" }, gap: { "0": "prxiv41i", "100": "prxiv41j", "200": "prxiv41k", "300": "prxiv41l", "400": "prxiv41m", "500": "prxiv41n", "600": "prxiv41o", "700": "prxiv41p", Inherit: "prxiv41q" }, grow: { No: "prxiv41r", Yes: "prxiv41s" }, shrink: { No: "prxiv41t", Yes: "prxiv41u" }, basis: { No: "prxiv41v", Yes: "prxiv41w" } }, defaultVariants: { display: "Flex" }, compoundVariants: [] });
const Box = as(
  ({
    as: AsBox = "div",
    className,
    display,
    direction,
    wrap,
    justifyContent,
    justifyItems,
    justifySelf,
    alignContent,
    alignItems,
    alignSelf,
    gap,
    grow,
    shrink,
    basis,
    ...props
  }, ref) => /* @__PURE__ */ jsx(
    AsBox,
    {
      className: classNames(
        Box$1({
          display,
          direction,
          wrap,
          justifyContent,
          justifyItems,
          justifySelf,
          alignContent,
          alignItems,
          alignSelf,
          gap,
          grow,
          shrink,
          basis
        }),
        className
      ),
      ...props,
      ref
    }
  )
);
var Button$1 = createRuntimeFn({ defaultClassName: "epr39zd _1mqalmd1 _1mqalmd0 _1bugis90 _1bugis91", variantClassNames: { size: { "300": "epr39ze", "400": "epr39zf", "500": "epr39zg" }, variant: { Primary: "epr39zh", Secondary: "epr39zi", Success: "epr39zj", Warning: "epr39zk", Critical: "epr39zl" }, fill: { Solid: "epr39zm", Soft: "epr39zn", None: "epr39zo" }, outlined: { true: "epr39zp" }, radii: { "0": "cpipac1", "300": "cpipac2", "400": "cpipac3", "500": "cpipac4", Inherit: "cpipac0", Pill: "cpipac5" } }, defaultVariants: { size: "400", variant: "Primary", fill: "Solid", radii: "400" }, compoundVariants: [] });
const Button = as(
  ({
    as: AsButton = "button",
    className,
    size,
    variant,
    fill,
    outlined,
    radii,
    before,
    after,
    children,
    ...props
  }, ref) => /* @__PURE__ */ jsxs(
    AsButton,
    {
      className: classNames(Button$1({ size, variant, fill, outlined, radii }), className),
      "data-ui-before": before ? true : void 0,
      "data-ui-after": after ? true : void 0,
      ...props,
      ref,
      children: [
        before,
        children,
        after
      ]
    }
  )
);
var Icon$1 = createRuntimeFn({ defaultClassName: "_19nrl2w0 _1mqalmd1 _1mqalmd0", variantClassNames: { size: { "50": "cpipac7", "100": "cpipac8", "200": "cpipac9", "300": "cpipaca", "400": "cpipacb", "500": "cpipacc", "600": "cpipacd", Inherit: "cpipac6" } }, defaultVariants: { size: "400" }, compoundVariants: [] });
const Icon = forwardRef(
  ({ className, size, filled = false, src, ...props }, ref) => /* @__PURE__ */ jsx(
    "svg",
    {
      className: classNames(Icon$1({ size }), className),
      focusable: "false",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      ref,
      children: src(filled)
    }
  )
);
const Icons = {
  Home: (filled) => filled ? /* @__PURE__ */ jsx(
    "path",
    {
      d: "M3 10V21H9V18.5C9 16.8431 10.3431 15.5 12 15.5C13.6569 15.5 15 16.8431 15 18.5V21H21V10L12 2L3 10Z",
      fill: "currentColor"
    }
  ) : /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.5 10.6736V19.5H8.5V17.5C8.5 15.567 10.067 14 12 14C13.933 14 15.5 15.567 15.5 17.5V19.5H19.5V10.6736L12 4.00693L4.5 10.6736ZM3 10V21H10V17.5C10 16.3954 10.8954 15.5 12 15.5C13.1046 15.5 14 16.3954 14 17.5V21H21V10L12 2L3 10Z",
      fill: "currentColor"
    }
  ),
  User: (filled) => filled ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "7", r: "4", fill: "currentColor" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M4 18C4 15.2386 6.23858 13 9 13H15C17.7614 13 20 15.2386 20 18V21H4V18Z",
        fill: "currentColor"
      }
    )
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 9.5C13.3807 9.5 14.5 8.38071 14.5 7C14.5 5.61929 13.3807 4.5 12 4.5C10.6193 4.5 9.5 5.61929 9.5 7C9.5 8.38071 10.6193 9.5 12 9.5ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M15 14.5H9C7.067 14.5 5.5 16.067 5.5 18V19.5H18.5V18C18.5 16.067 16.933 14.5 15 14.5ZM9 13C6.23858 13 4 15.2386 4 18V21H20V18C20 15.2386 17.7614 13 15 13H9Z",
        fill: "currentColor"
      }
    )
  ] }),
  UserPlus: (filled) => filled ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("circle", { cx: "14", cy: "7", r: "4", fill: "currentColor" }),
    /* @__PURE__ */ jsx("path", { d: "M5 3H3V6H0V8H3V11H5V8H8V6H5V3Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M6 18C6 15.2386 8.23858 13 11 13H17C19.7614 13 22 15.2386 22 18V21H6V18Z",
        fill: "currentColor"
      }
    )
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 9.5C15.3807 9.5 16.5 8.38071 16.5 7C16.5 5.61929 15.3807 4.5 14 4.5C12.6193 4.5 11.5 5.61929 11.5 7C11.5 8.38071 12.6193 9.5 14 9.5ZM14 11C16.2091 11 18 9.20914 18 7C18 4.79086 16.2091 3 14 3C11.7909 3 10 4.79086 10 7C10 9.20914 11.7909 11 14 11Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17 14.5H11C9.067 14.5 7.5 16.067 7.5 18V19.5H20.5V18C20.5 16.067 18.933 14.5 17 14.5ZM11 13C8.23858 13 6 15.2386 6 18V21H22V18C22 15.2386 19.7614 13 17 13H11Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M5 3H3V6H0V8H3V11H5V8H8V6H5V3Z", fill: "currentColor" })
  ] }),
  Mail: (filled) => filled ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M22 6.76393V4H2V6.76393L12 11.7639L22 6.76393Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("path", { d: "M2 9V20H22V9L12 14L2 9Z", fill: "currentColor" })
  ] }) : /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 4H22V20H2V4ZM3.5 8.07295L12 12.3229L20.5 8.07295V5.5H3.5V8.07295ZM20.5 9.75L12 14L3.5 9.75V18.5H20.5V9.75Z",
      fill: "currentColor"
    }
  ),
  MailPlus: (filled) => filled ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M22 6.76393V4H2V6.76393L12 11.7639L22 6.76393Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M2 9V20H14C14 16.6863 16.6863 14 20 14C20.7013 14 21.3744 14.1203 22 14.3414V9L12 14L2 9Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M19 16H21V24H19V16Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("path", { d: "M24 19L24 21L16 21L16 19L24 19Z", fill: "currentColor" })
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M19 16H21V24H19V16Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("path", { d: "M24 19L24 21L16 21L16 19L24 19Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M22 4H2V20H14V18.5H3.5V9.75L12 14L20.5 9.75V14H22V4ZM12 12.3229L3.5 8.07295V5.5H20.5V8.07295L12 12.3229Z",
        fill: "currentColor"
      }
    )
  ] }),
  Star: (filled) => filled ? /* @__PURE__ */ jsx(
    "path",
    {
      d: "M12 2L14.9095 8.99537L22.4616 9.60081L16.7077 14.5296L18.4656 21.8992L12 17.95L5.53437 21.8992L7.29228 14.5296L1.53839 9.60081L9.09048 8.99537L12 2Z",
      fill: "currentColor"
    }
  ) : /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14.9095 8.99537L12 2L9.09048 8.99537L1.53839 9.60081L7.29228 14.5296L5.53437 21.8992L12 17.95L18.4656 21.8992L16.7077 14.5296L22.4616 9.60081L14.9095 8.99537ZM18.7469 10.8078L13.8764 10.4174L12 5.90594L10.1236 10.4174L5.25316 10.8078L8.96393 13.9865L7.83023 18.7392L12 16.1923L16.1698 18.7392L15.0361 13.9865L18.7469 10.8078Z",
      fill: "currentColor"
    }
  ),
  PlusCircle: (filled) => filled ? /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM11 7H13V11H17V13H13V17H11V13H7V11H11V7Z",
      fill: "currentColor"
    }
  ) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 3.5C7.32843 3.5 3.5 7.32843 3.5 12C3.5 16.6716 7.32843 20.5 12 20.5C16.6716 20.5 20.5 16.6716 20.5 12C20.5 7.32843 16.6716 3.5 12 3.5ZM2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx("rect", { x: "11", y: "7", width: "2", height: "10", fill: "currentColor" }),
    /* @__PURE__ */ jsx("rect", { x: "7", y: "11", width: "10", height: "2", fill: "currentColor" })
  ] }),
  Explore: (filled) => filled ? /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12ZM9.87866 9.87866L7.05023 16.9497L14.1213 14.1213L16.9497 7.05023L9.87866 9.87866ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z",
      fill: "currentColor"
    }
  ) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 3.5C7.32843 3.5 3.5 7.32843 3.5 12C3.5 16.6716 7.32843 20.5 12 20.5C16.6716 20.5 20.5 16.6716 20.5 12C20.5 7.32843 16.6716 3.5 12 3.5ZM2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.05023 16.9497L9.87866 9.87866L16.9497 7.05023L14.1213 14.1213L7.05023 16.9497ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",
        fill: "currentColor"
      }
    )
  ] }),
  Smile: (filled) => filled ? /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12ZM8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11ZM15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11ZM7 14C7 16.2 9.25 18 12 18C14.75 18 17 16.2 17 14H7Z",
      fill: "currentColor"
    }
  ) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 3.5C7.32843 3.5 3.5 7.32843 3.5 12C3.5 16.6716 7.32843 20.5 12 20.5C16.6716 20.5 20.5 16.6716 20.5 12C20.5 7.32843 16.6716 3.5 12 3.5ZM2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M17 14H7C7 16.2 9.25 18 12 18C14.75 18 17 16.2 17 14Z", fill: "currentColor" })
  ] }),
  SmilePlus: (filled) => filled ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14.2566 2.25849C14.0897 2.80965 14 3.39435 14 4C14 5.53683 14.5778 6.93872 15.528 8.00026C15.5187 8.00009 15.5094 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11C16.3284 11 17 10.3284 17 9.5C17 9.3891 16.988 9.28102 16.9651 9.17698C17.8555 9.70005 18.8927 10 20 10C20.6057 10 21.1903 9.91026 21.7415 9.74336C21.9106 10.4692 22 11.2246 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C12.7754 2 13.5308 2.08943 14.2566 2.25849ZM10 9.5C10 10.3284 9.32843 11 8.5 11C7.67157 11 7 10.3284 7 9.5C7 8.67157 7.67157 8 8.5 8C9.32843 8 10 8.67157 10 9.5ZM12 18C9.25 18 7 16.2 7 14H17C17 16.2 14.75 18 12 18Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M19 0H21V8H19V0Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("path", { d: "M24 3L24 5L16 5L16 3L24 3Z", fill: "currentColor" })
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M14 2.2023C13.3533 2.06968 12.6844 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 11.3156 21.9303 10.6467 21.7977 10H20.2603C20.4169 10.642 20.5 11.3119 20.5 12C20.5 16.6716 16.6716 20.5 12 20.5C7.32843 20.5 3.5 16.6716 3.5 12C3.5 7.32843 7.32843 3.5 12 3.5C12.6881 3.5 13.358 3.58307 14 3.73967V2.2023Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M17 14H7C7 16.2 9.25 18 12 18C14.75 18 17 16.2 17 14Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("path", { d: "M19 0H21V8H19V0Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("path", { d: "M24 3L24 5L16 5L16 3L24 3Z", fill: "currentColor" })
  ] }),
  Leaf: (filled) => filled ? /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4 15V18.9393L2.46967 20.4697L3.53033 21.5303L5.06065 20H9C15.6274 20 21 14.6274 21 8V3H16C9.37258 3 4 8.37258 4 15ZM7.53033 17.5303L16.5303 8.53033L15.4697 7.46967L6.46967 16.4697L7.53033 17.5303Z",
      fill: "currentColor"
    }
  ) : /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4 18.9393V15C4 8.37258 9.37258 3 16 3H21V8C21 14.6274 15.6274 20 9 20H5.06065L3.53033 21.5303L2.46967 20.4697L4 18.9393ZM5.5 17.4393V15C5.5 9.20101 10.201 4.5 16 4.5H19.5V8C19.5 13.799 14.799 18.5 9 18.5H6.56065L16.5303 8.53033L15.4697 7.46967L5.5 17.4393Z",
      fill: "currentColor"
    }
  ),
  Sticker: (filled) => filled ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 3H3V21H21V10H14V3ZM15 13C15 14.1046 13.6569 15 12 15C10.3431 15 9 14.1046 9 13H7C7 15.2091 9.23858 17 12 17C14.7614 17 17 15.2091 17 13H15Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M21 8L16 8V3L21 8Z", fill: "currentColor" })
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M17 13H15C15 14.1046 13.6569 15 12 15C10.3431 15 9 14.1046 9 13H7C7 15.2091 9.23858 17 12 17C14.7614 17 17 15.2091 17 13Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16 3L21 8V21H3V3H16ZM19.5 9H15V4.5H4.5V19.5H19.5V9Z",
        fill: "currentColor"
      }
    )
  ] }),
  Delete: (filled) => filled ? /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16 2H8V4H3V5.5H5V22H19V5.5H21V4H16V2ZM11 9H9V17H11V9ZM15 9H13V17H15V9Z",
      fill: "currentColor"
    }
  ) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("rect", { x: "9", y: "9", width: "2", height: "8", fill: "currentColor" }),
    /* @__PURE__ */ jsx("rect", { x: "13", y: "9", width: "2", height: "8", fill: "currentColor" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16 2H8V4H3V5.5H5V22H19V5.5H21V4H16V2ZM17.5 5.5V20.5H6.5V5.5H17.5Z",
        fill: "currentColor"
      }
    )
  ] }),
  Phone: (filled) => filled ? /* @__PURE__ */ jsx(
    "path",
    {
      d: "M2 5L5 2L12 9L9 12L12 15L15 12L22 19L19 22V22C9.61116 22 2 14.3888 2 5V5Z",
      fill: "currentColor"
    }
  ) : /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 9L5 2L2 5C2 14.3888 9.61116 22 19 22L22 19L15 12L12 15L9 12L12 9ZM15 14.1213L12 17.1213L6.87868 12L9.87868 9.00001L5 4.12132L3.51177 5.60955C3.82406 13.6852 10.3148 20.176 18.3904 20.4883L19.8787 19L15 14.1213Z",
      fill: "currentColor"
    }
  ),
  Headphone: (filled) => filled ? /* @__PURE__ */ jsx(
    "path",
    {
      d: "M19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12V13H10V21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H14V13H19.5V12Z",
      fill: "currentColor"
    }
  ) : /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12V13H10V21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H14V13H19.5V12ZM4.5 14.5H8.5V19.5H4.5V14.5ZM19.5 14.5V19.5H15.5V14.5H19.5Z",
      fill: "currentColor"
    }
  ),
  Send: (filled) => filled ? /* @__PURE__ */ jsx("path", { d: "M3 22L23 12L3 2V11H11V13H3V22Z", fill: "currentColor" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M23 12L3 2V22L23 12ZM19.6459 12L4.5 4.42705V19.5729L19.6459 12Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx("rect", { x: "3", y: "11", width: "8", height: "2", fill: "currentColor" })
  ] }),
  Bell: (filled) => filled ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9V16.5H20V18H4V16.5H6V9Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M10 20H14C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20Z",
        fill: "currentColor"
      }
    )
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6 16.5H4V18H20V16.5H18V9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V16.5ZM16.5 16.5V9C16.5 6.51472 14.4853 4.5 12 4.5C9.51472 4.5 7.5 6.51472 7.5 9V16.5H16.5Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M10 20H14C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20Z",
        fill: "currentColor"
      }
    )
  ] }),
  BellRing: (filled) => filled ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6 16.571H4V18.071H20V16.571H18V9.07104C18 5.75734 15.3137 3.07104 12 3.07104C8.68629 3.07104 6 5.75734 6 9.07104V16.571Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M10 20.071H14C14 21.1756 13.1046 22.071 12 22.071C10.8954 22.071 10 21.1756 10 20.071Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M5.98959 3.06066C4.4514 4.59886 3.5 6.72386 3.5 9.07107H2C2 6.30964 3.11929 3.80964 4.92893 2L5.98959 3.06066Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M18.0104 3.06066C19.5486 4.59886 20.5 6.72386 20.5 9.07107H22C22 6.30964 20.8807 3.80964 19.0711 2L18.0104 3.06066Z",
        fill: "currentColor"
      }
    )
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6 16.571H4V18.071H20V16.571H18V9.07104C18 5.75734 15.3137 3.07104 12 3.07104C8.68629 3.07104 6 5.75734 6 9.07104V16.571ZM16.5 16.571V9.07104C16.5 6.58576 14.4853 4.57104 12 4.57104C9.51472 4.57104 7.5 6.58576 7.5 9.07104V16.571H16.5Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M10 20.071H14C14 21.1756 13.1046 22.071 12 22.071C10.8954 22.071 10 21.1756 10 20.071Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M5.98959 3.06066C4.4514 4.59886 3.5 6.72386 3.5 9.07107H2C2 6.30964 3.11929 3.80964 4.92893 2L5.98959 3.06066Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M18.0104 3.06066C19.5486 4.59886 20.5 6.72386 20.5 9.07107H22C22 6.30964 20.8807 3.80964 19.0711 2L18.0104 3.06066Z",
        fill: "currentColor"
      }
    )
  ] }),
  BellPing: (filled) => filled ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M10 20.071H14C14 21.1756 13.1046 22.071 12 22.071C10.8954 22.071 10 21.1756 10 20.071Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M5.98959 3.06066C4.4514 4.59886 3.5 6.72386 3.5 9.07107H2C2 6.30964 3.11929 3.80964 4.92893 2L5.98959 3.06066Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M13.7681 3.33582C13.2092 3.1637 12.6154 3.07104 12 3.07104C8.68629 3.07104 6 5.75734 6 9.07104V16.571H4V18.071H20V16.571H18V11C15.2386 11 13 8.76142 13 6C13 5.02067 13.2816 4.1071 13.7681 3.33582Z",
        fill: "currentColor"
      }
    )
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M10 20H14C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M5.98959 2.98962C4.4514 4.52781 3.5 6.65281 3.5 9.00002H2C2 6.2386 3.11929 3.7386 4.92893 1.92896L5.98959 2.98962Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M13.8061 3.2766C13.2361 3.0969 12.6294 3 12 3C8.68629 3 6 5.68629 6 9V16.5H4V18H20V16.5H18V11C17.4774 11 16.9735 10.9198 16.5 10.7711V16.5H7.5V9C7.5 6.51472 9.51472 4.5 12 4.5C12.4092 4.5 12.8056 4.55462 13.1824 4.65696C13.3202 4.16162 13.5324 3.69724 13.8061 3.2766Z",
        fill: "currentColor"
      }
    )
  ] }),
  BellMute: (filled) => filled ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M10 20H14C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M18 9V14.111L8.22509 4.33605C9.25608 3.50055 10.5696 3 12 3C15.3137 3 18 5.68629 18 9Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M20.3085 19.2479L19.2478 20.3085L16.9393 18H4V16.5H6V9C6 8.41093 6.08489 7.84169 6.24311 7.30384L3.69147 4.7522L4.75213 3.69154L20.3085 19.2479Z",
        fill: "currentColor"
      }
    )
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M10 20H14C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M16.5 9V12.611L18 14.111V9C18 5.68629 15.3137 3 12 3C10.5696 3 9.25608 3.50055 8.22509 4.33605L9.29356 5.40452C10.0468 4.83667 10.9841 4.5 12 4.5C14.4853 4.5 16.5 6.51472 16.5 9Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M20.3085 19.2479L19.2478 20.3085L16.9393 18H4V16.5H6V9C6 8.41093 6.08489 7.84169 6.24311 7.30384L3.69147 4.7522L4.75213 3.69154L20.3085 19.2479ZM7.51934 8.58007C7.50654 8.71833 7.5 8.8584 7.5 9V16.5H15.4393L7.51934 8.58007Z",
        fill: "currentColor"
      }
    )
  ] }),
  Message: (filled) => filled ? /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 4V18H16L21 21V4H3ZM7 8H17V10H7V8ZM7 12H17V14H7V12Z",
      fill: "currentColor"
    }
  ) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16.4155 16.5L19.5 18.3507V5.5H4.5V16.5H16.4155ZM3 18V4H21V21L16 18H3Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx("rect", { x: "7", y: "8", width: "10", height: "2", fill: "currentColor" }),
    /* @__PURE__ */ jsx("rect", { x: "7", y: "12", width: "10", height: "2", fill: "currentColor" })
  ] }),
  MessageUnread: (filled) => filled ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.416 4H3V18H16L21 21V10.0004C20.1643 10.6281 19.1256 11 18 11C16.8742 11 15.8353 10.6279 14.9995 10H7V8H13.416C13.1484 7.38754 13 6.7111 13 6C13 5.2889 13.1484 4.61246 13.416 4ZM17 12H7V14H17V12Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx("circle", { cx: "18", cy: "6", r: "3", fill: "currentColor" })
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M21 10.0004V21L16 18H3V4H13.416C13.2119 4.46712 13.0772 4.97145 13.0247 5.5H4.5V16.5H16.4155L19.5 18.3507V10.7711C20.0464 10.5995 20.5523 10.3366 21 10.0004Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M13.416 8C13.7639 8.79625 14.3132 9.48438 14.9995 10H7V8H13.416Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M17 12H7V14H17V12Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("circle", { cx: "18", cy: "6", r: "3", fill: "currentColor" })
  ] }),
  Setting: (filled) => filled ? /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.00001 2H15V4.58152C15.6948 4.86278 16.3411 5.23882 16.9229 5.69361L19.1603 4.40186L22.1603 9.59801L19.9235 10.8894C19.9739 11.2524 20 11.6231 20 12C20 12.3768 19.9739 12.7475 19.9235 13.1105L22.1603 14.4019L19.1603 19.598L16.923 18.3063C16.3412 18.7611 15.6949 19.1372 15 19.4185V22H9.00001V19.4185C8.30516 19.1372 7.65881 18.7612 7.07702 18.3063L4.83978 19.598L1.83978 14.4019L4.07646 13.1105C4.02605 12.7476 4 12.3768 4 12C4 11.6231 4.02606 11.2524 4.07647 10.8894L1.83978 9.59801L4.83978 4.40186L7.07712 5.69358C7.65889 5.2388 8.3052 4.86276 9.00001 4.58151V2ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",
      fill: "currentColor"
    }
  ) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M15 4.58152V2H9.00001V4.58151C8.3052 4.86276 7.65889 5.2388 7.07712 5.69358L4.83978 4.40186L1.83978 9.59801L4.07647 10.8894C4.02606 11.2524 4 11.6231 4 12C4 12.3768 4.02605 12.7476 4.07646 13.1105L1.83978 14.4019L4.83978 19.598L7.07702 18.3063C7.65881 18.7612 8.30516 19.1372 9.00001 19.4185V22H15V19.4185C15.6949 19.1372 16.3412 18.7611 16.923 18.3063L19.1603 19.598L22.1603 14.4019L19.9235 13.1105C19.9739 12.7475 20 12.3768 20 12C20 11.6231 19.9739 11.2524 19.9235 10.8894L22.1603 9.59801L19.1603 4.40186L16.9229 5.69361C16.3411 5.23882 15.6948 4.86278 15 4.58152ZM18.6113 6.45089L16.7964 7.49868L15.9991 6.87537C15.5259 6.50544 15.0008 6.20008 14.4372 5.97193L13.5 5.59257V3.5H10.5V5.59256L9.56283 5.97192C8.99921 6.20007 8.47415 6.50542 8.00093 6.87535L7.20358 7.49865L5.38882 6.4509L3.88882 9.04897L5.70115 10.0953L5.56221 11.0957C5.52127 11.3905 5.5 11.6924 5.5 12C5.5 12.3076 5.52126 12.6094 5.5622 12.9042L5.70112 13.9046L3.88882 14.9509L5.38882 17.549L7.2035 16.5013L8.00085 17.1246C8.47409 17.4945 8.99918 17.7999 9.56283 18.0281L10.5 18.4074V20.5H13.5V18.4074L14.4372 18.0281C15.0008 17.7999 15.5259 17.4945 15.9992 17.1246L16.7965 16.5012L18.6113 17.549L20.1113 14.9509L18.2989 13.9045L18.4378 12.9042C18.4787 12.6094 18.5 12.3076 18.5 12C18.5 11.6924 18.4787 11.3906 18.4378 11.0957L18.2989 10.0954L20.1113 9.04897L18.6113 6.45089Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "3", fill: "currentColor" })
  ] }),
  Search: (filled) => filled ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("circle", { cx: "10", cy: "10", r: "4", fill: "currentColor" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 13.5899 6.41015 16.5 10 16.5ZM10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: "15.4142",
        y: "14",
        width: "9",
        height: "1.5",
        transform: "rotate(45 15.4142 14)",
        fill: "currentColor"
      }
    )
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 13.5899 6.41015 16.5 10 16.5ZM10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: "15.4142",
        y: "14",
        width: "9",
        height: "1.5",
        transform: "rotate(45 15.4142 14)",
        fill: "currentColor"
      }
    )
  ] }),
  Heart: (filled) => filled ? /* @__PURE__ */ jsx(
    "path",
    {
      d: "M12.0208 5.48522L11.6673 5.13166C9.5194 2.98378 6.03699 2.98378 3.88911 5.13166C1.74123 7.27955 1.74123 10.762 3.88911 12.9098L12.0208 21.0416L20.1526 12.9098C22.3005 10.762 22.3005 7.27955 20.1526 5.13166C18.0047 2.98378 14.5223 2.98378 12.3744 5.13166L12.0208 5.48522Z",
      fill: "currentColor"
    }
  ) : /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.0208 7.60654L10.6066 6.19232C9.04453 4.63023 6.51187 4.63023 4.94977 6.19232C3.38767 7.75442 3.38767 10.2871 4.94977 11.8492L12.0208 18.9202L19.0919 11.8492C20.654 10.2871 20.654 7.75442 19.0919 6.19232C17.5298 4.63023 14.9971 4.63023 13.4351 6.19232L12.0208 7.60654ZM11.6673 5.13166C9.5194 2.98378 6.03699 2.98378 3.88911 5.13166C1.74123 7.27955 1.74123 10.762 3.88911 12.9098L12.0208 21.0416L20.1526 12.9098C22.3005 10.762 22.3005 7.27955 20.1526 5.13166C18.0047 2.98378 14.5223 2.98378 12.3744 5.13166L12.0208 5.48522L11.6673 5.13166Z",
      fill: "currentColor"
    }
  ),
  Play: (filled) => filled ? /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12ZM16 12L10 8V16L16 12Z",
      fill: "currentColor"
    }
  ) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 3.5C7.32843 3.5 3.5 7.32843 3.5 12C3.5 16.6716 7.32843 20.5 12 20.5C16.6716 20.5 20.5 16.6716 20.5 12C20.5 7.32843 16.6716 3.5 12 3.5ZM2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M10 16V8L16 12L10 16Z", fill: "currentColor" })
  ] }),
  Pause: (filled) => filled ? /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12ZM9 8H11V16H9V8ZM13 8H15V16H13V8Z",
      fill: "currentColor"
    }
  ) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 3.5C7.32843 3.5 3.5 7.32843 3.5 12C3.5 16.6716 7.32843 20.5 12 20.5C16.6716 20.5 20.5 16.6716 20.5 12C20.5 7.32843 16.6716 3.5 12 3.5ZM2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx("rect", { x: "9", y: "8", width: "2", height: "8", fill: "currentColor" }),
    /* @__PURE__ */ jsx("rect", { x: "13", y: "8", width: "2", height: "8", fill: "currentColor" })
  ] }),
  Sun: (filled) => /* @__PURE__ */ jsxs(Fragment, { children: [
    filled ? /* @__PURE__ */ jsx(
      "path",
      {
        d: "M12 7C9.2 7 7 9.2 7 12C7 14.8 9.2 17 12 17C14.8 17 17 14.8 17 12C17 9.2 14.8 7 12 7Z",
        fill: "currentColor"
      }
    ) : /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 8.5C10.0284 8.5 8.5 10.0284 8.5 12C8.5 13.9716 10.0284 15.5 12 15.5C13.9716 15.5 15.5 13.9716 15.5 12C15.5 10.0284 13.9716 8.5 12 8.5ZM7 12C7 9.2 9.2 7 12 7C14.8 7 17 9.2 17 12C17 14.8 14.8 17 12 17C9.2 17 7 14.8 7 12Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M11 2H13V5H11V2Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("path", { d: "M19 11H22V13H19V11Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("path", { d: "M13 19H11V22H13V19Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("path", { d: "M2 11H5V13H2V11Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M7.58059 6.52L5.45927 4.39868L4.39861 5.45934L6.51992 7.58066L7.58059 6.52Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M6.51996 16.4195L4.39856 18.5409L5.45922 19.6016L7.58062 17.4802L6.51996 16.4195Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M16.4194 17.4802L18.5407 19.6015L19.6014 18.5408L17.4801 16.4195L16.4194 17.4802Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M17.4801 7.5807L19.6014 5.45946L18.5407 4.3988L16.4195 6.52004L17.4801 7.5807Z",
        fill: "currentColor"
      }
    )
  ] }),
  Photo: (filled) => filled ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("circle", { cx: "14.5", cy: "8.5", r: "1.5", fill: "currentColor" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 3H21V21H3V3ZM4.5 4.5H19.5V19.5L10.5 10.5L4.5 16.5V4.5Z",
        fill: "currentColor"
      }
    )
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("circle", { cx: "14.5", cy: "8.5", r: "1.5", fill: "currentColor" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 3H21V21H3V3ZM4.5 4.5H19.5V19.5L10.5 10.5L4.5 16.5V4.5ZM4.5 18.6213V19.5H17.3787L10.5 12.6213L4.5 18.6213Z",
        fill: "currentColor"
      }
    )
  ] }),
  Lock: (filled) => filled ? /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 9V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V9H20V21H4V9H7ZM15.5 7V9H8.5V7C8.5 5.067 10.067 3.5 12 3.5C13.933 3.5 15.5 5.067 15.5 7ZM12 17C13.1046 17 14 16.1046 14 15C14 13.8954 13.1046 13 12 13C10.8954 13 10 13.8954 10 15C10 16.1046 10.8954 17 12 17Z",
      fill: "currentColor"
    }
  ) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 9V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V9H20V21H4V9H7ZM15.5 7V9H8.5V7C8.5 5.067 10.067 3.5 12 3.5C13.933 3.5 15.5 5.067 15.5 7ZM5.5 10.5V19.5H18.5V10.5H5.5Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M12 17C13.1046 17 14 16.1046 14 15C14 13.8954 13.1046 13 12 13C10.8954 13 10 13.8954 10 15C10 16.1046 10.8954 17 12 17Z",
        fill: "currentColor"
      }
    )
  ] }),
  Vlc: (filled) => filled ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M2 20.5V22H22V20.5H20L18.8649 17H5.13514L4 20.5H2Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("path", { d: "M5.78378 15H18.2162L17.2432 12H6.75676L5.78378 15Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("path", { d: "M7.40541 10H16.5946L14 2H10L7.40541 10Z", fill: "currentColor" })
  ] }) : /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 2L20 20.5H22V22H2V20.5H4L10 2H14ZM18.4231 20.5H5.57692L6.71205 17H17.2879L18.4231 20.5ZM16.6393 15H7.3607L8.33367 12H15.6663L16.6393 15ZM11.0904 3.5L8.98232 10H15.0177L12.9096 3.5H11.0904Z",
      fill: "currentColor"
    }
  ),
  Flag: (filled) => filled ? /* @__PURE__ */ jsx("path", { d: "M3 3H21V5L17 9L21 13V15H4.5V21H3V3Z", fill: "currentColor" }) : /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M21 5V3H3V21H4.5V15H21V13L17 9L21 5ZM19.3787 13.5L14.8787 9L19.3787 4.5H4.5V13.5H19.3787Z",
      fill: "currentColor"
    }
  ),
  Ball: (filled) => filled ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M5.5 19.5996C7.64233 17.7655 9 15.0413 9 12C9 8.9587 7.64233 6.2345 5.5 4.40041C7.24803 2.9039 9.51846 2 12 2C14.4815 2 16.752 2.9039 18.5 4.40041C16.3577 6.2345 15 8.9587 15 12C15 15.0413 16.3577 17.7655 18.5 19.5996C16.752 21.0961 14.4815 22 12 22C9.51846 22 7.24803 21.0961 5.5 19.5996Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M4.11517 5.84871C2.78981 7.54518 2 9.68035 2 12C2 14.3196 2.78981 16.4548 4.11517 18.1513C5.87794 16.6838 7 14.4729 7 12C7 9.52705 5.87794 7.31618 4.11517 5.84871Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M19.8848 5.84871C21.2102 7.54518 22 9.68035 22 12C22 14.3196 21.2102 16.4548 19.8848 18.1513C18.1221 16.6838 17 14.4729 17 12C17 9.52705 18.1221 7.31618 19.8848 5.84871Z",
        fill: "currentColor"
      }
    )
  ] }) : /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM18.5 17.4775C19.7479 15.9982 20.5 14.0869 20.5 12C20.5 9.91309 19.7479 8.00184 18.5 6.5225C17.2521 8.00184 16.5 9.9131 16.5 12C16.5 14.0869 17.2521 15.9982 18.5 17.4775ZM17.4327 18.5375C15.9597 19.763 14.0659 20.5 12 20.5C9.93412 20.5 8.04038 19.763 6.56736 18.5376C8.08313 16.7846 9.00003 14.4994 9.00003 12.0001C9.00003 9.50072 8.08309 7.21551 6.56725 5.46249C8.0403 4.23703 9.93408 3.5 12 3.5C14.0659 3.5 15.9597 4.23702 17.4327 5.46248C15.9169 7.21548 15 9.50067 15 12C15 14.4994 15.9169 16.7845 17.4327 18.5375ZM3.5 12C3.5 9.9131 4.25207 8.00186 5.49997 6.52252C6.74792 8.00187 7.50003 9.91316 7.50003 12.0001C7.50003 14.087 6.74796 15.9982 5.50006 17.4776C4.25211 15.9982 3.5 14.0869 3.5 12Z",
      fill: "currentColor"
    }
  ),
  Bulb: (filled) => filled ? /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20 10C20 12.9611 18.3912 15.5465 16 16.9297V22H8V16.9297C5.60879 15.5465 4 12.9611 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10ZM9.91421 8.08569L8.5 9.49991L11 11.9999V13.9999H13V12.071L15.5711 9.49991L14.1569 8.08569L12.0355 10.207L9.91421 8.08569Z",
      fill: "currentColor"
    }
  ) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14.5 16.0646L15.2489 15.6313C17.1957 14.5052 18.5 12.404 18.5 10C18.5 6.41015 15.5899 3.5 12 3.5C8.41015 3.5 5.5 6.41015 5.5 10C5.5 12.404 6.80432 14.5052 8.75109 15.6313L9.5 16.0646V20.5H14.5V16.0646ZM16 16.9297C18.3912 15.5465 20 12.9611 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 12.9611 5.60879 15.5465 8 16.9297V22H16V16.9297Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M8.5 9.49991L9.91421 8.08569L12.0355 10.207L14.1569 8.08569L15.5711 9.49991L13 12.071V13.9999H11V11.9999L8.5 9.49991Z",
        fill: "currentColor"
      }
    )
  ] }),
  Terminal: (filled) => filled ? /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22 4H2V20H22V4ZM7.74264 7.75732L6.32843 9.17154L9.15686 12L6.32843 14.8284L7.74264 16.2426L11.9853 12L7.74264 7.75732ZM13 14H18V16H13V14Z",
      fill: "currentColor"
    }
  ) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M20.5 5.5H3.5V18.5H20.5V5.5ZM2 4V20H22V4H2Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M13 14H18V16H13V14Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M7.74264 7.75736L6.32843 9.17157L9.15685 12L6.32843 14.8284L7.74264 16.2426L11.9853 12L7.74264 7.75736Z",
        fill: "currentColor"
      }
    )
  ] }),
  Pencil: (filled) => filled ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M3 17V21H7L17.2929 10.7071L13.2929 6.70709L3 17Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M14.7071 5.29288L18.7071 9.29288L22.5 5.5L18.5 1.5L14.7071 5.29288Z",
        fill: "currentColor"
      }
    )
  ] }) : /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 16V21H8L23 6L18 1L3 16ZM16.7322 10.1465L7.37868 19.5H4.5V16.6213L13.8535 7.26781L16.7322 10.1465ZM18.1464 8.73228L20.8787 6L18 3.12132L15.2677 5.8536L18.1464 8.73228Z",
      fill: "currentColor"
    }
  ),
  Info: (filled) => filled ? /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12ZM11 8V6H13V8H11ZM13 15V10H10V11.5H11V15H9.5V17H14.5L14.5 15H13Z",
      fill: "currentColor"
    }
  ) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 3.5C7.32843 3.5 3.5 7.32843 3.5 12C3.5 16.6716 7.32843 20.5 12 20.5C16.6716 20.5 20.5 16.6716 20.5 12C20.5 7.32843 16.6716 3.5 12 3.5ZM2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M13 15.5V10H10V11.5H11V15.5H9.5V17H14.5L14.5 15.5H13Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("rect", { x: "11", y: "6", width: "2", height: "2", fill: "currentColor" })
  ] }),
  Shield: (filled) => filled ? /* @__PURE__ */ jsx(
    "path",
    {
      d: "M12 2L3 7V13C3 17.9706 7.02944 22 12 22C16.9706 22 21 17.9706 21 13V7L12 2Z",
      fill: "currentColor"
    }
  ) : /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.5 7.88261V13C4.5 17.1421 7.85786 20.5 12 20.5C16.1421 20.5 19.5 17.1421 19.5 13V7.88261L12 3.71594L4.5 7.88261ZM12 2L3 7V13C3 17.9706 7.02944 22 12 22C16.9706 22 21 17.9706 21 13V7L12 2Z",
      fill: "currentColor"
    }
  ),
  ShieldLock: (filled) => filled ? /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 7L12 2L21 7V13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13V7ZM11 12.7C10.4 12.4 10 11.7 10 11C10 9.9 10.9 9 12 9C13.1 9 14 9.9 14 11C14 11.7 13.6 12.4 13 12.7V16H11V12.7Z",
      fill: "currentColor"
    }
  ) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.5 7.88261V13C4.5 17.1421 7.85786 20.5 12 20.5C16.1421 20.5 19.5 17.1421 19.5 13V7.88261L12 3.71594L4.5 7.88261ZM12 2L3 7V13C3 17.9706 7.02944 22 12 22C16.9706 22 21 17.9706 21 13V7L12 2Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M10 11C10 11.7 10.4 12.4 11 12.7V16H13V12.7C13.6 12.4 14 11.7 14 11C14 9.9 13.1 9 12 9C10.9 9 10 9.9 10 11Z",
        fill: "currentColor"
      }
    )
  ] }),
  ShieldUser: (filled) => filled ? /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 7L12 2L21 7V13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13V7ZM12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12ZM9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16V17H9V16Z",
      fill: "currentColor"
    }
  ) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.5 7.88261V13C4.5 17.1421 7.85786 20.5 12 20.5C16.1421 20.5 19.5 17.1421 19.5 13V7.88261L12 3.71594L4.5 7.88261ZM12 2L3 7V13C3 17.9706 7.02944 22 12 22C16.9706 22 21 17.9706 21 13V7L12 2Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16V17H9V16Z",
        fill: "currentColor"
      }
    )
  ] }),
  Cup: (filled) => filled ? /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19 3H3V15C3 18.3137 5.68629 21 9 21H13C16.3137 21 19 18.3137 19 15C21.2091 15 23 13.2091 23 11V7H19V3ZM19 8.5V13.5C20.3807 13.5 21.5 12.3807 21.5 11V8.5H19Z",
      fill: "currentColor"
    }
  ) : /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19 15C19 18.3137 16.3137 21 13 21H9C5.68629 21 3 18.3137 3 15V3H19V7H23V11C23 13.2091 21.2091 15 19 15ZM4.5 4.5H17.5V15C17.5 17.4853 15.4853 19.5 13 19.5H9C6.51472 19.5 4.5 17.4853 4.5 15V4.5ZM19 8.5V13.5C20.3807 13.5 21.5 12.3807 21.5 11V8.5H19Z",
      fill: "currentColor"
    }
  ),
  Pin: (filled) => filled ? /* @__PURE__ */ jsx(
    "path",
    {
      d: "M9.05547 13.884L5.34316 10.1717L6.40382 9.11099L7.11093 9.8181L12.0607 8.40389L15.2427 5.22191L14.182 4.16125L15.2427 3.10059L20.8995 8.75744L19.8389 9.8181L18.7782 8.75744L15.5962 11.9394L14.182 16.8892L14.8891 17.5963L13.8284 18.6569L10.1161 14.9446L4.45928 20.6015L3.39862 19.5408L9.05547 13.884Z",
      fill: "currentColor"
    }
  ) : /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.9686 15.6758L14.2607 11.1536L17.7175 7.69678L16.3033 6.28257L12.8465 9.73939L8.32428 11.0315L12.9686 15.6758ZM20.8995 8.75744L19.8389 9.8181L18.7782 8.75744L15.5962 11.9394L14.182 16.8892L14.8891 17.5963L13.8284 18.6569L10.1161 14.9446L4.45928 20.6015L3.39862 19.5408L9.05547 13.884L5.34316 10.1717L6.40382 9.11099L7.11093 9.8181L12.0607 8.40389L15.2427 5.22191L14.182 4.16125L15.2427 3.10059L20.8995 8.75744Z",
      fill: "currentColor"
    }
  ),
  VolumeHigh: (filled) => filled ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M2 16V8H6L12 3V21L6 16H2Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M14 16C16.2091 16 18 14.2091 18 12C18 9.79086 16.2091 8 14 8V9.5C15.3807 9.5 16.5 10.6193 16.5 12C16.5 13.3807 15.3807 14.5 14 14.5V16Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M14 20C18.4183 20 22 16.4183 22 12C22 7.58172 18.4183 4 14 4V5.5C17.5899 5.5 20.5 8.41015 20.5 12C20.5 15.5899 17.5899 18.5 14 18.5V20Z",
        fill: "currentColor"
      }
    )
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6 8H2V16H6L12 21V3L6 8ZM10.5 6.20256L6.54308 9.5H3.5V14.5H6.54308L10.5 17.7974V6.20256Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M14 16C16.2091 16 18 14.2091 18 12C18 9.79086 16.2091 8 14 8V9.5C15.3807 9.5 16.5 10.6193 16.5 12C16.5 13.3807 15.3807 14.5 14 14.5V16Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M14 20C18.4183 20 22 16.4183 22 12C22 7.58172 18.4183 4 14 4V5.5C17.5899 5.5 20.5 8.41015 20.5 12C20.5 15.5899 17.5899 18.5 14 18.5V20Z",
        fill: "currentColor"
      }
    )
  ] }),
  VolumeMute: (filled) => filled ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M2 16V8H6L12 3V21L6 16H2Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: "20.2981",
        y: "8.64111",
        width: "1.5",
        height: "8",
        transform: "rotate(45 20.2981 8.64111)",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: "21.3588",
        y: "14.2983",
        width: "1.5",
        height: "8",
        transform: "rotate(135 21.3588 14.2983)",
        fill: "currentColor"
      }
    )
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6 8H2V16H6L12 21V3L6 8ZM10.5 6.20256L6.54308 9.5H3.5V14.5H6.54308L10.5 17.7974V6.20256Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: "20.2981",
        y: "8.64111",
        width: "1.5",
        height: "8",
        transform: "rotate(45 20.2981 8.64111)",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: "21.3588",
        y: "14.2983",
        width: "1.5",
        height: "8",
        transform: "rotate(135 21.3588 14.2983)",
        fill: "currentColor"
      }
    )
  ] }),
  File: (filled) => filled ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M12 2H4V22H20V10H12V2Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("path", { d: "M20 8L14 8V2L20 8Z", fill: "currentColor" })
  ] }) : /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 2L20 8V22H4V2H14ZM18.5 10H12V3.5H5.5V20.5H18.5V10Z",
      fill: "currentColor"
    }
  ),
  Category: (filled) => filled ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "8", height: "8", fill: "currentColor" }),
    /* @__PURE__ */ jsx("rect", { x: "3", y: "13", width: "8", height: "8", fill: "currentColor" }),
    /* @__PURE__ */ jsx("rect", { x: "13", y: "3", width: "8", height: "8", fill: "currentColor" }),
    /* @__PURE__ */ jsx("rect", { x: "13", y: "13", width: "8", height: "8", fill: "currentColor" })
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.5 4.5H4.5V9.5H9.5V4.5ZM3 3V11H11V3H3Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.5 14.5H4.5V19.5H9.5V14.5ZM3 13V21H11V13H3Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M19.5 4.5H14.5V9.5H19.5V4.5ZM13 3V11H21V3H13Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M19.5 14.5H14.5V19.5H19.5V14.5ZM13 13V21H21V13H13Z",
        fill: "currentColor"
      }
    )
  ] }),
  Peace: (filled) => filled ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M11.25 2.02783C6.07745 2.41136 2 6.72957 2 12.0001C2 14.236 2.73379 16.3005 3.97368 17.9659L11.25 10.6896V2.02783Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M4.95939 19.1015C6.60053 20.7287 8.8027 21.791 11.25 21.9724V12.8109L4.95939 19.1015Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M12.75 21.9724C15.1973 21.791 17.3995 20.7287 19.0406 19.1015L12.75 12.8109V21.9724Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M20.0263 17.9659L12.75 10.6896V2.02783C17.9226 2.41136 22 6.72958 22 12.0001C22 14.236 21.2662 16.3005 20.0263 17.9659Z",
        fill: "currentColor"
      }
    )
  ] }) : /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11.25 12.8108V20.4674C9.2171 20.2896 7.38933 19.3963 6.02005 18.0407L11.25 12.8108ZM11.25 10.6894L5.04777 16.8917C4.07268 15.5084 3.5 13.8211 3.5 12C3.5 7.55831 6.90686 3.91233 11.25 3.53263V10.6894ZM12.75 12.8108V20.4674C14.7829 20.2896 16.6107 19.3963 17.9799 18.0407L12.75 12.8108ZM18.9522 16.8917L12.75 10.6895V3.53263C17.0931 3.91233 20.5 7.55831 20.5 12C20.5 13.8211 19.9273 15.5084 18.9522 16.8917Z",
      fill: "currentColor"
    }
  ),
  Eye: (filled) => filled ? /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 19C18.0751 19 23 12 23 12C23 12 18.0751 5 12 5C5.92487 5 1 12 1 12C1 12 5.92487 19 12 19ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",
      fill: "currentColor"
    }
  ) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 12C1 12 5.92487 19 12 19C18.0751 19 23 12 23 12C23 12 18.0751 5 12 5C5.92487 5 1 12 1 12ZM2.90443 12C2.93793 12.0401 2.97258 12.0813 3.00836 12.1235C3.53083 12.7395 4.28523 13.5585 5.21221 14.3734C7.11461 16.0459 9.51515 17.5 12 17.5C14.4849 17.5 16.8854 16.0459 18.7878 14.3734C19.7148 13.5585 20.4692 12.7395 20.9916 12.1235C21.0274 12.0813 21.0621 12.0401 21.0956 12C21.0621 11.9599 21.0274 11.9187 20.9916 11.8765C20.4692 11.2605 19.7148 10.4415 18.7878 9.62656C16.8854 7.9541 14.4849 6.5 12 6.5C9.51515 6.5 7.11461 7.9541 5.21221 9.62656C4.28523 10.4415 3.53083 11.2605 3.00836 11.8765C2.97258 11.9187 2.93793 11.9599 2.90443 12ZM2.22578 11.1354C2.22576 11.1354 2.22572 11.1354 2.22578 11.1354Z",
        fill: "currentColor"
      }
    )
  ] }),
  EyeBlind: (filled) => filled ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.75213 3.69141L3.69147 4.75207L6.02989 7.09048C3.00297 9.15318 1 12.0001 1 12.0001C1 12.0001 5.92487 19.0001 12 19.0001C13.663 19.0001 15.2399 18.4756 16.6531 17.7137L19.2478 20.3084L20.3085 19.2478L4.75213 3.69141ZM13.5241 14.5847L9.41543 10.476C9.15147 10.9227 9 11.4437 9 12.0001C9 13.657 10.3431 15.0001 12 15.0001C12.5564 15.0001 13.0774 14.8486 13.5241 14.5847Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M13.0954 9.2064C13.8712 9.5108 14.4893 10.129 14.7937 10.9047L19.5699 15.6808C21.6825 13.8727 23 12.0001 23 12.0001C23 12.0001 18.0751 5.00011 12 5.00011C11.0772 5.00011 10.181 5.16161 9.32458 5.43554L13.0954 9.2064Z",
        fill: "currentColor"
      }
    )
  ] }) : /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.75213 3.69141L3.69147 4.75207L6.02989 7.09049C3.00297 9.15318 1 12.0001 1 12.0001C1 12.0001 5.92487 19.0001 12 19.0001C13.663 19.0001 15.2399 18.4756 16.6531 17.7137L19.2478 20.3084L20.3085 19.2478L4.75213 3.69141ZM15.5394 16.6L13.5242 14.5848C13.0775 14.8488 12.5565 15.0003 12 15.0003C10.3431 15.0003 9 13.6572 9 12.0003C9 11.4439 9.1515 10.9228 9.4155 10.4761L7.11135 8.17195C6.4387 8.61141 5.80156 9.10856 5.21221 9.62667C4.28523 10.4416 3.53083 11.2607 3.00836 11.8766C2.97258 11.9188 2.93793 11.96 2.90443 12.0001C2.93793 12.0402 2.97258 12.0814 3.00836 12.1236C3.53083 12.7396 4.28523 13.5586 5.21221 14.3736C7.11461 16.046 9.51515 17.5001 12 17.5001C13.2162 17.5001 14.4122 17.1518 15.5394 16.6ZM18.5058 14.6167C18.6009 14.5363 18.6949 14.4552 18.7878 14.3736C19.7148 13.5586 20.4692 12.7396 20.9916 12.1236C21.0274 12.0814 21.0621 12.0402 21.0956 12.0001C21.0621 11.96 21.0274 11.9188 20.9916 11.8766C20.4692 11.2607 19.7148 10.4416 18.7878 9.62667C16.8854 7.95422 14.4849 6.50011 12 6.50011C11.5118 6.50011 11.0268 6.55625 10.5482 6.65915L9.32458 5.43554C10.181 5.16161 11.0772 5.00011 12 5.00011C18.0751 5.00011 23 12.0001 23 12.0001C23 12.0001 21.6825 13.8727 19.5699 15.6808L18.5058 14.6167Z",
      fill: "currentColor"
    }
  ),
  Warning: (filled) => filled ? /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11 14V6H13V14H11ZM11 18V16H13V18H11Z",
      fill: "currentColor"
    }
  ) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx("rect", { x: "11", y: "6", width: "2", height: "8", fill: "currentColor" }),
    /* @__PURE__ */ jsx("rect", { x: "11", y: "16", width: "2", height: "2", fill: "currentColor" })
  ] }),
  Funnel: (filled) => filled ? /* @__PURE__ */ jsx("path", { d: "M2 4H22V5.5L14 13.5V21H10V13.5L2 5.5V4Z", fill: "currentColor" }) : /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M15 12.5L22 5.5V4H2V5.5L9 12.5V21H15V12.5ZM13.5 19.5V11.8787L19.8787 5.5H4.12132L10.5 11.8787V19.5H13.5Z",
      fill: "currentColor"
    }
  ),
  Hash: () => /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.5 3H8V8L3 8V9.5H8V14.5H3V16H8V21H9.5V16L14.5 16V21H16V16H21V14.5H16V9.5H21V8L16 8V3H14.5V8H9.5V3ZM14.5 14.5V9.5L9.5 9.5V14.5L14.5 14.5Z",
      fill: "currentColor"
    }
  ),
  HashLock: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M12 8L9.5 8V3H8V8L3 8V9.5H8V14.5H3V16H8V21H9.5V16L14.5 16V21H16V16H21V14.5H16V12H14.5V14.5L9.5 14.5V9.5L12 9.5V8Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M15 4V3C15 1.34315 16.3431 0 18 0C19.6569 0 21 1.34315 21 3V4H22V10H14V4H15ZM19.5 3V4H16.5V3C16.5 2.17157 17.1716 1.5 18 1.5C18.8284 1.5 19.5 2.17157 19.5 3Z",
        fill: "currentColor"
      }
    )
  ] }),
  HashGlobe: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M24 5C24 7.76142 21.7614 10 19 10C16.2386 10 14 7.76142 14 5C14 2.23858 16.2386 0 19 0C21.7614 0 24 2.23858 24 5ZM17 7.87266V5L15.7354 3.73543C15.5834 4.12764 15.5 4.55408 15.5 5C15.5 6.18937 16.0933 7.24018 17 7.87266ZM22.5 5C22.5 6.18937 21.9067 7.24018 21 7.87266V6.5H19V5H20V3.5H21V2.12734C21.9067 2.75982 22.5 3.81063 22.5 5Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M12 8L9.5 8V3H8V8L3 8V9.5H8V14.5H3V16H8V21H9.5V16L14.5 16V21H16V16H21V14.5H16V12H14.5V14.5L9.5 14.5V9.5L12 9.5V8Z",
        fill: "currentColor"
      }
    )
  ] }),
  HashSearch: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M12 8L9.5 8V3H8V8L3 8V9.5H8V14.5H3V16H8V21H9.5V16L14.5 16V21H16V16H21V14.5H16V12H14.5V14.5L9.5 14.5V9.5L12 9.5V8Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M20.0322 7.44642C18.4983 8.35236 16.4895 8.14636 15.1716 6.82843C13.6095 5.26633 13.6095 2.73367 15.1716 1.17157C16.7337 -0.390524 19.2663 -0.390524 20.8284 1.17157C22.2708 2.61393 22.3813 4.88377 21.1601 6.45299L23.3033 8.59619L22.2427 9.65685L20.0322 7.44642ZM19.7678 5.76777C18.7915 6.74408 17.2085 6.74408 16.2322 5.76777C15.2559 4.79146 15.2559 3.20854 16.2322 2.23223C17.2085 1.25592 18.7915 1.25592 19.7678 2.23223C20.7441 3.20854 20.7441 4.79146 19.7678 5.76777Z",
        fill: "currentColor"
      }
    )
  ] }),
  HashPlus: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M12 8L9.5 8V3H8V8L3 8V9.5H8V14.5H3V16H8V21H9.5V16L14.5 16V21H16V16H21V14.5H16V12H14.5V14.5L9.5 14.5V9.5L12 9.5V8Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M19 2H17V5H14V7H17V10H19V7H22V5H19V2Z", fill: "currentColor" })
  ] }),
  Space: () => /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14.4055 9.59452L14.2338 8.5223C13.9568 6.79272 13.4927 5.41447 12.9703 4.51403C12.4033 3.53675 12.013 3.5 12 3.5C11.987 3.5 11.5967 3.53675 11.0297 4.51403C10.5073 5.41447 10.0432 6.79272 9.76623 8.5223L9.59452 9.59452L8.5223 9.76623C6.79272 10.0432 5.41447 10.5073 4.51403 11.0297C3.53675 11.5967 3.5 11.987 3.5 12C3.5 12.013 3.53675 12.4033 4.51403 12.9703C5.41447 13.4927 6.79272 13.9568 8.5223 14.2338L9.59452 14.4055L9.76623 15.4777C10.0432 17.2073 10.5073 18.5855 11.0297 19.486C11.5967 20.4633 11.987 20.5 12 20.5C12.013 20.5 12.4033 20.4633 12.9703 19.486C13.4927 18.5855 13.9568 17.2073 14.2338 15.4777L14.4055 14.4055L15.4777 14.2338C17.2073 13.9568 18.5855 13.4927 19.486 12.9703C20.4633 12.4033 20.5 12.013 20.5 12C20.5 11.987 20.4633 11.5967 19.486 11.0297C18.5855 10.5073 17.2073 10.0432 15.4777 9.76623L14.4055 9.59452ZM15.7149 15.7149C19.3983 15.125 22 13.684 22 12C22 10.316 19.3983 8.87498 15.7149 8.28511C15.125 4.60173 13.684 2 12 2C10.316 2 8.87498 4.60173 8.28511 8.28511C4.60173 8.87498 2 10.316 2 12C2 13.684 4.60173 15.125 8.28511 15.7149C8.87498 19.3983 10.316 22 12 22C13.684 22 15.125 19.3983 15.7149 15.7149Z",
      fill: "currentColor"
    }
  ),
  SpaceLock: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M12 2C10.316 2 8.87498 4.60173 8.28511 8.28511C4.60173 8.87498 2 10.316 2 12C2 13.684 4.60173 15.125 8.28511 15.7149C8.87498 19.3983 10.316 22 12 22C13.684 22 15.125 19.3983 15.7149 15.7149C19.3983 15.125 22 13.684 22 12H20.5C20.5 12.013 20.4633 12.4033 19.486 12.9703C18.5855 13.4927 17.2073 13.9568 15.4777 14.2338L14.4055 14.4055L14.2338 15.4777C13.9568 17.2073 13.4927 18.5855 12.9703 19.486C12.4033 20.4633 12.013 20.5 12 20.5C11.987 20.5 11.5967 20.4633 11.0297 19.486C10.5073 18.5855 10.0432 17.2073 9.76623 15.4777L9.59452 14.4055L8.5223 14.2338C6.79272 13.9568 5.41447 13.4927 4.51403 12.9703C3.53675 12.4033 3.5 12.013 3.5 12C3.5 11.987 3.53675 11.5967 4.51403 11.0297C5.41447 10.5073 6.79272 10.0432 8.5223 9.76623L9.59452 9.59452L9.76623 8.5223C10.0432 6.79272 10.5073 5.41447 11.0297 4.51403C11.5967 3.53675 11.987 3.5 12 3.5V2Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M15 4V3C15 1.34315 16.3431 0 18 0C19.6569 0 21 1.34315 21 3V4H22V10H14V4H15ZM19.5 3V4H16.5V3C16.5 2.17157 17.1716 1.5 18 1.5C18.8284 1.5 19.5 2.17157 19.5 3Z",
        fill: "currentColor"
      }
    )
  ] }),
  SpaceGlobe: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M24 5C24 7.76142 21.7614 10 19 10C16.2386 10 14 7.76142 14 5C14 2.23858 16.2386 0 19 0C21.7614 0 24 2.23858 24 5ZM17 7.87266V5L15.7354 3.73543C15.5834 4.12764 15.5 4.55408 15.5 5C15.5 6.18937 16.0933 7.24018 17 7.87266ZM22.5 5C22.5 6.18937 21.9067 7.24018 21 7.87266V6.5H19V5H20V3.5H21V2.12734C21.9067 2.75982 22.5 3.81063 22.5 5Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M12 2C10.316 2 8.87498 4.60173 8.28511 8.28511C4.60173 8.87498 2 10.316 2 12C2 13.684 4.60173 15.125 8.28511 15.7149C8.87498 19.3983 10.316 22 12 22C13.684 22 15.125 19.3983 15.7149 15.7149C19.3983 15.125 22 13.684 22 12H20.5C20.5 12.013 20.4633 12.4033 19.486 12.9703C18.5855 13.4927 17.2073 13.9568 15.4777 14.2338L14.4055 14.4055L14.2338 15.4777C13.9568 17.2073 13.4927 18.5855 12.9703 19.486C12.4033 20.4633 12.013 20.5 12 20.5C11.987 20.5 11.5967 20.4633 11.0297 19.486C10.5073 18.5855 10.0432 17.2073 9.76623 15.4777L9.59452 14.4055L8.5223 14.2338C6.79272 13.9568 5.41447 13.4927 4.51403 12.9703C3.53675 12.4033 3.5 12.013 3.5 12C3.5 11.987 3.53675 11.5967 4.51403 11.0297C5.41447 10.5073 6.79272 10.0432 8.5223 9.76623L9.59452 9.59452L9.76623 8.5223C10.0432 6.79272 10.5073 5.41447 11.0297 4.51403C11.5967 3.53675 11.987 3.5 12 3.5V2Z",
        fill: "currentColor"
      }
    )
  ] }),
  SpaceSearch: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M12 2C10.316 2 8.87498 4.60173 8.28511 8.28511C4.60173 8.87498 2 10.316 2 12C2 13.684 4.60173 15.125 8.28511 15.7149C8.87498 19.3983 10.316 22 12 22C13.684 22 15.125 19.3983 15.7149 15.7149C19.3983 15.125 22 13.684 22 12H20.5C20.5 12.013 20.4633 12.4033 19.486 12.9703C18.5855 13.4927 17.2073 13.9568 15.4777 14.2338L14.4055 14.4055L14.2338 15.4777C13.9568 17.2073 13.4927 18.5855 12.9703 19.486C12.4033 20.4633 12.013 20.5 12 20.5C11.987 20.5 11.5967 20.4633 11.0297 19.486C10.5073 18.5855 10.0432 17.2073 9.76623 15.4777L9.59452 14.4055L8.5223 14.2338C6.79272 13.9568 5.41447 13.4927 4.51403 12.9703C3.53675 12.4033 3.5 12.013 3.5 12C3.5 11.987 3.53675 11.5967 4.51403 11.0297C5.41447 10.5073 6.79272 10.0432 8.5223 9.76623L9.59452 9.59452L9.76623 8.5223C10.0432 6.79272 10.5073 5.41447 11.0297 4.51403C11.5967 3.53675 11.987 3.5 12 3.5V2Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M20.0322 7.44642C18.4983 8.35236 16.4895 8.14636 15.1716 6.82843C13.6095 5.26633 13.6095 2.73367 15.1716 1.17157C16.7337 -0.390524 19.2663 -0.390524 20.8284 1.17157C22.2708 2.61393 22.3813 4.88377 21.1601 6.45299L23.3033 8.59619L22.2427 9.65685L20.0322 7.44642ZM19.7678 5.76777C18.7915 6.74408 17.2085 6.74408 16.2322 5.76777C15.2559 4.79146 15.2559 3.20854 16.2322 2.23223C17.2085 1.25592 18.7915 1.25592 19.7678 2.23223C20.7441 3.20854 20.7441 4.79146 19.7678 5.76777Z",
        fill: "currentColor"
      }
    )
  ] }),
  SpacePlus: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M12 2C10.316 2 8.87498 4.60173 8.28511 8.28511C4.60173 8.87498 2 10.316 2 12C2 13.684 4.60173 15.125 8.28511 15.7149C8.87498 19.3983 10.316 22 12 22C13.684 22 15.125 19.3983 15.7149 15.7149C19.3983 15.125 22 13.684 22 12H20.5C20.5 12.013 20.4633 12.4033 19.486 12.9703C18.5855 13.4927 17.2073 13.9568 15.4777 14.2338L14.4055 14.4055L14.2338 15.4777C13.9568 17.2073 13.4927 18.5855 12.9703 19.486C12.4033 20.4633 12.013 20.5 12 20.5C11.987 20.5 11.5967 20.4633 11.0297 19.486C10.5073 18.5855 10.0432 17.2073 9.76623 15.4777L9.59452 14.4055L8.5223 14.2338C6.79272 13.9568 5.41447 13.4927 4.51403 12.9703C3.53675 12.4033 3.5 12.013 3.5 12C3.5 11.987 3.53675 11.5967 4.51403 11.0297C5.41447 10.5073 6.79272 10.0432 8.5223 9.76623L9.59452 9.59452L9.76623 8.5223C10.0432 6.79272 10.5073 5.41447 11.0297 4.51403C11.5967 3.53675 11.987 3.5 12 3.5V2Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M19 2H17V5H14V7H17V10H19V7H22V5H19V2Z", fill: "currentColor" })
  ] }),
  ChevronRight: () => /* @__PURE__ */ jsx(
    "path",
    {
      d: "M16.1421 12L9.07107 4.92893L8.01041 5.98959L14.0208 12L8.01041 18.0104L9.07107 19.0711L16.1421 12Z",
      fill: "currentColor"
    }
  ),
  ChevronLeft: () => /* @__PURE__ */ jsx(
    "path",
    {
      d: "M6.85786 12L13.9289 19.0711L14.9896 18.0104L8.97918 12L14.9896 5.98959L13.9289 4.92893L6.85786 12Z",
      fill: "currentColor"
    }
  ),
  ChevronTop: () => /* @__PURE__ */ jsx(
    "path",
    {
      d: "M12 6.85786L4.92893 13.9289L5.98959 14.9896L12 8.97918L18.0104 14.9896L19.0711 13.9289L12 6.85786Z",
      fill: "currentColor"
    }
  ),
  ChevronBottom: () => /* @__PURE__ */ jsx(
    "path",
    {
      d: "M12 17.1421L19.0711 10.0711L18.0104 9.01041L12 15.0208L5.98959 9.01041L4.92893 10.0711L12 17.1421Z",
      fill: "currentColor"
    }
  ),
  Plus: () => /* @__PURE__ */ jsx("path", { d: "M13 5H11V11H5V13H11V19H13V13H19V11H13V5Z", fill: "currentColor" }),
  Minus: () => /* @__PURE__ */ jsx("rect", { x: "5", y: "11", width: "14", height: "2", fill: "currentColor" }),
  Cross: () => /* @__PURE__ */ jsx(
    "path",
    {
      d: "M7.58056 6.51993L6.5199 7.58059L10.9393 12L6.5199 16.4194L7.58056 17.4801L12 13.0607L16.4194 17.4801L17.4801 16.4194L13.0606 12L17.4801 7.58059L16.4194 6.51993L12 10.9393L7.58056 6.51993Z",
      fill: "currentColor"
    }
  ),
  VerticalDots: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("rect", { x: "10", y: "3", width: "4", height: "4", fill: "currentColor" }),
    /* @__PURE__ */ jsx("rect", { x: "10", y: "10", width: "4", height: "4", fill: "currentColor" }),
    /* @__PURE__ */ jsx("rect", { x: "10", y: "17", width: "4", height: "4", fill: "currentColor" })
  ] }),
  HorizontalDots: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("rect", { x: "3", y: "10", width: "4", height: "4", fill: "currentColor" }),
    /* @__PURE__ */ jsx("rect", { x: "10", y: "10", width: "4", height: "4", fill: "currentColor" }),
    /* @__PURE__ */ jsx("rect", { x: "17", y: "10", width: "4", height: "4", fill: "currentColor" })
  ] }),
  Check: () => /* @__PURE__ */ jsx(
    "path",
    {
      d: "M9.52513 17.9246L4.57538 12.9749L5.63604 11.9142L9.52513 15.8033L18.364 6.96448L19.4246 8.02514L9.52513 17.9246Z",
      fill: "currentColor"
    }
  ),
  CheckTwice: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M2.95404 12.4749L7.90379 17.4246L8.96445 16.364L4.0147 11.4142L2.95404 12.4749Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M11.0858 12.1213L12.1464 13.182L17.8033 7.52514L16.7426 6.46448L11.0858 12.1213Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M12.1465 17.4246L7.19672 12.4749L8.25738 11.4142L12.1465 15.3033L20.9853 6.46448L22.046 7.52514L12.1465 17.4246Z",
        fill: "currentColor"
      }
    )
  ] }),
  Download: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M3 14H4.5V19.5H19.5V14H21V21H3V14Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("path", { d: "M11.25 3H12.75V15H11.25V3Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M8.82067 11.6993L7.76001 12.76L12.0027 17.0027L16.2453 12.76L15.1846 11.6993L12.0027 14.8813L8.82067 11.6993Z",
        fill: "currentColor"
      }
    )
  ] }),
  External: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M12 3H3V21H21V12H19.5V19.5H4.5V4.5H12V3Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("path", { d: "M14 4.5V3H21V10L19.5 10V4.5H14Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: "11.9341",
        y: "11.0052",
        width: "10",
        height: "1.5",
        transform: "rotate(-45 11.9341 11.0052)",
        fill: "currentColor"
      }
    )
  ] }),
  RecentClock: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12H2C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C8.29859 2 5.06687 4.01099 3.33782 7H5.1254C6.67093 4.87867 9.17446 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M4.5 3H3V8H8V6.5H4.5V3Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M11 7L13 6.99997L13 11.5858L16.9498 15.5355L15.5355 16.9497L11 12.4142L11 7Z",
        fill: "currentColor"
      }
    )
  ] }),
  Power: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M17.3033 6.69671C18.6605 8.05394 19.5 9.92894 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12C4.5 9.92894 5.33947 8.05394 6.6967 6.69671L5.63604 5.63605C4.00736 7.26473 3 9.51473 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 9.51473 19.9926 7.26473 18.364 5.63605L17.3033 6.69671Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx("rect", { x: "11", y: "2", width: "2", height: "10", fill: "currentColor" })
  ] }),
  ReplyArrow: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M21 9.5V8H7V16H8.5V9.5H21Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M4.56066 12.6993L3.5 13.76L7.74264 18.0027L11.9853 13.76L10.9246 12.6993L7.74264 15.8813L4.56066 12.6993Z",
        fill: "currentColor"
      }
    )
  ] }),
  ArrowGoRight: () => /* @__PURE__ */ jsx(
    "path",
    {
      d: "M18.124 13H8C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3V4.5C6.067 4.5 4.5 6.067 4.5 8C4.5 9.933 6.067 11.5 8 11.5H18.1387L15.6993 9.06067L16.76 8.00001L21.0027 12.2427L16.76 16.4853L15.6993 15.4246L18.124 13Z",
      fill: "currentColor"
    }
  ),
  ArrowGoRightPlus: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M18.124 13H8C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3V4.5C6.067 4.5 4.5 6.067 4.5 8C4.5 9.933 6.067 11.5 8 11.5H18.1387L15.6993 9.06067L16.76 8.00001L21.0027 12.2427L16.76 16.4853L15.6993 15.4246L18.124 13Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M4 15H6V23H4V15Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("path", { d: "M9 18L9 20L1 20L1 18L9 18Z", fill: "currentColor" })
  ] }),
  ArrowGoRightCross: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M2.7019 14.6412L1.64124 15.7019L3.93933 18L1.64124 20.2981L2.7019 21.3587L4.99999 19.0607L7.29809 21.3587L8.35875 20.2981L6.06065 18L8.35875 15.7019L7.29809 14.6412L4.99999 16.9393L2.7019 14.6412Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M18.124 13H8C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3V4.5C6.067 4.5 4.5 6.067 4.5 8C4.5 9.933 6.067 11.5 8 11.5H18.1387L15.6993 9.06067L16.76 8.00001L21.0027 12.2427L16.76 16.4853L15.6993 15.4246L18.124 13Z",
        fill: "currentColor"
      }
    )
  ] }),
  ArrowGoLeft: () => /* @__PURE__ */ jsx(
    "path",
    {
      d: "M5.87871 13H16.0027C18.7641 13 21.0027 10.7614 21.0027 8C21.0027 5.23858 18.7641 3 16.0027 3V4.5C17.9357 4.5 19.5027 6.067 19.5027 8C19.5027 9.933 17.9357 11.5 16.0027 11.5H5.86401L8.30334 9.06067L7.24268 8.00001L3.00003 12.2427L7.24268 16.4853L8.30334 15.4246L5.87871 13Z",
      fill: "currentColor"
    }
  ),
  Markdown: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M17.25 13V8H15.75V13H14L16.5 15.5L19 13H17.25Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M20.5 5.5H3.5V18.5H20.5V5.5ZM2 4V20H22V4H2Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M6.5 11L9 12.875L11.5 11V15.5H13V8L9 11L5 8V15.5H6.5V11Z", fill: "currentColor" })
  ] }),
  Attachment: () => /* @__PURE__ */ jsx(
    "path",
    {
      d: "M9.17158 4.92891L2.80762 11.2929L3.86828 12.3535L10.2322 5.98957C12.3801 3.84169 15.8625 3.84169 18.0104 5.98957C20.1583 8.13746 20.1583 11.6199 18.0104 13.7677L12.3536 19.4246C10.9867 20.7914 8.77065 20.7914 7.40381 19.4246C6.03698 18.0578 6.03698 15.8417 7.40381 14.4749L13.0607 8.818C13.6465 8.23222 14.5962 8.23222 15.182 8.818C15.7678 9.40379 15.7678 10.3535 15.182 10.9393L9.52513 16.5962L10.5858 17.6568L16.2426 12C17.4142 10.8284 17.4142 8.92892 16.2426 7.75734C15.0711 6.58577 13.1716 6.58577 12 7.75734L6.34315 13.4142C4.39053 15.3668 4.39053 18.5326 6.34315 20.4853C8.29577 22.4379 11.4616 22.4379 13.4142 20.4853L19.0711 14.8284C21.8047 12.0947 21.8047 7.66258 19.0711 4.92891C16.3374 2.19524 11.9052 2.19524 9.17158 4.92891Z",
      fill: "currentColor"
    }
  ),
  Alphabet: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 18L7 5H9L13 18H11.5L10.4348 14.5H5.56522L4.5 18H3ZM6.02174 13H9.97826L8 6.5L6.02174 13Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M16.9773 18.0455C16.4242 18.0455 15.9223 17.9413 15.4716 17.733C15.0208 17.5208 14.6629 17.2159 14.3977 16.8182C14.1326 16.4167 14 15.9318 14 15.3636C14 14.8636 14.0985 14.4583 14.2955 14.1477C14.4924 13.8333 14.7557 13.5871 15.0852 13.4091C15.4148 13.2311 15.7784 13.0985 16.1761 13.0114C16.5777 12.9205 16.9811 12.8485 17.3864 12.7955C17.9167 12.7273 18.3466 12.6761 18.6761 12.642C19.0095 12.6042 19.2519 12.5417 19.4034 12.4545C19.5587 12.3674 19.6364 12.2159 19.6364 12V11.9545C19.6364 11.3939 19.483 10.9583 19.1761 10.6477C18.8731 10.3371 18.4129 10.1818 17.7955 10.1818C17.1553 10.1818 16.6534 10.322 16.2898 10.6023C15.9261 10.8826 15.6705 11.1818 15.5227 11.5L14.25 11.0455C14.4773 10.5152 14.7803 10.1023 15.1591 9.80682C15.5417 9.50758 15.9583 9.29924 16.4091 9.18182C16.8636 9.06061 17.3106 9 17.75 9C18.0303 9 18.3523 9.03409 18.7159 9.10227C19.0833 9.16667 19.4375 9.30114 19.7784 9.50568C20.1231 9.71023 20.4091 10.0189 20.6364 10.4318C20.8636 10.8447 20.9773 11.3977 20.9773 12.0909V17.8409H19.6364V16.6591H19.5682C19.4773 16.8485 19.3258 17.0511 19.1136 17.267C18.9015 17.483 18.6193 17.6667 18.267 17.8182C17.9148 17.9697 17.4848 18.0455 16.9773 18.0455ZM17.1818 16.8409C17.7121 16.8409 18.1591 16.7367 18.5227 16.5284C18.8902 16.3201 19.1667 16.0511 19.3523 15.7216C19.5417 15.392 19.6364 15.0455 19.6364 14.6818V13.4545C19.5795 13.5227 19.4545 13.5852 19.2614 13.642C19.072 13.6951 18.8523 13.7424 18.6023 13.7841C18.3561 13.822 18.1155 13.8561 17.8807 13.8864C17.6496 13.9129 17.4621 13.9356 17.3182 13.9545C16.9697 14 16.6439 14.0739 16.3409 14.1761C16.0417 14.2746 15.7992 14.4242 15.6136 14.625C15.4318 14.822 15.3409 15.0909 15.3409 15.4318C15.3409 15.8977 15.5133 16.25 15.858 16.4886C16.2064 16.7235 16.6477 16.8409 17.1818 16.8409Z",
        fill: "currentColor"
      }
    )
  ] }),
  AlphabetUnderline: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 17L7 4H9L13 17H11.5L10.4348 13.5H5.56522L4.5 17H3ZM6.02174 12H9.97826L8 5.5L6.02174 12Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M16.9773 17.0455C16.4242 17.0455 15.9223 16.9413 15.4716 16.733C15.0208 16.5208 14.6629 16.2159 14.3977 15.8182C14.1326 15.4167 14 14.9318 14 14.3636C14 13.8636 14.0985 13.4583 14.2955 13.1477C14.4924 12.8333 14.7557 12.5871 15.0852 12.4091C15.4148 12.2311 15.7784 12.0985 16.1761 12.0114C16.5777 11.9205 16.9811 11.8485 17.3864 11.7955C17.9167 11.7273 18.3466 11.6761 18.6761 11.642C19.0095 11.6042 19.2519 11.5417 19.4034 11.4545C19.5587 11.3674 19.6364 11.2159 19.6364 11V10.9545C19.6364 10.3939 19.483 9.95833 19.1761 9.64773C18.8731 9.33712 18.4129 9.18182 17.7955 9.18182C17.1553 9.18182 16.6534 9.32197 16.2898 9.60227C15.9261 9.88258 15.6705 10.1818 15.5227 10.5L14.25 10.0455C14.4773 9.51515 14.7803 9.10227 15.1591 8.80682C15.5417 8.50758 15.9583 8.29924 16.4091 8.18182C16.8636 8.06061 17.3106 8 17.75 8C18.0303 8 18.3523 8.03409 18.7159 8.10227C19.0833 8.16667 19.4375 8.30114 19.7784 8.50568C20.1231 8.71023 20.4091 9.01894 20.6364 9.43182C20.8636 9.8447 20.9773 10.3977 20.9773 11.0909V16.8409H19.6364V15.6591H19.5682C19.4773 15.8485 19.3258 16.0511 19.1136 16.267C18.9015 16.483 18.6193 16.6667 18.267 16.8182C17.9148 16.9697 17.4848 17.0455 16.9773 17.0455ZM17.1818 15.8409C17.7121 15.8409 18.1591 15.7367 18.5227 15.5284C18.8902 15.3201 19.1667 15.0511 19.3523 14.7216C19.5417 14.392 19.6364 14.0455 19.6364 13.6818V12.4545C19.5795 12.5227 19.4545 12.5852 19.2614 12.642C19.072 12.6951 18.8523 12.7424 18.6023 12.7841C18.3561 12.822 18.1155 12.8561 17.8807 12.8864C17.6496 12.9129 17.4621 12.9356 17.3182 12.9545C16.9697 13 16.6439 13.0739 16.3409 13.1761C16.0417 13.2746 15.7992 13.4242 15.6136 13.625C15.4318 13.822 15.3409 14.0909 15.3409 14.4318C15.3409 14.8977 15.5133 15.25 15.858 15.4886C16.2064 15.7235 16.6477 15.8409 17.1818 15.8409Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M2 18.5H22V20H2V18.5Z", fill: "currentColor" })
  ] }),
  Text: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M6 5.5V4H18V5.5H6Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("path", { d: "M11.25 5H12.75V19H11.25V5Z", fill: "currentColor" })
  ] }),
  Heading1: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M20 20H18.5V13H17V12L20 11V20Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("path", { d: "M3 20V4H4.5V11H12.5V4H14V20H12.5V12.5H4.5V20H3Z", fill: "currentColor" })
  ] }),
  Heading2: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M3 20V4H4.5V11H12.5V4H14V20H12.5V12.5H4.5V20H3Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M21 20V18.5H18L20.0072 16.1583C20.6478 15.4109 21 14.4589 21 13.4744C21 12.1078 19.8794 11 18.5129 11C17.1321 11 16 12.1193 16 13.5V14H17.5V13.5C17.5 12.9477 17.9477 12.5 18.5 12.5C19.0523 12.5 19.5 12.9477 19.5 13.5V13.7485C19.5 14.233 19.3242 14.701 19.0052 15.0655L16 18.5V20H21Z",
        fill: "currentColor"
      }
    )
  ] }),
  Heading3: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M3 20V4H4.5V11H12.5V4H14V20H12.5V12.5H4.5V20H3Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M18.5 11C17.2905 11 16.2816 11.8589 16.05 13L17.6338 13C17.8067 12.7011 18.1298 12.5 18.5 12.5C19.0523 12.5 19.5 12.9477 19.5 13.5V13.75C19.5 14.3023 19.0523 14.75 18.5 14.75H18V16.25H18.5C19.0523 16.25 19.5 16.6977 19.5 17.25V17.5C19.5 18.0523 19.0523 18.5 18.5 18.5C18.1298 18.5 17.8067 18.2989 17.6338 18L16.05 18C16.2816 19.1411 17.2905 20 18.5 20C19.8807 20 21 18.8807 21 17.5V17.25C21 16.5686 20.7274 15.9509 20.2853 15.5C20.7274 15.0491 21 14.4314 21 13.75V13.5C21 12.1193 19.8807 11 18.5 11Z",
        fill: "currentColor"
      }
    )
  ] }),
  Bold: () => /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14.5013 11.6717C15.4198 10.8697 16 9.69009 16 8.375C16 5.95875 14.0412 4 11.625 4H7V20H12.625C15.0412 20 17 18.0412 17 15.625C17 13.8803 15.9787 12.3741 14.5013 11.6717ZM8.5 5.5H11.625C13.2128 5.5 14.5 6.78718 14.5 8.375C14.5 9.96282 13.2128 11.25 11.625 11.25H8.5V5.5ZM8.5 12.75V18.5H12.625C14.2128 18.5 15.5 17.2128 15.5 15.625C15.5 14.0372 14.2128 12.75 12.625 12.75H8.5Z",
      fill: "currentColor"
    }
  ),
  Italic: () => /* @__PURE__ */ jsx("path", { d: "M18 4H10V5.5H13.5L9 18.5H6V20H14V18.5H10.5L15 5.5H18V4Z", fill: "currentColor" }),
  Underline: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M8.5 5H7V12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12V5H15.5V12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12V5Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M5 18.5V20H19V18.5H5Z", fill: "currentColor" })
  ] }),
  Strike: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M6.75 8.25C6.75 5.90279 8.65279 4 11 4H12.75C14.6622 4 16.2794 5.26283 16.8132 7H15.2001C14.745 6.10958 13.8187 5.5 12.75 5.5H11C9.48122 5.5 8.25 6.73122 8.25 8.25C8.25 9.76878 9.48122 11 11 11H20V12.5H4V11H7.75952C7.12987 10.2588 6.75 9.29875 6.75 8.25Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M14.8714 14H16.6241C16.8656 14.5337 17 15.1261 17 15.75C17 18.0972 15.0972 20 12.75 20H11C9.08782 20 7.47058 18.7372 6.9368 17H8.54985C9.00503 17.8904 9.93133 18.5 11 18.5H12.75C14.2688 18.5 15.5 17.2688 15.5 15.75C15.5 15.0852 15.2641 14.4755 14.8714 14Z",
        fill: "currentColor"
      }
    )
  ] }),
  Link: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("rect", { x: "8", y: "11", width: "8", height: "2", fill: "currentColor" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M11 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H11V15.5H8C6.067 15.5 4.5 13.933 4.5 12C4.5 10.067 6.067 8.5 8 8.5H11V7Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M13 15.5H16C17.933 15.5 19.5 13.933 19.5 12C19.5 10.067 17.933 8.5 16 8.5H13V7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H13V15.5Z",
        fill: "currentColor"
      }
    )
  ] }),
  Code: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M8.30334 8.82067L7.24268 7.76001L3.00004 12.0027L7.24268 16.2453L8.30334 15.1846L5.12136 12.0027L8.30334 8.82067Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M15.6993 8.82067L16.76 7.76001L21.0027 12.0027L16.76 16.2453L15.6993 15.1846L18.8813 12.0027L15.6993 8.82067Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M12.5 6L10 18H11.5L14 6H12.5Z", fill: "currentColor" })
  ] }),
  BlockCode: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M10 3H7C5.34315 3 4 4.34315 4 6V10C4 10.5523 3.55228 11 3 11H2V12.5H3C3.55228 12.5 4 12.9477 4 13.5V17.5C4 19.1569 5.34315 20.5 7 20.5H10V19H7C6.17157 19 5.5 18.3284 5.5 17.5V13.5C5.5 12.8186 5.22742 12.2009 4.78536 11.75C5.22742 11.2991 5.5 10.6814 5.5 10V6C5.5 5.17157 6.17157 4.5 7 4.5H10V3Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M13 3H16C17.6569 3 19 4.34315 19 6V10C19 10.5523 19.4477 11 20 11H21V12.5H20C19.4477 12.5 19 12.9477 19 13.5V17.5C19 19.1569 17.6569 20.5 16 20.5H13V19H16C16.8284 19 17.5 18.3284 17.5 17.5V13.5C17.5 12.8186 17.7726 12.2009 18.2146 11.75C17.7726 11.2991 17.5 10.6814 17.5 10V6C17.5 5.17157 16.8284 4.5 16 4.5H13V3Z",
        fill: "currentColor"
      }
    )
  ] }),
  BlockQuote: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M21 6H18C15.2386 6 13 8.23858 13 11V20H21V12H14.5V11C14.5 9.067 16.067 7.5 18 7.5H21V6ZM19.5 13.5H14.5V18.5H19.5V13.5Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 20H11V12H4.5V11C4.5 9.067 6.067 7.5 8 7.5H11V6H8C5.23858 6 3 8.23858 3 11V20ZM9.5 13.5H4.5V18.5H9.5V13.5Z",
        fill: "currentColor"
      }
    )
  ] }),
  OrderList: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M8 5H22V6.5H8V5Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("path", { d: "M8 11H22V12.5H8V11Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("path", { d: "M8 17.5H22V19H8V17.5Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("path", { d: "M4 11H3V5.55556H2V4.77778L4 4V11Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M6 20V18.8333H3.6L5.20573 17.012C5.71827 16.4307 6 15.6902 6 14.9245C6 13.8617 5.10355 13 4.01028 13C2.90571 13 2 13.8706 2 14.9444V15.3333H3.2V14.9444C3.2 14.5149 3.55817 14.1667 4 14.1667C4.44183 14.1667 4.8 14.5149 4.8 14.9444V15.1377C4.8 15.5145 4.65933 15.8785 4.40412 16.1621L2 18.8333V20H6Z",
        fill: "currentColor"
      }
    )
  ] }),
  UnorderList: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M8 5H22V6.5H8V5Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("path", { d: "M8 11H22V12.5H8V11Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("path", { d: "M8 17.5H22V19H8V17.5Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("rect", { x: "3", y: "5", width: "2", height: "2", fill: "currentColor" }),
    /* @__PURE__ */ jsx("rect", { x: "3", y: "11", width: "2", height: "2", fill: "currentColor" }),
    /* @__PURE__ */ jsx("rect", { x: "3", y: "17", width: "2", height: "2", fill: "currentColor" })
  ] }),
  Mention: () => /* @__PURE__ */ jsx(
    "path",
    {
      d: "M12.4105 21.527C10.8892 21.527 9.54441 21.3182 8.37608 20.9006C7.20776 20.488 6.22587 19.8789 5.43041 19.0735C4.63496 18.2681 4.0334 17.2813 3.62573 16.113C3.21806 14.9446 3.01422 13.6073 3.01422 12.1009C3.01422 10.6442 3.22054 9.34165 3.63318 8.19321C4.0508 7.04478 4.65485 6.07035 5.44533 5.26992C6.24078 4.46452 7.20527 3.85053 8.3388 3.42795C9.47729 3.00536 10.7649 2.79407 12.2017 2.79407C13.5987 2.79407 14.8217 3.02276 15.8708 3.48015C16.9247 3.93256 17.8047 4.54655 18.5107 5.32212C19.2216 6.09272 19.7536 6.96026 20.1066 7.92475C20.4645 8.88924 20.6435 9.88356 20.6435 10.9077C20.6435 11.6286 20.6087 12.3594 20.5391 13.1002C20.4695 13.8409 20.3228 14.5221 20.0991 15.1435C19.8754 15.76 19.5298 16.2571 19.0625 16.635C18.6002 17.0128 17.9737 17.2017 17.1833 17.2017C16.8352 17.2017 16.4524 17.1471 16.0348 17.0377C15.6172 16.9283 15.2468 16.7468 14.9237 16.4933C14.6005 16.2397 14.4091 15.8992 14.3494 15.4716H14.26C14.1406 15.76 13.9567 16.0334 13.7081 16.2919C13.4645 16.5505 13.1438 16.7568 12.7461 16.9109C12.3534 17.065 11.8736 17.1321 11.3068 17.1122C10.6605 17.0874 10.0913 16.9432 9.59909 16.6797C9.10691 16.4113 8.69426 16.0483 8.36117 15.5909C8.03304 15.1286 7.78446 14.5941 7.61543 13.9876C7.45137 13.3761 7.36933 12.7174 7.36933 12.0114C7.36933 11.3402 7.46877 10.7262 7.66763 10.1694C7.86649 9.6126 8.14242 9.12539 8.4954 8.70777C8.85336 8.29016 9.27097 7.95706 9.74824 7.70849C10.2305 7.45493 10.75 7.29833 11.3068 7.23867C11.804 7.18895 12.2564 7.21133 12.6641 7.30579C13.0717 7.39528 13.4073 7.53199 13.6708 7.71594C13.9343 7.89492 14.1009 8.09378 14.1705 8.31253H14.26V7.47731H15.8409V14.2188C15.8409 14.6364 15.9578 15.0043 16.1914 15.3225C16.4251 15.6407 16.7656 15.7997 17.2131 15.7997C17.7202 15.7997 18.108 15.6257 18.3764 15.2777C18.6499 14.9297 18.8363 14.3928 18.9357 13.6669C19.0401 12.9411 19.0923 12.0114 19.0923 10.8779C19.0923 10.2117 19.0004 9.55543 18.8164 8.90912C18.6374 8.25785 18.364 7.64883 17.9961 7.08207C17.6332 6.5153 17.1733 6.01566 16.6165 5.58313C16.0597 5.1506 15.4059 4.81253 14.6552 4.56893C13.9095 4.32035 13.0618 4.19606 12.1122 4.19606C10.9439 4.19606 9.89739 4.37752 8.97267 4.74045C8.05293 5.0984 7.2699 5.6229 6.6236 6.31395C5.98226 7.00003 5.49256 7.83526 5.15449 8.81964C4.82139 9.79904 4.65485 10.9127 4.65485 12.1605C4.65485 13.4283 4.82139 14.5544 5.15449 15.5387C5.49256 16.5231 5.98972 17.3534 6.64597 18.0295C7.30719 18.7056 8.12502 19.2177 9.09945 19.5657C10.0739 19.9187 11.1975 20.0952 12.4702 20.0952C13.0171 20.0952 13.5565 20.043 14.0884 19.9386C14.6204 19.8342 15.0902 19.7198 15.4979 19.5956C15.9056 19.4713 16.1989 19.3793 16.3779 19.3196L16.7955 20.6918C16.4872 20.8211 16.0845 20.9503 15.5874 21.0796C15.0952 21.2088 14.5682 21.3157 14.0064 21.4002C13.4496 21.4848 12.9176 21.527 12.4105 21.527ZM11.5455 15.5909C12.2117 15.5909 12.7511 15.4567 13.1637 15.1882C13.5764 14.9198 13.8771 14.5146 14.0661 13.9727C14.255 13.4308 14.3494 12.7472 14.3494 11.9219C14.3494 11.0867 14.245 10.4354 14.0362 9.96807C13.8274 9.50074 13.5192 9.17262 13.1115 8.9837C12.7039 8.79478 12.2017 8.70032 11.6051 8.70032C11.0384 8.70032 10.5536 8.84947 10.1509 9.14776C9.75321 9.44108 9.44746 9.83384 9.23368 10.326C9.02488 10.8132 8.92047 11.3452 8.92047 11.9219C8.92047 12.5583 9.00499 13.1573 9.17402 13.7191C9.34306 14.276 9.61898 14.7284 10.0018 15.0764C10.3846 15.4194 10.8992 15.5909 11.5455 15.5909Z",
      fill: "currentColor"
    }
  ),
  Filter: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M3 5H21V6.5H3V5Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("path", { d: "M6 11H18V12.5H6V11Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("path", { d: "M9 17.5H15V19H9V17.5Z", fill: "currentColor" })
  ] }),
  Sort: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M3 5H21V6.5H3V5Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("path", { d: "M3 11H15V12.5H3V11Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx("path", { d: "M3 17.5H9V19H3V17.5Z", fill: "currentColor" })
  ] }),
  ArrowUpDown: () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M7.99999 5.87868L7.99998 16L6.49999 16L6.49999 5.86398L4.06066 8.30331L3 7.24264L7.24264 3.00001L11.4853 7.24264L10.4246 8.30331L7.99999 5.87868Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M16 18.1213L16 8.00002L17.5 8L17.5 18.136L19.9393 15.6967L21 16.7574L16.7574 21L12.5147 16.7574L13.5754 15.6967L16 18.1213Z",
        fill: "currentColor"
      }
    )
  ] }),
  ArrowRight: () => /* @__PURE__ */ jsx(
    "path",
    {
      d: "M18.124 12.6993H3.00002L3 11.1993L18.1387 11.1993L13 6.06064L14.0607 4.99998L21.0027 11.942L14.0607 18.8839L13 17.8233L18.124 12.6993Z",
      fill: "currentColor"
    }
  ),
  ArrowLeft: () => /* @__PURE__ */ jsx(
    "path",
    {
      d: "M5.8787 11.244L21.0027 11.244L21.0027 12.744L5.864 12.744L11.0027 17.8827L9.94203 18.9434L3.00003 12.0014L9.94203 5.05943L11.0027 6.12009L5.8787 11.244Z",
      fill: "currentColor"
    }
  ),
  ArrowTop: () => /* @__PURE__ */ jsx(
    "path",
    {
      d: "M12.7587 5.81938L12.7587 20.9433L11.2587 20.9434L11.2587 5.80467L6.12003 10.9434L5.05937 9.8827L12.0014 2.94071L18.9433 9.8827L17.8827 10.9434L12.7587 5.81938Z",
      fill: "currentColor"
    }
  ),
  ArrowBottom: () => /* @__PURE__ */ jsx(
    "path",
    {
      d: "M11.244 18.124L11.244 3.00002L12.744 3L12.744 18.1387L17.8827 13L18.9433 14.0607L12.0013 21.0027L5.05936 14.0607L6.12003 13L11.244 18.124Z",
      fill: "currentColor"
    }
  ),
  ArrowDropRight: () => /* @__PURE__ */ jsx(
    "path",
    {
      d: "M16.1421 12L9.07108 4.92892L9.00001 4.99999L9.07108 19.0711L16.1421 12Z",
      fill: "currentColor"
    }
  ),
  ArrowDropLeft: () => /* @__PURE__ */ jsx("path", { d: "M7.85785 12L14.9289 19.0711L15 19L14.9289 4.92894L7.85785 12Z", fill: "currentColor" }),
  ArrowDropTop: () => /* @__PURE__ */ jsx(
    "path",
    {
      d: "M12 7.85785L4.92892 14.9289L4.99999 15L19.0711 14.9289L12 7.85785Z",
      fill: "currentColor"
    }
  ),
  ArrowDropBottom: () => /* @__PURE__ */ jsx(
    "path",
    {
      d: "M12 16.1421L19.0711 9.07108L19 9.00001L4.92894 9.07108L12 16.1421Z",
      fill: "currentColor"
    }
  )
};
var Checkbox$1 = createRuntimeFn({ defaultClassName: "_1ke4j9q2 _1mqalmd1 _1mqalmd0", variantClassNames: { size: { "50": "cpipac7", "100": "cpipac8", "200": "cpipac9", "300": "cpipaca", "400": "cpipacb", "500": "cpipacc", "600": "cpipacd", Inherit: "cpipac6" }, variant: { Primary: "_1ke4j9qb", Secondary: "_1ke4j9qc", Success: "_1ke4j9qd", Warning: "_1ke4j9qe", Critical: "_1ke4j9qf" } }, defaultVariants: { size: "400", variant: "Secondary" }, compoundVariants: [] });
var CheckboxIcon = "_1ke4j9qh";
var CheckboxInput = "_1ke4j9qg _1mqalmd1 _1mqalmd0 _1bugis90 _1bugis91";
const Checkbox = forwardRef(
  ({ className, variant, size, style, ...props }, ref) => /* @__PURE__ */ jsxs("span", { className: classNames(Checkbox$1({ variant, size }), className), style, children: [
    /* @__PURE__ */ jsx("input", { className: CheckboxInput, type: "checkbox", ...props, ref }),
    /* @__PURE__ */ jsx(Icon, { className: CheckboxIcon, "aria-hidden": true, size, src: Icons.Check })
  ] })
);
var Chip$1 = createRuntimeFn({ defaultClassName: "_1bv8u1w6 _1mqalmd1 _1mqalmd0 _1bugis90 _1bugis91", variantClassNames: { variant: { Background: "_1bv8u1w7", Surface: "_1bv8u1w8", SurfaceVariant: "_1bv8u1w9", Primary: "_1bv8u1wa", Secondary: "_1bv8u1wb", Success: "_1bv8u1wc", Warning: "_1bv8u1wd", Critical: "_1bv8u1we" }, size: { "400": "_1bv8u1wf", "500": "_1bv8u1wg" }, outlined: { true: "_1bv8u1wh" }, radii: { "0": "cpipac1", "300": "cpipac2", "400": "cpipac3", "500": "cpipac4", Inherit: "cpipac0", Pill: "cpipac5" } }, defaultVariants: { variant: "Surface", size: "400", radii: "400" }, compoundVariants: [] });
const Chip = as(
  ({
    as: AsChip = "button",
    className,
    variant,
    size,
    outlined,
    radii,
    before,
    after,
    children,
    ...props
  }, ref) => /* @__PURE__ */ jsxs(
    AsChip,
    {
      className: classNames(
        Chip$1({
          variant,
          size,
          outlined,
          radii
        }),
        className
      ),
      "data-ui-before": before ? true : void 0,
      "data-ui-after": after ? true : void 0,
      ...props,
      ref,
      children: [
        before,
        children,
        after
      ]
    }
  )
);
var BaseDialog$1 = createRuntimeFn({ defaultClassName: "_1kcdgt83 _1mqalmd1 _1mqalmd0", variantClassNames: { variant: { Clear: "_1kcdgt84", Background: "_1kcdgt85", Surface: "_1kcdgt86", SurfaceVariant: "_1kcdgt87", Primary: "_1kcdgt88", Secondary: "_1kcdgt89", Success: "_1kcdgt8a", Warning: "_1kcdgt8b", Critical: "_1kcdgt8c" }, backdrop: { true: "_1kcdgt8d" } }, defaultVariants: { variant: "Surface", backdrop: false }, compoundVariants: [] });
var BaseDialogContainer = "_1kcdgt82";
const useComposeRefs = (refs) => useCallback(
  (element) => {
    refs.forEach((ref) => {
      if (!ref)
        return;
      if (typeof ref === "function")
        ref(element);
      else {
        const mutableRef = ref;
        mutableRef.current = element;
      }
    });
  },
  // exhaustive deps are incorrect to use here, the contents *are* the deps
  // eslint-disable-next-line react-hooks/exhaustive-deps
  refs
);
const BaseDialog = as(
  ({
    as: AsModal = "dialog",
    className,
    variant,
    backdrop,
    open,
    modal = true,
    focusLock = true,
    onClose,
    onClick: propOnClick,
    children,
    ...props
  }, ref) => {
    const dialogRef = useRef(null);
    const composedRefs = useComposeRefs([dialogRef, ref]);
    useEffect(() => {
      if (!dialogRef.current)
        return;
      if (!dialogRef.current.open && open) {
        if (modal) {
          dialogRef.current.showModal();
        } else {
          dialogRef.current.show();
        }
      } else if (dialogRef.current.open && !open)
        dialogRef.current.close();
    }, [open, modal]);
    const handleClose = (evt) => {
      evt.preventDefault();
      if (open)
        onClose();
    };
    const onClick = (evt) => {
      propOnClick == null ? void 0 : propOnClick(evt);
      if (evt.target !== evt.currentTarget)
        return;
      const x = evt.clientX;
      const y = evt.clientY;
      const bounds = evt.currentTarget.getBoundingClientRect();
      const outOfBounds = x < bounds.left || x > bounds.right || y < bounds.top || y > bounds.bottom;
      if (outOfBounds)
        onClose();
    };
    const Container = focusLock ? FocusLock : "div";
    return /* @__PURE__ */ jsx(
      AsModal,
      {
        className: classNames(BaseDialog$1({ variant, backdrop }), className),
        ...props,
        ref: composedRefs,
        onClose: handleClose,
        onCancel: handleClose,
        onClick,
        children: /* @__PURE__ */ jsx(Container, { className: BaseDialogContainer, disabled: !open, children })
      }
    );
  }
);
var Dialog$1 = "_5z5e2h0 _1mqalmd1 _1mqalmd0";
const Dialog = as(({ className, ...props }, ref) => /* @__PURE__ */ jsx(BaseDialog, { backdrop: true, className: classNames(Dialog$1, className), ...props, ref }));
var Header$1 = createRuntimeFn({ defaultClassName: "hru6be0 _1mqalmd1 _1mqalmd0", variantClassNames: { variant: { Background: "hru6be1", Surface: "hru6be2", SurfaceVariant: "hru6be3", Primary: "hru6be4", Secondary: "hru6be5", Success: "hru6be6", Warning: "hru6be7", Critical: "hru6be8" }, size: { "300": "hru6be9", "400": "hru6bea", "500": "hru6beb", "600": "hru6bec", "700": "hru6bed" } }, defaultVariants: { variant: "Surface", size: "400" }, compoundVariants: [] });
const Header = as(
  ({ as: AsHeader = "header", className, variant, size, ...props }, ref) => /* @__PURE__ */ jsx(
    AsHeader,
    {
      className: classNames(Header$1({ variant, size }), className),
      ...props,
      ref
    }
  )
);
var IconButton$1 = createRuntimeFn({ defaultClassName: "brs7ce5 _1mqalmd1 _1mqalmd0 _1bugis90 _1bugis91", variantClassNames: { size: { "300": "brs7ce6", "400": "brs7ce7", "500": "brs7ce8", "600": "brs7ce9" }, variant: { Background: "brs7cea", Surface: "brs7ceb", SurfaceVariant: "brs7cec", Primary: "brs7ced", Secondary: "brs7cee", Success: "brs7cef", Warning: "brs7ceg", Critical: "brs7ceh" }, outlined: { true: "brs7cei" }, radii: { "0": "cpipac1", "300": "cpipac2", "400": "cpipac3", "500": "cpipac4", Inherit: "cpipac0", Pill: "cpipac5" } }, defaultVariants: { size: "400", variant: "Surface", radii: "400" }, compoundVariants: [] });
const IconButton = as(
  ({ as: AsIconButton = "button", className, size, variant, radii, outlined, ...props }, ref) => /* @__PURE__ */ jsx(
    AsIconButton,
    {
      className: classNames(IconButton$1({ variant, size, radii, outlined }), className),
      ...props,
      ref
    }
  )
);
var Input$1 = createRuntimeFn({ defaultClassName: "_1rrvnjm8 _1mqalmd1 _1mqalmd0", variantClassNames: { variant: { Background: "_1rrvnjm9", Surface: "_1rrvnjma", SurfaceVariant: "_1rrvnjmb", Primary: "_1rrvnjmc", Secondary: "_1rrvnjmd", Success: "_1rrvnjme", Warning: "_1rrvnjmf", Critical: "_1rrvnjmg" }, size: { "300": "_1rrvnjmh", "400": "_1rrvnjmi", "500": "_1rrvnjmj" }, outlined: { true: "_1rrvnjmk" }, radii: { "0": "cpipac1", "300": "cpipac2", "400": "cpipac3", "500": "cpipac4", Inherit: "cpipac0", Pill: "cpipac5" } }, defaultVariants: { variant: "Background", size: "400", radii: "400" }, compoundVariants: [] });
var InputInput = "_1rrvnjmr _1mqalmd1 _1mqalmd0 _1bugis91";
const Input = forwardRef(
  ({ className, style, variant, size, inputSize = 1, outlined, radii, before, after, ...props }, ref) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: classNames(Input$1({ variant, size, outlined, radii }), className),
      style,
      "data-ui-before": before ? true : void 0,
      "data-ui-after": after ? true : void 0,
      children: [
        before,
        /* @__PURE__ */ jsx("input", { className: InputInput, size: inputSize, ...props, ref }),
        after
      ]
    }
  )
);
var Line$1 = createRuntimeFn({ defaultClassName: "_1yan8dd1 _1mqalmd1 _1mqalmd0", variantClassNames: { variant: { Inherit: "_1yan8dd2", Background: "_1yan8dd3", Surface: "_1yan8dd4", SurfaceVariant: "_1yan8dd5", Primary: "_1yan8dd6", Secondary: "_1yan8dd7", Success: "_1yan8dd8", Warning: "_1yan8dd9", Critical: "_1yan8dda" }, direction: { Horizontal: "_1yan8ddb", Vertical: "_1yan8ddc" }, size: { "300": "_1yan8ddd", "400": "_1yan8dde", "500": "_1yan8ddf", "600": "_1yan8ddg", "700": "_1yan8ddh" } }, defaultVariants: { variant: "Surface", direction: "Horizontal", size: "400" }, compoundVariants: [] });
const Line = as(
  ({ as: AsLine = "div", className, variant, direction, size, ...props }, ref) => /* @__PURE__ */ jsx(
    AsLine,
    {
      className: classNames(Line$1({ variant, direction, size }), className),
      ...props,
      ref
    }
  )
);
var MenuItem$1 = createRuntimeFn({ defaultClassName: "_13tt0gb6 _1mqalmd1 _1mqalmd0 _1bugis90 _1bugis91", variantClassNames: { variant: { Background: "_13tt0gb7", Surface: "_13tt0gb8", SurfaceVariant: "_13tt0gb9", Primary: "_13tt0gba", Secondary: "_13tt0gbb", Success: "_13tt0gbc", Warning: "_13tt0gbd", Critical: "_13tt0gbe" }, size: { "300": "_13tt0gbf", "400": "_13tt0gbg" }, radii: { "0": "cpipac1", "300": "cpipac2", "400": "cpipac3", "500": "cpipac4", Inherit: "cpipac0", Pill: "cpipac5" } }, defaultVariants: { variant: "Surface", size: "400", radii: "0" }, compoundVariants: [] });
const MenuItem = as(
  ({
    as: AsMenuItem = "button",
    className,
    variant,
    size,
    radii,
    before,
    after,
    children,
    ...props
  }, ref) => /* @__PURE__ */ jsxs(
    AsMenuItem,
    {
      className: classNames(MenuItem$1({ variant, size, radii }), className),
      "data-ui-before": before ? true : void 0,
      "data-ui-after": after ? true : void 0,
      ...props,
      ref,
      children: [
        before,
        children,
        after
      ]
    }
  )
);
var Menu$1 = createRuntimeFn({ defaultClassName: "_1fptcza0 _1mqalmd1 _1mqalmd0", variantClassNames: { variant: { Background: "_1fptcza1", Surface: "_1fptcza2", SurfaceVariant: "_1fptcza3", Primary: "_1fptcza4", Secondary: "_1fptcza5", Success: "_1fptcza6", Warning: "_1fptcza7", Critical: "_1fptcza8" } }, defaultVariants: { variant: "Surface" }, compoundVariants: [] });
const Menu = as(
  ({ as: AsMenu = "div", className, variant, ...props }, ref) => /* @__PURE__ */ jsx(AsMenu, { className: classNames(Menu$1({ variant }), className), ...props, ref })
);
var Modal$1 = createRuntimeFn({ defaultClassName: "_1fc5sz50 _1mqalmd1 _1mqalmd0", variantClassNames: { size: { "300": "_1fc5sz51", "400": "_1fc5sz52", "500": "_1fc5sz53" }, flexHeight: { true: "_1fc5sz54" } }, defaultVariants: { size: "400" }, compoundVariants: [] });
const Modal = as(
  ({ className, size, flexHeight, ...props }, ref) => /* @__PURE__ */ jsx(
    BaseDialog,
    {
      backdrop: true,
      className: classNames(Modal$1({ size, flexHeight }), className),
      ...props,
      ref
    }
  )
);
var PopOut$1 = "_1v6ozra0";
const PopOut = as(
  ({
    className,
    open,
    position = "Bottom",
    align = "Center",
    offset = 10,
    alignOffset = 0,
    content,
    children,
    ...props
  }, ref) => {
    const anchorRef = useRef(null);
    const dialogRef = useRef(null);
    const composedRefs = useComposeRefs([dialogRef, ref]);
    const positionPopOut = useCallback(() => {
      const anchor = anchorRef.current;
      const baseEl = dialogRef.current;
      if (!baseEl || !anchor)
        return;
      const offsets = getRelativeFixedPosition(
        anchor.getBoundingClientRect(),
        position,
        align,
        offset,
        alignOffset,
        baseEl.getBoundingClientRect()
      );
      baseEl.style.top = offsets.top;
      baseEl.style.bottom = offsets.bottom;
      baseEl.style.left = offsets.left;
      baseEl.style.right = offsets.right;
      baseEl.style.transform = offsets.transform;
    }, [position, align, offset, alignOffset]);
    useEffect(() => {
      window.addEventListener("resize", positionPopOut);
      return () => {
        window.removeEventListener("resize", positionPopOut);
      };
    }, [positionPopOut]);
    useLayoutEffect(() => {
      if (open)
        positionPopOut();
    }, [open, positionPopOut]);
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      children(anchorRef),
      /* @__PURE__ */ jsx(
        BaseDialog,
        {
          className: classNames(PopOut$1, className),
          open,
          ...props,
          variant: "Clear",
          ref: composedRefs,
          children: content
        }
      )
    ] });
  }
);
const Portal = ({ container, children }) => /* @__PURE__ */ jsx(Fragment, { children: createPortal(children, container ?? document.body) });
var ProgressBar$1 = createRuntimeFn({ defaultClassName: "w2djj94 _1mqalmd1 _1mqalmd0 _1bugis91", variantClassNames: { size: { "300": "w2djj95", "400": "w2djj96", "500": "w2djj97" }, variant: { Primary: "w2djj98", Secondary: "w2djj99", Success: "w2djj9a", Warning: "w2djj9b", Critical: "w2djj9c" }, fill: { Solid: "w2djj9d", Soft: "w2djj9e", None: "w2djj9f" }, radii: { "0": "cpipac1", "300": "cpipac2", "400": "cpipac3", "500": "cpipac4", Inherit: "cpipac0", Pill: "cpipac5" }, outlined: { true: "w2djj9m" } }, defaultVariants: { variant: "Secondary", size: "400", fill: "Soft", radii: "Pill" }, compoundVariants: [] });
var ProgressBarFill = "w2djj9n _1mqalmd1 _1mqalmd0";
const ProgressBar = as(
  ({
    as: AsProgressBar = "span",
    className,
    variant,
    size,
    fill,
    radii,
    outlined,
    value,
    min = 0,
    max,
    ...props
  }, ref) => /* @__PURE__ */ jsx(
    AsProgressBar,
    {
      className: classNames(ProgressBar$1({ variant, size, fill, radii, outlined }), className),
      role: "progressbar",
      "aria-valuenow": value,
      "aria-valuemin": min,
      "aria-valuemax": max,
      ...props,
      ref,
      children: /* @__PURE__ */ jsx("span", { className: ProgressBarFill, style: { width: `${percent(min, max, value)}%` } })
    }
  )
);
var RadioButton$1 = createRuntimeFn({ defaultClassName: "_1agxj9w0 _1mqalmd1 _1mqalmd0 _1bugis90 _1bugis91", variantClassNames: { variant: { Primary: "_1agxj9w1", Secondary: "_1agxj9w2", Success: "_1agxj9w3", Warning: "_1agxj9w4", Critical: "_1agxj9w5" }, size: { "50": "cpipac7", "100": "cpipac8", "200": "cpipac9", "300": "cpipaca", "400": "cpipacb", "500": "cpipacc", "600": "cpipacd", Inherit: "cpipac6" } }, defaultVariants: { variant: "Secondary", size: "400" }, compoundVariants: [] });
const RadioButton = forwardRef(
  ({ className, variant, size, ...props }, ref) => /* @__PURE__ */ jsx(
    "input",
    {
      className: classNames(RadioButton$1({ variant, size }), className),
      ...props,
      type: "radio",
      ref
    }
  )
);
var Scroll$1 = createRuntimeFn({ defaultClassName: "_4yxtfd2 _1mqalmd1 _1mqalmd0", variantClassNames: { variant: { Background: "_4yxtfd3", Surface: "_4yxtfd4", SurfaceVariant: "_4yxtfd5", Primary: "_4yxtfd6", Secondary: "_4yxtfd7", Success: "_4yxtfd8", Warning: "_4yxtfd9", Critical: "_4yxtfda" }, visibility: { Always: "_4yxtfdb", Hover: "_4yxtfdc" }, hideTrack: { true: "_4yxtfdd" }, size: { "0": "_4yxtfde", "300": "_4yxtfdf", "400": "_4yxtfdg" }, direction: { Horizontal: "_4yxtfdh", Vertical: "_4yxtfdi", Both: "_4yxtfdj" } }, defaultVariants: { variant: "Surface", visibility: "Always", size: "400", direction: "Vertical" }, compoundVariants: [[{ direction: "Horizontal", size: "300" }, "_4yxtfdk"], [{ direction: "Horizontal", size: "400" }, "_4yxtfdl"], [{ direction: "Vertical", size: "300" }, "_4yxtfdm"], [{ direction: "Vertical", size: "400" }, "_4yxtfdn"], [{ direction: "Both", size: "300" }, "_4yxtfdo"], [{ direction: "Both", size: "400" }, "_4yxtfdp"]] });
const Scroll = as(
  ({ as: AsScroll = "div", className, variant, visibility, hideTrack, size, direction, ...props }, ref) => {
    const scrollLocalRef = useRef();
    useLayoutEffect(() => {
      if (scrollLocalRef.current) {
        const $scroll = scrollLocalRef.current;
        if (size === "0") {
          $scroll.setAttribute("data-x-scrollbar-width", "0");
          $scroll.setAttribute("data-y-scrollbar-width", "0");
        } else {
          const xScrollbarWidth = $scroll.offsetHeight - $scroll.clientHeight;
          const yScrollbarWidth = $scroll.offsetWidth - $scroll.clientWidth;
          $scroll.setAttribute("data-x-scrollbar-width", `${xScrollbarWidth}`);
          $scroll.setAttribute("data-y-scrollbar-width", `${yScrollbarWidth}`);
        }
      }
    }, [size]);
    return /* @__PURE__ */ jsx(
      AsScroll,
      {
        className: classNames(
          Scroll$1({
            variant,
            visibility,
            hideTrack,
            size,
            direction
          }),
          className
        ),
        ...props,
        ref: (r) => {
          if (r)
            scrollLocalRef.current = r;
          if (ref) {
            if ("current" in ref) {
              const propRef = ref;
              propRef.current = r;
            }
            if (typeof ref === "function") {
              ref(r);
            }
          }
        }
      }
    );
  }
);
var Spinner$1 = createRuntimeFn({ defaultClassName: "_31czpk7 _1mqalmd1 _1mqalmd0", variantClassNames: { size: { "50": "cpipac7", "100": "cpipac8", "200": "cpipac9", "300": "cpipaca", "400": "cpipacb", "500": "cpipacc", "600": "cpipacd", Inherit: "cpipac6" }, variant: { Primary: "_31czpkg", Secondary: "_31czpkh", Success: "_31czpki", Warning: "_31czpkj", Critical: "_31czpkk" }, fill: { Solid: "_31czpkl", Soft: "_31czpkm" } }, defaultVariants: { size: "400", variant: "Secondary", fill: "Soft" }, compoundVariants: [] });
var SpinnerInner = "_31czpkp";
var SpinnerOuter = "_31czpko";
var SpinnerSvg$1 = "_31czpkn _1mqalmd1 _1mqalmd0";
const SpinnerSvg = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    className: SpinnerSvg$1,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          className: SpinnerOuter,
          d: "M5.98986 18.0104C7.52806 19.5486 9.65306 20.5 12.0003 20.5C16.6947 20.5 20.5003 16.6944 20.5003 12C20.5003 7.30558 16.6947 3.5 12.0003 3.5C9.65306 3.5 7.52806 4.45139 5.98986 5.98959L4.9292 4.92893C6.73884 3.11929 9.23884 2 12.0003 2C17.5231 2 22.0003 6.47715 22.0003 12C22.0003 17.5228 17.5231 22 12.0003 22C9.23884 22 6.73884 20.8807 4.9292 19.0711L5.98986 18.0104Z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          className: SpinnerInner,
          d: "M4.92908 19.0711C3.1204 17.2624 2.00134 14.7641 2.00015 12.0044L2.00015 11.9956C2.00134 9.23593 3.1204 6.73763 4.92909 4.92896L5.98975 5.98962C4.45155 7.52781 3.50015 9.65281 3.50015 12C3.50015 14.3472 4.45155 16.4722 5.98975 18.0104L4.92908 19.0711Z"
        }
      )
    ]
  }
);
const Spinner = as(
  ({ as: AsSpinner = "span", className, size, variant, fill, ...props }, ref) => /* @__PURE__ */ jsx(
    AsSpinner,
    {
      className: classNames(Spinner$1({ size, variant, fill }), className),
      ...props,
      ref,
      children: /* @__PURE__ */ jsx(SpinnerSvg, {})
    }
  )
);
var Switch$1 = createRuntimeFn({ defaultClassName: "_1mqalmd1 _1mqalmd0 _1gp7uix2 _1bugis90 _1bugis91", variantClassNames: { variant: { Primary: "_1gp7uix4", Secondary: "_1gp7uix5", Success: "_1gp7uix6", Warning: "_1gp7uix7", Critical: "_1gp7uix8" } }, defaultVariants: { variant: "Primary" }, compoundVariants: [] });
var SwitchThumb = "_1gp7uix9 _1mqalmd1 _1mqalmd0";
const Switch = forwardRef(
  ({ className, variant, value = false, onChange, ...props }, ref) => {
    const handleClick = () => onChange == null ? void 0 : onChange(!value);
    return /* @__PURE__ */ jsx(
      "button",
      {
        className: classNames(Switch$1({ variant }), className),
        role: "switch",
        type: "button",
        "aria-checked": value,
        onClick: handleClick,
        ...props,
        ref,
        children: /* @__PURE__ */ jsx("span", { className: SwitchThumb, "aria-hidden": true, children: /* @__PURE__ */ jsx(Icon, { src: Icons.Check, size: "100" }) })
      }
    );
  }
);
var Text$1 = createRuntimeFn({ defaultClassName: "_1xny9xl0 _1mqalmd1 _1mqalmd0", variantClassNames: { size: { Inherit: "_1xny9xl1", D400: "_1xny9xl2", H1: "_1xny9xl3", H2: "_1xny9xl4", H3: "_1xny9xl5", H4: "_1xny9xl6", H5: "_1xny9xl7", H6: "_1xny9xl8", T500: "_1xny9xl9", T400: "_1xny9xla", T300: "_1xny9xlb", T200: "_1xny9xlc", B500: "_1xny9xld", B400: "_1xny9xle", B300: "_1xny9xlf", L400: "_1xny9xlg", O400: "_1xny9xlh", C400: "_1xny9xli" }, align: { Left: "_1xny9xlj", Center: "_1xny9xlk", Right: "_1xny9xll", Justify: "_1xny9xlm" }, truncate: { true: "_1xny9xln" }, priority: { "300": "_1xny9xlo", "400": "_1xny9xlp", "500": "_1xny9xlq", Inherit: "_1xny9xlr", Initial: "_1xny9xls" } }, defaultVariants: { size: "T400", priority: "Inherit" }, compoundVariants: [] });
const Text = as(
  ({ as: AsText = "p", className, size, truncate, align, priority, ...props }, ref) => /* @__PURE__ */ jsx(
    AsText,
    {
      className: classNames(Text$1({ size, truncate, align, priority }), className),
      ...props,
      ref
    }
  )
);
var Tooltip$1 = createRuntimeFn({ defaultClassName: "_6plmi21 _1mqalmd1 _1mqalmd0", variantClassNames: { variant: { Background: "_6plmi22", Surface: "_6plmi23", SurfaceVariant: "_6plmi24", Primary: "_6plmi25", Secondary: "_6plmi26", Success: "_6plmi27", Warning: "_6plmi28", Critical: "_6plmi29" }, radii: { "0": "cpipac1", "300": "cpipac2", "400": "cpipac3", "500": "cpipac4", Inherit: "cpipac0", Pill: "cpipac5" } }, defaultVariants: { variant: "Surface", radii: "400" }, compoundVariants: [] });
const Tooltip = as(
  ({ as: AsTooltip = "div", className, variant, radii, ...props }, ref) => /* @__PURE__ */ jsx(
    AsTooltip,
    {
      className: classNames(Tooltip$1({ variant, radii }), className),
      ...props,
      ref
    }
  )
);
const useTooltip = (position, align, offset, alignOffset, delay) => {
  const triggerRef = useRef(null);
  const baseRef = useRef(null);
  const [open, setOpen] = useState(false);
  const positionTooltip = useCallback(() => {
    const anchor = triggerRef.current;
    const baseEl = baseRef.current;
    if (!baseEl)
      return;
    const tooltipCss = getRelativeFixedPosition(
      anchor.getBoundingClientRect(),
      position,
      align,
      offset,
      alignOffset,
      baseEl.getBoundingClientRect()
    );
    baseEl.style.top = tooltipCss.top;
    baseEl.style.bottom = tooltipCss.bottom;
    baseEl.style.left = tooltipCss.left;
    baseEl.style.right = tooltipCss.right;
    baseEl.style.transform = tooltipCss.transform;
  }, [position, align, offset, alignOffset]);
  useEffect(() => {
    const trigger = triggerRef.current;
    let timeoutId;
    const openTooltip = (evt) => {
      if (timeoutId)
        return;
      if (evt.type === "focus")
        setOpen(true);
      else
        timeoutId = window.setTimeout(() => setOpen(true), delay);
    };
    const closeTooltip = () => {
      clearTimeout(timeoutId);
      timeoutId = void 0;
      setOpen(false);
    };
    const onKeyDown = (evt) => {
      if (evt.key === "Escape" && document.activeElement === trigger) {
        evt.preventDefault();
        clearTimeout(timeoutId);
        setOpen(false);
      }
    };
    trigger == null ? void 0 : trigger.addEventListener("mouseenter", openTooltip);
    trigger == null ? void 0 : trigger.addEventListener("mouseleave", closeTooltip);
    trigger == null ? void 0 : trigger.addEventListener("focus", openTooltip);
    trigger == null ? void 0 : trigger.addEventListener("blur", closeTooltip);
    document.addEventListener("keydown", onKeyDown);
    trigger == null ? void 0 : trigger.addEventListener("click", closeTooltip);
    return () => {
      clearTimeout(timeoutId);
      trigger == null ? void 0 : trigger.removeEventListener("mouseenter", openTooltip);
      trigger == null ? void 0 : trigger.removeEventListener("mouseleave", closeTooltip);
      trigger == null ? void 0 : trigger.removeEventListener("focus", openTooltip);
      trigger == null ? void 0 : trigger.removeEventListener("blur", closeTooltip);
      document.removeEventListener("keydown", onKeyDown);
      trigger == null ? void 0 : trigger.removeEventListener("click", closeTooltip);
    };
  }, [position, align, offset, alignOffset, delay]);
  useLayoutEffect(() => {
    if (open)
      positionTooltip();
  }, [open, positionTooltip]);
  return {
    triggerRef,
    baseRef,
    open
  };
};
const TooltipProvider = as(
  ({
    as: AsTooltipProvider = "div",
    position = "Top",
    align = "Center",
    offset = 10,
    alignOffset = 0,
    delay = 200,
    tooltip,
    children,
    style,
    ...props
  }, ref) => {
    const { open, triggerRef, baseRef } = useTooltip(position, align, offset, alignOffset, delay);
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      children(triggerRef),
      open && /* @__PURE__ */ jsx(Portal, { children: /* @__PURE__ */ jsx(
        AsTooltipProvider,
        {
          role: "tooltip",
          style: {
            display: "inline-block",
            position: "fixed",
            maxWidth: "100vw",
            maxHeight: "100vh",
            zIndex: config.zIndex.Max,
            pointerEvents: "none",
            ...style
          },
          ...props,
          ref: (el) => {
            baseRef.current = el;
            if (ref) {
              if (typeof ref === "function")
                ref(el);
              else
                ref.current = el;
            }
          },
          children: tooltip
        }
      ) })
    ] });
  }
);
export {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Box,
  Button,
  Checkbox,
  Chip,
  CrossSizeVariant,
  DefaultReset,
  Dialog,
  Disabled,
  FocusOutline,
  Header,
  Icon,
  IconButton,
  Icons,
  Input,
  Line,
  Menu,
  MenuItem,
  Modal,
  PopOut,
  Portal,
  ProgressBar,
  RadiiVariant,
  RadioButton,
  Scroll,
  Spinner,
  Switch,
  Text,
  TextReset,
  Tooltip,
  TooltipProvider,
  as,
  color,
  config,
  configClass,
  getRelativeFixedPosition,
  lightTheme,
  percent,
  pxToRem,
  toRem,
  vars,
  varsClass
};
//# sourceMappingURL=index.js.map
