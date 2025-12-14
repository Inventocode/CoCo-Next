/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2676
 */

"use strict"

var r = require("../../../54")
var i = require("../../../19")
var o = require("react")
require("../../../50/index")
var a = require("../../../551/1211/98")
var s = require("../../../551/1211/699/154")
var c = o.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$classes = e.classes
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$component = e.component
  var u = undefined === e$component ? "div" : e$component
  var /* [auto-meaningful-name] */e$square = e.square
  var f = undefined !== e$square && e$square
  var /* [auto-meaningful-name] */e$elevation = e.elevation
  var h = undefined === e$elevation ? 1 : e$elevation
  var /* [auto-meaningful-name] */e$variant = e.variant
  var _ = undefined === e$variant ? "elevation" : e$variant
  var A = r.a(e, ["classes", "className", "component", "square", "elevation", "variant"])
  return o.createElement(u, i.a({
    className: a.a(e$classes.root, e$className, "outlined" === _ ? e$classes.outlined : e$classes["elevation".concat(h)], !f && e$classes.rounded),
    ref: t
  }, A))
})
exports.a = s.a(function (e) {
  var t = {}
  e.shadows.forEach(function (e, n) {
    t["elevation".concat(n)] = {
      boxShadow: e
    }
  })
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
  }, t)
}, {
  name: "MuiPaper"
})(c)
