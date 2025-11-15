/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2575
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.lzw = undefined
exports.lzw = function (e, t, n) {
  var r
  var o
  var i
  var a
  var s
  var c
  var l
  var u
  var d
  var p
  var f
  var h
  var m
  var g
  var _
  var v
  var b = n
  var y = new Array(n)
  var E = new Array(4096)
  var O = new Array(4096)
  var w = new Array(4097)
  for (s = (o = 1 << (p = e)) + 1, r = o + 2, l = -1, i = (1 << (a = p + 1)) - 1, u = 0; u < o; u++) {
    E[u] = 0
    O[u] = u
  }
  for (f = h = m = g = _ = v = 0, d = 0; d < b;) {
    if (0 === g) {
      if (h < a) {
        f += t[v] << h
        h += 8
        v++
        continue
      }
      u = f & i
      f >>= a
      h -= a
      if (u > r || u == s) {
        break
      }
      if (u == o) {
        i = (1 << (a = p + 1)) - 1
        r = o + 2
        l = -1
        continue
      }
      if (-1 == l) {
        w[g++] = O[u]
        l = u
        m = u
        continue
      }
      for (c = u, u == r && (w[g++] = m, u = l); u > o;) {
        w[g++] = O[u]
        u = E[u]
      }
      m = 255 & O[u]
      w[g++] = m
      if (r < 4096) {
        E[r] = l
        O[r] = m
        if (0 === (++r & i) && r < 4096) {
          a++
          i += r
        }
      }
      l = c
    }
    g--
    y[_++] = w[g]
    d++
  }
  for (d = _; d < b; d++) {
    y[d] = 0
  }
  return y
}
