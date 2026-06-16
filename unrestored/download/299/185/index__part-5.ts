/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：185__part-5
 */

"use strict"

import { k } from "./index__part-3"
import { R } from "./index__part-4"
import * as /* [auto-meaningful-name] */Module_51 from /* 51 */"./51"
import * as /* [auto-meaningful-name] */Module_177 from /* 177 */"./177"
import * as /* [auto-meaningful-name] */Module_8 from /* 8 */"./8"
import * as /* [auto-meaningful-name] */Module_66 from /* 66 */"./66/index"
import * as /* [auto-meaningful-name] */Module_22 from /* 22 */"../307/22"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../307/11"
import * as /* [auto-meaningful-name] */Module_1 from /* 1 */"./1"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"../307/12"
import * as /* [auto-meaningful-name] */Module_3 from /* 3 */"./3"
import * as /* [auto-meaningful-name] */Module_56 from /* 56 */"./56/index"
import * as /* [auto-meaningful-name] */Module_57 from /* 57 */"../307/57"
import * as /* [auto-meaningful-name] */Module_186 from /* 186 */"../307/186"
var H = {
  traceFetch: true,
  traceXHR: true,
  tracingOrigins: ["localhost", /^\//]
}
function F(e) {
  var t = Module_3.a(Module_3.a({}, H), e)
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
      return Module_57.a(e, t)
    }) && !Module_57.a(e, "sentry_key")
    return s[e]
  }
  var c = u
  if ("function" === typeof t$shouldCreateSpanForRequest) {
    c = function (e) {
      return u(e) && t$shouldCreateSpanForRequest(e)
    }
  }
  var l = {}
  if (t$traceFetch) {
    Module_186.a("fetch", function (e) {
      !function (e, t, n) {
        if (!Module_8.b() || !e.fetchData || !t(e.fetchData.url)) {
          return
        }
        if (e.endTimestamp) {
          var /* [auto-meaningful-name] */e$fetchData$__span = e.fetchData.__span
          if (!e$fetchData$__span) {
            return
          }
          return void ((a = n[e$fetchData$__span]) && (e.response ? a.setHttpStatus(e.response.status) : e.error && a.setStatus("internal_error"), a.finish(), delete n[e$fetchData$__span]))
        }
        var i = Module_8.a()
        if (i) {
          var a = i.startChild({
            data: Module_3.a(Module_3.a({}, e.fetchData), {
              type: "fetch"
            }),
            description: e.fetchData.method + " " + e.fetchData.url,
            op: "http.client"
          })
          e.fetchData.__span = a.spanId
          n[a.spanId] = a
          var s = e.args[0] = e.args[0]
          var u = e.args[1] = e.args[1] || {}
          var /* [auto-meaningful-name] */u$headers = u.headers
          if (Module_11.g(s, Request)) {
            u$headers = s.headers
          }
          if (u$headers) {
            if ("function" === typeof u$headers.append) {
              u$headers.append("sentry-trace", a.toTraceparent())
            } else {
              u$headers = Array.isArray(u$headers) ? Module_3.e(u$headers, [["sentry-trace", a.toTraceparent()]]) : Module_3.a(Module_3.a({}, u$headers), {
                "sentry-trace": a.toTraceparent()
              })
            }
          } else {
            u$headers = {
              "sentry-trace": a.toTraceparent()
            }
          }
          u.headers = u$headers
        }
      }(e, c, l)
    })
  }
  if (t$traceXHR) {
    Module_186.a("xhr", function (e) {
      !function (e, t, n) {
        if (!Module_8.b() || e.xhr && e.xhr.__sentry_own_request__ || !(e.xhr && e.xhr.__sentry_xhr__ && t(e.xhr.__sentry_xhr__.url))) {
          return
        }
        var /* [auto-meaningful-name] */e$xhr$__sentry_xhr__ = e.xhr.__sentry_xhr__
        if (e.endTimestamp) {
          var /* [auto-meaningful-name] */e$xhr$__sentry_xhr_span_id__ = e.xhr.__sentry_xhr_span_id__
          if (!e$xhr$__sentry_xhr_span_id__) {
            return
          }
          return void ((s = n[e$xhr$__sentry_xhr_span_id__]) && (s.setHttpStatus(e$xhr$__sentry_xhr__.status_code), s.finish(), delete n[e$xhr$__sentry_xhr_span_id__]))
        }
        var a = Module_8.a()
        if (a) {
          var s = a.startChild({
            data: Module_3.a(Module_3.a({}, e$xhr$__sentry_xhr__.data), {
              type: "xhr",
              method: e$xhr$__sentry_xhr__.method,
              url: e$xhr$__sentry_xhr__.url
            }),
            description: e$xhr$__sentry_xhr__.method + " " + e$xhr$__sentry_xhr__.url,
            op: "http.client"
          })
          e.xhr.__sentry_xhr_span_id__ = s.spanId
          n[e.xhr.__sentry_xhr_span_id__] = s
          if (e.xhr.setRequestHeader) {
            try {
              e.xhr.setRequestHeader("sentry-trace", s.toTraceparent())
            } catch (u) {}
          }
        }
      }(e, c, l)
    })
  }
}
var $ = Module_22.a()
var z = Module_3.a({
  idleTimeout: Module_66.a,
  markBackgroundTransactions: true,
  maxTransactionDuration: 600,
  routingInstrumentation: function (e, t, n) {
    if (undefined === t) {
      t = true
    }
    if (undefined === n) {
      n = true
    }
    if ($ && $.location) {
      var r
      var /* [auto-meaningful-name] */$$location$href = $.location.href
      if (t) {
        r = e({
          name: $.location.pathname,
          op: "pageload"
        })
      }
      if (n) {
        Module_186.a("history", function (t) {
          var n = t.to
          var /* [auto-meaningful-name] */t$from = t.from
          if (undefined === t$from && $$location$href && -1 !== $$location$href.indexOf(n)) {
            $$location$href = undefined
          } else {
            if (t$from !== n) {
              $$location$href = undefined
              if (r) {
                if (Module_1.a) {
                  Module_12.c.log("[Tracing] Finishing current transaction with op: " + r.op)
                }
                r.finish()
              }
              r = e({
                name: $.location.pathname,
                op: "navigation"
              })
            }
          }
        })
      }
    } else if (Module_1.a) {
      Module_12.c.warn("Could not initialize routing instrumentation due to invalid location")
    }
  },
  startTransactionOnLocationChange: true,
  startTransactionOnPageLoad: true
}, H)
var q = function () {
  function e(t) {
    this.name = e.id
    this._configuredIdleTimeout = undefined
    var /* [auto-meaningful-name] */H$tracingOrigins = H.tracingOrigins
    if (t) {
      this._configuredIdleTimeout = t.idleTimeout
      if (t.tracingOrigins && Array.isArray(t.tracingOrigins) && 0 !== t.tracingOrigins.length) {
        H$tracingOrigins = t.tracingOrigins
      } else {
        if (Module_1.a) {
          this._emitOptionsWarning = true
        }
      }
    }
    this.options = Module_3.a(Module_3.a(Module_3.a({}, z), t), {
      tracingOrigins: H$tracingOrigins
    })
    var /* [auto-meaningful-name] */this$options$_metricOptions = this.options._metricOptions
    this._metrics = new R(this$options$_metricOptions && this$options$_metricOptions._reportAllChanges)
  }
  e.prototype.setupOnce = function (e, t) {
    var n = this
    this._getCurrentHub = t
    if (this._emitOptionsWarning) {
      if (Module_1.a) {
        Module_12.c.warn("[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace.")
      }
      if (Module_1.a) {
        Module_12.c.warn("[Tracing] We added a reasonable default for you: " + H.tracingOrigins)
      }
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
      if (k && k.document) {
        k.document.addEventListener("visibilitychange", function () {
          var e = Module_8.a()
          if (k.document.hidden && e) {
            var /* [auto-meaningful-name] */Cancelled = "cancelled"
            if (Module_1.a) {
              Module_12.c.log("[Tracing] Transaction: " + Cancelled + " -> since tab moved to the background, op: " + e.op)
            }
            if (!e.status) {
              e.setStatus(Cancelled)
            }
            e.setTag("visibilitychange", "document.hidden")
            e.setTag(Module_51.a, Module_51.b[2])
            e.finish()
          }
        })
      } else {
        if (Module_1.a) {
          Module_12.c.warn("[Tracing] Could not set up background tab detection due to lack of global document")
        }
      }
    }
    F({
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
      var l = "pageload" === e.op ? function () {
        var e = function (e) {
          var t = Module_22.a().document.querySelector("meta[name=" + e + "]")
          return t ? t.getAttribute("content") : null
        }("sentry-trace")
        if (e) {
          return Module_177.a(e)
        }
        return
      }() : undefined
      var f = Module_3.a(Module_3.a(Module_3.a({}, e), l), {
        trimEnd: true
      })
      var p = "function" === typeof this$options$beforeNavigate ? this$options$beforeNavigate(f) : f
      var d = undefined === p ? Module_3.a(Module_3.a({}, f), {
        sampled: false
      }) : p
      if (false === d.sampled && Module_1.a) {
        Module_12.c.log("[Tracing] Will not send " + d.op + " transaction because of beforeNavigate.")
      }
      if (Module_1.a) {
        Module_12.c.log("[Tracing] Starting " + d.op + " transaction on scope")
      }
      var h = this._getCurrentHub()
      var /* [auto-meaningful-name] */Module_22$a$location = Module_22.a().location
      var m = Module_56.b(h, d, this$options$idleTimeout, true, {
        location: Module_22$a$location
      })
      m.registerBeforeFinishCallback(function (e, n) {
        t._metrics.addPerformanceEntries(e);
        (function (e, t, n) {
          var r = n - t.startTimestamp
          var i = n && (r > e || r < 0)
          if (i) {
            t.setStatus("deadline_exceeded")
            t.setTag("maxTransactionDurationExceeded", "true")
          }
        })(Module_8.d(this$options$maxTransactionDuration), e, n)
      })
      m.setTag("idleTimeout", this._configuredIdleTimeout)
      return m
    }
    if (Module_1.a) {
      Module_12.c.warn("[Tracing] Did not create " + e.op + " transaction because _getCurrentHub is invalid.")
    }
  }
  e.id = "BrowserTracing"
  return e
}()
Module_56.a()
export { q }
