/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：3277
 */

"use strict"

export { v as getCLS }
export { g as getFCP }
export { h as getFID }
export { y as getLCP }
export { F as getTTFB }
var i
var a
var r = function () {
  return "".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
}
var o = function (t) {
  var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : -1
  return {
    name: t,
    value: n,
    delta: 0,
    entries: [],
    id: r(),
    isFinal: false
  }
}
var u = function (t, n) {
  try {
    if (PerformanceObserver.supportedEntryTypes.includes(t)) {
      var e = new PerformanceObserver(function (t) {
        return t.getEntries().map(n)
      })
      e.observe({
        type: t,
        buffered: true
      })
      return e
    }
  } catch (t) {}
}
var c = false
var s = false
var p = function (t) {
  c = !t.persisted
}
var f = function () {
  addEventListener("pagehide", p)
  addEventListener("beforeunload", function () {})
}
var d = function (t) {
  var n = arguments.length > 1 && undefined !== arguments[1] && arguments[1]
  if (!s) {
    f()
    s = true
  }
  addEventListener("visibilitychange", function (n) {
    var /* [auto-meaningful-name] */n$timeStamp = n.timeStamp
    if ("hidden" === document.visibilityState) {
      t({
        timeStamp: n$timeStamp,
        isUnloading: c
      })
    }
  }, {
    capture: true,
    once: n
  })
}
var l = function (t, n, e, i) {
  var /* [auto-meaningful-name] */n$value
  return function () {
    if (e && n.isFinal) {
      e.disconnect()
    }
    if (n.value >= 0 && (i || n.isFinal || "hidden" === document.visibilityState)) {
      n.delta = n.value - (n$value || 0)
      if (n.delta || n.isFinal || undefined === n$value) {
        t(n)
        n$value = n.value
      }
    }
  }
}
var v = function (t) {
  var n
  var e = arguments.length > 1 && undefined !== arguments[1] && arguments[1]
  var i = o("CLS", 0)
  var a = function (t) {
    if (!t.hadRecentInput) {
      i.value += t.value
      i.entries.push(t)
      n()
    }
  }
  var r = u("layout-shift", a)
  if (r) {
    n = l(t, i, r, e)
    d(function (t) {
      var /* [auto-meaningful-name] */t$isUnloading = t.isUnloading
      r.takeRecords().map(a)
      if (t$isUnloading) {
        i.isFinal = true
      }
      n()
    })
  }
}
var m = function () {
  if (undefined === i) {
    i = "hidden" === document.visibilityState ? 0 : 1 / 0
    d(function (t) {
      var /* [auto-meaningful-name] */t$timeStamp = t.timeStamp
      return i = t$timeStamp
    }, true)
  }
  return {
    get timeStamp() {
      return i
    }
  }
}
var g = function (t) {
  var n
  var e = o("FCP")
  var i = m()
  var a = u("paint", function (t) {
    if ("first-contentful-paint" === t.name && t.startTime < i.timeStamp) {
      e.value = t.startTime
      e.isFinal = true
      e.entries.push(t)
      n()
    }
  })
  if (a) {
    n = l(t, e, a)
  }
}
var h = function (t) {
  var n = o("FID")
  var e = m()
  var i = function (t) {
    if (t.startTime < e.timeStamp) {
      n.value = t.processingStart - t.startTime
      n.entries.push(t)
      n.isFinal = true
      r()
    }
  }
  var a = u("first-input", i)
  var r = l(t, n, a)
  if (a) {
    d(function () {
      a.takeRecords().map(i)
      a.disconnect()
    }, true)
  } else {
    if (window.perfMetrics && window.perfMetrics.onFirstInputDelay) {
      window.perfMetrics.onFirstInputDelay(function (t, i) {
        if (i.timeStamp < e.timeStamp) {
          n.value = t
          n.isFinal = true
          n.entries = [{
            entryType: "first-input",
            name: i.type,
            target: i.target,
            cancelable: i.cancelable,
            startTime: i.timeStamp,
            processingStart: i.timeStamp + t
          }]
          r()
        }
      })
    }
  }
}
var S = function () {
  if (!a) {
    a = new Promise(function (t) {
      return ["scroll", "keydown", "pointerdown"].map(function (n) {
        addEventListener(n, t, {
          once: true,
          passive: true,
          capture: true
        })
      })
    })
  }
  return a
}
var y = function (t) {
  var n
  var e = arguments.length > 1 && undefined !== arguments[1] && arguments[1]
  var i = o("LCP")
  var a = m()
  var r = function (t) {
    var /* [auto-meaningful-name] */t$startTime = t.startTime
    if (t$startTime < a.timeStamp) {
      i.value = t$startTime
      i.entries.push(t)
    } else {
      i.isFinal = true
    }
    n()
  }
  var c = u("largest-contentful-paint", r)
  if (c) {
    n = l(t, i, c, e)
    var s = function () {
      if (!i.isFinal) {
        c.takeRecords().map(r)
        i.isFinal = true
        n()
      }
    }
    S().then(s)
    d(s, true)
  }
}
var F = function (t) {
  var n
  var e = o("TTFB")
  n = function () {
    try {
      var n = performance.getEntriesByType("navigation")[0] || function () {
        var /* [auto-meaningful-name] */performance$timing = performance.timing
        var n = {
          entryType: "navigation",
          startTime: 0
        }
        for (var e in performance$timing) if ("navigationStart" !== e && "toJSON" !== e) {
          n[e] = Math.max(performance$timing[e] - performance$timing.navigationStart, 0)
        }
        return n
      }()
      e.value = e.delta = n.responseStart
      e.entries = [n]
      e.isFinal = true
      t(e)
    } catch (t) {}
  }
  if ("complete" === document.readyState) {
    setTimeout(n, 0)
  } else {
    addEventListener("pageshow", n)
  }
}
