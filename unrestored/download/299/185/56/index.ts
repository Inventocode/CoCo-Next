/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：56
 */

"use strict"

export { m as b }
export { v as a }
import * as /* [auto-meaningful-name] */Module_3 from /* 3 */"../3"
import * as /* [auto-meaningful-name] */Module_69 from /* 69 */"../../307/69/index"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"../../307/12"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../../307/11"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"../33/index"
import * as /* [auto-meaningful-name] */Module_181 from /* 181 */"./181"
import * as /* [auto-meaningful-name] */Module_1 from /* 1 */"../1"
import * as /* [auto-meaningful-name] */Module_66 from /* 66 */"../66/index"
import * as /* [auto-meaningful-name] */Module_67 from /* 67 */"../66/67"
import * as /* [auto-meaningful-name] */Module_8 from /* 8 */"../8"
function d() {
  var e = this.getScope()
  if (e) {
    var t = e.getSpan()
    if (t) {
      return {
        "sentry-trace": t.toTraceparent()
      }
    }
  }
  return {}
}
function h(e, t, n) {
  return Module_8.b(t) ? undefined !== e.sampled ? (e.setMetadata({
    transactionSampling: {
      method: "explicitly_set"
    }
  }), e) : ("function" === typeof t.tracesSampler ? (r = t.tracesSampler(n), e.setMetadata({
    transactionSampling: {
      method: "client_sampler",
      rate: Number(r)
    }
  })) : undefined !== n.parentSampled ? (r = n.parentSampled, e.setMetadata({
    transactionSampling: {
      method: "inheritance"
    }
  })) : (r = t.tracesSampleRate, e.setMetadata({
    transactionSampling: {
      method: "client_rate",
      rate: Number(r)
    }
  })), function (e) {
    if (Module_11.h(e) || "number" !== typeof e && "boolean" !== typeof e) {
      if (Module_1.a) {
        Module_12.c.warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " + JSON.stringify(e) + " of type " + JSON.stringify(typeof e) + ".")
      }
      return false
    }
    if (e < 0 || e > 1) {
      if (Module_1.a) {
        Module_12.c.warn("[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got " + e + ".")
      }
      return false
    }
    return true
  }(r) ? r ? (e.sampled = Math.random() < r, e.sampled ? (Module_1.a && Module_12.c.log("[Tracing] starting " + e.op + " transaction - " + e.name), e) : (Module_1.a && Module_12.c.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " + Number(r) + ")"), e)) : (Module_1.a && Module_12.c.log("[Tracing] Discarding transaction because " + ("function" === typeof t.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")), e.sampled = false, e) : (Module_1.a && Module_12.c.warn("[Tracing] Discarding transaction because of invalid sample rate."), e.sampled = false, e)) : (e.sampled = false, e)
  var r
}
function g(e, t) {
  var n = this.getClient()
  var i = n && n.getOptions() || {}
  var o = new Module_67.a(e, this)
  if ((o = h(o, i, Module_3.a({
    parentSampled: e.parentSampled,
    transactionContext: e
  }, t))).sampled) {
    o.initSpanRecorder(i._experiments && i._experiments.maxSpans)
  }
  return o
}
function m(e, t, n, i, o) {
  var a = e.getClient()
  var s = a && a.getOptions() || {}
  var u = new Module_66.b(t, e, n, i)
  if ((u = h(u, s, Module_3.a({
    parentSampled: t.parentSampled,
    transactionContext: t
  }, o))).sampled) {
    u.initSpanRecorder(s._experiments && s._experiments.maxSpans)
  }
  return u
}
function v() {
  !function () {
    var e = Module_69.c()
    if (e.__SENTRY__) {
      e.__SENTRY__.extensions = e.__SENTRY__.extensions || {}
      if (!e.__SENTRY__.extensions.startTransaction) {
        e.__SENTRY__.extensions.startTransaction = g
      }
      if (!e.__SENTRY__.extensions.traceHeaders) {
        e.__SENTRY__.extensions.traceHeaders = d
      }
    }
  }()
  if (Module_33.b()) {
    (function () {
      var t = Module_69.c()
      if (t.__SENTRY__) {
        var n = {
          mongodb: function () {
            return new (Module_33.a(module, "./integrations/node/mongo").Mongo)()
          },
          mongoose: function () {
            return new (Module_33.a(module, "./integrations/node/mongo").Mongo)({
              mongoose: true
            })
          },
          mysql: function () {
            return new (Module_33.a(module, "./integrations/node/mysql").Mysql)()
          },
          pg: function () {
            return new (Module_33.a(module, "./integrations/node/postgres").Postgres)()
          }
        }
        var o = Object.keys(n).filter(function (e) {
          return !!Module_33.c(e)
        }).map(function (e) {
          try {
            return n[e]()
          } catch (t) {
            return
          }
        }).filter(function (e) {
          return e
        })
        if (o.length > 0) {
          t.__SENTRY__.integrations = Module_3.e(t.__SENTRY__.integrations || [], o)
        }
      }
    })()
  }
  Module_181.a()
}
export default v
