/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：348
 */

"use strict"

var r = require("./63")
var i = function () {
  function t() {}
  t.applyMaskPenaltyRule1 = function (e) {
    return t.applyMaskPenaltyRule1Internal(e, true) + t.applyMaskPenaltyRule1Internal(e, false)
  }
  t.applyMaskPenaltyRule2 = function (e) {
    for (var n = 0, r = e.getArray(), i = e.getWidth(), o = e.getHeight(), a = 0; a < o - 1; a++) {
      for (var s = r[a], u = 0; u < i - 1; u++) {
        var c = s[u]
        if (c === s[u + 1] && c === r[a + 1][u] && c === r[a + 1][u + 1]) {
          n++
        }
      }
    }
    return t.N2 * n
  }
  t.applyMaskPenaltyRule3 = function (e) {
    for (var n = 0, r = e.getArray(), i = e.getWidth(), o = e.getHeight(), a = 0; a < o; a++) {
      for (var s = 0; s < i; s++) {
        var u = r[a]
        if (s + 6 < i && 1 === u[s] && 0 === u[s + 1] && 1 === u[s + 2] && 1 === u[s + 3] && 1 === u[s + 4] && 0 === u[s + 5] && 1 === u[s + 6] && (t.isWhiteHorizontal(u, s - 4, s) || t.isWhiteHorizontal(u, s + 7, s + 11))) {
          n++
        }
        if (a + 6 < o && 1 === r[a][s] && 0 === r[a + 1][s] && 1 === r[a + 2][s] && 1 === r[a + 3][s] && 1 === r[a + 4][s] && 0 === r[a + 5][s] && 1 === r[a + 6][s] && (t.isWhiteVertical(r, s, a - 4, a) || t.isWhiteVertical(r, s, a + 7, a + 11))) {
          n++
        }
      }
    }
    return n * t.N3
  }
  t.isWhiteHorizontal = function (t, e, n) {
    e = Math.max(e, 0)
    n = Math.min(n, t.length)
    for (var r = e; r < n; r++) {
      if (1 === t[r]) {
        return false
      }
    }
    return true
  }
  t.isWhiteVertical = function (t, e, n, r) {
    n = Math.max(n, 0)
    r = Math.min(r, t.length)
    for (var i = n; i < r; i++) {
      if (1 === t[i][e]) {
        return false
      }
    }
    return true
  }
  t.applyMaskPenaltyRule4 = function (e) {
    for (var n = 0, r = e.getArray(), i = e.getWidth(), o = e.getHeight(), a = 0; a < o; a++) {
      for (var s = r[a], u = 0; u < i; u++) {
        if (1 === s[u]) {
          n++
        }
      }
    }
    var c = e.getHeight() * e.getWidth()
    return Math.floor(10 * Math.abs(2 * n - c) / c) * t.N4
  }
  t.getDataMaskBit = function (t, e, n) {
    var i
    var o
    switch (t) {
      case 0:
        i = n + e & 1
        break
      case 1:
        i = 1 & n
        break
      case 2:
        i = e % 3
        break
      case 3:
        i = (n + e) % 3
        break
      case 4:
        i = Math.floor(n / 2) + Math.floor(e / 3) & 1
        break
      case 5:
        i = (1 & (o = n * e)) + o % 3
        break
      case 6:
        i = (1 & (o = n * e)) + o % 3 & 1
        break
      case 7:
        i = (o = n * e) % 3 + (n + e & 1) & 1
        break
      default:
        throw new r.a("Invalid mask pattern: " + t)
    }
    return 0 === i
  }
  t.applyMaskPenaltyRule1Internal = function (e, n) {
    for (var r = 0, i = n ? e.getHeight() : e.getWidth(), o = n ? e.getWidth() : e.getHeight(), a = e.getArray(), s = 0; s < i; s++) {
      for (var u = 0, c = -1, l = 0; l < o; l++) {
        var d = n ? a[s][l] : a[l][s]
        if (d === c) {
          u++
        } else {
          if (u >= 5) {
            r += t.N1 + (u - 5)
          }
          u = 1
          c = d
        }
      }
      if (u >= 5) {
        r += t.N1 + (u - 5)
      }
    }
    return r
  }
  t.N1 = 3
  t.N2 = 3
  t.N3 = 40
  t.N4 = 10
  return t
}()
exports.a = i
