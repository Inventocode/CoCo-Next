/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：720
 */

"use strict"

export { _ as b }
export { A as a }
import /* [auto-meaningful-name] */$$_39 = require("../39")
import /* [auto-meaningful-name] */$_805 = require("./805")
import /* [auto-meaningful-name] */$_1042 = require("./1042")
import /* [auto-meaningful-name] */$$_265 = require("../265")
import /* [auto-meaningful-name] */$$_521 = require("../521")
import /* [auto-meaningful-name] */$_1436 = require("./1436")
import /* [auto-meaningful-name] */$$_764_index = require("../764/index")
import /* [auto-meaningful-name] */$_765 = require("./765")
import /* [auto-meaningful-name] */$$_218 = require("../218")
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
  return $$_218.c() ? undefined !== e.sampled ? (e.setMetadata({
    transactionSampling: {
      method: $_1042.a.Explicit
    }
  }), e) : ("function" === typeof t.tracesSampler ? (r = t.tracesSampler(n), e.setMetadata({
    transactionSampling: {
      method: $_1042.a.Sampler,
      rate: Number(r)
    }
  })) : undefined !== n.parentSampled ? (r = n.parentSampled, e.setMetadata({
    transactionSampling: {
      method: $_1042.a.Inheritance
    }
  })) : (r = t.tracesSampleRate, e.setMetadata({
    transactionSampling: {
      method: $_1042.a.Rate,
      rate: Number(r)
    }
  })), function (e) {
    if (isNaN(e) || "number" !== typeof e && "boolean" !== typeof e) {
      $$_265.a.warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " + JSON.stringify(e) + " of type " + JSON.stringify(typeof e) + ".")
      return false
    }
    if (e < 0 || e > 1) {
      $$_265.a.warn("[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got " + e + ".")
      return false
    }
    return true
  }(r) ? r ? (e.sampled = Math.random() < r, e.sampled ? ($$_265.a.log("[Tracing] starting " + e.op + " transaction - " + e.name), e) : ($$_265.a.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " + Number(r) + ")"), e)) : ($$_265.a.log("[Tracing] Discarding transaction because " + ("function" === typeof t.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")), e.sampled = false, e) : ($$_265.a.warn("[Tracing] Discarding transaction because of invalid sample rate."), e.sampled = false, e)) : (e.sampled = false, e)
  var r
}
function p(e, t) {
  var n
  var /* [auto-meaningful-name] */o$_experiments
  var o = (null === (n = this.getClient()) || undefined === n ? undefined : n.getOptions()) || {}
  var a = new $_765.a(e, this)
  if ((a = h(a, o, $$_39.a({
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
  var l = new $$_764_index.b(t, e, n, i)
  if ((l = h(l, c, $$_39.a({
    parentSampled: t.parentSampled,
    transactionContext: t
  }, o))).sampled) {
    l.initSpanRecorder(null === (c$_experiments = c._experiments) || undefined === c$_experiments ? undefined : c$_experiments.maxSpans)
  }
  return l
}
function A() {
  !function () {
    var e = $_805.c()
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
  if ($$_521.b()) {
    (function () {
      var t = $_805.c()
      if (t.__SENTRY__) {
        var n = {
          mongodb: function () {
            return new ($$_521.a(module, "./integrations/mongo").Mongo)()
          },
          mongoose: function () {
            return new ($$_521.a(module, "./integrations/mongo").Mongo)({
              mongoose: true
            })
          },
          mysql: function () {
            return new ($$_521.a(module, "./integrations/mysql").Mysql)()
          },
          pg: function () {
            return new ($$_521.a(module, "./integrations/postgres").Postgres)()
          }
        }
        var o = Object.keys(n).filter(function (e) {
          return !!$$_521.c(e)
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
          t.__SENTRY__.integrations = $$_39.f(t.__SENTRY__.integrations || [], o)
        }
      }
    })()
  }
  $_1436.a()
}
export default A
