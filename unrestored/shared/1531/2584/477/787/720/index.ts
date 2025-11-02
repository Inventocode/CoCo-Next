/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：720
 */

"use strict";

(function (e) {
  Object.defineProperty(exports, "b", {
    get: function () {
      return _
    },
    enumerable: true
  })
  Object.defineProperty(exports, "a", {
    get: function () {
      return A
    },
    enumerable: true
  })
  var r = require("../../../36/483/39")
  var i = require("./805")
  var o = require("./1042")
  var a = require("../265")
  var s = require("../521")
  var c = require("./1436")
  var u = require("../764/index")
  var l = require("../764/765")
  var f = require("../218")
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
  function p(e, t) {
    var n
    var /* [auto-meaningful-name] */o$_experiments
    var o = (null === (n = this.getClient()) || undefined === n ? undefined : n.getOptions()) || {}
    var a = new l.a(e, this)
    if ((a = h(a, o, r.a({
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
    var l = new u.b(t, e, n, i)
    if ((l = h(l, c, r.a({
      parentSampled: t.parentSampled,
      transactionContext: t
    }, o))).sampled) {
      l.initSpanRecorder(null === (c$_experiments = c._experiments) || undefined === c$_experiments ? undefined : c$_experiments.maxSpans)
    }
    return l
  }
  function A() {
    !function () {
      var e = i.c()
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
    if (s.b()) {
      (function () {
        var t = i.c()
        if (t.__SENTRY__) {
          var n = {
            mongodb: function () {
              return new (s.a(e, "./integrations/mongo").Mongo)()
            },
            mongoose: function () {
              return new (s.a(e, "./integrations/mongo").Mongo)({
                mongoose: true
              })
            },
            mysql: function () {
              return new (s.a(e, "./integrations/mysql").Mysql)()
            },
            pg: function () {
              return new (s.a(e, "./integrations/postgres").Postgres)()
            }
          }
          var o = Object.keys(n).filter(function (e) {
            return !!s.c(e)
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
            t.__SENTRY__.integrations = r.f(t.__SENTRY__.integrations || [], o)
          }
        }
      })()
    }
    c.a()
  }
}).call(this, require("../../../155/1167/574")(module))
