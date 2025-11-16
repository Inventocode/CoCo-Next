/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：49__part-2
 */

"use strict"

import * as c from "./6"
import * as /* [auto-meaningful-name] */$$_72_14 from "../72/14"
import * as /* [auto-meaningful-name] */$$_72_8 from "../72/8"
import * as i from "./1"
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
export { w as "49__part-2__w" }
