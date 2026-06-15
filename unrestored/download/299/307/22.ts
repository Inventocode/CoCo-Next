/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：22
 */

"use strict"

export { o as a }
export { a as b }
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"../185/33/index"
var i = {}
function o() {
  return Module_33.b() ? global : "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : i
}
function a(e, t, n) {
  var r = n || o()
  var i = r.__SENTRY__ = r.__SENTRY__ || {}
  return i[e] || (i[e] = t())
}
export default o
