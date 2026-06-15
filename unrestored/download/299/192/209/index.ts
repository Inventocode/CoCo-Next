/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：209
 */

"use strict"

var r = require(/* 13 */"../288/13/index")
var i = require(/* 10 */"../208/10")
var o = require(/* 41 */"../275/41")
var a = require(/* 29 */"../204/29")
var s = require(/* 31 */"../204/31")
var u = require(/* 210 */"./210")
var c = require(/* 36 */"./36")
var l = require(/* 9 */"../275/9")
var f = require(/* 110 */"./110")
var p = require(/* 211 */"./211")
var d = require(/* 143 */"./143/index")
var h = require(/* 144 */"./144")
var g = require(/* 96 */"./96")
var m = require(/* 145 */"./145")
var v = []
var y = i(v.sort)
var _ = i(v.push)
var b = l(function () {
  v.sort(undefined)
})
var w = l(function () {
  v.sort(null)
})
var S = p("sort")
var k = !l(function () {
  if (g) {
    return g < 70
  }
  if (!(d && d > 3)) {
    if (h) {
      return true
    }
    if (m) {
      return m < 603
    }
    var e
    var t
    var n
    var r
    var i = ""
    for (e = 65; e < 76; e++) {
      switch (t = String.fromCharCode(e), e) {
        case 66:
        case 69:
        case 70:
        case 72:
          n = 3
          break
        case 68:
        case 71:
          n = 4
          break
        default:
          n = 2
      }
      for (r = 0; r < 47; r++) {
        v.push({
          k: t + r,
          v: n
        })
      }
    }
    for (v.sort(function (e, t) {
      return t.v - e.v
    }), r = 0; r < v.length; r++) {
      t = v[r].k.charAt(0)
      if (i.charAt(i.length - 1) !== t) {
        i += t
      }
    }
    return "DGBEFHACIJK" !== i
  }
})
r({
  target: "Array",
  proto: true,
  forced: b || !w || !S || !k
}, {
  sort: function (e) {
    if (undefined !== e) {
      o(e)
    }
    var t = a(this)
    if (k) {
      return undefined === e ? y(t) : y(t, e)
    }
    var n
    var r
    var i = []
    var l = s(t)
    for (r = 0; r < l; r++) {
      if (r in t) {
        _(i, t[r])
      }
    }
    for (f(i, function (e) {
      return function (t, n) {
        return undefined === n ? -1 : undefined === t ? 1 : undefined !== e ? +e(t, n) || 0 : c(t) > c(n) ? 1 : -1
      }
    }(e)), n = s(i), r = 0; r < n;) {
      t[r] = i[r++]
    }
    for (; r < l;) {
      u(t, r++)
    }
    return t
  }
})
