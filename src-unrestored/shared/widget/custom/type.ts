/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：78
 */

"use strict"

export { EXTENSION_ as a }
export { UNSAFE_EXTENSION_ as b }
export { i as e }
export { a as d }
export { s as c }
export { c as f }
var /* [auto-meaningful-name] */EXTENSION_ = "EXTENSION_"
var /* [auto-meaningful-name] */UNSAFE_EXTENSION_ = "UNSAFE_EXTENSION_"
function i(e) {
  return e.startsWith(EXTENSION_)
}
function a(e) {
  return e.startsWith(UNSAFE_EXTENSION_) || e.startsWith(EXTENSION_)
}
function s(e, t) {
  var n = e
  if (!a(e)) {
    n = "".concat(t ? EXTENSION_ : UNSAFE_EXTENSION_).concat(n)
  }
  return n = n.toUpperCase()
}
function c(e, t) {
  var n = e
  if (a(e)) {
    n = e.replace(t ? EXTENSION_ : UNSAFE_EXTENSION_, "")
  }
  return n
}
export default EXTENSION_
