/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：9
 */

"use strict"

function r(e) {
  switch (Object.prototype.toString.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
      return true
    default:
      return m(e, Error)
  }
}
function i(e) {
  return "[object ErrorEvent]" === Object.prototype.toString.call(e)
}
function o(e) {
  return "[object DOMError]" === Object.prototype.toString.call(e)
}
function a(e) {
  return "[object DOMException]" === Object.prototype.toString.call(e)
}
function s(e) {
  return "[object String]" === Object.prototype.toString.call(e)
}
function u(e) {
  return null === e || "object" !== typeof e && "function" !== typeof e
}
function l(e) {
  return "[object Object]" === Object.prototype.toString.call(e)
}
function c(e) {
  return "undefined" !== typeof Event && m(e, Event)
}
function f(e) {
  return "undefined" !== typeof Element && m(e, Element)
}
function d(e) {
  return "[object RegExp]" === Object.prototype.toString.call(e)
}
function p(e) {
  return Boolean(e && e.then && "function" === typeof e.then)
}
function h(e) {
  return l(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
}
function m(e, t) {
  try {
    return e instanceof t
  } catch (n) {
    return false
  }
}
export { r as d }
export { i as e }
export { o as a }
export { a as b }
export { s as k }
export { u as i }
export { l as h }
export { c as f }
export { f as c }
export { d as j }
export { p as m }
export { h as l }
export { m as g }
export default o
