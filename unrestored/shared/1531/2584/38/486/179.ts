/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：179
 */

"use strict"

export { array$isArray as a }
export { h as b }
export { g as c }
export { a as d }
export { f as e }
export { A as f }
export { o as g }
export { u as h }
export { d as i }
export { l as j }
export { s as k }
export { p as l }
export { _ as m }
export { i as n }
import r = require("./229");
var i = function (e) {
  return null === e || undefined === e
}
var o = function (e) {
  return null !== e && undefined !== e
}
var a = function (e) {
  return "function" === typeof e
}
var s = function (e) {
  return "string" === typeof e
}
var array$isArray = Array.isArray
var u = function (e) {
  return e && !array$isArray(e) && "object" === typeof e
}
var l = function (e) {
  return e && a(e.then)
}
var f = function (e) {
  return e && a(e.next) && a(e.throw)
}
var d = function e(t) {
  return t && (s(t) || _(t) || a(t) || array$isArray(t) && t.every(e))
}
var h = function (e) {
  return e && a(e.take) && a(e.close)
}
var p = function (e) {
  return a(e) && e.hasOwnProperty("toString")
}
var _ = function (e) {
  return Boolean(e) && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
}
var A = function (e) {
  return h(e) && e[r.e]
}
var g = function (e) {
  return e && e[r.c]
}
export default array$isArray
