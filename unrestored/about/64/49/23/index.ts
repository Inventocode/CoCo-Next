/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：23
 */

"use strict"

export { m as b }
export { v as a }
import * as r from "../1"
import * as /* [auto-meaningful-name] */$$_$$_16_32 from "../../16/32"
import * as o from "./37"
import * as a from "../8"
import * as /* [auto-meaningful-name] */$$_19 from "../19"
import * as u from "./46"
import * as /* [auto-meaningful-name] */$$_28_index from "../28/index"
import * as /* [auto-meaningful-name] */$$_28_29 from "../28/29"
import * as f from "../6"
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
  return f.c() ? undefined !== e.sampled ? (e.setMetadata({
    transactionSampling: {
      method: o.a.Explicit
    }
  }), e) : ("function" === typeof t.tracesSampler ? (r = t.tracesSampler(n), e.setMetadata({
    transactionSampling: {
      method: o.a.Sampler,
      rate: Number(r)
    }
  })) : undefined !== n.parentSampled ? (r = n.parentSampled, e.setMetadata({
    transactionSampling: {
      method: o.a.Inheritance
    }
  })) : (r = t.tracesSampleRate, e.setMetadata({
    transactionSampling: {
      method: o.a.Rate,
      rate: Number(r)
    }
  })), function (e) {
    if (isNaN(e) || "number" !== typeof e && "boolean" !== typeof e) {
      a.a.warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " + JSON.stringify(e) + " of type " + JSON.stringify(typeof e) + ".")
      return false
    }
    if (e < 0 || e > 1) {
      a.a.warn("[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got " + e + ".")
      return false
    }
    return true
  }(r) ? r ? (e.sampled = Math.random() < r, e.sampled ? (a.a.log("[Tracing] starting " + e.op + " transaction - " + e.name), e) : (a.a.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " + Number(r) + ")"), e)) : (a.a.log("[Tracing] Discarding transaction because " + ("function" === typeof t.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")), e.sampled = false, e) : (a.a.warn("[Tracing] Discarding transaction because of invalid sample rate."), e.sampled = false, e)) : (e.sampled = false, e)
  var r
}
function h(e, t) {
  var n
  var /* [auto-meaningful-name] */o$_experiments
  var o = (null === (n = this.getClient()) || undefined === n ? undefined : n.getOptions()) || {}
  var a = new $$_28_29.a(e, this)
  if ((a = p(a, o, r.a({
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
  var c = new $$_28_index.b(t, e, n, i)
  if ((c = p(c, u, r.a({
    parentSampled: t.parentSampled,
    transactionContext: t
  }, o))).sampled) {
    c.initSpanRecorder(null === (u$_experiments = u._experiments) || undefined === u$_experiments ? undefined : u$_experiments.maxSpans)
  }
  return c
}
function v() {
  !function () {
    var e = $$_$$_16_32.c()
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
  if ($$_19.b()) {
    (function () {
      var t = $$_$$_16_32.c()
      if (t.__SENTRY__) {
        var n = {
          mongodb: function () {
            return new ($$_19.a(module, "./integrations/mongo").Mongo)()
          },
          mongoose: function () {
            return new ($$_19.a(module, "./integrations/mongo").Mongo)({
              mongoose: true
            })
          },
          mysql: function () {
            return new ($$_19.a(module, "./integrations/mysql").Mysql)()
          },
          pg: function () {
            return new ($$_19.a(module, "./integrations/postgres").Postgres)()
          }
        }
        var o = Object.keys(n).filter(function (e) {
          return !!$$_19.c(e)
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
          t.__SENTRY__.integrations = r.e(t.__SENTRY__.integrations || [], o)
        }
      }
    })()
  }
  u.a()
}
export default v
