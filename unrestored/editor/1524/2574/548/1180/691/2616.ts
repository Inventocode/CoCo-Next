"use strict";

import * as r from "../../../19";
import * as i from "../../../54";
import * as o from "../../../0/index";
var a = (require("../../../50/index"), require("../100"));
import * as s from "./153";
import * as c from "./234";
var u = o.forwardRef(function (e, t) {
  var n = e.children;
  var s = e.classes;
  var u = e.className;
  var l = e.color;
  var f = void 0 === l ? "inherit" : l;
  var h = e.component;
  var d = void 0 === h ? "svg" : h;
  var p = e.fontSize;
  var _ = void 0 === p ? "medium" : p;
  var A = e.htmlColor;
  var g = e.titleAccess;
  var v = e.viewBox;
  var m = void 0 === v ? "0 0 24 24" : v;
  var y = Object(i.a)(e, ["children", "classes", "className", "color", "component", "fontSize", "htmlColor", "titleAccess", "viewBox"]);
  return o.createElement(d, Object(r.a)({
    className: Object(a.a)(s.root, u, "inherit" !== f && s["color".concat(Object(c.a)(f))], "default" !== _ && "medium" !== _ && s["fontSize".concat(Object(c.a)(_))]),
    focusable: "false",
    viewBox: m,
    color: A,
    "aria-hidden": !g || void 0,
    role: g ? "img" : void 0,
    ref: t
  }, y), n, g ? o.createElement("title", null, g) : null);
});
u.muiName = "SvgIcon";
exports.a = Object(s.a)(function (e) {
  return {
    root: {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: "currentColor",
      flexShrink: 0,
      fontSize: e.typography.pxToRem(24),
      transition: e.transitions.create("fill", {
        duration: e.transitions.duration.shorter
      })
    },
    colorPrimary: {
      color: e.palette.primary.main
    },
    colorSecondary: {
      color: e.palette.secondary.main
    },
    colorAction: {
      color: e.palette.action.active
    },
    colorError: {
      color: e.palette.error.main
    },
    colorDisabled: {
      color: e.palette.action.disabled
    },
    fontSizeInherit: {
      fontSize: "inherit"
    },
    fontSizeSmall: {
      fontSize: e.typography.pxToRem(20)
    },
    fontSizeLarge: {
      fontSize: e.typography.pxToRem(35)
    }
  };
}, {
  name: "MuiSvgIcon"
})(u);