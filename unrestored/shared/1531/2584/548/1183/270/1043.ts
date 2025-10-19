/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1043
 */

"use strict";

var r = require("../../../19");
var i = require("../../../54");
var o = require("react");
require("../../../50/index");
var a = require("../100");
var s = require("./153/index");
var c = require("./234");
var u = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p"
};
var l = o.forwardRef(function (e, t) {
  var n = e.align;
  var s = undefined === n ? "inherit" : n;
  var l = e.classes;
  var f = e.className;
  var d = e.color;
  var h = undefined === d ? "initial" : d;
  var p = e.component;
  var _ = e.display;
  var A = undefined === _ ? "initial" : _;
  var g = e.gutterBottom;
  var v = undefined !== g && g;
  var m = e.noWrap;
  var y = undefined !== m && m;
  var b = e.paragraph;
  var w = undefined !== b && b;
  var E = e.variant;
  var x = undefined === E ? "body1" : E;
  var C = e.variantMapping;
  var O = undefined === C ? u : C;
  var k = i.a(e, ["align", "classes", "className", "color", "component", "display", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"]);
  var S = p || (w ? "p" : O[x] || u[x]) || "span";
  return o.createElement(S, r.a({
    className: a.a(l.root, f, "inherit" !== x && l[x], "initial" !== h && l["color".concat(c.a(h))], y && l.noWrap, v && l.gutterBottom, w && l.paragraph, "inherit" !== s && l["align".concat(c.a(s))], "initial" !== A && l["display".concat(c.a(A))]),
    ref: t
  }, k));
});
exports.a = s.a(function (e) {
  return {
    root: {
      margin: 0
    },
    body2: e.typography.body2,
    body1: e.typography.body1,
    caption: e.typography.caption,
    button: e.typography.button,
    h1: e.typography.h1,
    h2: e.typography.h2,
    h3: e.typography.h3,
    h4: e.typography.h4,
    h5: e.typography.h5,
    h6: e.typography.h6,
    subtitle1: e.typography.subtitle1,
    subtitle2: e.typography.subtitle2,
    overline: e.typography.overline,
    srOnly: {
      position: "absolute",
      height: 1,
      width: 1,
      overflow: "hidden"
    },
    alignLeft: {
      textAlign: "left"
    },
    alignCenter: {
      textAlign: "center"
    },
    alignRight: {
      textAlign: "right"
    },
    alignJustify: {
      textAlign: "justify"
    },
    noWrap: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    },
    gutterBottom: {
      marginBottom: "0.35em"
    },
    paragraph: {
      marginBottom: 16
    },
    colorInherit: {
      color: "inherit"
    },
    colorPrimary: {
      color: e.palette.primary.main
    },
    colorSecondary: {
      color: e.palette.secondary.main
    },
    colorTextPrimary: {
      color: e.palette.text.primary
    },
    colorTextSecondary: {
      color: e.palette.text.secondary
    },
    colorError: {
      color: e.palette.error.main
    },
    displayInline: {
      display: "inline"
    },
    displayBlock: {
      display: "block"
    }
  };
}, {
  name: "MuiTypography"
})(l);