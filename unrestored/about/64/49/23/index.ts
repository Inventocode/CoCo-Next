/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：23
 */

"use strict"

export { m as b }
export { v as a }
import * as /* [auto-meaningful-name] */Module_1 from /* 1 */"../1"
import * as /* [auto-meaningful-name] */Module_32 from /* 32 */"../../16/32"
import * as /* [auto-meaningful-name] */Module_37 from /* 37 */"./37"
import * as /* [auto-meaningful-name] */Module_8 from /* 8 */"../8"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../19"
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"./46"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../28/index"
import * as /* [auto-meaningful-name] */Module_29 from /* 29 */"../28/29"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../6"
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
function p(e, t, n) {
  return Module_6.c() ? undefined !== e.sampled ? (e.setMetadata({
    transactionSampling: {
      method: Module_37.a.Explicit
    }
  }), e) : ("function" === typeof t.tracesSampler ? (r = t.tracesSampler(n), e.setMetadata({
    transactionSampling: {
      method: Module_37.a.Sampler,
      rate: Number(r)
    }
  })) : undefined !== n.parentSampled ? (r = n.parentSampled, e.setMetadata({
    transactionSampling: {
      method: Module_37.a.Inheritance
    }
  })) : (r = t.tracesSampleRate, e.setMetadata({
    transactionSampling: {
      method: Module_37.a.Rate,
      rate: Number(r)
    }
  })), function (e) {
    if (isNaN(e) || "number" !== typeof e && "boolean" !== typeof e) {
      Module_8.a.warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " + JSON.stringify(e) + " of type " + JSON.stringify(typeof e) + ".")
      return false
    }
    if (e < 0 || e > 1) {
      Module_8.a.warn("[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got " + e + ".")
      return false
    }
    return true
  }(r) ? r ? (e.sampled = Math.random() < r, e.sampled ? (Module_8.a.log("[Tracing] starting " + e.op + " transaction - " + e.name), e) : (Module_8.a.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " + Number(r) + ")"), e)) : (Module_8.a.log("[Tracing] Discarding transaction because " + ("function" === typeof t.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")), e.sampled = false, e) : (Module_8.a.warn("[Tracing] Discarding transaction because of invalid sample rate."), e.sampled = false, e)) : (e.sampled = false, e)
  var r
}
function h(e, t) {
  var n
  var /* [auto-meaningful-name] */o$_experiments
  var o = (null === (n = this.getClient()) || undefined === n ? undefined : n.getOptions()) || {}
  var a = new Module_29.a(e, this)
  if ((a = p(a, o, Module_1.a({
    parentSampled: e.parentSampled,
    transactionContext: e
  }, t))).sampled) {
    a.initSpanRecorder(null === (o$_experiments = o._experiments) || undefined === o$_experiments ? undefined : o$_experiments.maxSpans)
  }
  return a
}
function m(e, t, n, i, o) {
  var a
  var /* [auto-meaningful-name] */u$_experiments
  var u = (null === (a = e.getClient()) || undefined === a ? undefined : a.getOptions()) || {}
  var c = new Module_28.b(t, e, n, i)
  if ((c = p(c, u, Module_1.a({
    parentSampled: t.parentSampled,
    transactionContext: t
  }, o))).sampled) {
    c.initSpanRecorder(null === (u$_experiments = u._experiments) || undefined === u$_experiments ? undefined : u$_experiments.maxSpans)
  }
  return c
}
function v() {
  !function () {
    var e = Module_32.c()
    if (e.__SENTRY__) {
      e.__SENTRY__.extensions = e.__SENTRY__.extensions || {}
      if (!e.__SENTRY__.extensions.startTransaction) {
        e.__SENTRY__.extensions.startTransaction = h
      }
      if (!e.__SENTRY__.extensions.traceHeaders) {
        e.__SENTRY__.extensions.traceHeaders = d
      }
    }
  }()
  if (Module_19.b()) {
    (function () {
      var t = Module_32.c()
      if (t.__SENTRY__) {
        var n = {
          mongodb: function () {
            return new (Module_19.a(module, "./integrations/mongo").Mongo)()
          },
          mongoose: function () {
            return new (Module_19.a(module, "./integrations/mongo").Mongo)({
              mongoose: true
            })
          },
          mysql: function () {
            return new (Module_19.a(module, "./integrations/mysql").Mysql)()
          },
          pg: function () {
            return new (Module_19.a(module, "./integrations/postgres").Postgres)()
          }
        }
        var o = Object.keys(n).filter(function (e) {
          return !!Module_19.c(e)
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
          t.__SENTRY__.integrations = Module_1.e(t.__SENTRY__.integrations || [], o)
        }
      }
    })()
  }
  Module_46.a()
}
export default v
