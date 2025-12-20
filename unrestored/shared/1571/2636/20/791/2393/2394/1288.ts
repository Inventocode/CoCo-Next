/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1288
 */

exports.read = function (e, t, n, r, i) {
  var o
  var a
  var s = 8 * i - r - 1
  var c = (1 << s) - 1
  var u = c >> 1
  var l = -7
  var f = n ? i - 1 : 0
  var d = n ? -1 : 1
  var h = e[t + f]
  for (f += d, o = h & (1 << -l) - 1, h >>= -l, l += s; l > 0; o = 256 * o + e[t + f], f += d, l -= 8) {
    ;
  }
  for (a = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; a = 256 * a + e[t + f], f += d, l -= 8) {
    ;
  }
  if (0 === o) {
    o = 1 - u
  } else {
    if (o === c) {
      return a ? NaN : 1 / 0 * (h ? -1 : 1)
    }
    a += Math.pow(2, r)
    o -= u
  }
  return (h ? -1 : 1) * a * Math.pow(2, o - r)
}
exports.write = function (e, t, n, r, i, o) {
  var a
  var s
  var c
  var u = 8 * o - i - 1
  var l = (1 << u) - 1
  var f = l >> 1
  var d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0
  var h = r ? 0 : o - 1
  var p = r ? 1 : -1
  var _ = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = l) : (a = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -a)) < 1 && (a--, c *= 2), (t += a + f >= 1 ? d / c : d * Math.pow(2, 1 - f)) * c >= 2 && (a++, c /= 2), a + f >= l ? (s = 0, a = l) : a + f >= 1 ? (s = (t * c - 1) * Math.pow(2, i), a += f) : (s = t * Math.pow(2, f - 1) * Math.pow(2, i), a = 0)); i >= 8; e[n + h] = 255 & s, h += p, s /= 256, i -= 8) {
    ;
  }
  for (a = a << i | s, u += i; u > 0; e[n + h] = 255 & a, h += p, a /= 256, u -= 8) {
    ;
  }
  e[n + h - p] |= 128 * _
}
