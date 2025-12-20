/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：124
 */

"use strict"

var r = require("./122")
var i = require("./167")
var o = require("./227")
var a = function () {
  function t() {}
  t.castAsNonUtf8Char = function (t, e) {
    if (undefined === e) {
      e = null
    }
    var n = e ? e.getName() : this.ISO88591
    return o.a.decode(new Uint8Array([t]), n)
  }
  t.guessEncoding = function (e, n) {
    if (null !== n && undefined !== n && undefined !== n.get(r.a.CHARACTER_SET)) {
      return n.get(r.a.CHARACTER_SET).toString()
    }
    for (var /* [auto-meaningful-name] */e$length = e.length, o = true, a = true, s = true, u = 0, c = 0, l = 0, d = 0, f = 0, h = 0, p = 0, m = 0, b = 0, g = 0, v = 0, _ = e.length > 3 && 239 === e[0] && 187 === e[1] && 191 === e[2], y = 0; y < e$length && (o || a || s); y++) {
      var w = 255 & e[y]
      if (s) {
        if (u > 0) {
          if (0 === (128 & w)) {
            s = false
          } else {
            u--
          }
        } else {
          if (0 !== (128 & w)) {
            if (0 === (64 & w)) {
              s = false
            } else {
              u++
              if (0 === (32 & w)) {
                c++
              } else {
                u++
                if (0 === (16 & w)) {
                  l++
                } else {
                  u++
                  if (0 === (8 & w)) {
                    d++
                  } else {
                    s = false
                  }
                }
              }
            }
          }
        }
      }
      if (o) {
        if (w > 127 && w < 160) {
          o = false
        } else {
          if (w > 159 && (w < 192 || 215 === w || 247 === w)) {
            v++
          }
        }
      }
      if (a) {
        if (f > 0) {
          if (w < 64 || 127 === w || w > 252) {
            a = false
          } else {
            f--
          }
        } else {
          if (128 === w || 160 === w || w > 239) {
            a = false
          } else {
            if (w > 160 && w < 224) {
              h++
              m = 0
              if (++p > b) {
                b = p
              }
            } else {
              if (w > 127) {
                f++
                p = 0
                if (++m > g) {
                  g = m
                }
              } else {
                p = 0
                m = 0
              }
            }
          }
        }
      }
    }
    if (s && u > 0) {
      s = false
    }
    if (a && f > 0) {
      a = false
    }
    return s && (_ || c + l + d > 0) ? t.UTF8 : a && (t.ASSUME_SHIFT_JIS || b >= 3 || g >= 3) ? t.SHIFT_JIS : o && a ? 2 === b && 2 === h || 10 * v >= e$length ? t.SHIFT_JIS : t.ISO88591 : o ? t.ISO88591 : a ? t.SHIFT_JIS : s ? t.UTF8 : t.PLATFORM_DEFAULT_ENCODING
  }
  t.format = function (t) {
    for (var e = [], n = 1; n < arguments.length; n++) {
      e[n - 1] = arguments[n]
    }
    var r = -1
    function i(t, n, i, o, a, s) {
      if ("%%" === t) {
        return "%"
      }
      if (undefined !== e[++r]) {
        t = o ? parseInt(o.substr(1)) : undefined
        var u
        var c = a ? parseInt(a.substr(1)) : undefined
        switch (s) {
          case "s":
            u = e[r]
            break
          case "c":
            u = e[r][0]
            break
          case "f":
            u = parseFloat(e[r]).toFixed(t)
            break
          case "p":
            u = parseFloat(e[r]).toPrecision(t)
            break
          case "e":
            u = parseFloat(e[r]).toExponential(t)
            break
          case "x":
            u = parseInt(e[r]).toString(c || 16)
            break
          case "d":
            u = parseFloat(parseInt(e[r], c || 10).toPrecision(t)).toFixed(0)
        }
        u = "object" === typeof u ? JSON.stringify(u) : (+u).toString(c)
        for (var l = parseInt(i), d = i && i[0] + "" === "0" ? "0" : " "; u.length < l;) {
          u = undefined !== n ? u + d : d + u
        }
        return u
      }
    }
    var o = /%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g
    return t.replace(o, i)
  }
  t.getBytes = function (t, e) {
    return o.a.encode(t, e)
  }
  t.getCharCode = function (t, e) {
    if (undefined === e) {
      e = 0
    }
    return t.charCodeAt(e)
  }
  t.getCharAt = function (t) {
    return String.fromCharCode(t)
  }
  t.SHIFT_JIS = i.a.SJIS.getName()
  t.GB2312 = "GB2312"
  t.ISO88591 = i.a.ISO8859_1.getName()
  t.EUC_JP = "EUC_JP"
  t.UTF8 = i.a.UTF8.getName()
  t.PLATFORM_DEFAULT_ENCODING = t.UTF8
  t.ASSUME_SHIFT_JIS = false
  return t
}()
exports.a = a
