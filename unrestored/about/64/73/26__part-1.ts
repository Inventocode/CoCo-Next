/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：26__part-1
 */

"use strict"

var r
import * as i from "./0"
!function (e) {
  e.MISSING_VALUE = "MISSING_VALUE"
  e.INVALID_VALUE = "INVALID_VALUE"
  e.MISSING_INTL_API = "MISSING_INTL_API"
}(r || (r = {}))
var o = function (e) {
  function t(t, n, r) {
    var i = e.call(this, t) || this
    i.code = n
    i.originalMessage = r
    return i
  }
  i.b(t, e)
  t.prototype.toString = function () {
    return "[formatjs Error: " + this.code + "] " + this.message
  }
  return t
}(Error)
var a = function (e) {
  function t(t, n, i, o) {
    return e.call(this, "Invalid values for \"" + t + "\": \"" + n + "\". Options are \"" + Object.keys(i).join("\", \"") + "\"", r.INVALID_VALUE, o) || this
  }
  i.b(t, e)
  return t
}(o)
var s = function (e) {
  function t(t, n, i) {
    return e.call(this, "Value for \"" + t + "\" must be of type " + n, r.INVALID_VALUE, i) || this
  }
  i.b(t, e)
  return t
}(o)
var u = function (e) {
  function t(t, n) {
    return e.call(this, "The intl string context variable \"" + t + "\" was not provided to the string \"" + n + "\"", r.MISSING_VALUE, n) || this
  }
  i.b(t, e)
  return t
}(o)
export { r as "26__part-1__r" }
export { o as "26__part-1__o" }
export { a as "26__part-1__a" }
export { s as "26__part-1__s" }
export { u as "26__part-1__u" }
