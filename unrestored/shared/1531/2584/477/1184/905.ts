/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：905
 */

"use strict"

export { s as a }
import /* [auto-meaningful-name] */$_394 = require("./394")
var i = $_394.e()
var /* [auto-meaningful-name] */SentryLogger = "Sentry Logger "
var a = function () {
  function e() {
    this._enabled = false
  }
  e.prototype.disable = function () {
    this._enabled = false
  }
  e.prototype.enable = function () {
    this._enabled = true
  }
  e.prototype.log = function () {
    for (var e = [], t = 0; t < arguments.length; t++) {
      e[t] = arguments[t]
    }
    if (this._enabled) {
      $_394.c(function () {
        i.console.log(SentryLogger + "[Log]: " + e.join(" "))
      })
    }
  }
  e.prototype.warn = function () {
    for (var e = [], t = 0; t < arguments.length; t++) {
      e[t] = arguments[t]
    }
    if (this._enabled) {
      $_394.c(function () {
        i.console.warn(SentryLogger + "[Warn]: " + e.join(" "))
      })
    }
  }
  e.prototype.error = function () {
    for (var e = [], t = 0; t < arguments.length; t++) {
      e[t] = arguments[t]
    }
    if (this._enabled) {
      $_394.c(function () {
        i.console.error(SentryLogger + "[Error]: " + e.join(" "))
      })
    }
  }
  return e
}()
i.__SENTRY__ = i.__SENTRY__ || {}
var s = i.__SENTRY__.logger || (i.__SENTRY__.logger = new a())
export default s
