/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2291
 */

var n = 1e3
var r = 6e4
var i = 60 * r
var o = 24 * i
function a(e, t, n, r) {
  var i = t >= 1.5 * n
  return Math.round(e / n) + " " + r + (i ? "s" : "")
}
module.exports = function (e, t) {
  t = t || {}
  var s = typeof e
  if ("string" === s && e.length > 0) {
    return function (e) {
      if ((e = String(e)).length > 100) {
        return
      }
      var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e)
      if (!t) {
        return
      }
      var a = parseFloat(t[1])
      switch ((t[2] || "ms").toLowerCase()) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return 315576e5 * a
        case "weeks":
        case "week":
        case "w":
          return 6048e5 * a
        case "days":
        case "day":
        case "d":
          return a * o
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return a * i
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return a * r
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return a * n
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return a
        default:
          return
      }
    }(e)
  }
  if ("number" === s && isFinite(e)) {
    return t.long ? function (e) {
      var t = Math.abs(e)
      if (t >= o) {
        return a(e, t, o, "day")
      }
      if (t >= i) {
        return a(e, t, i, "hour")
      }
      if (t >= r) {
        return a(e, t, r, "minute")
      }
      if (t >= n) {
        return a(e, t, n, "second")
      }
      return e + " ms"
    }(e) : function (e) {
      var t = Math.abs(e)
      if (t >= o) {
        return Math.round(e / o) + "d"
      }
      if (t >= i) {
        return Math.round(e / i) + "h"
      }
      if (t >= r) {
        return Math.round(e / r) + "m"
      }
      if (t >= n) {
        return Math.round(e / n) + "s"
      }
      return e + "ms"
    }(e)
  }
  throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
}
