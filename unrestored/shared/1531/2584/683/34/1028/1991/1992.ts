/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1992
 */

"use strict"

function r(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t)
}
module.exports = function (e, t, n, o) {
  t = t || "&"
  n = n || "="
  var a = {}
  if ("string" !== typeof e || 0 === e.length) {
    return a
  }
  var s = /\+/g
  e = e.split(t)
  var c = 1e3
  if (o && "number" === typeof o.maxKeys) {
    c = o.maxKeys
  }
  var /* [auto-meaningful-name] */e$length = e.length
  if (c > 0 && e$length > c) {
    e$length = c
  }
  for (var l = 0; l < e$length; ++l) {
    var f
    var d
    var h
    var p
    var _ = e[l].replace(s, "%20")
    var A = _.indexOf(n)
    if (A >= 0) {
      f = _.substr(0, A)
      d = _.substr(A + 1)
    } else {
      f = _
      d = ""
    }
    h = decodeURIComponent(f)
    p = decodeURIComponent(d)
    if (r(a, h)) {
      if (i(a[h])) {
        a[h].push(p)
      } else {
        a[h] = [a[h], p]
      }
    } else {
      a[h] = p
    }
  }
  return a
}
var i = Array.isArray || function (e) {
  return "[object Array]" === Object.prototype.toString.call(e)
}
