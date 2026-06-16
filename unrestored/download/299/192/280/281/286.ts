/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：286
 */

"use strict"

var r = require(/* 10 */"../../208/10")
var i = 2147483647
var o = /[^\0-\u007E]/
var a = /[.\u3002\uFF0E\uFF61]/g
var /* [auto-meaningful-name] */OverflowInputNeedsWiderIntegersToProcess = "Overflow: input needs wider integers to process"
var u = RangeError
var c = r(a.exec)
var /* [auto-meaningful-name] */Math$floor = Math.floor
var /* [auto-meaningful-name] */String$fromCharCode = String.fromCharCode
var p = r("".charCodeAt)
var d = r([].join)
var h = r([].push)
var g = r("".replace)
var m = r("".split)
var v = r("".toLowerCase)
var y = function (e) {
  return e + 22 + 75 * (e < 26)
}
var _ = function (e, t, n) {
  var r = 0
  for (e = n ? Math$floor(e / 700) : e >> 1, e += Math$floor(e / t); e > 455;) {
    e = Math$floor(e / 35)
    r += 36
  }
  return Math$floor(r + 36 * e / (e + 38))
}
var b = function (e) {
  var t = []
  e = function (e) {
    for (var t = [], n = 0, /* [auto-meaningful-name] */e$length = e.length; n < e$length;) {
      var i = p(e, n++)
      if (i >= 55296 && i <= 56319 && n < e$length) {
        var o = p(e, n++)
        if (56320 === (64512 & o)) {
          h(t, ((1023 & i) << 10) + (1023 & o) + 65536)
        } else {
          h(t, i)
          n--
        }
      } else {
        h(t, i)
      }
    }
    return t
  }(e)
  var n
  var r
  var /* [auto-meaningful-name] */e$length = e.length
  var a = 128
  var c = 0
  var g = 72
  for (n = 0; n < e.length; n++) {
    if ((r = e[n]) < 128) {
      h(t, String$fromCharCode(r))
    }
  }
  var /* [auto-meaningful-name] */t$length = t.length
  var v = t$length
  for (t$length && h(t, "-"); v < e$length;) {
    var b = i
    for (n = 0; n < e.length; n++) {
      if ((r = e[n]) >= a && r < b) {
        b = r
      }
    }
    var w = v + 1
    if (b - a > Math$floor((i - c) / w)) {
      throw new u(OverflowInputNeedsWiderIntegersToProcess)
    }
    for (c += (b - a) * w, a = b, n = 0; n < e.length; n++) {
      if ((r = e[n]) < a && ++c > i) {
        throw new u(OverflowInputNeedsWiderIntegersToProcess)
      }
      if (r === a) {
        for (var S = c, k = 36;;) {
          var O = k <= g ? 1 : k >= g + 26 ? 26 : k - g
          if (S < O) {
            break
          }
          var E = S - O
          var T = 36 - O
          h(t, String$fromCharCode(y(O + E % T)))
          S = Math$floor(E / T)
          k += 36
        }
        h(t, String$fromCharCode(y(S)))
        g = _(c, w, v === t$length)
        c = 0
        v++
      }
    }
    c++
    a++
  }
  return d(t, "")
}
module.exports = function (e) {
  var t
  var n
  var r = []
  var i = m(g(v(e), a, "."), ".")
  for (t = 0; t < i.length; t++) {
    n = i[t]
    h(r, c(o, n) ? "xn--" + b(n) : n)
  }
  return d(r, ".")
}
