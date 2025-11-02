/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1515
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.getPrefix = o
exports.browserPrefixToKey = i
exports.browserPrefixToStyle = function (e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e
}
exports.default = undefined
var r = ["Moz", "Webkit", "O", "ms"]
function o() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : "transform"
  if ("undefined" === typeof window || "undefined" === typeof window.document) {
    return ""
  }
  var window$document$documentElement$style = window.document.documentElement.style
  if (e in window$document$documentElement$style) {
    return ""
  }
  for (var n = 0; n < r.length; n++) {
    if (i(e, r[n]) in window$document$documentElement$style) {
      return r[n]
    }
  }
  return ""
}
function i(e, t) {
  return t ? "".concat(t).concat(function (e) {
    for (var t = "", n = true, r = 0; r < e.length; r++) {
      if (n) {
        t += e[r].toUpperCase()
        n = false
      } else {
        if ("-" === e[r]) {
          n = true
        } else {
          t += e[r]
        }
      }
    }
    return t
  }(e)) : e
}
var a = o()
exports.default = a
