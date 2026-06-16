/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：7__part-1
 */

"use strict"

var r
import * as /* [auto-meaningful-name] */Module_0 from /* 0 */"./0"
!function (e) {
  e.FORMAT_ERROR = "FORMAT_ERROR"
  e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER"
  e.INVALID_CONFIG = "INVALID_CONFIG"
  e.MISSING_DATA = "MISSING_DATA"
  e.MISSING_TRANSLATION = "MISSING_TRANSLATION"
}(r || (r = {}))
var o = function (e) {
  function t(n, r, i) {
    var o = this
    var a = i ? i instanceof Error ? i : new Error(String(i)) : undefined;
    (o = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, " \n").concat(a ? "\n".concat(a.message, "\n").concat(a.stack) : "")) || this).code = n
    if ("function" === typeof Error.captureStackTrace) {
      Error.captureStackTrace(o, t)
    }
    return o
  }
  Module_0.b(t, e)
  return t
}(Error)
var a = function (e) {
  function t(t, n) {
    return e.call(this, r.UNSUPPORTED_FORMATTER, t, n) || this
  }
  Module_0.b(t, e)
  return t
}(o)
var s = function (e) {
  function t(t, n) {
    return e.call(this, r.INVALID_CONFIG, t, n) || this
  }
  Module_0.b(t, e)
  return t
}(o)
var u = function (e) {
  function t(t, n) {
    return e.call(this, r.MISSING_DATA, t, n) || this
  }
  Module_0.b(t, e)
  return t
}(o)
var c = function (e) {
  function t(t, n, i) {
    return e.call(this, r.FORMAT_ERROR, "".concat(t, " \nLocale: ").concat(n, "\n"), i) || this
  }
  Module_0.b(t, e)
  return t
}(o)
var l = function (e) {
  function t(t, n, r, i) {
    var o = e.call(this, "".concat(t, " \nMessageID: ").concat(null === r || undefined === r ? undefined : r.id, "\nDefault Message: ").concat(null === r || undefined === r ? undefined : r.defaultMessage, "\nDescription: ").concat(null === r || undefined === r ? undefined : r.description, " \n"), n, i) || this
    o.descriptor = r
    return o
  }
  Module_0.b(t, e)
  return t
}(c)
var f = function (e) {
  function t(t, n) {
    var i = e.call(this, r.MISSING_TRANSLATION, "Missing message: \"".concat(t.id, "\" for locale \"").concat(n, "\", using ").concat(t.defaultMessage ? "default message" : "id", " as fallback.")) || this
    i.descriptor = t
    return i
  }
  Module_0.b(t, e)
  return t
}(o)
export { r }
export { o }
export { a }
export { s }
export { u }
export { c }
export { l }
export { f }
export default a
