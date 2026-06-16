/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：220
 */

"use strict"

var r = Array
var /* [auto-meaningful-name] */Math$abs = Math.abs
var /* [auto-meaningful-name] */Math$pow = Math.pow
var /* [auto-meaningful-name] */Math$floor = Math.floor
var /* [auto-meaningful-name] */Math$log = Math.log
var /* [auto-meaningful-name] */Math$LN2 = Math.LN2
module.exports = {
  pack: function (e, t, n) {
    var c
    var l
    var f
    var p = r(n)
    var d = 8 * n - t - 1
    var h = (1 << d) - 1
    var g = h >> 1
    var m = 23 === t ? Math$pow(2, -24) - Math$pow(2, -77) : 0
    var v = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0
    var y = 0
    for ((e = Math$abs(e)) !== e || e === 1 / 0 ? (l = e !== e ? 1 : 0, c = h) : (c = Math$floor(Math$log(e) / Math$LN2), e * (f = Math$pow(2, -c)) < 1 && (c--, f *= 2), (e += c + g >= 1 ? m / f : m * Math$pow(2, 1 - g)) * f >= 2 && (c++, f /= 2), c + g >= h ? (l = 0, c = h) : c + g >= 1 ? (l = (e * f - 1) * Math$pow(2, t), c += g) : (l = e * Math$pow(2, g - 1) * Math$pow(2, t), c = 0)); t >= 8;) {
      p[y++] = 255 & l
      l /= 256
      t -= 8
    }
    for (c = c << t | l, d += t; d > 0;) {
      p[y++] = 255 & c
      c /= 256
      d -= 8
    }
    p[y - 1] |= 128 * v
    return p
  },
  unpack: function (e, t) {
    var n
    var /* [auto-meaningful-name] */e$length = e.length
    var i = 8 * e$length - t - 1
    var a = (1 << i) - 1
    var s = a >> 1
    var u = i - 7
    var c = e$length - 1
    var l = e[c--]
    var f = 127 & l
    for (l >>= 7; u > 0;) {
      f = 256 * f + e[c--]
      u -= 8
    }
    for (n = f & (1 << -u) - 1, f >>= -u, u += t; u > 0;) {
      n = 256 * n + e[c--]
      u -= 8
    }
    if (0 === f) {
      f = 1 - s
    } else {
      if (f === a) {
        return n ? NaN : l ? -1 / 0 : 1 / 0
      }
      n += Math$pow(2, t)
      f -= s
    }
    return (l ? -1 : 1) * n * Math$pow(2, f - t)
  }
}
