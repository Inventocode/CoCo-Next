/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：796
 */

"use strict"

export { o as a }
export { a as b }
export { s as c }
export { c as d }
var r
import i = require("./2589/183");
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
  function t(t, n, r, i) {
    return e.call(this, "Invalid values for \"" + t + "\": \"" + n + "\". Options are \"" + Object.keys(r).join("\", \"") + "\"", "INVALID_VALUE", i) || this
  }
  i.b(t, e)
  return t
}(o)
var s = function (e) {
  function t(t, n, r) {
    return e.call(this, "Value for \"" + t + "\" must be of type " + n, "INVALID_VALUE", r) || this
  }
  i.b(t, e)
  return t
}(o)
var c = function (e) {
  function t(t, n) {
    return e.call(this, "The intl string context variable \"" + t + "\" was not provided to the string \"" + n + "\"", "MISSING_VALUE", n) || this
  }
  i.b(t, e)
  return t
}(o)
export default o
