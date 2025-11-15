/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：928
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.findInArray = function (e, t) {
  for (var n = 0, /* [auto-meaningful-name] */e$length = e.length; n < e$length; n++) {
    if (t.apply(t, [e[n], n, e])) {
      return e[n]
    }
  }
}
exports.isFunction = function (e) {
  return "function" === typeof e || "[object Function]" === Object.prototype.toString.call(e)
}
exports.isNum = function (e) {
  return "number" === typeof e && !isNaN(e)
}
exports.int = function (e) {
  return parseInt(e, 10)
}
exports.dontSetMe = function (e, t, n) {
  if (e[t]) {
    return new Error("Invalid prop ".concat(t, " passed to ").concat(n, " - do not set this, set it on the child."))
  }
}
