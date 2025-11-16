/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1184__part-1
 */

"use strict"

var /* [auto-meaningful-name] */Function$prototype$toString
import * as /* [auto-meaningful-name] */$$_787_39 from "../787/39"
var a = function () {
  function e() {
    this.name = e.id
  }
  e.prototype.setupOnce = function () {
    Function$prototype$toString = Function.prototype.toString
    Function.prototype.toString = function () {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e[t] = arguments[t]
      }
      var n = this.__sentry_original__ || this
      return Function$prototype$toString.apply(n, e)
    }
  }
  e.id = "FunctionToString"
  return e
}()
export { a as "1184__part-1__a" }
