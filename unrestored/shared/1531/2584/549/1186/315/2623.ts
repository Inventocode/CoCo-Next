/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2623
 */

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
  var u = undefined === c ? "div" : c;
  var l = e.square;
  var f = undefined !== l && l;
  var d = e.elevation;
  var h = undefined === d ? 1 : d;
  var p = e.variant;
  var _ = undefined === p ? "elevation" : p;
  var A = r.a(e, ["classes", "className", "component", "square", "elevation", "variant"]);
  return o.createElement(u, i.a({
    className: a.a(n.root, s, "outlined" === _ ? n.outlined : n["elevation".concat(h)], !f && n.rounded),
    ref: t
  }, A));
});
exports.a = s.a(function (e) {
  var t = {};
  e.shadows.forEach(function (e, n) {
    t["elevation".concat(n)] = {
      boxShadow: e
    };
  });
  return i.a({
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