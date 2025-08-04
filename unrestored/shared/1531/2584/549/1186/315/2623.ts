"use strict";

var r = require("../../../54");
var i = require("../../../19");
var o = require("react");
require("../../../50/index");
var a = require("../../../548/1183/100");
var s = require("../../../548/1183/270/153/index");
var c = o.forwardRef(function (e, t) {
  var n = e.classes;
  var s = e.className;
  var c = e.component;
  var u = void 0 === c ? "div" : c;
  var l = e.square;
  var f = void 0 !== l && l;
  var d = e.elevation;
  var h = void 0 === d ? 1 : d;
  var p = e.variant;
  var _ = void 0 === p ? "elevation" : p;
  var A = Object(r.a)(e, ["classes", "className", "component", "square", "elevation", "variant"]);
  return o.createElement(u, Object(i.a)({
    className: Object(a.a)(n.root, s, "outlined" === _ ? n.outlined : n["elevation".concat(h)], !f && n.rounded),
    ref: t
  }, A));
});
exports.a = Object(s.a)(function (e) {
  var t = {};
  e.shadows.forEach(function (e, n) {
    t["elevation".concat(n)] = {
      boxShadow: e
    };
  });
  return Object(i.a)({
    root: {
      backgroundColor: e.palette.background.paper,
      color: e.palette.text.primary,
      transition: e.transitions.create("box-shadow")
    },
    rounded: {
      borderRadius: e.shape.borderRadius
    },
    outlined: {
      border: "1px solid ".concat(e.palette.divider)
    }
  }, t);
}, {
  name: "MuiPaper"
})(c);