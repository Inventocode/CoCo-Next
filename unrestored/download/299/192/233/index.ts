/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：233
 */

"use strict"

var r = require(/* 16 */"../275/16")
var i = require(/* 6 */"../275/6")
var o = require(/* 10 */"../208/10")
var a = require(/* 141 */"./141")
var s = require(/* 113 */"./113")
var u = require(/* 42 */"./42")
var c = require(/* 55 */"./55/index")
var /* [auto-meaningful-name] */require_104_$_104_index$f = require(/* 104 */"./104/index").f
var f = require(/* 45 */"./45")
var p = require(/* 234 */"./234")
var d = require(/* 36 */"../209/36")
var h = require(/* 155 */"./155")
var g = require(/* 157 */"./157")
var m = require(/* 235 */"./235")
var v = require(/* 34 */"../228/34/index")
var y = require(/* 9 */"../275/9")
var _ = require(/* 24 */"./24")
var /* [auto-meaningful-name] */require_35_$_35_index$enforce = require(/* 35 */"./35/index").enforce
var w = require(/* 114 */"../215/114")
var S = require(/* 18 */"./18/index")
var k = require(/* 158 */"./158")
var O = require(/* 159 */"./159")
var E = S("match")
var /* [auto-meaningful-name] */i$RegExp = i.RegExp
var /* [auto-meaningful-name] */i$RegExp$prototype = i$RegExp.prototype
var /* [auto-meaningful-name] */i$SyntaxError = i.SyntaxError
var P = o(i$RegExp$prototype.exec)
var C = o("".charAt)
var I = o("".replace)
var N = o("".indexOf)
var A = o("".slice)
var R = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/
var L = /a/g
var D = /a/g
var M = new i$RegExp(L) !== L
var /* [auto-meaningful-name] */g$MISSED_STICKY = g.MISSED_STICKY
var /* [auto-meaningful-name] */g$UNSUPPORTED_Y = g.UNSUPPORTED_Y
var H = r && (!M || g$MISSED_STICKY || k || O || y(function () {
  D[E] = false
  return i$RegExp(L) !== L || i$RegExp(D) === D || "/a/i" !== String(i$RegExp(L, "i"))
}))
if (a("RegExp", H)) {
  for (var F = function (e, t) {
      var n
      var r
      var i
      var o
      var a
      var l
      var g = f(i$RegExp$prototype, this)
      var m = p(e)
      var v = undefined === t
      var y = []
      var w = e
      if (!g && m && v && e.constructor === F) {
        return e
      }
      if (m || f(i$RegExp$prototype, e)) {
        e = e.source
        if (v) {
          t = h(w)
        }
      }
      e = undefined === e ? "" : d(e)
      t = undefined === t ? "" : d(t)
      w = e
      if (k && "dotAll" in L && (r = !!t && N(t, "s") > -1)) {
        t = I(t, /s/g, "")
      }
      n = t
      if (g$MISSED_STICKY && "sticky" in L && (i = !!t && N(t, "y") > -1) && g$UNSUPPORTED_Y) {
        t = I(t, /y/g, "")
      }
      if (O) {
        o = function (e) {
          for (var t, /* [auto-meaningful-name] */e$length = e.length, r = 0, i = "", o = [], a = c(null), s = false, u = false, l = 0, f = ""; r <= e$length; r++) {
            if ("\\" === (t = C(e, r))) {
              t += C(e, ++r)
            } else if ("]" === t) {
              s = false
            } else if (!s) {
              switch (true) {
                case "[" === t:
                  s = true
                  break
                case "(" === t:
                  if (i += t, "?:" === A(e, r + 1, r + 3)) {
                    continue
                  }
                  if (P(R, A(e, r + 1))) {
                    r += 2
                    u = true
                  }
                  l++
                  continue
                case ">" === t && u:
                  if ("" === f || _(a, f)) {
                    throw new i$SyntaxError("Invalid capture group name")
                  }
                  a[f] = true
                  o[o.length] = [f, l]
                  u = false
                  f = ""
                  continue
              }
            }
            if (u) {
              f += t
            } else {
              i += t
            }
          }
          return [i, o]
        }(e)
        e = o[0]
        y = o[1]
      }
      a = s(i$RegExp(e, t), g ? this : i$RegExp$prototype, F)
      if (r || i || y.length) {
        l = require_35_$_35_index$enforce(a)
        if (r) {
          l.dotAll = true
          l.raw = F(function (e) {
            for (var t, /* [auto-meaningful-name] */e$length = e.length, r = 0, i = "", o = false; r <= e$length; r++) {
              if ("\\" !== (t = C(e, r))) {
                if (o || "." !== t) {
                  if ("[" === t) {
                    o = true
                  } else {
                    if ("]" === t) {
                      o = false
                    }
                  }
                  i += t
                } else {
                  i += "[\\s\\S]"
                }
              } else {
                i += t + C(e, ++r)
              }
            }
            return i
          }(e), n)
        }
        if (i) {
          l.sticky = true
        }
        if (y.length) {
          l.groups = y
        }
      }
      if (e !== w) {
        try {
          u(a, "source", "" === w ? "(?:)" : w)
        } catch (S) {}
      }
      return a
    }, $ = require_104_$_104_index$f(i$RegExp), z = 0; $.length > z;) {
    m(F, i$RegExp, $[z++])
  }
  i$RegExp$prototype.constructor = F
  F.prototype = i$RegExp$prototype
  v(i, "RegExp", F, {
    constructor: true
  })
}
w("RegExp")
