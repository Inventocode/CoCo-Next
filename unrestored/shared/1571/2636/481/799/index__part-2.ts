/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：799__part-2
 */

"use strict"

import * as /* [auto-meaningful-name] */$_220_index from "./220/index"
import * as /* [auto-meaningful-name] */$_365 from "./365"
import * as /* [auto-meaningful-name] */$_264 from "./264"
import * as i from "./38"
import * as /* [auto-meaningful-name] */$_524 from "./524"
import * as /* [auto-meaningful-name] */$_939 from "./939"
import * as /* [auto-meaningful-name] */$_1194 from "./1194"
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
var w = $_365.b()
var E = function () {
  function e() {
    var e
    var t
    this._measurements = {}
    this._performanceCursor = 0
    if (!$_524.b() && (null === (e = w) || undefined === e ? undefined : e.performance) && (null === (t = w) || undefined === t ? undefined : t.document)) {
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
    if (w && w.performance && w.performance.getEntries && $_939.a) {
      $_264.a.log("[Tracing] Adding & adjusting spans using Performance API")
      var /* [auto-meaningful-name] */w$document$scriptsU$src
      var r
      var i
      var a
      var s
      var c = $_220_index.d($_939.a)
      if (w.document && w.document.scripts) {
        for (var u = 0; u < w.document.scripts.length; u++) {
          if ("true" === w.document.scripts[u].dataset.entry) {
            w$document$scriptsU$src = w.document.scripts[u].src
            break
          }
        }
      }
      w.performance.getEntries().slice(this._performanceCursor).forEach(function (u) {
        var f = $_220_index.d(u.startTime)
        var d = $_220_index.d(u.duration)
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
                    startTimestamp: n + $_220_index.d(t.requestStart),
                    endTimestamp: n + $_220_index.d(t.responseEnd)
                  })
                  C(e, {
                    op: "browser",
                    description: "response",
                    startTimestamp: n + $_220_index.d(t.responseStart),
                    endTimestamp: n + $_220_index.d(t.responseEnd)
                  })
                })(e, t, n)
              }(e, u, c)
              a = c + $_220_index.d(u.responseStart)
              s = c + $_220_index.d(u.requestStart)
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
                $_264.a.log("[Measurements] Adding FP")
                t._measurements.fp = {
                  value: u.startTime
                }
                t._measurements["mark.fp"] = {
                  value: h
                }
              }
              if ("first-contentful-paint" === u.name && _) {
                $_264.a.log("[Measurements] Adding FCP")
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
        var f = $_220_index.d($_939.a)
        if ("number" === typeof a) {
          $_264.a.log("[Measurements] Adding TTFB")
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
            var i = f + $_220_index.d(t$_measurementsN$value)
            var a = Math.abs(1e3 * (i - e.startTimestamp))
            var s = a - t$_measurementsN$value
            $_264.a.log("[Measurements] Normalized " + n + " from " + t$_measurementsN$value + " to " + a + " (" + s + ")")
            t._measurements[n].value = a
          }
        })
        if (this._measurements["mark.fid"] && this._measurements.fid) {
          C(e, {
            description: "first input delay",
            endTimestamp: this._measurements["mark.fid"].value + $_220_index.d(this._measurements.fid.value),
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
      $_264.a.log("[Measurements] Adding LCP Data")
      if (this._lcpEntry.element) {
        e.setTag("lcp.element", $_1194.a(this._lcpEntry.element))
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
      $_264.a.log("[Measurements] Adding CLS Data")
      this._clsEntry.sources.forEach(function (t, n) {
        return e.setTag("cls.source." + (n + 1), $_1194.a(t.node))
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
        $_264.a.log("[Measurements] Adding CLS")
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
        var r = $_220_index.d($_939.a)
        var i = $_220_index.d(n.startTime)
        $_264.a.log("[Measurements] Adding LCP")
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
        var r = $_220_index.d($_939.a)
        var i = $_220_index.d(n.startTime)
        $_264.a.log("[Measurements] Adding FID")
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
      startTimestamp: e$timeOrigin + $_220_index.d(c),
      endTimestamp: e$timeOrigin + $_220_index.d(s)
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
export { E }
