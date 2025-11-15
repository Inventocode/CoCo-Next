/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：49
 */

"use strict"

export { H as a }
var r = {}
Object.defineProperty(r, "Express", {
  get: function () {
    return A
  }
})
Object.defineProperty(r, "Postgres", {
  get: function () {
    return U
  }
})
Object.defineProperty(r, "Mysql", {
  get: function () {
    return z
  }
})
Object.defineProperty(r, "Mongo", {
  get: function () {
    return q
  }
})
import * as i from "./1"
import * as /* [auto-meaningful-name] */$$_72_8 from "../72/8"
import * as /* [auto-meaningful-name] */$$_72_14 from "../72/14"
import * as /* [auto-meaningful-name] */$_23_index from "./23/index"
import * as /* [auto-meaningful-name] */$_28_index from "./28/index"
import * as l from "./12"
import * as c from "./6"
var f = $$_72_14.e()
import * as /* [auto-meaningful-name] */$_19_index from "./19/index"
import * as /* [auto-meaningful-name] */$$_72_31 from "../72/31"
import * as /* [auto-meaningful-name] */$$_72_40 from "../72/40"
var m = function (e, t, n) {
  var /* [auto-meaningful-name] */t$value
  return function (i) {
    if (t.value >= 0 && (i || n)) {
      t.delta = t.value - (t$value || 0)
      if (t.delta || undefined === t$value) {
        t$value = t.value
        e(t)
      }
    }
  }
}
var v = function (e, t) {
  return {
    name: e,
    value: null !== t && undefined !== t ? t : -1,
    delta: 0,
    entries: [],
    id: "v2-" + Date.now() + "-" + (Math.floor(8999999999999 * Math.random()) + 1e12)
  }
}
var y = function (e, t) {
  try {
    if (PerformanceObserver.supportedEntryTypes.includes(e)) {
      if ("first-input" === e && !("PerformanceEventTiming" in self)) {
        return
      }
      var n = new PerformanceObserver(function (e) {
        return e.getEntries().map(t)
      })
      n.observe({
        type: e,
        buffered: true
      })
      return n
    }
  } catch (r) {}
}
var g = function (e, t) {
  var n = function n(r) {
    if (!("pagehide" !== r.type && "hidden" !== document.visibilityState)) {
      e(r)
      if (t) {
        removeEventListener("visibilitychange", n, true)
        removeEventListener("pagehide", n, true)
      }
    }
  }
  addEventListener("visibilitychange", n, true)
  addEventListener("pagehide", n, true)
}
var b = -1
var _ = function () {
  if (b < 0) {
    b = "hidden" === document.visibilityState ? 0 : 1 / 0
    g(function (e) {
      var /* [auto-meaningful-name] */e$timeStamp = e.timeStamp
      b = e$timeStamp
    }, true)
  }
  return {
    get firstHiddenTime() {
      return b
    }
  }
}
var E = {}
var O = $$_72_14.e()
var w = function () {
  function e() {
    var e
    this._measurements = {}
    this._performanceCursor = 0
    if (!$_19_index.b() && (null === (e = O) || undefined === e ? undefined : e.performance)) {
      if (O.performance.mark) {
        O.performance.mark("sentry-tracing-init")
      }
      this._trackCLS()
      this._trackLCP()
      this._trackFID()
    }
  }
  e.prototype.addPerformanceEntries = function (e) {
    var t = this
    if (O && O.performance && O.performance.getEntries && $$_72_31.a) {
      $$_72_8.a.log("[Tracing] Adding & adjusting spans using Performance API")
      var /* [auto-meaningful-name] */O$document$scriptsL$src
      var r
      var i
      var a
      var s
      var u = c.d($$_72_31.a)
      if (O.document && O.document.scripts) {
        for (var l = 0; l < O.document.scripts.length; l++) {
          if ("true" === O.document.scripts[l].dataset.entry) {
            O$document$scriptsL$src = O.document.scripts[l].src
            break
          }
        }
      }
      O.performance.getEntries().slice(this._performanceCursor).forEach(function (l) {
        var f = c.d(l.startTime)
        var d = c.d(l.duration)
        if (!("navigation" === e.op && u + f < e.startTimestamp)) {
          switch (l.entryType) {
            case "navigation":
              !function (e, t, n) {
                S({
                  transaction: e,
                  entry: t,
                  event: "unloadEvent",
                  timeOrigin: n
                })
                S({
                  transaction: e,
                  entry: t,
                  event: "redirect",
                  timeOrigin: n
                })
                S({
                  transaction: e,
                  entry: t,
                  event: "domContentLoadedEvent",
                  timeOrigin: n
                })
                S({
                  transaction: e,
                  entry: t,
                  event: "loadEvent",
                  timeOrigin: n
                })
                S({
                  transaction: e,
                  entry: t,
                  event: "connect",
                  timeOrigin: n
                })
                S({
                  transaction: e,
                  entry: t,
                  event: "secureConnection",
                  timeOrigin: n,
                  eventEnd: "connectEnd",
                  description: "TLS/SSL"
                })
                S({
                  transaction: e,
                  entry: t,
                  event: "fetch",
                  timeOrigin: n,
                  eventEnd: "domainLookupStart",
                  description: "cache"
                })
                S({
                  transaction: e,
                  entry: t,
                  event: "domainLookup",
                  timeOrigin: n,
                  description: "DNS"
                });
                (function (e, t, n) {
                  k(e, {
                    op: "browser",
                    description: "request",
                    startTimestamp: n + c.d(t.requestStart),
                    endTimestamp: n + c.d(t.responseEnd)
                  })
                  k(e, {
                    op: "browser",
                    description: "response",
                    startTimestamp: n + c.d(t.responseStart),
                    endTimestamp: n + c.d(t.responseEnd)
                  })
                })(e, t, n)
              }(e, l, u)
              a = u + c.d(l.responseStart)
              s = u + c.d(l.requestStart)
              break
            case "mark":
            case "paint":
            case "measure":
              var p = function (e, t, n, r, i) {
                var o = i + n
                var a = o + r
                k(e, {
                  description: t.name,
                  endTimestamp: a,
                  op: t.entryType,
                  startTimestamp: o
                })
                return o
              }(e, l, f, d, u)
              if (undefined === i && "sentry-tracing-init" === l.name) {
                i = p
              }
              var h = _(),
                m = l.startTime < h.firstHiddenTime
              if ("first-paint" === l.name && m) {
                $$_72_8.a.log("[Measurements] Adding FP")
                t._measurements.fp = {
                  value: l.startTime
                }
                t._measurements["mark.fp"] = {
                  value: p
                }
              }
              if ("first-contentful-paint" === l.name && m) {
                $$_72_8.a.log("[Measurements] Adding FCP")
                t._measurements.fcp = {
                  value: l.startTime
                }
                t._measurements["mark.fcp"] = {
                  value: p
                }
              }
              break
            case "resource":
              var v = l.name.replace(window.location.origin, ""),
                y = function (e, t, n, r, i, o) {
                  if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType) {
                    return
                  }
                  var a = {}
                  if ("transferSize" in t) {
                    a["Transfer Size"] = t.transferSize
                  }
                  if ("encodedBodySize" in t) {
                    a["Encoded Body Size"] = t.encodedBodySize
                  }
                  if ("decodedBodySize" in t) {
                    a["Decoded Body Size"] = t.decodedBodySize
                  }
                  var s = o + r
                  var u = s + i
                  k(e, {
                    description: n,
                    endTimestamp: u,
                    op: t.initiatorType ? "resource." + t.initiatorType : "resource",
                    startTimestamp: s,
                    data: a
                  })
                  return u
                }(e, l, v, f, d, u)
              if (undefined === r && (O$document$scriptsL$src || "").indexOf(v) > -1) {
                r = y
              }
          }
        }
      })
      if (undefined !== r && undefined !== i) {
        k(e, {
          description: "evaluation",
          endTimestamp: i,
          op: "script",
          startTimestamp: r
        })
      }
      this._performanceCursor = Math.max(performance.getEntries().length - 1, 0)
      this._trackNavigator(e)
      if ("pageload" === e.op) {
        var f = c.d($$_72_31.a)
        if ("number" === typeof a) {
          $$_72_8.a.log("[Measurements] Adding TTFB")
          this._measurements.ttfb = {
            value: 1e3 * (a - e.startTimestamp)
          }
          if ("number" === typeof s && s <= a) {
            this._measurements["ttfb.requestTime"] = {
              value: 1e3 * (a - s)
            }
          }
        }
        ["fcp", "fp", "lcp"].forEach(function (n) {
          if (t._measurements[n] && !(f >= e.startTimestamp)) {
            var /* [auto-meaningful-name] */t$_measurementsN$value = t._measurements[n].value
            var i = f + c.d(t$_measurementsN$value)
            var a = Math.abs(1e3 * (i - e.startTimestamp))
            var s = a - t$_measurementsN$value
            $$_72_8.a.log("[Measurements] Normalized " + n + " from " + t$_measurementsN$value + " to " + a + " (" + s + ")")
            t._measurements[n].value = a
          }
        })
        if (this._measurements["mark.fid"] && this._measurements.fid) {
          k(e, {
            description: "first input delay",
            endTimestamp: this._measurements["mark.fid"].value + c.d(this._measurements.fid.value),
            op: "web.vitals",
            startTimestamp: this._measurements["mark.fid"].value
          })
        }
        if (!("fcp" in this._measurements)) {
          delete this._measurements.cls
        }
        e.setMeasurements(this._measurements)
        this._tagMetricInfo(e)
      }
    }
  }
  e.prototype._tagMetricInfo = function (e) {
    if (this._lcpEntry) {
      $$_72_8.a.log("[Measurements] Adding LCP Data")
      if (this._lcpEntry.element) {
        e.setTag("lcp.element", $$_72_40.a(this._lcpEntry.element))
      }
      if (this._lcpEntry.id) {
        e.setTag("lcp.id", this._lcpEntry.id)
      }
      if (this._lcpEntry.url) {
        e.setTag("lcp.url", this._lcpEntry.url.trim().slice(0, 200))
      }
      e.setTag("lcp.size", this._lcpEntry.size)
    }
    if (this._clsEntry && this._clsEntry.sources) {
      $$_72_8.a.log("[Measurements] Adding CLS Data")
      this._clsEntry.sources.forEach(function (t, n) {
        return e.setTag("cls.source." + (n + 1), $$_72_40.a(t.node))
      })
    }
  }
  e.prototype._trackCLS = function () {
    var e = this
    !function (e, t) {
      var n
      var r = v("CLS", 0)
      var i = 0
      var o = []
      var a = function (e) {
        if (e && !e.hadRecentInput) {
          var t = o[0]
          var a = o[o.length - 1]
          if (i && 0 !== o.length && e.startTime - a.startTime < 1e3 && e.startTime - t.startTime < 5e3) {
            i += e.value
            o.push(e)
          } else {
            i = e.value
            o = [e]
          }
          if (i > r.value) {
            r.value = i
            r.entries = o
            if (n) {
              n()
            }
          }
        }
      }
      var s = y("layout-shift", a)
      if (s) {
        n = m(e, r, t)
        g(function () {
          s.takeRecords().map(a)
          n(true)
        })
      }
    }(function (t) {
      var n = t.entries.pop()
      if (n) {
        $$_72_8.a.log("[Measurements] Adding CLS")
        e._measurements.cls = {
          value: t.value
        }
        e._clsEntry = n
      }
    })
  }
  e.prototype._trackNavigator = function (e) {
    var /* [auto-meaningful-name] */O$navigator = O.navigator
    if (O$navigator) {
      var /* [auto-meaningful-name] */O$navigator$connection = O$navigator.connection
      if (O$navigator$connection) {
        if (O$navigator$connection.effectiveType) {
          e.setTag("effectiveConnectionType", O$navigator$connection.effectiveType)
        }
        if (O$navigator$connection.type) {
          e.setTag("connectionType", O$navigator$connection.type)
        }
        if (T(O$navigator$connection.rtt)) {
          this._measurements["connection.rtt"] = {
            value: O$navigator$connection.rtt
          }
        }
        if (T(O$navigator$connection.downlink)) {
          this._measurements["connection.downlink"] = {
            value: O$navigator$connection.downlink
          }
        }
      }
      if (T(O$navigator.deviceMemory)) {
        e.setTag("deviceMemory", String(O$navigator.deviceMemory))
      }
      if (T(O$navigator.hardwareConcurrency)) {
        e.setTag("hardwareConcurrency", String(O$navigator.hardwareConcurrency))
      }
    }
  }
  e.prototype._trackLCP = function () {
    var e = this
    !function (e, t) {
      var n
      var r = _()
      var i = v("LCP")
      var o = function (e) {
        var /* [auto-meaningful-name] */e$startTime = e.startTime
        if (e$startTime < r.firstHiddenTime) {
          i.value = e$startTime
          i.entries.push(e)
        }
        if (n) {
          n()
        }
      }
      var a = y("largest-contentful-paint", o)
      if (a) {
        n = m(e, i, t)
        var s = function () {
          if (!E[i.id]) {
            a.takeRecords().map(o)
            a.disconnect()
            E[i.id] = true
            n(true)
          }
        };
        ["keydown", "click"].forEach(function (e) {
          addEventListener(e, s, {
            once: true,
            capture: true
          })
        })
        g(s, true)
      }
    }(function (t) {
      var n = t.entries.pop()
      if (n) {
        var r = c.d($$_72_31.a)
        var i = c.d(n.startTime)
        $$_72_8.a.log("[Measurements] Adding LCP")
        e._measurements.lcp = {
          value: t.value
        }
        e._measurements["mark.lcp"] = {
          value: r + i
        }
        e._lcpEntry = n
      }
    })
  }
  e.prototype._trackFID = function () {
    var e = this
    !function (e, t) {
      var n
      var r = _()
      var i = v("FID")
      var o = function (e) {
        if (n && e.startTime < r.firstHiddenTime) {
          i.value = e.processingStart - e.startTime
          i.entries.push(e)
          n(true)
        }
      }
      var a = y("first-input", o)
      if (a) {
        n = m(e, i, t)
        g(function () {
          a.takeRecords().map(o)
          a.disconnect()
        }, true)
      }
    }(function (t) {
      var n = t.entries.pop()
      if (n) {
        var r = c.d($$_72_31.a)
        var i = c.d(n.startTime)
        $$_72_8.a.log("[Measurements] Adding FID")
        e._measurements.fid = {
          value: t.value
        }
        e._measurements["mark.fid"] = {
          value: r + i
        }
      }
    })
  }
  return e
}()
function S(e) {
  var /* [auto-meaningful-name] */e$transaction = e.transaction
  var /* [auto-meaningful-name] */e$entry = e.entry
  var /* [auto-meaningful-name] */e$event = e.event
  var /* [auto-meaningful-name] */e$timeOrigin = e.timeOrigin
  var /* [auto-meaningful-name] */e$eventEnd = e.eventEnd
  var /* [auto-meaningful-name] */e$description = e.description
  var s = e$eventEnd ? e$entry[e$eventEnd] : e$entry[e$event + "End"]
  var u = e$entry[e$event + "Start"]
  if (u && s) {
    k(e$transaction, {
      op: "browser",
      description: null !== e$description && undefined !== e$description ? e$description : e$event,
      startTimestamp: e$timeOrigin + c.d(u),
      endTimestamp: e$timeOrigin + c.d(s)
    })
  }
}
function k(e, t) {
  var /* [auto-meaningful-name] */t$startTimestamp = t.startTimestamp
  var r = i.d(t, ["startTimestamp"])
  if (t$startTimestamp && e.startTimestamp > t$startTimestamp) {
    e.startTimestamp = t$startTimestamp
  }
  return e.startChild(i.a({
    startTimestamp: t$startTimestamp
  }, r))
}
function T(e) {
  return "number" === typeof e && isFinite(e)
}
import * as /* [auto-meaningful-name] */$$_72_25 from "../72/25"
import * as /* [auto-meaningful-name] */$$_72_50 from "../72/50"
import * as /* [auto-meaningful-name] */$$_72_9 from "../72/9"
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
      return $$_72_25.a(e, t)
    }) && !$$_72_25.a(e, "sentry_key")
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
    $$_72_50.a({
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
            if ($$_72_9.g(a, Request)) {
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
    $$_72_50.a({
      callback: function (e) {
        !function (e, t, n) {
          var /* [auto-meaningful-name] */e$xhr
          var /* [auto-meaningful-name] */_e$xhr
          if (!c.c() || (null === (e$xhr = e.xhr) || undefined === e$xhr ? undefined : e$xhr.__sentry_own_request__) || !(null === (_e$xhr = e.xhr) || undefined === _e$xhr ? undefined : _e$xhr.__sentry_xhr__) || !t(e.xhr.__sentry_xhr__.url)) {
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
var N = $$_72_14.e()
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
        $$_72_50.a({
          callback: function (t) {
            var n = t.to
            var /* [auto-meaningful-name] */t$from = t.from
            if (undefined === t$from && N$location$href && -1 !== N$location$href.indexOf(n)) {
              N$location$href = undefined
            } else {
              if (t$from !== n) {
                N$location$href = undefined
                if (r) {
                  $$_72_8.a.log("[Tracing] Finishing current transaction with op: " + r.op)
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
      $$_72_8.a.warn("Could not initialize routing instrumentation due to invalid location")
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
      $$_72_8.a.warn("[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace.")
      $$_72_8.a.warn("[Tracing] We added a reasonable default for you: " + R.tracingOrigins)
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
            $$_72_8.a.log("[Tracing] Transaction: " + l.a.Cancelled + " -> since tab moved to the background, op: " + e.op)
            if (!e.status) {
              e.setStatus(l.a.Cancelled)
            }
            e.setTag("visibilitychange", "document.hidden")
            e.finish()
          }
        })
      } else {
        $$_72_8.a.warn("[Tracing] Could not set up background tab detection due to lack of global document")
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
        $$_72_8.a.log("[Tracing] Will not send " + m.op + " transaction because of beforeNavigate.")
      }
      $$_72_8.a.log("[Tracing] Starting " + m.op + " transaction on scope")
      var v = this._getCurrentHub()
      var /* [auto-meaningful-name] */$$_72_14$e$location = $$_72_14.e().location
      var g = $_23_index.b(v, m, this$options$idleTimeout, true, {
        location: $$_72_14$e$location
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
    $$_72_8.a.warn("[Tracing] Did not create " + e.op + " transaction because _getCurrentHub is invalid.")
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
      $$_72_8.a.error("ExpressIntegration is missing an Express instance")
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
import * as /* [auto-meaningful-name] */$$_72_17_index from "../72/17/index"
var U = function () {
  function e() {
    this.name = e.id
  }
  e.prototype.setupOnce = function (e, t) {
    var n = $_19_index.c("pg")
    if (n) {
      $$_72_17_index.c(n.Client.prototype, "query", function (e) {
        return function (n, r, i) {
          var o
          var a
          var s
          var u = null === (a = null === (o = t().getScope()) || undefined === o ? undefined : o.getSpan()) || undefined === a ? undefined : a.startChild({
            description: "string" === typeof n ? n : n.text,
            op: "db"
          })
          if ("function" === typeof i) {
            return e.call(this, n, r, function (e, t) {
              var n
              if (!(null === (n = u) || undefined === n)) {
                n.finish()
              }
              i(e, t)
            })
          }
          if ("function" === typeof r) {
            return e.call(this, n, function (e, t) {
              var n
              if (!(null === (n = u) || undefined === n)) {
                n.finish()
              }
              r(e, t)
            })
          }
          var l = "undefined" !== typeof r ? e.call(this, n, r) : e.call(this, n)
          return $$_72_9.m(l) ? l.then(function (e) {
            var t
            if (!(null === (t = u) || undefined === t)) {
              t.finish()
            }
            return e
          }) : (null === (s = u) || undefined === s || s.finish(), l)
        }
      })
    } else {
      $$_72_8.a.error("Postgres Integration was unable to require `pg` package.")
    }
  }
  e.id = "Postgres"
  return e
}()
var z = function () {
  function e() {
    this.name = e.id
  }
  e.prototype.setupOnce = function (e, t) {
    var n = $_19_index.c("mysql/lib/Connection.js")
    if (n) {
      $$_72_17_index.c(n, "createQuery", function (e) {
        return function (n, r, i) {
          var o
          var a
          var s = null === (a = null === (o = t().getScope()) || undefined === o ? undefined : o.getSpan()) || undefined === a ? undefined : a.startChild({
            description: "string" === typeof n ? n : n.sql,
            op: "db"
          })
          return "function" === typeof i ? e.call(this, n, r, function (e, t, n) {
            var r
            if (!(null === (r = s) || undefined === r)) {
              r.finish()
            }
            i(e, t, n)
          }) : "function" === typeof r ? e.call(this, n, function (e, t, n) {
            var i
            if (!(null === (i = s) || undefined === i)) {
              i.finish()
            }
            r(e, t, n)
          }) : e.call(this, n, r, i)
        }
      })
    } else {
      $$_72_8.a.error("Mysql Integration was unable to require `mysql` package.")
    }
  }
  e.id = "Mysql"
  return e
}()
var B = ["aggregate", "bulkWrite", "countDocuments", "createIndex", "createIndexes", "deleteMany", "deleteOne", "distinct", "drop", "dropIndex", "dropIndexes", "estimatedDocumentCount", "find", "findOne", "findOneAndDelete", "findOneAndReplace", "findOneAndUpdate", "indexes", "indexExists", "indexInformation", "initializeOrderedBulkOp", "insertMany", "insertOne", "isCapped", "mapReduce", "options", "parallelCollectionScan", "rename", "replaceOne", "stats", "updateMany", "updateOne"]
var G = {
  bulkWrite: ["operations"],
  countDocuments: ["query"],
  createIndex: ["fieldOrSpec"],
  createIndexes: ["indexSpecs"],
  deleteMany: ["filter"],
  deleteOne: ["filter"],
  distinct: ["key", "query"],
  dropIndex: ["indexName"],
  find: ["query"],
  findOne: ["query"],
  findOneAndDelete: ["filter"],
  findOneAndReplace: ["filter", "replacement"],
  findOneAndUpdate: ["filter", "update"],
  indexExists: ["indexes"],
  insertMany: ["docs"],
  insertOne: ["doc"],
  mapReduce: ["map", "reduce"],
  rename: ["newName"],
  replaceOne: ["filter", "doc"],
  updateMany: ["filter", "update"],
  updateOne: ["filter", "update"]
}
var q = function () {
  function e(t) {
    if (undefined === t) {
      t = {}
    }
    this.name = e.id
    this._operations = Array.isArray(t.operations) ? t.operations : B
    this._describeOperations = !("describeOperations" in t) || t.describeOperations
    this._useMongoose = !!t.useMongoose
  }
  e.prototype.setupOnce = function (e, t) {
    var n = this._useMongoose ? "mongoose" : "mongodb"
    var r = $_19_index.c(n)
    if (r) {
      this._instrumentOperations(r.Collection, this._operations, t)
    } else {
      $$_72_8.a.error("Mongo Integration was unable to require `" + n + "` package.")
    }
  }
  e.prototype._instrumentOperations = function (e, t, n) {
    var r = this
    t.forEach(function (t) {
      return r._patchOperation(e, t, n)
    })
  }
  e.prototype._patchOperation = function (e, t, n) {
    if (t in e.prototype) {
      var r = this._getSpanContextFromOperationArguments.bind(this)
      $$_72_17_index.c(e.prototype, t, function (e) {
        return function () {
          for (var o, a, s, u, l = [], c = 0; c < arguments.length; c++) {
            l[c] = arguments[c]
          }
          var f = l[l.length - 1]
          var d = n().getScope()
          var p = null === (o = d) || undefined === o ? undefined : o.getSpan()
          if ("function" !== typeof f || "mapReduce" === t && 2 === l.length) {
            var h = null === (a = p) || undefined === a ? undefined : a.startChild(r(this, t, l))
            var m = e.call.apply(e, i.e([this], l))
            return $$_72_9.m(m) ? m.then(function (e) {
              var t
              if (!(null === (t = h) || undefined === t)) {
                t.finish()
              }
              return e
            }) : (null === (s = h) || undefined === s || s.finish(), m)
          }
          var v = null === (u = p) || undefined === u ? undefined : u.startChild(r(this, t, l.slice(0, -1)))
          return e.call.apply(e, i.e([this], l.slice(0, -1), [function (e, t) {
            var n
            if (!(null === (n = v) || undefined === n)) {
              n.finish()
            }
            f(e, t)
          }]))
        }
      })
    }
  }
  e.prototype._getSpanContextFromOperationArguments = function (e, t, n) {
    var r = {
      collectionName: e.collectionName,
      dbName: e.dbName,
      namespace: e.namespace
    }
    var o = {
      op: "db",
      description: t,
      data: r
    }
    var a = G[t]
    var s = Array.isArray(this._describeOperations) ? this._describeOperations.includes(t) : this._describeOperations
    if (!a || !s) {
      return o
    }
    try {
      if ("mapReduce" === t) {
        var u = i.c(n, 2)
        var l = u[0]
        var c = u[1]
        r[a[0]] = "string" === typeof l ? l : l.name || "<anonymous>"
        r[a[1]] = "string" === typeof c ? c : c.name || "<anonymous>"
      } else {
        for (var f = 0; f < a.length; f++) {
          r[a[f]] = JSON.stringify(n[f])
        }
      }
    } catch (d) {}
    return o
  }
  e.id = "Mongo"
  return e
}()
var H = i.a(i.a({}, r), {
  BrowserTracing: L
})
$_23_index.a()
export default H
