/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：691__part-3
 */

"use strict"

import * as /* [auto-meaningful-name] */$_32_index from "./32/index"
var r
import * as /* [auto-meaningful-name] */$_744_index from "./744/index"
var g = function (e, t) {
  var n = "function" === typeof Symbol && e[Symbol.iterator]
  if (!n) {
    return e
  }
  var r
  var i
  var o = n.call(e)
  var a = []
  try {
    for (; (undefined === t || t-- > 0) && !(r = o.next()).done;) {
      a.push(r.value)
    }
  } catch (s) {
    i = {
      error: s
    }
  } finally {
    try {
      if (r && !r.done && (n = o.return)) {
        n.call(o)
      }
    } finally {
      if (i) {
        throw i.error
      }
    }
  }
  return a
}
var v = function () {
  for (var e = [], t = 0; t < arguments.length; t++) {
    e = e.concat(g(arguments[t]))
  }
  return e
}
function m(e, t, n, i) {
  i = i || {
    mode: "vertex"
  }
  for (var o, s, c, u, l, f = [], d = -1, /* [auto-meaningful-name] */r$SKIP = r.SKIP, p = 0, /* [auto-meaningful-name] */e$length = e.length, A = 3; A < e$length; A++) {
    if (e[A] >>> 24 > 0) {
      d = A
      break
    }
  }
  if (d >= 0) {
    o = c = d % t | 0
    s = u = d / t | 0
    do {
      switch ((l = m(o, s)) === r.MOVE_UP ? s-- : l === r.MOVE_DOWN ? s++ : l === r.MOVE_LEFT ? o-- : l === r.MOVE_RIGHT && o++, i.mode) {
        case "vertex":
          if (l !== r$SKIP) {
            f.push(new $_32_index.m(o, s))
          }
          break
        case "step":
          if (p % i.step === 0) {
            f.push(new $_32_index.m(o, s))
          }
          break
        case "mixed":
          if (l !== r$SKIP) {
            f.push(new $_32_index.m(o, s))
            p = 0
          } else {
            if (p % i.step === 0) {
              f.push(new $_32_index.m(o, s))
            }
          }
      }
      r$SKIP = l
      p++
    } while (o !== c || s !== u)
    if (i.tolerance) {
      f = function e(t, n, r) {
        var i = t.length - 1
        if (i < 2) {
          return t
        }
        for (var o = t[0], s = t[i], c = n * n, u = -1, l = 0, f = 1; f < i; f++) {
          var d = y(t[f], o, s)
          if (d > l) {
            l = d
            u = f
          }
        }
        if (l <= c) {
          if (!r) {
            return [o, s]
          }
          var h = Math.floor(Math.sqrt(b(o, s)) / r)
          var p = []
          for (f = 1; f < h; f++) {
            p.push(new $_32_index.m(o.x + (s.x - o.x) * f / h, o.y + (s.y - o.y) * f / h))
          }
          return v([o], p, [s])
        }
        var _ = t.slice(0, u + 1)
        var A = t.slice(u)
        var g = e(_, n, r)
        var m = e(A, n, r)
        return g.slice(0, g.length - 1).concat(m)
      }(f, i.tolerance, i.step)
    }
  }
  function g(r, i) {
    return r >= 0 && i >= 0 && r < t && i < n && e[i * t + r] >>> 24 > 0
  }
  function m(e, t) {
    var n
    var i = 0
    if (g(e - 1, t - 1)) {
      i |= 1
    }
    if (g(e, t - 1)) {
      i |= 2
    }
    if (g(e - 1, t)) {
      i |= 4
    }
    if (g(e, t)) {
      i |= 8
    }
    return 6 === i ? r$SKIP === r.MOVE_UP ? r.MOVE_LEFT : r.MOVE_RIGHT : 9 === i ? r$SKIP === r.MOVE_RIGHT ? r.MOVE_UP : r.MOVE_DOWN : 1 === (n = i) || 5 === n || 13 === n ? r.MOVE_UP : 8 === n || 10 === n || 11 === n ? r.MOVE_DOWN : 4 === n || 12 === n || 14 === n ? r.MOVE_LEFT : 2 === n || 3 === n || 7 === n ? r.MOVE_RIGHT : r.SKIP
  }
  return f
}
function y(e, t, n) {
  var r = b(t, n)
  if (!r) {
    return 0
  }
  var i = ((e.x - t.x) * (n.x - t.x) + (e.y - t.y) * (n.y - t.y)) / r
  return b(e, i < 0 ? t : i > 1 ? n : new $_32_index.m(t.x + i * (n.x - t.x), t.y + i * (n.y - t.y)))
}
function b(e, t) {
  var n = e.x - t.x
  var r = e.y - t.y
  return n * n + r * r
}
!function (e) {
  e[e.MOVE_UP = 0] = "MOVE_UP"
  e[e.MOVE_DOWN = 1] = "MOVE_DOWN"
  e[e.MOVE_LEFT = 2] = "MOVE_LEFT"
  e[e.MOVE_RIGHT = 3] = "MOVE_RIGHT"
  e[e.SKIP = 4] = "SKIP"
}(r || (r = {}))
export { m }
