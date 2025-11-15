/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2537
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.Swatch = undefined
var r = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t]
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r]
    }
  }
  return e
}
var i = c(require("react"))
var o = c(require("../../785/104/index"))
var a = require("./2538")
var s = c(require("../1158/index"))
function c(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var u = exports.Swatch = function (e) {
  var /* [auto-meaningful-name] */e$color = e.color
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var c = undefined === e$onClick ? function () {} : e$onClick
  var /* [auto-meaningful-name] */e$onHover = e.onHover
  var /* [auto-meaningful-name] */e$title = e.title
  var f = undefined === e$title ? e$color : e$title
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$focus = e.focus
  var /* [auto-meaningful-name] */e$focusStyle = e.focusStyle
  var _ = undefined === e$focusStyle ? {} : e$focusStyle
  var A = "transparent" === e$color
  var g = (0, o.default)({
    default: {
      swatch: r({
        background: e$color,
        height: "100%",
        width: "100%",
        cursor: "pointer",
        position: "relative",
        outline: "none"
      }, e$style, e$focus ? _ : {})
    }
  })
  var v = {}
  if (e$onHover) {
    v.onMouseOver = function (e) {
      return e$onHover(e$color, e)
    }
  }
  return i.default.createElement("div", r({
    style: g.swatch,
    onClick: function (e) {
      return c(e$color, e)
    },
    title: f,
    tabIndex: 0,
    onKeyDown: function (e) {
      return 13 === e.keyCode && c(e$color, e)
    }
  }, v), e$children, A && i.default.createElement(s.default, {
    borderRadius: g.swatch.borderRadius,
    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
  }))
}
exports.default = (0, a.handleFocus)(u)
