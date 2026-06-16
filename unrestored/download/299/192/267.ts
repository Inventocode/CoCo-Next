/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：267
 */

"use strict"

var r = require(/* 6 */"./275/6")
var i = require(/* 107 */"./225/107")
var o = require(/* 9 */"./275/9")
var a = require(/* 41 */"./275/41")
var s = require(/* 110 */"./209/110")
var u = require(/* 49 */"./263/49/index")
var c = require(/* 143 */"./209/143/index")
var l = require(/* 144 */"./209/144")
var f = require(/* 96 */"./209/96")
var p = require(/* 145 */"./209/145")
var /* [auto-meaningful-name] */u$aTypedArray = u.aTypedArray
var /* [auto-meaningful-name] */u$exportTypedArrayMethod = u.exportTypedArrayMethod
var /* [auto-meaningful-name] */r$Uint16Array = r.Uint16Array
var m = r$Uint16Array && i(r$Uint16Array.prototype.sort)
var v = !!m && !(o(function () {
  m(new r$Uint16Array(2), null)
}) && o(function () {
  m(new r$Uint16Array(2), {})
}))
var y = !!m && !o(function () {
  if (f) {
    return f < 74
  }
  if (c) {
    return c < 67
  }
  if (l) {
    return true
  }
  if (p) {
    return p < 602
  }
  var e
  var t
  var n = new r$Uint16Array(516)
  var r = Array(516)
  for (e = 0; e < 516; e++) {
    t = e % 4
    n[e] = 515 - e
    r[e] = e - 2 * t + 3
  }
  for (m(n, function (e, t) {
    return (e / 4 | 0) - (t / 4 | 0)
  }), e = 0; e < 516; e++) {
    if (n[e] !== r[e]) {
      return true
    }
  }
})
u$exportTypedArrayMethod("sort", function (e) {
  if (undefined !== e) {
    a(e)
  }
  return y ? m(this, e) : s(u$aTypedArray(this), function (e) {
    return function (t, n) {
      return undefined !== e ? +e(t, n) || 0 : n !== n ? -1 : t !== t ? 1 : 0 === t && 0 === n ? 1 / t > 0 && 1 / n < 0 ? 1 : -1 : t > n
    }
  }(e))
}, !y || v)
