/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：382
 */

"use strict"

var r = function (t) {
  var e = "function" === typeof Symbol && Symbol.iterator
  var n = e && t[e]
  var r = 0
  if (n) {
    return n.call(t)
  }
  if (t && "number" === typeof t.length) {
    return {
      next: function () {
        if (t && r >= t.length) {
          t = undefined
        }
        return {
          value: t && t[r++],
          done: !t
        }
      }
    }
  }
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
var i = function () {
  function t() {}
  t.getRSSvalue = function (e, n, i) {
    var o
    var /* [auto-meaningful-name] */u$return
    var s = 0
    try {
      for (var u = r(e), c = u.next(); !c.done; c = u.next()) {
        s += c.value
      }
    } catch (v) {
      o = {
        error: v
      }
    } finally {
      try {
        if (c && !c.done && (u$return = u.return)) {
          u$return.call(u)
        }
      } finally {
        if (o) {
          throw o.error
        }
      }
    }
    for (var l = 0, d = 0, e$length = e.length, h = 0; h < e$length - 1; h++) {
      var p = undefined
      for (p = 1, d |= 1 << h; p < e[h]; p++, d &= ~(1 << h)) {
        var m = t.combins(s - p - 1, e$length - h - 2)
        if (i && 0 === d && s - p - (e$length - h - 1) >= e$length - h - 1) {
          m -= t.combins(s - p - (e$length - h), e$length - h - 2)
        }
        if (e$length - h - 1 > 1) {
          for (var b = 0, g = s - p - (e$length - h - 2); g > n; g--) {
            b += t.combins(s - p - g - 1, e$length - h - 3)
          }
          m -= b * (e$length - 1 - h)
        } else if (s - p > n) {
          m--
        }
        l += m
      }
      s -= p
    }
    return l
  }
  t.combins = function (t, e) {
    var n
    var r
    if (t - e > e) {
      r = e
      n = t - e
    } else {
      r = t - e
      n = e
    }
    for (var i = 1, o = 1, a = t; a > n; a--) {
      i *= a
      if (o <= r) {
        i /= o
        o++
      }
    }
    for (; o <= r;) {
      i /= o
      o++
    }
    return i
  }
  return t
}()
exports.a = i
