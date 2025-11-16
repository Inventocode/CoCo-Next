/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：796__part-1
 */

"use strict"

var r
import * as /* [auto-meaningful-name] */$_2589_183 from "./2589/183"
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
  $_2589_183.b(t, e)
  t.prototype.toString = function () {
    return "[formatjs Error: " + this.code + "] " + this.message
  }
  return t
}(Error)
var a = function (e) {
  function t(t, n, r, i) {
    return e.call(this, "Invalid values for \"" + t + "\": \"" + n + "\". Options are \"" + Object.keys(r).join("\", \"") + "\"", "INVALID_VALUE", i) || this
  }
  $_2589_183.b(t, e)
  return t
}(o)
var s = function (e) {
  function t(t, n, r) {
    return e.call(this, "Value for \"" + t + "\" must be of type " + n, "INVALID_VALUE", r) || this
  }
  $_2589_183.b(t, e)
  return t
}(o)
var c = function (e) {
  function t(t, n) {
    return e.call(this, "The intl string context variable \"" + t + "\" was not provided to the string \"" + n + "\"", "MISSING_VALUE", n) || this
  }
  $_2589_183.b(t, e)
  return t
}(o)
export { o as "796__part-1__o" }
export { a as "796__part-1__a" }
export { s as "796__part-1__s" }
export { c as "796__part-1__c" }
