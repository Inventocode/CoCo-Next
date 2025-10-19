/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2626
 */

"use strict";

var r = require("../../../19");
var i = require("../../../54");
var o = require("react");
require("../../../50/index");
var a = require("../100");
var s = require("./153/index");
var c = require("./234");
var u = o.forwardRef(function (e, t) {
  var n = e.children;
  var s = e.classes;
  var u = e.className;
  var l = e.color;
  var f = undefined === l ? "inherit" : l;
  var d = e.component;
  var h = undefined === d ? "svg" : d;
  var p = e.fontSize;
  var _ = undefined === p ? "medium" : p;
  var A = e.htmlColor;
  var g = e.titleAccess;
  var v = e.viewBox;
  var m = undefined === v ? "0 0 24 24" : v;
  var y = i.a(e, ["children", "classes", "className", "color", "component", "fontSize", "htmlColor", "titleAccess", "viewBox"]);
  return o.createElement(h, r.a({
    className: a.a(s.root, u, "inherit" !== f && s["color".concat(c.a(f))], "default" !== _ && "medium" !== _ && s["fontSize".concat(c.a(_))]),
    focusable: "false",
    viewBox: m,
    color: A,
    "aria-hidden": !g || undefined,
    role: g ? "img" : undefined,
    ref: t
  }, y), n, g ? o.createElement("title", null, g) : null);
});
u.muiName = "SvgIcon";
exports.a = s.a(function (e) {
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