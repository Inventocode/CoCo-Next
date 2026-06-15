/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：240
 */

"use strict"

var r = require(/* 10 */"../208/10")
var i = require(/* 29 */"../204/29")
var /* [auto-meaningful-name] */Math$floor = Math.floor
var a = r("".charAt)
var s = r("".replace)
var u = r("".slice)
var c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g
var l = /\$([$&'`]|\d{1,2})/g
module.exports = function (e, t, n, r, f, p) {
  var d = n + e.length
  var /* [auto-meaningful-name] */r$length = r.length
  var g = l
  if (undefined !== f) {
    f = i(f)
    g = c
  }
  return s(p, g, function (i, s) {
    var c
    switch (a(s, 0)) {
      case "$":
        return "$"
      case "&":
        return e
      case "`":
        return u(t, 0, n)
      case "'":
        return u(t, d)
      case "<":
        c = f[u(s, 1, -1)]
        break
      default:
        var l = +s
        if (0 === l) {
          return i
        }
        if (l > r$length) {
          var p = Math$floor(l / 10)
          return 0 === p ? i : p <= r$length ? undefined === r[p - 1] ? a(s, 1) : r[p - 1] + a(s, 1) : i
        }
        c = r[l - 1]
    }
    return undefined === c ? "" : c
  })
}
