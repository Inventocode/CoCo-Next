/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1575
 */

"use strict"

var r
var i
var o
var a
var s
if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
  var c = null
  var u = null
  var l = function e() {
    if (null !== c) {
      try {
        var n = exports.unstable_now()
        c(true, n)
        c = null
      } catch (r) {
        setTimeout(e, 0)
        throw r
      }
    }
  }
  var f = Date.now()
  exports.unstable_now = function () {
    return Date.now() - f
  }
  r = function (e) {
    if (null !== c) {
      setTimeout(r, 0, e)
    } else {
      c = e
      setTimeout(l, 0)
    }
  }
  i = function (e, t) {
    u = setTimeout(e, t)
  }
  o = function () {
    clearTimeout(u)
  }
  a = function () {
    return false
  }
  s = exports.unstable_forceFrameRate = function () {}
} else {
  var /* [auto-meaningful-name] */window$performance = window.performance
  var /* [auto-meaningful-name] */window$Date = window.Date
  var /* [auto-meaningful-name] */window$setTimeout = window.setTimeout
  var /* [auto-meaningful-name] */window$clearTimeout = window.clearTimeout
  if ("undefined" !== typeof console) {
    var /* [auto-meaningful-name] */window$cancelAnimationFrame = window.cancelAnimationFrame
    if ("function" !== typeof window.requestAnimationFrame) {
      console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")
    }
    if ("function" !== typeof window$cancelAnimationFrame) {
      console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")
    }
  }
  if ("object" === typeof window$performance && "function" === typeof window$performance.now) {
    exports.unstable_now = function () {
      return window$performance.now()
    }
  } else {
    var g = window$Date.now()
    exports.unstable_now = function () {
      return window$Date.now() - g
    }
  }
  var v = false
  var m = null
  var y = -1
  var b = 5
  var w = 0
  a = function () {
    return exports.unstable_now() >= w
  }
  s = function () {}
  exports.unstable_forceFrameRate = function (e) {
    if (0 > e || 125 < e) {
      console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported")
    } else {
      b = 0 < e ? Math.floor(1e3 / e) : 5
    }
  }
  var E = new MessageChannel()
  var /* [auto-meaningful-name] */E$port2 = E.port2
  E.port1.onmessage = function () {
    if (null !== m) {
      var e = exports.unstable_now()
      w = e + b
      try {
        if (m(true, e)) {
          E$port2.postMessage(null)
        } else {
          v = false
          m = null
        }
      } catch (n) {
        E$port2.postMessage(null)
        throw n
      }
    } else {
      v = false
    }
  }
  r = function (e) {
    m = e
    if (!v) {
      v = true
      E$port2.postMessage(null)
    }
  }
  i = function (e, n) {
    y = window$setTimeout(function () {
      e(exports.unstable_now())
    }, n)
  }
  o = function () {
    window$clearTimeout(y)
    y = -1
  }
}
function C(e, t) {
  var /* [auto-meaningful-name] */e$length = e.length
  e.push(t)
  e: for (;;) {
    var r = e$length - 1 >>> 1
    var i = e[r]
    if (!(undefined !== i && 0 < S(i, t))) {
      break e
    }
    e[r] = t
    e[e$length] = i
    e$length = r
  }
}
function O(e) {
  return undefined === (e = e[0]) ? null : e
}
function k(e) {
  var t = e[0]
  if (undefined !== t) {
    var n = e.pop()
    if (n !== t) {
      e[0] = n
      e: for (var r = 0, /* [auto-meaningful-name] */e$length = e.length; r < e$length;) {
        var o = 2 * (r + 1) - 1
        var a = e[o]
        var s = o + 1
        var c = e[s]
        if (undefined !== a && 0 > S(a, n)) {
          if (undefined !== c && 0 > S(c, a)) {
            e[r] = c
            e[s] = n
            r = s
          } else {
            e[r] = a
            e[o] = n
            r = o
          }
        } else {
          if (!(undefined !== c && 0 > S(c, n))) {
            break e
          }
          e[r] = c
          e[s] = n
          r = s
        }
      }
    }
    return t
  }
  return null
}
function S(e, t) {
  var n = e.sortIndex - t.sortIndex
  return 0 !== n ? n : e.id - t.id
}
var T = []
var B = []
var D = 1
var I = null
var R = 3
var F = false
var P = false
var N = false
function M(e) {
  for (var t = O(B); null !== t;) {
    if (null === t.callback) {
      k(B)
    } else {
      if (!(t.startTime <= e)) {
        break
      }
      k(B)
      t.sortIndex = t.expirationTime
      C(T, t)
    }
    t = O(B)
  }
}
function L(e) {
  N = false
  M(e)
  if (!P) {
    if (null !== O(T)) {
      P = true
      r(j)
    } else {
      var t = O(B)
      if (null !== t) {
        i(L, t.startTime - e)
      }
    }
  }
}
function j(e, n) {
  P = false
  if (N) {
    N = false
    o()
  }
  F = true
  var r = R
  try {
    for (M(n), I = O(T); null !== I && (!(I.expirationTime > n) || e && !a());) {
      var /* [auto-meaningful-name] */I$callback = I.callback
      if (null !== I$callback) {
        I.callback = null
        R = I.priorityLevel
        var c = I$callback(I.expirationTime <= n)
        n = exports.unstable_now()
        if ("function" === typeof c) {
          I.callback = c
        } else {
          if (I === O(T)) {
            k(T)
          }
        }
        M(n)
      } else {
        k(T)
      }
      I = O(T)
    }
    if (null !== I) {
      var u = true
    } else {
      var l = O(B)
      if (null !== l) {
        i(L, l.startTime - n)
      }
      u = false
    }
    return u
  } finally {
    I = null
    R = r
    F = false
  }
}
function U(e) {
  switch (e) {
    case 1:
      return -1
    case 2:
      return 250
    case 5:
      return 1073741823
    case 4:
      return 1e4
    default:
      return 5e3
  }
}
var H = s
exports.unstable_IdlePriority = 5
exports.unstable_ImmediatePriority = 1
exports.unstable_LowPriority = 4
exports.unstable_NormalPriority = 3
exports.unstable_Profiling = null
exports.unstable_UserBlockingPriority = 2
exports.unstable_cancelCallback = function (e) {
  e.callback = null
}
exports.unstable_continueExecution = function () {
  if (!(P || F)) {
    P = true
    r(j)
  }
}
exports.unstable_getCurrentPriorityLevel = function () {
  return R
}
exports.unstable_getFirstCallbackNode = function () {
  return O(T)
}
exports.unstable_next = function (e) {
  switch (R) {
    case 1:
    case 2:
    case 3:
      var t = 3
      break
    default:
      t = R
  }
  var n = R
  R = t
  try {
    return e()
  } finally {
    R = n
  }
}
exports.unstable_pauseExecution = function () {}
exports.unstable_requestPaint = H
exports.unstable_runWithPriority = function (e, t) {
  switch (e) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break
    default:
      e = 3
  }
  var n = R
  R = e
  try {
    return t()
  } finally {
    R = n
  }
}
exports.unstable_scheduleCallback = function (e, n, a) {
  var s = exports.unstable_now()
  if ("object" === typeof a && null !== a) {
    var /* [auto-meaningful-name] */a$delay = a.delay
    a$delay = "number" === typeof a$delay && 0 < a$delay ? s + a$delay : s
    a = "number" === typeof a.timeout ? a.timeout : U(e)
  } else {
    a = U(e)
    a$delay = s
  }
  e = {
    id: D++,
    callback: n,
    priorityLevel: e,
    startTime: a$delay,
    expirationTime: a = a$delay + a,
    sortIndex: -1
  }
  if (a$delay > s) {
    e.sortIndex = a$delay
    C(B, e)
    if (null === O(T) && e === O(B)) {
      if (N) {
        o()
      } else {
        N = true
      }
      i(L, a$delay - s)
    }
  } else {
    e.sortIndex = a
    C(T, e)
    if (!(P || F)) {
      P = true
      r(j)
    }
  }
  return e
}
exports.unstable_shouldYield = function () {
  var e = exports.unstable_now()
  M(e)
  var n = O(T)
  return n !== I && null !== I && null !== n && null !== n.callback && n.startTime <= e && n.expirationTime < I.expirationTime || a()
}
exports.unstable_wrapCallback = function (e) {
  var t = R
  return function () {
    var n = R
    R = t
    try {
      return e.apply(this, arguments)
    } finally {
      R = n
    }
  }
}
