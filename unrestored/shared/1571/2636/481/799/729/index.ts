/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：729
 */

"use strict"

export { _ as b }
export { A as a }
import * as /* [auto-meaningful-name] */$$_$$_1212_38 from "../../1212/38"
import * as /* [auto-meaningful-name] */$$_220_817 from "../220/817"
import * as /* [auto-meaningful-name] */$_1064 from "./1064"
import * as /* [auto-meaningful-name] */$$_264 from "../264"
import * as /* [auto-meaningful-name] */$$_524 from "../524"
import * as /* [auto-meaningful-name] */$_1477 from "./1477"
import * as /* [auto-meaningful-name] */$$_775_index from "../775/index"
import * as /* [auto-meaningful-name] */$$_775_776 from "../775/776"
import * as /* [auto-meaningful-name] */$$_220_index from "../220/index"
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
  return $$_220_index.c() ? undefined !== e.sampled ? (e.setMetadata({
    transactionSampling: {
      method: $_1064.a.Explicit
    }
  }), e) : ("function" === typeof t.tracesSampler ? (r = t.tracesSampler(n), e.setMetadata({
    transactionSampling: {
      method: $_1064.a.Sampler,
      rate: Number(r)
    }
  })) : undefined !== n.parentSampled ? (r = n.parentSampled, e.setMetadata({
    transactionSampling: {
      method: $_1064.a.Inheritance
    }
  })) : (r = t.tracesSampleRate, e.setMetadata({
    transactionSampling: {
      method: $_1064.a.Rate,
      rate: Number(r)
    }
  })), function (e) {
    if (isNaN(e) || "number" !== typeof e && "boolean" !== typeof e) {
      $$_264.a.warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " + JSON.stringify(e) + " of type " + JSON.stringify(typeof e) + ".")
      return false
    }
    if (e < 0 || e > 1) {
      $$_264.a.warn("[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got " + e + ".")
      return false
    }
    return true
  }(r) ? r ? (e.sampled = Math.random() < r, e.sampled ? ($$_264.a.log("[Tracing] starting " + e.op + " transaction - " + e.name), e) : ($$_264.a.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " + Number(r) + ")"), e)) : ($$_264.a.log("[Tracing] Discarding transaction because " + ("function" === typeof t.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")), e.sampled = false, e) : ($$_264.a.warn("[Tracing] Discarding transaction because of invalid sample rate."), e.sampled = false, e)) : (e.sampled = false, e)
  var r
}
function p(e, t) {
  var n
  var /* [auto-meaningful-name] */o$_experiments
  var o = (null === (n = this.getClient()) || undefined === n ? undefined : n.getOptions()) || {}
  var a = new $$_775_776.a(e, this)
  if ((a = h(a, o, $$_$$_1212_38.a({
    parentSampled: e.parentSampled,
    transactionContext: e
  }, t))).sampled) {
    a.initSpanRecorder(null === (o$_experiments = o._experiments) || undefined === o$_experiments ? undefined : o$_experiments.maxSpans)
  }
  return a
}
function _(e, t, n, i, o) {
  var a
  var /* [auto-meaningful-name] */c$_experiments
  var c = (null === (a = e.getClient()) || undefined === a ? undefined : a.getOptions()) || {}
  var l = new $$_775_index.b(t, e, n, i)
  if ((l = h(l, c, $$_$$_1212_38.a({
    parentSampled: t.parentSampled,
    transactionContext: t
  }, o))).sampled) {
    l.initSpanRecorder(null === (c$_experiments = c._experiments) || undefined === c$_experiments ? undefined : c$_experiments.maxSpans)
  }
  return l
}
function A() {
  !function () {
    var e = $$_220_817.c()
    if (e.__SENTRY__) {
      e.__SENTRY__.extensions = e.__SENTRY__.extensions || {}
      if (!e.__SENTRY__.extensions.startTransaction) {
        e.__SENTRY__.extensions.startTransaction = p
      }
      if (!e.__SENTRY__.extensions.traceHeaders) {
        e.__SENTRY__.extensions.traceHeaders = d
      }
    }
  }()
  if ($$_524.b()) {
    (function () {
      var t = $$_220_817.c()
      if (t.__SENTRY__) {
        var n = {
          mongodb: function () {
            return new ($$_524.a(module, "./integrations/mongo").Mongo)()
          },
          mongoose: function () {
            return new ($$_524.a(module, "./integrations/mongo").Mongo)({
              mongoose: true
            })
          },
          mysql: function () {
            return new ($$_524.a(module, "./integrations/mysql").Mysql)()
          },
          pg: function () {
            return new ($$_524.a(module, "./integrations/postgres").Postgres)()
          }
        }
        var o = Object.keys(n).filter(function (e) {
          return !!$$_524.c(e)
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
          t.__SENTRY__.integrations = $$_$$_1212_38.f(t.__SENTRY__.integrations || [], o)
        }
      }
    })()
  }
  $_1477.a()
}
export default A
