/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1806
 */

"use strict"

exports.byteLength = function (e) {
  var t = u(e)
  var n = t[0]
  var r = t[1]
  return 3 * (n + r) / 4 - r
}
exports.toByteArray = function (e) {
  var t
  var n
  var r = u(e)
  var a = r[0]
  var s = r[1]
  var c = new o(function (e, t, n) {
    return 3 * (t + n) / 4 - n
  }(0, a, s))
  var l = 0
  var f = s > 0 ? a - 4 : a
  for (n = 0; n < f; n += 4) {
    t = i[e.charCodeAt(n)] << 18 | i[e.charCodeAt(n + 1)] << 12 | i[e.charCodeAt(n + 2)] << 6 | i[e.charCodeAt(n + 3)]
    c[l++] = t >> 16 & 255
    c[l++] = t >> 8 & 255
    c[l++] = 255 & t
  }
  if (2 === s) {
    t = i[e.charCodeAt(n)] << 2 | i[e.charCodeAt(n + 1)] >> 4
    c[l++] = 255 & t
  }
  if (1 === s) {
    t = i[e.charCodeAt(n)] << 10 | i[e.charCodeAt(n + 1)] << 4 | i[e.charCodeAt(n + 2)] >> 2
    c[l++] = t >> 8 & 255
    c[l++] = 255 & t
  }
  return c
}
exports.fromByteArray = function (e) {
  for (var t, /* [auto-meaningful-name] */e$length = e.length, i = e$length % 3, o = [], a = 0, s = e$length - i; a < s; a += 16383) {
    o.push(l(e, a, a + 16383 > s ? s : a + 16383))
  }
  if (1 === i) {
    t = e[e$length - 1]
    o.push(r[t >> 2] + r[t << 4 & 63] + "==")
  } else {
    if (2 === i) {
      t = (e[e$length - 2] << 8) + e[e$length - 1]
      o.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "=")
    }
  }
  return o.join("")
}
for (var r = [], i = [], o = "undefined" !== typeof Uint8Array ? Uint8Array : Array, /* [auto-meaningful-name] */ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, /* [auto-meaningful-name] */ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_$length = ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.length; s < ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_$length; ++s) {
  r[s] = ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_[s]
  i[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.charCodeAt(s)] = s
}
function u(e) {
  var /* [auto-meaningful-name] */e$length = e.length
  if (e$length % 4 > 0) {
    throw new Error("Invalid string. Length must be a multiple of 4")
  }
  var n = e.indexOf("=")
  if (-1 === n) {
    n = e$length
  }
  return [n, n === e$length ? 0 : 4 - n % 4]
}
function l(e, t, n) {
  for (var i, o, a = [], s = t; s < n; s += 3) {
    i = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2])
    a.push(r[(o = i) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o])
  }
  return a.join("")
}
i["-".charCodeAt(0)] = 62
i["_".charCodeAt(0)] = 63
