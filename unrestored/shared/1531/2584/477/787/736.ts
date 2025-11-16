/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：736
 */

"use strict"

export { i as c }
export { o as b }
export { a }
import * as /* [auto-meaningful-name] */$_316 from "./316"
function i(e, t) {
  if (undefined === t) {
    t = 0
  }
  return "string" !== typeof e || 0 === t || e.length <= t ? e : e.substr(0, t) + "..."
}
function o(e, t) {
  var n = e
  var /* [auto-meaningful-name] */n$length = n.length
  if (n$length <= 150) {
    return n
  }
  if (t > n$length) {
    t = n$length
  }
  var i = Math.max(t - 60, 0)
  if (i < 5) {
    i = 0
  }
  var o = Math.min(i + 140, n$length)
  if (o > n$length - 5) {
    o = n$length
  }
  if (o === n$length) {
    i = Math.max(o - 140, 0)
  }
  n = n.slice(i, o)
  if (i > 0) {
    n = "'{snip} " + n
  }
  if (o < n$length) {
    n += " {snip}"
  }
  return n
}
function a(e, t) {
  return !!$_316.h(e) && ($_316.g(t) ? t.test(e) : "string" === typeof t && -1 !== e.indexOf(t))
}
export default a
