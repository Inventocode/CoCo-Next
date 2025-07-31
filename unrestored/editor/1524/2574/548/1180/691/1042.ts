"use strict";

var r = require("../../../19");
var i = require("../../../54");
var o = require("../../../0/index");
require("../../../50/index");
var a = require("../100");
var s = require("./153");
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
  var s = void 0 === n ? "inherit" : n;
  var l = e.classes;
  var f = e.className;
  var h = e.color;
  var d = void 0 === h ? "initial" : h;
  var p = e.component;
  var _ = e.display;
  var A = void 0 === _ ? "initial" : _;
  var g = e.gutterBottom;
  var v = void 0 !== g && g;
  var m = e.noWrap;
  var y = void 0 !== m && m;
  var b = e.paragraph;
  var w = void 0 !== b && b;
  var E = e.variant;
  var x = void 0 === E ? "body1" : E;
  var C = e.variantMapping;
  var O = void 0 === C ? u : C;
  var S = Object(i.a)(e, ["align", "classes", "className", "color", "component", "display", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"]);
  var k = p || (w ? "p" : O[x] || u[x]) || "span";
  return o.createElement(k, Object(r.a)({
    className: Object(a.a)(l.root, f, "inherit" !== x && l[x], "initial" !== d && l["color".concat(Object(c.a)(d))], y && l.noWrap, v && l.gutterBottom, w && l.paragraph, "inherit" !== s && l["align".concat(Object(c.a)(s))], "initial" !== A && l["display".concat(Object(c.a)(A))]),
    ref: t
  }, S));
});
exports.a = Object(s.a)(function (e) {
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