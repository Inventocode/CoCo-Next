/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：49__part-3
 */

"use strict"

import { f } from "./index__part-1"
import { w } from "./index__part-2"
import * as c from "./6"
import * as l from "./12"
import * as /* [auto-meaningful-name] */$_28_index from "./28/index"
import * as /* [auto-meaningful-name] */$_23_index from "./23/index"
import * as a from "./14"
import * as o from "./8"
import * as i from "./1"
import * as j from "./25"
import * as x from "./50"
import * as C from "./9"
var R = {
  traceFetch: true,
  traceXHR: true,
  tracingOrigins: ["localhost", /^\//]
}
function P(e) {
  var t = i.a(i.a({}, R), e)
  var /* [auto-meaningful-name] */t$traceFetch = t.traceFetch
  var /* [auto-meaningful-name] */t$traceXHR = t.traceXHR
  var /* [auto-meaningful-name] */t$tracingOrigins = t.tracingOrigins
  var /* [auto-meaningful-name] */t$shouldCreateSpanForRequest = t.shouldCreateSpanForRequest
  var s = {}
  var u = function (e) {
    if (s[e]) {
      return s[e]
    }
    var t = t$tracingOrigins
    s[e] = t.some(function (t) {
      return j.a(e, t)
    }) && !j.a(e, "sentry_key")
    return s[e]
  }
  var f = u
  if ("function" === typeof t$shouldCreateSpanForRequest) {
    f = function (e) {
      return u(e) && t$shouldCreateSpanForRequest(e)
    }
  }
  var d = {}
  if (t$traceFetch) {
    x.a({
      callback: function (e) {
        !function (e, t, n) {
          if (!c.c() || !e.fetchData || !t(e.fetchData.url)) {
            return
          }
          if (e.endTimestamp && e.fetchData.__span) {
            return void ((o = n[e.fetchData.__span]) && (e.response ? o.setHttpStatus(e.response.status) : e.error && o.setStatus(l.a.InternalError), o.finish(), delete n[e.fetchData.__span]))
          }
          var r = c.b()
          if (r) {
            var o = r.startChild({
              data: i.a(i.a({}, e.fetchData), {
                type: "fetch"
              }),
              description: e.fetchData.method + " " + e.fetchData.url,
              op: "http.client"
            })
            e.fetchData.__span = o.spanId
            n[o.spanId] = o
            var a = e.args[0] = e.args[0]
            var s = e.args[1] = e.args[1] || {}
            var /* [auto-meaningful-name] */s$headers = s.headers
            if (C.g(a, Request)) {
              s$headers = a.headers
            }
            if (s$headers) {
              if ("function" === typeof s$headers.append) {
                s$headers.append("sentry-trace", o.toTraceparent())
              } else {
                s$headers = Array.isArray(s$headers) ? i.e(s$headers, [["sentry-trace", o.toTraceparent()]]) : i.a(i.a({}, s$headers), {
                  "sentry-trace": o.toTraceparent()
                })
              }
            } else {
              s$headers = {
                "sentry-trace": o.toTraceparent()
              }
            }
            s.headers = s$headers
          }
        }(e, f, d)
      },
      type: "fetch"
    })
  }
  if (t$traceXHR) {
    x.a({
      callback: function (e) {
        !function (e, t, n) {
          var /* [auto-meaningful-name] */e$xhr
          var /* [auto-meaningful-name] */e$xhr1
          if (!c.c() || (null === (e$xhr = e.xhr) || undefined === e$xhr ? undefined : e$xhr.__sentry_own_request__) || !(null === (e$xhr1 = e.xhr) || undefined === e$xhr1 ? undefined : e$xhr1.__sentry_xhr__) || !t(e.xhr.__sentry_xhr__.url)) {
            return
          }
          var /* [auto-meaningful-name] */e$xhr$__sentry_xhr__ = e.xhr.__sentry_xhr__
          if (e.endTimestamp && e.xhr.__sentry_xhr_span_id__) {
            return void ((u = n[e.xhr.__sentry_xhr_span_id__]) && (u.setHttpStatus(e$xhr$__sentry_xhr__.status_code), u.finish(), delete n[e.xhr.__sentry_xhr_span_id__]))
          }
          var s = c.b()
          if (s) {
            var u = s.startChild({
              data: i.a(i.a({}, e$xhr$__sentry_xhr__.data), {
                type: "xhr",
                method: e$xhr$__sentry_xhr__.method,
                url: e$xhr$__sentry_xhr__.url
              }),
              description: e$xhr$__sentry_xhr__.method + " " + e$xhr$__sentry_xhr__.url,
              op: "http.client"
            })
            e.xhr.__sentry_xhr_span_id__ = u.spanId
            n[e.xhr.__sentry_xhr_span_id__] = u
            if (e.xhr.setRequestHeader) {
              try {
                e.xhr.setRequestHeader("sentry-trace", u.toTraceparent())
              } catch (l) {}
            }
          }
        }(e, f, d)
      },
      type: "xhr"
    })
  }
}
var N = a.e()
var I = i.a({
  idleTimeout: $_28_index.a,
  markBackgroundTransactions: true,
  maxTransactionDuration: 600,
  routingInstrumentation: function (e, t, n) {
    if (undefined === t) {
      t = true
    }
    if (undefined === n) {
      n = true
    }
    if (N && N.location) {
      var r
      var /* [auto-meaningful-name] */N$location$href = N.location.href
      if (t) {
        r = e({
          name: N.location.pathname,
          op: "pageload"
        })
      }
      if (n) {
        x.a({
          callback: function (t) {
            var n = t.to
            var /* [auto-meaningful-name] */t$from = t.from
            if (undefined === t$from && N$location$href && -1 !== N$location$href.indexOf(n)) {
              N$location$href = undefined
            } else {
              if (t$from !== n) {
                N$location$href = undefined
                if (r) {
                  o.a.log("[Tracing] Finishing current transaction with op: " + r.op)
                  r.finish()
                }
                r = e({
                  name: N.location.pathname,
                  op: "navigation"
                })
              }
            }
          },
          type: "history"
        })
      }
    } else {
      o.a.warn("Could not initialize routing instrumentation due to invalid location")
    }
  },
  startTransactionOnLocationChange: true,
  startTransactionOnPageLoad: true
}, R)
var L = function () {
  function e(t) {
    this.name = e.id
    this._metrics = new w()
    this._emitOptionsWarning = false
    var /* [auto-meaningful-name] */R$tracingOrigins = R.tracingOrigins
    if (t && t.tracingOrigins && Array.isArray(t.tracingOrigins) && 0 !== t.tracingOrigins.length) {
      R$tracingOrigins = t.tracingOrigins
    } else {
      this._emitOptionsWarning = true
    }
    this.options = i.a(i.a(i.a({}, I), t), {
      tracingOrigins: R$tracingOrigins
    })
  }
  e.prototype.setupOnce = function (e, t) {
    var n = this
    this._getCurrentHub = t
    if (this._emitOptionsWarning) {
      o.a.warn("[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace.")
      o.a.warn("[Tracing] We added a reasonable default for you: " + R.tracingOrigins)
    }
    var /* [auto-meaningful-name] */this$options = this.options
    var /* [auto-meaningful-name] */this$options$routingInstrumentation = this$options.routingInstrumentation
    var /* [auto-meaningful-name] */this$options$startTransactionOnLocationChange = this$options.startTransactionOnLocationChange
    var /* [auto-meaningful-name] */this$options$startTransactionOnPageLoad = this$options.startTransactionOnPageLoad
    var /* [auto-meaningful-name] */this$options$markBackgroundTransactions = this$options.markBackgroundTransactions
    var /* [auto-meaningful-name] */this$options$traceFetch = this$options.traceFetch
    var /* [auto-meaningful-name] */this$options$traceXHR = this$options.traceXHR
    var /* [auto-meaningful-name] */this$options$tracingOrigins = this$options.tracingOrigins
    var /* [auto-meaningful-name] */this$options$shouldCreateSpanForRequest = this$options.shouldCreateSpanForRequest
    this$options$routingInstrumentation(function (e) {
      return n._createRouteTransaction(e)
    }, this$options$startTransactionOnPageLoad, this$options$startTransactionOnLocationChange)
    if (this$options$markBackgroundTransactions) {
      if (f && f.document) {
        f.document.addEventListener("visibilitychange", function () {
          var e = c.b()
          if (f.document.hidden && e) {
            o.a.log("[Tracing] Transaction: " + l.a.Cancelled + " -> since tab moved to the background, op: " + e.op)
            if (!e.status) {
              e.setStatus(l.a.Cancelled)
            }
            e.setTag("visibilitychange", "document.hidden")
            e.finish()
          }
        })
      } else {
        o.a.warn("[Tracing] Could not set up background tab detection due to lack of global document")
      }
    }
    P({
      traceFetch: this$options$traceFetch,
      traceXHR: this$options$traceXHR,
      tracingOrigins: this$options$tracingOrigins,
      shouldCreateSpanForRequest: this$options$shouldCreateSpanForRequest
    })
  }
  e.prototype._createRouteTransaction = function (e) {
    var t = this
    if (this._getCurrentHub) {
      var /* [auto-meaningful-name] */this$options = this.options
      var /* [auto-meaningful-name] */this$options$beforeNavigate = this$options.beforeNavigate
      var /* [auto-meaningful-name] */this$options$idleTimeout = this$options.idleTimeout
      var /* [auto-meaningful-name] */this$options$maxTransactionDuration = this$options.maxTransactionDuration
      var d = "pageload" === e.op ? function () {
        var e = function (e) {
          var t = document.querySelector("meta[name=" + e + "]")
          return t ? t.getAttribute("content") : null
        }("sentry-trace")
        if (e) {
          return c.a(e)
        }
        return
      }() : undefined
      var p = i.a(i.a(i.a({}, e), d), {
        trimEnd: true
      })
      var h = "function" === typeof this$options$beforeNavigate ? this$options$beforeNavigate(p) : p
      var m = undefined === h ? i.a(i.a({}, p), {
        sampled: false
      }) : h
      if (false === m.sampled) {
        o.a.log("[Tracing] Will not send " + m.op + " transaction because of beforeNavigate.")
      }
      o.a.log("[Tracing] Starting " + m.op + " transaction on scope")
      var v = this._getCurrentHub()
      var /* [auto-meaningful-name] */a$e$location = a.e().location
      var g = $_23_index.b(v, m, this$options$idleTimeout, true, {
        location: a$e$location
      })
      g.registerBeforeFinishCallback(function (e, n) {
        t._metrics.addPerformanceEntries(e);
        (function (e, t, n) {
          var r = n - t.startTimestamp
          if (n && (r > e || r < 0)) {
            t.setStatus(l.a.DeadlineExceeded)
            t.setTag("maxTransactionDurationExceeded", "true")
          }
        })(c.e(this$options$maxTransactionDuration), e, n)
      })
      return g
    }
    o.a.warn("[Tracing] Did not create " + e.op + " transaction because _getCurrentHub is invalid.")
  }
  e.id = "BrowserTracing"
  return e
}()
var A = function () {
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
              return n.call.apply(n, i.e([this], M(e, t)))
            }
            return e
          }(e, t)
        })
      })(this._router, this._methods)
    } else {
      o.a.error("ExpressIntegration is missing an Express instance")
    }
  }
  e.id = "Express"
  return e
}()
function D(e, t) {
  var /* [auto-meaningful-name] */e$length = e.length
  switch (e$length) {
    case 2:
      return function (n, r) {
        var /* [auto-meaningful-name] */r$__sentry_transaction = r.__sentry_transaction
        if (r$__sentry_transaction) {
          var o = r$__sentry_transaction.startChild({
            description: e.name,
            op: "middleware." + t
          })
          r.once("finish", function () {
            o.finish()
          })
        }
        return e.call(this, n, r)
      }
    case 3:
      return function (n, r, o) {
        var /* [auto-meaningful-name] */r$__sentry_transaction
        var s = null === (r$__sentry_transaction = r.__sentry_transaction) || undefined === r$__sentry_transaction ? undefined : r$__sentry_transaction.startChild({
          description: e.name,
          op: "middleware." + t
        })
        e.call(this, n, r, function () {
          for (var e, t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n]
          }
          if (!(null === (e = s) || undefined === e)) {
            e.finish()
          }
          o.call.apply(o, i.e([this], t))
        })
      }
    case 4:
      return function (n, r, o, a) {
        var /* [auto-meaningful-name] */o$__sentry_transaction
        var u = null === (o$__sentry_transaction = o.__sentry_transaction) || undefined === o$__sentry_transaction ? undefined : o$__sentry_transaction.startChild({
          description: e.name,
          op: "middleware." + t
        })
        e.call(this, n, r, o, function () {
          for (var e, t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n]
          }
          if (!(null === (e = u) || undefined === e)) {
            e.finish()
          }
          a.call.apply(a, i.e([this], t))
        })
      }
    default:
      throw new Error("Express middleware takes 2-4 arguments. Got: " + e$length)
  }
}
function M(e, t) {
  return e.map(function (e) {
    return "function" === typeof e ? D(e, t) : Array.isArray(e) ? e.map(function (e) {
      return "function" === typeof e ? D(e, t) : e
    }) : e
  })
}
export { L }
export { A }
