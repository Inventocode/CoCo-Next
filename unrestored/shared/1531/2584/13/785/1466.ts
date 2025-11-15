/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1466
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
var r
var i = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t]
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r]
    }
  }
  return e
}
var o = require("react")
var a = (r = o) && r.__esModule ? r : {
  default: r
}
exports.default = function (e) {
  var /* [auto-meaningful-name] */e$fill = e.fill
  var n = undefined === e$fill ? "currentColor" : e$fill
  var /* [auto-meaningful-name] */e$width = e.width
  var o = undefined === e$width ? 24 : e$width
  var /* [auto-meaningful-name] */e$height = e.height
  var c = undefined === e$height ? 24 : e$height
  var /* [auto-meaningful-name] */e$style = e.style
  var l = undefined === e$style ? {} : e$style
  var f = function (e, t) {
    var n = {}
    for (var r in e) if (!(t.indexOf(r) >= 0)) {
      if (Object.prototype.hasOwnProperty.call(e, r)) {
        n[r] = e[r]
      }
    }
    return n
  }(e, ["fill", "width", "height", "style"])
  return a.default.createElement("svg", i({
    viewBox: "0 0 24 24",
    style: i({
      fill: n,
      width: o,
      height: c
    }, l)
  }, f), a.default.createElement("path", {
    d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
  }))
}
