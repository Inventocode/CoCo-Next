/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：185__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_56 from /* 56 */"./56/index"
import * as /* [auto-meaningful-name] */Module_3 from /* 3 */"./3"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"../307/12"
import * as /* [auto-meaningful-name] */Module_1 from /* 1 */"./1"
var u = function () {
  function e(t) {
    if (undefined === t) {
      t = {}
    }
    this.name = e.id
    this._router = t.router || t.app
    this._methods = (Array.isArray(t.methods) ? t.methods : []).concat("use")
  }
  e.prototype.setupOnce = function () {
    if (this._router) {
      (function (e, t) {
        if (undefined === t) {
          t = []
        }
        t.forEach(function (t) {
          return function (e, t) {
            var n = e[t]
            e[t] = function () {
              for (var e = [], r = 0; r < arguments.length; r++) {
                e[r] = arguments[r]
              }
              return n.call.apply(n, Module_3.e([this], function (e, t) {
                return e.map(function (e) {
                  return "function" === typeof e ? c(e, t) : Array.isArray(e) ? e.map(function (e) {
                    return "function" === typeof e ? c(e, t) : e
                  }) : e
                })
              }(e, t)))
            }
            return e
          }(e, t)
        })
      })(this._router, this._methods)
    } else {
      if (Module_1.a) {
        Module_12.c.error("ExpressIntegration is missing an Express instance")
      }
    }
  }
  e.id = "Express"
  return e
}()
function c(e, t) {
  var /* [auto-meaningful-name] */e$length = e.length
  switch (e$length) {
    case 2:
      return function (n, r) {
        var /* [auto-meaningful-name] */r$__sentry_transaction = r.__sentry_transaction
        if (r$__sentry_transaction) {
          var o = r$__sentry_transaction.startChild({
            description: e.name,
            op: "express.middleware." + t
          })
          r.once("finish", function () {
            o.finish()
          })
        }
        return e.call(this, n, r)
      }
    case 3:
      return function (n, r, i) {
        var /* [auto-meaningful-name] */r$__sentry_transaction
        var s = null === (r$__sentry_transaction = r.__sentry_transaction) || undefined === r$__sentry_transaction ? undefined : r$__sentry_transaction.startChild({
          description: e.name,
          op: "express.middleware." + t
        })
        e.call(this, n, r, function () {
          for (var e, t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n]
          }
          if (!(null === (e = s) || undefined === e)) {
            e.finish()
          }
          i.call.apply(i, Module_3.e([this], t))
        })
      }
    case 4:
      return function (n, r, i, a) {
        var /* [auto-meaningful-name] */i$__sentry_transaction
        var u = null === (i$__sentry_transaction = i.__sentry_transaction) || undefined === i$__sentry_transaction ? undefined : i$__sentry_transaction.startChild({
          description: e.name,
          op: "express.middleware." + t
        })
        e.call(this, n, r, i, function () {
          for (var e, t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n]
          }
          if (!(null === (e = u) || undefined === e)) {
            e.finish()
          }
          a.call.apply(a, Module_3.e([this], t))
        })
      }
    default:
      throw new Error("Express middleware takes 2-4 arguments. Got: " + e$length)
  }
}
export { u }
