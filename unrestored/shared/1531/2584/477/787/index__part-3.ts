/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：787__part-3
 */

"use strict"

import { "787__part-1__f" as f } from "./index__part-1"
import { "787__part-2__E" as E } from "./index__part-2"
import * as /* [auto-meaningful-name] */$_218 from "./218"
import * as /* [auto-meaningful-name] */$_350 from "./350"
import * as /* [auto-meaningful-name] */$_764_index from "./764/index"
import * as /* [auto-meaningful-name] */$_720_index from "./720/index"
import * as /* [auto-meaningful-name] */$_364 from "./364"
import * as /* [auto-meaningful-name] */$_265 from "./265"
import * as i from "./39"
import * as /* [auto-meaningful-name] */$_736 from "./736"
import * as /* [auto-meaningful-name] */$_1508 from "./1508"
import * as /* [auto-meaningful-name] */$_316 from "./316"
var B = {
  traceFetch: true,
  traceXHR: true,
  tracingOrigins: ["localhost", /^\//]
}
function D(e) {
  var t = i.a(i.a({}, B), e)
  var /* [auto-meaningful-name] */t$traceFetch = t.traceFetch
  var /* [auto-meaningful-name] */t$traceXHR = t.traceXHR
  var /* [auto-meaningful-name] */t$tracingOrigins = t.tracingOrigins
  var /* [auto-meaningful-name] */t$shouldCreateSpanForRequest = t.shouldCreateSpanForRequest
  var s = {}
  var c = function (e) {
    if (s[e]) {
      return s[e]
    }
    var t = t$tracingOrigins
    s[e] = t.some(function (t) {
      return $_736.a(e, t)
    }) && !$_736.a(e, "sentry_key")
    return s[e]
  }
  var f = c
  if ("function" === typeof t$shouldCreateSpanForRequest) {
    f = function (e) {
      return c(e) && t$shouldCreateSpanForRequest(e)
    }
  }
  var d = {}
  if (t$traceFetch) {
    $_1508.a({
      callback: function (e) {
        !function (e, t, n) {
          if (!$_218.c() || !e.fetchData || !t(e.fetchData.url)) {
            return
          }
          if (e.endTimestamp && e.fetchData.__span) {
            return void ((o = n[e.fetchData.__span]) && (e.response ? o.setHttpStatus(e.response.status) : e.error && o.setStatus($_350.a.InternalError), o.finish(), delete n[e.fetchData.__span]))
          }
          var r = $_218.b()
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
            if ($_316.d(a, Request)) {
              s$headers = a.headers
            }
            if (s$headers) {
              if ("function" === typeof s$headers.append) {
                s$headers.append("sentry-trace", o.toTraceparent())
              } else {
                s$headers = Array.isArray(s$headers) ? i.f(s$headers, [["sentry-trace", o.toTraceparent()]]) : i.a(i.a({}, s$headers), {
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
    $_1508.a({
      callback: function (e) {
        !function (e, t, n) {
          var /* [auto-meaningful-name] */e$xhr
          var /* [auto-meaningful-name] */_e$xhr
          if (!$_218.c() || (null === (e$xhr = e.xhr) || undefined === e$xhr ? undefined : e$xhr.__sentry_own_request__) || !(null === (_e$xhr = e.xhr) || undefined === _e$xhr ? undefined : _e$xhr.__sentry_xhr__) || !t(e.xhr.__sentry_xhr__.url)) {
            return
          }
          var /* [auto-meaningful-name] */e$xhr$__sentry_xhr__ = e.xhr.__sentry_xhr__
          if (e.endTimestamp && e.xhr.__sentry_xhr_span_id__) {
            return void ((c = n[e.xhr.__sentry_xhr_span_id__]) && (c.setHttpStatus(e$xhr$__sentry_xhr__.status_code), c.finish(), delete n[e.xhr.__sentry_xhr_span_id__]))
          }
          var s = $_218.b()
          if (s) {
            var c = s.startChild({
              data: i.a(i.a({}, e$xhr$__sentry_xhr__.data), {
                type: "xhr",
                method: e$xhr$__sentry_xhr__.method,
                url: e$xhr$__sentry_xhr__.url
              }),
              description: e$xhr$__sentry_xhr__.method + " " + e$xhr$__sentry_xhr__.url,
              op: "http.client"
            })
            e.xhr.__sentry_xhr_span_id__ = c.spanId
            n[e.xhr.__sentry_xhr_span_id__] = c
            if (e.xhr.setRequestHeader) {
              try {
                e.xhr.setRequestHeader("sentry-trace", c.toTraceparent())
              } catch (u) {}
            }
          }
        }(e, f, d)
      },
      type: "xhr"
    })
  }
}
var I = $_364.b()
var F = i.a({
  idleTimeout: $_764_index.a,
  markBackgroundTransactions: true,
  maxTransactionDuration: 600,
  routingInstrumentation: function (e, t, n) {
    if (undefined === t) {
      t = true
    }
    if (undefined === n) {
      n = true
    }
    if (I && I.location) {
      var r
      var /* [auto-meaningful-name] */I$location$href = I.location.href
      if (t) {
        r = e({
          name: I.location.pathname,
          op: "pageload"
        })
      }
      if (n) {
        $_1508.a({
          callback: function (t) {
            var n = t.to
            var /* [auto-meaningful-name] */t$from = t.from
            if (undefined === t$from && I$location$href && -1 !== I$location$href.indexOf(n)) {
              I$location$href = undefined
            } else {
              if (t$from !== n) {
                I$location$href = undefined
                if (r) {
                  $_265.a.log("[Tracing] Finishing current transaction with op: " + r.op)
                  r.finish()
                }
                r = e({
                  name: I.location.pathname,
                  op: "navigation"
                })
              }
            }
          },
          type: "history"
        })
      }
    } else {
      $_265.a.warn("Could not initialize routing instrumentation due to invalid location")
    }
  },
  startTransactionOnLocationChange: true,
  startTransactionOnPageLoad: true
}, B)
var R = function () {
  function e(t) {
    this.name = e.id
    this._metrics = new E()
    this._emitOptionsWarning = false
    var /* [auto-meaningful-name] */B$tracingOrigins = B.tracingOrigins
    if (t && t.tracingOrigins && Array.isArray(t.tracingOrigins) && 0 !== t.tracingOrigins.length) {
      B$tracingOrigins = t.tracingOrigins
    } else {
      this._emitOptionsWarning = true
    }
    this.options = i.a(i.a(i.a({}, F), t), {
      tracingOrigins: B$tracingOrigins
    })
  }
  e.prototype.setupOnce = function (e, t) {
    var n = this
    this._getCurrentHub = t
    if (this._emitOptionsWarning) {
      $_265.a.warn("[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace.")
      $_265.a.warn("[Tracing] We added a reasonable default for you: " + B.tracingOrigins)
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
          var e = $_218.b()
          if (f.document.hidden && e) {
            $_265.a.log("[Tracing] Transaction: " + $_350.a.Cancelled + " -> since tab moved to the background, op: " + e.op)
            if (!e.status) {
              e.setStatus($_350.a.Cancelled)
            }
            e.setTag("visibilitychange", "document.hidden")
            e.finish()
          }
        })
      } else {
        $_265.a.warn("[Tracing] Could not set up background tab detection due to lack of global document")
      }
    }
    D({
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
          return $_218.a(e)
        }
        return
      }() : undefined
      var h = i.a(i.a(i.a({}, e), d), {
        trimEnd: true
      })
      var p = "function" === typeof this$options$beforeNavigate ? this$options$beforeNavigate(h) : h
      var _ = undefined === p ? i.a(i.a({}, h), {
        sampled: false
      }) : p
      if (false === _.sampled) {
        $_265.a.log("[Tracing] Will not send " + _.op + " transaction because of beforeNavigate.")
      }
      $_265.a.log("[Tracing] Starting " + _.op + " transaction on scope")
      var A = this._getCurrentHub()
      var /* [auto-meaningful-name] */$_364$b$location = $_364.b().location
      var v = $_720_index.b(A, _, this$options$idleTimeout, true, {
        location: $_364$b$location
      })
      v.registerBeforeFinishCallback(function (e, n) {
        t._metrics.addPerformanceEntries(e);
        (function (e, t, n) {
          var r = n - t.startTimestamp
          if (n && (r > e || r < 0)) {
            t.setStatus($_350.a.DeadlineExceeded)
            t.setTag("maxTransactionDurationExceeded", "true")
          }
        })($_218.e(this$options$maxTransactionDuration), e, n)
      })
      return v
    }
    $_265.a.warn("[Tracing] Did not create " + e.op + " transaction because _getCurrentHub is invalid.")
  }
  e.id = "BrowserTracing"
  return e
}()
var P = function () {
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
              return n.call.apply(n, i.f([this], M(e, t)))
            }
            return e
          }(e, t)
        })
      })(this._router, this._methods)
    } else {
      $_265.a.error("ExpressIntegration is missing an Express instance")
    }
  }
  e.id = "Express"
  return e
}()
function N(e, t) {
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
          o.call.apply(o, i.f([this], t))
        })
      }
    case 4:
      return function (n, r, o, a) {
        var /* [auto-meaningful-name] */o$__sentry_transaction
        var c = null === (o$__sentry_transaction = o.__sentry_transaction) || undefined === o$__sentry_transaction ? undefined : o$__sentry_transaction.startChild({
          description: e.name,
          op: "middleware." + t
        })
        e.call(this, n, r, o, function () {
          for (var e, t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n]
          }
          if (!(null === (e = c) || undefined === e)) {
            e.finish()
          }
          a.call.apply(a, i.f([this], t))
        })
      }
    default:
      throw new Error("Express middleware takes 2-4 arguments. Got: " + e$length)
  }
}
function M(e, t) {
  return e.map(function (e) {
    return "function" === typeof e ? N(e, t) : Array.isArray(e) ? e.map(function (e) {
      return "function" === typeof e ? N(e, t) : e
    }) : e
  })
}
export { R as "787__part-3__R" }
export { P as "787__part-3__P" }
