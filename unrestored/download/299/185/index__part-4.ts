/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：185__part-4
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_8 from /* 8 */"./8"
import * as /* [auto-meaningful-name] */Module_22 from /* 22 */"../307/22"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33/index"
import * as /* [auto-meaningful-name] */Module_1 from /* 1 */"./1"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"../307/12"
import * as /* [auto-meaningful-name] */Module_3 from /* 3 */"./3"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"../307/39"
import * as /* [auto-meaningful-name] */Module_179 from /* 179 */"../307/179"
var T = function (e, t, n) {
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
var x = function (e, t) {
  return {
    name: e,
    value: null !== t && undefined !== t ? t : -1,
    delta: 0,
    entries: [],
    id: "v2-" + Date.now() + "-" + (Math.floor(8999999999999 * Math.random()) + 1e12)
  }
}
var j = function (e, t) {
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
var P = function (e, t) {
  var n = function (r) {
    if (!("pagehide" !== r.type && "hidden" !== Module_22.a().document.visibilityState)) {
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
var C = -1
var I = function () {
  if (C < 0) {
    C = "hidden" === Module_22.a().document.visibilityState ? 0 : 1 / 0
    P(function (e) {
      var /* [auto-meaningful-name] */e$timeStamp = e.timeStamp
      C = e$timeStamp
    }, true)
  }
  return {
    get firstHiddenTime() {
      return C
    }
  }
}
var N = {}
var A = Module_22.a()
var R = function () {
  function e(e) {
    if (undefined === e) {
      e = false
    }
    this._reportAllChanges = e
    this._measurements = {}
    this._performanceCursor = 0
    if (!Module_33.b() && A && A.performance && A.document) {
      if (A.performance.mark) {
        A.performance.mark("sentry-tracing-init")
      }
      this._trackCLS()
      this._trackLCP()
      this._trackFID()
    }
  }
  e.prototype.addPerformanceEntries = function (e) {
    var t = this
    if (A && A.performance && A.performance.getEntries && Module_39.a) {
      if (Module_1.a) {
        Module_12.c.log("[Tracing] Adding & adjusting spans using Performance API")
      }
      var n
      var r
      var i = Module_8.c(Module_39.a)
      A.performance.getEntries().slice(this._performanceCursor).forEach(function (o) {
        var u = Module_8.c(o.startTime)
        var c = Module_8.c(o.duration)
        if (!("navigation" === e.op && i + u < e.startTimestamp)) {
          switch (o.entryType) {
            case "navigation":
              !function (e, t, n) {
                ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(function (r) {
                  L(e, t, r, n)
                })
                L(e, t, "secureConnection", n, "TLS/SSL", "connectEnd")
                L(e, t, "fetch", n, "cache", "domainLookupStart")
                L(e, t, "domainLookup", n, "DNS");
                (function (e, t, n) {
                  D(e, {
                    op: "browser",
                    description: "request",
                    startTimestamp: n + Module_8.c(t.requestStart),
                    endTimestamp: n + Module_8.c(t.responseEnd)
                  })
                  D(e, {
                    op: "browser",
                    description: "response",
                    startTimestamp: n + Module_8.c(t.responseStart),
                    endTimestamp: n + Module_8.c(t.responseEnd)
                  })
                })(e, t, n)
              }(e, o, i)
              n = i + Module_8.c(o.responseStart)
              r = i + Module_8.c(o.requestStart)
              break
            case "mark":
            case "paint":
            case "measure":
              var l = function (e, t, n, r, i) {
                  var o = i + n
                  var a = o + r
                  D(e, {
                    description: t.name,
                    endTimestamp: a,
                    op: t.entryType,
                    startTimestamp: o
                  })
                  return o
                }(e, o, u, c, i),
                f = I(),
                p = o.startTime < f.firstHiddenTime
              if ("first-paint" === o.name && p) {
                if (Module_1.a) {
                  Module_12.c.log("[Measurements] Adding FP")
                }
                t._measurements.fp = {
                  value: o.startTime
                }
                t._measurements["mark.fp"] = {
                  value: l
                }
              }
              if ("first-contentful-paint" === o.name && p) {
                if (Module_1.a) {
                  Module_12.c.log("[Measurements] Adding FCP")
                }
                t._measurements.fcp = {
                  value: o.startTime
                }
                t._measurements["mark.fcp"] = {
                  value: l
                }
              }
              break
            case "resource":
              var d = o.name.replace(A.location.origin, "")
              !function (e, t, n, r, i, o) {
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
                D(e, {
                  description: n,
                  endTimestamp: u,
                  op: t.initiatorType ? "resource." + t.initiatorType : "resource",
                  startTimestamp: s,
                  data: a
                })
              }(e, o, d, u, c, i)
          }
        }
      })
      this._performanceCursor = Math.max(performance.getEntries().length - 1, 0)
      this._trackNavigator(e)
      if ("pageload" === e.op) {
        var o = Module_8.c(Module_39.a)
        if ("number" === typeof n) {
          if (Module_1.a) {
            Module_12.c.log("[Measurements] Adding TTFB")
          }
          this._measurements.ttfb = {
            value: 1e3 * (n - e.startTimestamp)
          }
          if ("number" === typeof r && r <= n) {
            this._measurements["ttfb.requestTime"] = {
              value: 1e3 * (n - r)
            }
          }
        }
        ["fcp", "fp", "lcp"].forEach(function (n) {
          if (t._measurements[n] && !(o >= e.startTimestamp)) {
            var /* [auto-meaningful-name] */t$_measurementsN$value = t._measurements[n].value
            var i = o + Module_8.c(t$_measurementsN$value)
            var u = Math.abs(1e3 * (i - e.startTimestamp))
            var c = u - t$_measurementsN$value
            if (Module_1.a) {
              Module_12.c.log("[Measurements] Normalized " + n + " from " + t$_measurementsN$value + " to " + u + " (" + c + ")")
            }
            t._measurements[n].value = u
          }
        })
        if (this._measurements["mark.fid"] && this._measurements.fid) {
          D(e, {
            description: "first input delay",
            endTimestamp: this._measurements["mark.fid"].value + Module_8.c(this._measurements.fid.value),
            op: "web.vitals",
            startTimestamp: this._measurements["mark.fid"].value
          })
        }
        if (!("fcp" in this._measurements)) {
          delete this._measurements.cls
        }
        e.setMeasurements(this._measurements);
        (function (e, t, n) {
          if (t) {
            if (Module_1.a) {
              Module_12.c.log("[Measurements] Adding LCP Data")
            }
            if (t.element) {
              e.setTag("lcp.element", Module_179.b(t.element))
            }
            if (t.id) {
              e.setTag("lcp.id", t.id)
            }
            if (t.url) {
              e.setTag("lcp.url", t.url.trim().slice(0, 200))
            }
            e.setTag("lcp.size", t.size)
          }
          if (n && n.sources) {
            if (Module_1.a) {
              Module_12.c.log("[Measurements] Adding CLS Data")
            }
            n.sources.forEach(function (t, n) {
              return e.setTag("cls.source." + (n + 1), Module_179.b(t.node))
            })
          }
        })(e, this._lcpEntry, this._clsEntry)
        e.setTag("sentry_reportAllChanges", this._reportAllChanges)
      }
    }
  }
  e.prototype._trackNavigator = function (e) {
    var /* [auto-meaningful-name] */A$navigator = A.navigator
    if (A$navigator) {
      var /* [auto-meaningful-name] */A$navigator$connection = A$navigator.connection
      if (A$navigator$connection) {
        if (A$navigator$connection.effectiveType) {
          e.setTag("effectiveConnectionType", A$navigator$connection.effectiveType)
        }
        if (A$navigator$connection.type) {
          e.setTag("connectionType", A$navigator$connection.type)
        }
        if (M(A$navigator$connection.rtt)) {
          this._measurements["connection.rtt"] = {
            value: A$navigator$connection.rtt
          }
        }
        if (M(A$navigator$connection.downlink)) {
          this._measurements["connection.downlink"] = {
            value: A$navigator$connection.downlink
          }
        }
      }
      if (M(A$navigator.deviceMemory)) {
        e.setTag("deviceMemory", String(A$navigator.deviceMemory))
      }
      if (M(A$navigator.hardwareConcurrency)) {
        e.setTag("hardwareConcurrency", String(A$navigator.hardwareConcurrency))
      }
    }
  }
  e.prototype._trackCLS = function () {
    var e = this
    !function (e, t) {
      var n
      var r = x("CLS", 0)
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
      var s = j("layout-shift", a)
      if (s) {
        n = T(e, r, t)
        P(function () {
          s.takeRecords().map(a)
          n(true)
        })
      }
    }(function (t) {
      var n = t.entries.pop()
      if (n) {
        if (Module_1.a) {
          Module_12.c.log("[Measurements] Adding CLS")
        }
        e._measurements.cls = {
          value: t.value
        }
        e._clsEntry = n
      }
    })
  }
  e.prototype._trackLCP = function () {
    var e = this
    !function (e, t) {
      var n
      var r = I()
      var i = x("LCP")
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
      var a = j("largest-contentful-paint", o)
      if (a) {
        n = T(e, i, t)
        var s = function () {
          if (!N[i.id]) {
            a.takeRecords().map(o)
            a.disconnect()
            N[i.id] = true
            n(true)
          }
        };
        ["keydown", "click"].forEach(function (e) {
          addEventListener(e, s, {
            once: true,
            capture: true
          })
        })
        P(s, true)
      }
    }(function (t) {
      var n = t.entries.pop()
      if (n) {
        var r = Module_8.c(Module_39.a)
        var i = Module_8.c(n.startTime)
        if (Module_1.a) {
          Module_12.c.log("[Measurements] Adding LCP")
        }
        e._measurements.lcp = {
          value: t.value
        }
        e._measurements["mark.lcp"] = {
          value: r + i
        }
        e._lcpEntry = n
      }
    }, this._reportAllChanges)
  }
  e.prototype._trackFID = function () {
    var e = this
    !function (e, t) {
      var n
      var r = I()
      var i = x("FID")
      var o = function (e) {
        if (n && e.startTime < r.firstHiddenTime) {
          i.value = e.processingStart - e.startTime
          i.entries.push(e)
          n(true)
        }
      }
      var a = j("first-input", o)
      if (a) {
        n = T(e, i, t)
        P(function () {
          a.takeRecords().map(o)
          a.disconnect()
        }, true)
      }
    }(function (t) {
      var n = t.entries.pop()
      if (n) {
        var r = Module_8.c(Module_39.a)
        var i = Module_8.c(n.startTime)
        if (Module_1.a) {
          Module_12.c.log("[Measurements] Adding FID")
        }
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
function L(e, t, n, r, i, o) {
  var a = o ? t[o] : t[n + "End"]
  var s = t[n + "Start"]
  if (s && a) {
    D(e, {
      op: "browser",
      description: null !== i && undefined !== i ? i : n,
      startTimestamp: r + Module_8.c(s),
      endTimestamp: r + Module_8.c(a)
    })
  }
}
function D(e, t) {
  var /* [auto-meaningful-name] */t$startTimestamp = t.startTimestamp
  var r = Module_3.d(t, ["startTimestamp"])
  if (t$startTimestamp && e.startTimestamp > t$startTimestamp) {
    e.startTimestamp = t$startTimestamp
  }
  return e.startChild(Module_3.a({
    startTimestamp: t$startTimestamp
  }, r))
}
function M(e) {
  return "number" === typeof e && isFinite(e)
}
export { R }
