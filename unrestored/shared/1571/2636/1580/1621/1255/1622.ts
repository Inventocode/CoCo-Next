/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1622
 */

var /* [auto-meaningful-name] */Math$abs = Math.abs
var /* [auto-meaningful-name] */Math$pow = Math.pow
var /* [auto-meaningful-name] */Math$floor = Math.floor
var /* [auto-meaningful-name] */Math$log = Math.log
var /* [auto-meaningful-name] */Math$LN2 = Math.LN2
module.exports = {
  pack: function (e, t, s) {
    var c
    var l
    var u
    var d = new Array(s)
    var p = 8 * s - t - 1
    var f = (1 << p) - 1
    var h = f >> 1
    var m = 23 === t ? Math$pow(2, -24) - Math$pow(2, -77) : 0
    var g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0
    var _ = 0
    for ((e = Math$abs(e)) != e || e === 1 / 0 ? (l = e != e ? 1 : 0, c = f) : (c = Math$floor(Math$log(e) / Math$LN2), e * (u = Math$pow(2, -c)) < 1 && (c--, u *= 2), (e += c + h >= 1 ? m / u : m * Math$pow(2, 1 - h)) * u >= 2 && (c++, u /= 2), c + h >= f ? (l = 0, c = f) : c + h >= 1 ? (l = (e * u - 1) * Math$pow(2, t), c += h) : (l = e * Math$pow(2, h - 1) * Math$pow(2, t), c = 0)); t >= 8; d[_++] = 255 & l, l /= 256, t -= 8) {
      ;
    }
    for (c = c << t | l, p += t; p > 0; d[_++] = 255 & c, c /= 256, p -= 8) {
      ;
    }
    d[--_] |= 128 * g
    return d
  },
  unpack: function (e, t) {
    var n
    var /* [auto-meaningful-name] */e$length = e.length
    var i = 8 * e$length - t - 1
    var a = (1 << i) - 1
    var s = a >> 1
    var c = i - 7
    var l = e$length - 1
    var u = e[l--]
    var d = 127 & u
    for (u >>= 7; c > 0; d = 256 * d + e[l], l--, c -= 8) {
      ;
    }
    for (n = d & (1 << -c) - 1, d >>= -c, c += t; c > 0; n = 256 * n + e[l], l--, c -= 8) {
      ;
    }
    if (0 === d) {
      d = 1 - s
    } else {
      if (d === a) {
        return n ? NaN : u ? -1 / 0 : 1 / 0
      }
      n += Math$pow(2, t)
      d -= s
    }
    return (u ? -1 : 1) * n * Math$pow(2, d - t)
  }
}
