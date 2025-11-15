/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：787
 */

"use strict"

export { z as a }
var r = {}
Object.defineProperty(r, "Express", {
  get: function () {
    return P
  }
})
Object.defineProperty(r, "Postgres", {
  get: function () {
    return L
  }
})
Object.defineProperty(r, "Mysql", {
  get: function () {
    return U
  }
})
Object.defineProperty(r, "Mongo", {
  get: function () {
    return G
  }
})
import i = require("./39")
import /* [auto-meaningful-name] */$_265 = require("./265")
import /* [auto-meaningful-name] */$_364 = require("./364")
import /* [auto-meaningful-name] */$_720_index = require("./720/index")
import /* [auto-meaningful-name] */$_764_index = require("./764/index")
import /* [auto-meaningful-name] */$_350 = require("./350")
import /* [auto-meaningful-name] */$_218 = require("./218")
var f = $_364.b()
import /* [auto-meaningful-name] */$_521 = require("./521")
import /* [auto-meaningful-name] */$_926 = require("./926")
import /* [auto-meaningful-name] */$_1168 = require("./1168")
var _ = function (e, t, n) {
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
var A = function (e, t) {
  return {
    name: e,
    value: null !== t && undefined !== t ? t : -1,
    delta: 0,
    entries: [],
    id: "v2-" + Date.now() + "-" + (Math.floor(8999999999999 * Math.random()) + 1e12)
  }
}
var g = function (e, t) {
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
var v = function (e, t) {
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
var m = -1
var y = function () {
  if (m < 0) {
    m = "hidden" === document.visibilityState ? 0 : 1 / 0
    v(function (e) {
      var /* [auto-meaningful-name] */e$timeStamp = e.timeStamp
      m = e$timeStamp
    }, true)
  }
  return {
    get firstHiddenTime() {
      return m
    }
  }
}
var b = {}
var w = $_364.b()
var E = function () {
  function e() {
    var e
    var t
    this._measurements = {}
    this._performanceCursor = 0
    if (!$_521.b() && (null === (e = w) || undefined === e ? undefined : e.performance) && (null === (t = w) || undefined === t ? undefined : t.document)) {
      if (w.performance.mark) {
        w.performance.mark("sentry-tracing-init")
      }
      this._trackCLS()
      this._trackLCP()
      this._trackFID()
    }
  }
  e.prototype.addPerformanceEntries = function (e) {
    var t = this
    if (w && w.performance && w.performance.getEntries && $_926.a) {
      $_265.a.log("[Tracing] Adding & adjusting spans using Performance API")
      var /* [auto-meaningful-name] */w$document$scriptsU$src
      var r
      var i
      var a
      var s
      var c = $_218.d($_926.a)
      if (w.document && w.document.scripts) {
        for (var u = 0; u < w.document.scripts.length; u++) {
          if ("true" === w.document.scripts[u].dataset.entry) {
            w$document$scriptsU$src = w.document.scripts[u].src
            break
          }
        }
      }
      w.performance.getEntries().slice(this._performanceCursor).forEach(function (u) {
        var f = $_218.d(u.startTime)
        var d = $_218.d(u.duration)
        if (!("navigation" === e.op && c + f < e.startTimestamp)) {
          switch (u.entryType) {
            case "navigation":
              !function (e, t, n) {
                x({
                  transaction: e,
                  entry: t,
                  event: "unloadEvent",
                  timeOrigin: n
                })
                x({
                  transaction: e,
                  entry: t,
                  event: "redirect",
                  timeOrigin: n
                })
                x({
                  transaction: e,
                  entry: t,
                  event: "domContentLoadedEvent",
                  timeOrigin: n
                })
                x({
                  transaction: e,
                  entry: t,
                  event: "loadEvent",
                  timeOrigin: n
                })
                x({
                  transaction: e,
                  entry: t,
                  event: "connect",
                  timeOrigin: n
                })
                x({
                  transaction: e,
                  entry: t,
                  event: "secureConnection",
                  timeOrigin: n,
                  eventEnd: "connectEnd",
                  description: "TLS/SSL"
                })
                x({
                  transaction: e,
                  entry: t,
                  event: "fetch",
                  timeOrigin: n,
                  eventEnd: "domainLookupStart",
                  description: "cache"
                })
                x({
                  transaction: e,
                  entry: t,
                  event: "domainLookup",
                  timeOrigin: n,
                  description: "DNS"
                });
                (function (e, t, n) {
                  C(e, {
                    op: "browser",
                    description: "request",
                    startTimestamp: n + $_218.d(t.requestStart),
                    endTimestamp: n + $_218.d(t.responseEnd)
                  })
                  C(e, {
                    op: "browser",
                    description: "response",
                    startTimestamp: n + $_218.d(t.responseStart),
                    endTimestamp: n + $_218.d(t.responseEnd)
                  })
                })(e, t, n)
              }(e, u, c)
              a = c + $_218.d(u.responseStart)
              s = c + $_218.d(u.requestStart)
              break
            case "mark":
            case "paint":
            case "measure":
              var h = function (e, t, n, r, i) {
                var o = i + n
                var a = o + r
                C(e, {
                  description: t.name,
                  endTimestamp: a,
                  op: t.entryType,
                  startTimestamp: o
                })
                return o
              }(e, u, f, d, c)
              if (undefined === i && "sentry-tracing-init" === u.name) {
                i = h
              }
              var p = y(),
                _ = u.startTime < p.firstHiddenTime
              if ("first-paint" === u.name && _) {
                $_265.a.log("[Measurements] Adding FP")
                t._measurements.fp = {
                  value: u.startTime
                }
                t._measurements["mark.fp"] = {
                  value: h
                }
              }
              if ("first-contentful-paint" === u.name && _) {
                $_265.a.log("[Measurements] Adding FCP")
                t._measurements.fcp = {
                  value: u.startTime
                }
                t._measurements["mark.fcp"] = {
                  value: h
                }
              }
              break
            case "resource":
              var A = u.name.replace(window.location.origin, ""),
                g = function (e, t, n, r, i, o) {
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
                  var c = s + i
                  C(e, {
                    description: n,
                    endTimestamp: c,
                    op: t.initiatorType ? "resource." + t.initiatorType : "resource",
                    startTimestamp: s,
                    data: a
                  })
                  return c
                }(e, u, A, f, d, c)
              if (undefined === r && (w$document$scriptsU$src || "").indexOf(A) > -1) {
                r = g
              }
          }
        }
      })
      if (undefined !== r && undefined !== i) {
        C(e, {
          description: "evaluation",
          endTimestamp: i,
          op: "script",
          startTimestamp: r
        })
      }
      this._performanceCursor = Math.max(performance.getEntries().length - 1, 0)
      this._trackNavigator(e)
      if ("pageload" === e.op) {
        var f = $_218.d($_926.a)
        if ("number" === typeof a) {
          $_265.a.log("[Measurements] Adding TTFB")
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
            var i = f + $_218.d(t$_measurementsN$value)
            var a = Math.abs(1e3 * (i - e.startTimestamp))
            var s = a - t$_measurementsN$value
            $_265.a.log("[Measurements] Normalized " + n + " from " + t$_measurementsN$value + " to " + a + " (" + s + ")")
            t._measurements[n].value = a
          }
        })
        if (this._measurements["mark.fid"] && this._measurements.fid) {
          C(e, {
            description: "first input delay",
            endTimestamp: this._measurements["mark.fid"].value + $_218.d(this._measurements.fid.value),
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
      $_265.a.log("[Measurements] Adding LCP Data")
      if (this._lcpEntry.element) {
        e.setTag("lcp.element", $_1168.a(this._lcpEntry.element))
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
      $_265.a.log("[Measurements] Adding CLS Data")
      this._clsEntry.sources.forEach(function (t, n) {
        return e.setTag("cls.source." + (n + 1), $_1168.a(t.node))
      })
    }
  }
  e.prototype._trackCLS = function () {
    var e = this
    !function (e, t) {
      var n
      var r = A("CLS", 0)
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
      var s = g("layout-shift", a)
      if (s) {
        n = _(e, r, t)
        v(function () {
          s.takeRecords().map(a)
          n(true)
        })
      }
    }(function (t) {
      var n = t.entries.pop()
      if (n) {
        $_265.a.log("[Measurements] Adding CLS")
        e._measurements.cls = {
          value: t.value
        }
        e._clsEntry = n
      }
    })
  }
  e.prototype._trackNavigator = function (e) {
    var /* [auto-meaningful-name] */w$navigator = w.navigator
    if (w$navigator) {
      var /* [auto-meaningful-name] */w$navigator$connection = w$navigator.connection
      if (w$navigator$connection) {
        if (w$navigator$connection.effectiveType) {
          e.setTag("effectiveConnectionType", w$navigator$connection.effectiveType)
        }
        if (w$navigator$connection.type) {
          e.setTag("connectionType", w$navigator$connection.type)
        }
        if (O(w$navigator$connection.rtt)) {
          this._measurements["connection.rtt"] = {
            value: w$navigator$connection.rtt
          }
        }
        if (O(w$navigator$connection.downlink)) {
          this._measurements["connection.downlink"] = {
            value: w$navigator$connection.downlink
          }
        }
      }
      if (O(w$navigator.deviceMemory)) {
        e.setTag("deviceMemory", String(w$navigator.deviceMemory))
      }
      if (O(w$navigator.hardwareConcurrency)) {
        e.setTag("hardwareConcurrency", String(w$navigator.hardwareConcurrency))
      }
    }
  }
  e.prototype._trackLCP = function () {
    var e = this
    !function (e, t) {
      var n
      var r = y()
      var i = A("LCP")
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
      var a = g("largest-contentful-paint", o)
      if (a) {
        n = _(e, i, t)
        var s = function () {
          if (!b[i.id]) {
            a.takeRecords().map(o)
            a.disconnect()
            b[i.id] = true
            n(true)
          }
        };
        ["keydown", "click"].forEach(function (e) {
          addEventListener(e, s, {
            once: true,
            capture: true
          })
        })
        v(s, true)
      }
    }(function (t) {
      var n = t.entries.pop()
      if (n) {
        var r = $_218.d($_926.a)
        var i = $_218.d(n.startTime)
        $_265.a.log("[Measurements] Adding LCP")
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
      var r = y()
      var i = A("FID")
      var o = function (e) {
        if (n && e.startTime < r.firstHiddenTime) {
          i.value = e.processingStart - e.startTime
          i.entries.push(e)
          n(true)
        }
      }
      var a = g("first-input", o)
      if (a) {
        n = _(e, i, t)
        v(function () {
          a.takeRecords().map(o)
          a.disconnect()
        }, true)
      }
    }(function (t) {
      var n = t.entries.pop()
      if (n) {
        var r = $_218.d($_926.a)
        var i = $_218.d(n.startTime)
        $_265.a.log("[Measurements] Adding FID")
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
function x(e) {
  var /* [auto-meaningful-name] */e$transaction = e.transaction
  var /* [auto-meaningful-name] */e$entry = e.entry
  var /* [auto-meaningful-name] */e$event = e.event
  var /* [auto-meaningful-name] */e$timeOrigin = e.timeOrigin
  var /* [auto-meaningful-name] */e$eventEnd = e.eventEnd
  var /* [auto-meaningful-name] */e$description = e.description
  var s = e$eventEnd ? e$entry[e$eventEnd] : e$entry[e$event + "End"]
  var c = e$entry[e$event + "Start"]
  if (c && s) {
    C(e$transaction, {
      op: "browser",
      description: null !== e$description && undefined !== e$description ? e$description : e$event,
      startTimestamp: e$timeOrigin + $_218.d(c),
      endTimestamp: e$timeOrigin + $_218.d(s)
    })
  }
}
function C(e, t) {
  var /* [auto-meaningful-name] */t$startTimestamp = t.startTimestamp
  var r = i.e(t, ["startTimestamp"])
  if (t$startTimestamp && e.startTimestamp > t$startTimestamp) {
    e.startTimestamp = t$startTimestamp
  }
  return e.startChild(i.a({
    startTimestamp: t$startTimestamp
  }, r))
}
function O(e) {
  return "number" === typeof e && isFinite(e)
}
import /* [auto-meaningful-name] */$_736 = require("./736")
import /* [auto-meaningful-name] */$_1508 = require("./1508")
import /* [auto-meaningful-name] */$_316 = require("./316")
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
import /* [auto-meaningful-name] */$_435_index = require("./435/index")
var L = function () {
  function e(t) {
    if (undefined === t) {
      t = {}
    }
    this.name = e.id
    this._usePgNative = !!t.usePgNative
  }
  e.prototype.setupOnce = function (e, t) {
    var /* [auto-meaningful-name] */r$native
    var r = $_521.c("pg")
    if (r) {
      if (!this._usePgNative || (null === (r$native = r.native) || undefined === r$native ? undefined : r$native.Client)) {
        var /* [auto-meaningful-name] */This$_usePgNativeR$nativeR$Client = (this._usePgNative ? r.native : r).Client
        $_435_index.b(This$_usePgNativeR$nativeR$Client.prototype, "query", function (e) {
          return function (n, r, i) {
            var o
            var a
            var s
            var c = null === (a = null === (o = t().getScope()) || undefined === o ? undefined : o.getSpan()) || undefined === a ? undefined : a.startChild({
              description: "string" === typeof n ? n : n.text,
              op: "db"
            })
            if ("function" === typeof i) {
              return e.call(this, n, r, function (e, t) {
                var n
                if (!(null === (n = c) || undefined === n)) {
                  n.finish()
                }
                i(e, t)
              })
            }
            if ("function" === typeof r) {
              return e.call(this, n, function (e, t) {
                var n
                if (!(null === (n = c) || undefined === n)) {
                  n.finish()
                }
                r(e, t)
              })
            }
            var u = "undefined" !== typeof r ? e.call(this, n, r) : e.call(this, n)
            return $_316.j(u) ? u.then(function (e) {
              var t
              if (!(null === (t = c) || undefined === t)) {
                t.finish()
              }
              return e
            }) : (null === (s = c) || undefined === s || s.finish(), u)
          }
        })
      } else {
        $_265.a.error("Postgres Integration was unable to access 'pg-native' bindings.")
      }
    } else {
      $_265.a.error("Postgres Integration was unable to require `pg` package.")
    }
  }
  e.id = "Postgres"
  return e
}()
var U = function () {
  function e() {
    this.name = e.id
  }
  e.prototype.setupOnce = function (e, t) {
    var n = $_521.c("mysql/lib/Connection.js")
    if (n) {
      $_435_index.b(n, "createQuery", function (e) {
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
      $_265.a.error("Mysql Integration was unable to require `mysql` package.")
    }
  }
  e.id = "Mysql"
  return e
}()
var H = ["aggregate", "bulkWrite", "countDocuments", "createIndex", "createIndexes", "deleteMany", "deleteOne", "distinct", "drop", "dropIndex", "dropIndexes", "estimatedDocumentCount", "find", "findOne", "findOneAndDelete", "findOneAndReplace", "findOneAndUpdate", "indexes", "indexExists", "indexInformation", "initializeOrderedBulkOp", "insertMany", "insertOne", "isCapped", "mapReduce", "options", "parallelCollectionScan", "rename", "replaceOne", "stats", "updateMany", "updateOne"]
var V = {
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
var G = function () {
  function e(t) {
    if (undefined === t) {
      t = {}
    }
    this.name = e.id
    this._operations = Array.isArray(t.operations) ? t.operations : H
    this._describeOperations = !("describeOperations" in t) || t.describeOperations
    this._useMongoose = !!t.useMongoose
  }
  e.prototype.setupOnce = function (e, t) {
    var n = this._useMongoose ? "mongoose" : "mongodb"
    var r = $_521.c(n)
    if (r) {
      this._instrumentOperations(r.Collection, this._operations, t)
    } else {
      $_265.a.error("Mongo Integration was unable to require `" + n + "` package.")
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
      $_435_index.b(e.prototype, t, function (e) {
        return function () {
          for (var o, a, s, c, u = [], l = 0; l < arguments.length; l++) {
            u[l] = arguments[l]
          }
          var f = u[u.length - 1]
          var d = n().getScope()
          var h = null === (o = d) || undefined === o ? undefined : o.getSpan()
          if ("function" !== typeof f || "mapReduce" === t && 2 === u.length) {
            var p = null === (a = h) || undefined === a ? undefined : a.startChild(r(this, t, u))
            var _ = e.call.apply(e, i.f([this], u))
            return $_316.j(_) ? _.then(function (e) {
              var t
              if (!(null === (t = p) || undefined === t)) {
                t.finish()
              }
              return e
            }) : (null === (s = p) || undefined === s || s.finish(), _)
          }
          var A = null === (c = h) || undefined === c ? undefined : c.startChild(r(this, t, u.slice(0, -1)))
          return e.call.apply(e, i.f([this], u.slice(0, -1), [function (e, t) {
            var n
            if (!(null === (n = A) || undefined === n)) {
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
    var a = V[t]
    var s = Array.isArray(this._describeOperations) ? this._describeOperations.includes(t) : this._describeOperations
    if (!a || !s) {
      return o
    }
    try {
      if ("mapReduce" === t) {
        var c = i.d(n, 2)
        var u = c[0]
        var l = c[1]
        r[a[0]] = "string" === typeof u ? u : u.name || "<anonymous>"
        r[a[1]] = "string" === typeof l ? l : l.name || "<anonymous>"
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
var z = i.a(i.a({}, r), {
  BrowserTracing: R
})
$_720_index.a()
export default z
