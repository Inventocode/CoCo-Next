/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：11
 */

"use strict"

export { i as d }
export { a as e }
export { s as a }
export { u as b }
export { c as l }
export { l as j }
export { f as i }
export { p as f }
export { d as c }
export { h as k }
export { g as n }
export { m }
export { v as h }
export { y as g }
var /* [auto-meaningful-name] */Object$prototype$toString = Object.prototype.toString
function i(e) {
  switch (Object$prototype$toString.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
      return true
    default:
      return y(e, Error)
  }
}
function o(e, t) {
  return Object$prototype$toString.call(e) === "[object " + t + "]"
}
function a(e) {
  return o(e, "ErrorEvent")
}
function s(e) {
  return o(e, "DOMError")
}
function u(e) {
  return o(e, "DOMException")
}
function c(e) {
  return o(e, "String")
}
function l(e) {
  return null === e || "object" !== typeof e && "function" !== typeof e
}
function f(e) {
  return o(e, "Object")
}
function p(e) {
  return "undefined" !== typeof Event && y(e, Event)
}
function d(e) {
  return "undefined" !== typeof Element && y(e, Element)
}
function h(e) {
  return o(e, "RegExp")
}
function g(e) {
  return Boolean(e && e.then && "function" === typeof e.then)
}
function m(e) {
  return f(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
}
function v(e) {
  return "number" === typeof e && e !== e
}
function y(e, t) {
  try {
    return e instanceof t
  } catch (n) {
    return false
  }
}
export default s
