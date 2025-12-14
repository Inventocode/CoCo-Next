/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：7__part-1
 */

"use strict"

var r
import * as i from "./0"
!function (e) {
  e.FORMAT_ERROR = "FORMAT_ERROR"
  e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER"
  e.INVALID_CONFIG = "INVALID_CONFIG"
  e.MISSING_DATA = "MISSING_DATA"
  e.MISSING_TRANSLATION = "MISSING_TRANSLATION"
}(r || (r = {}))
var o = function (e) {
  function t(n, r, i) {
    var o = e.call(this, "[@formatjs/intl Error " + n + "] " + r + " \n" + (i ? "\n" + i.message + "\n" + i.stack : "")) || this
    o.code = n
    if ("function" === typeof Error.captureStackTrace) {
      Error.captureStackTrace(o, t)
    }
    return o
  }
  i.b(t, e)
  return t
}(Error)
var a = function (e) {
  function t(t, n) {
    return e.call(this, r.UNSUPPORTED_FORMATTER, t, n) || this
  }
  i.b(t, e)
  return t
}(o)
var s = function (e) {
  function t(t, n) {
    return e.call(this, r.INVALID_CONFIG, t, n) || this
  }
  i.b(t, e)
  return t
}(o)
var u = function (e) {
  function t(t, n) {
    return e.call(this, r.MISSING_DATA, t, n) || this
  }
  i.b(t, e)
  return t
}(o)
var l = function (e) {
  function t(t, n, i, o) {
    var a = e.call(this, r.FORMAT_ERROR, t + " \nLocale: " + n + "\nMessageID: " + (null === i || undefined === i ? undefined : i.id) + "\nDefault Message: " + (null === i || undefined === i ? undefined : i.defaultMessage) + "\nDescription: " + (null === i || undefined === i ? undefined : i.description) + " \n", o) || this
    a.descriptor = i
    return a
  }
  i.b(t, e)
  return t
}(o)
var c = function (e) {
  function t(t, n) {
    var i = e.call(this, r.MISSING_TRANSLATION, "Missing message: \"" + t.id + "\" for locale \"" + n + "\", using " + (t.defaultMessage ? "default message" : "id") + " as fallback.") || this
    i.descriptor = t
    return i
  }
  i.b(t, e)
  return t
}(o)
export { r }
export { o }
export { a }
export { s }
export { u }
export { l }
export { c }
export default a
