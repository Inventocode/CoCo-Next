/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：117
 */

"use strict"

var r = require(/* 20 */"../../288/20/index")
var i = require(/* 10 */"../../208/10")
var o = require(/* 36 */"../../209/36")
var a = require(/* 116 */"../../236/116")
var s = require(/* 157 */"../../233/157")
var u = require(/* 97 */"./97")
var c = require(/* 55 */"../../233/55/index")
var /* [auto-meaningful-name] */require_35_$$_$$_233_35_index$get = require(/* 35 */"../../233/35/index").get
var f = require(/* 158 */"../../233/158")
var p = require(/* 159 */"../../233/159")
var d = u("native-string-replace", String.prototype.replace)
var /* [auto-meaningful-name] */RegExp$prototype$exec = RegExp.prototype.exec
var g = RegExp$prototype$exec
var m = i("".charAt)
var v = i("".indexOf)
var y = i("".replace)
var _ = i("".slice)
var b = function () {
  var e = /a/
  var t = /b*/g
  r(RegExp$prototype$exec, e, "a")
  r(RegExp$prototype$exec, t, "a")
  return 0 !== e.lastIndex || 0 !== t.lastIndex
}()
var /* [auto-meaningful-name] */s$BROKEN_CARET = s.BROKEN_CARET
var S = undefined !== /()??/.exec("")[1]
if (b || S || s$BROKEN_CARET || f || p) {
  g = function (e) {
    var t
    var n
    var /* [auto-meaningful-name] */k$lastIndex
    var s
    var u
    var f
    var p
    var k = this
    var O = require_35_$$_$$_233_35_index$get(k)
    var E = o(e)
    var /* [auto-meaningful-name] */O$raw = O.raw
    if (O$raw) {
      O$raw.lastIndex = k.lastIndex
      t = r(g, O$raw, E)
      k.lastIndex = O$raw.lastIndex
      return t
    }
    var /* [auto-meaningful-name] */O$groups = O.groups
    var j = s$BROKEN_CARET && k.sticky
    var P = r(a, k)
    var /* [auto-meaningful-name] */k$source = k.source
    var I = 0
    var N = E
    if (j) {
      P = y(P, "y", "")
      if (-1 === v(P, "g")) {
        P += "g"
      }
      N = _(E, k.lastIndex)
      if (k.lastIndex > 0 && (!k.multiline || k.multiline && "\n" !== m(E, k.lastIndex - 1))) {
        k$source = "(?: " + k$source + ")"
        N = " " + N
        I++
      }
      n = new RegExp("^(?:" + k$source + ")", P)
    }
    if (S) {
      n = new RegExp("^" + k$source + "$(?!\\s)", P)
    }
    if (b) {
      k$lastIndex = k.lastIndex
    }
    s = r(RegExp$prototype$exec, j ? n : k, N)
    if (j) {
      if (s) {
        s.input = _(s.input, I)
        s[0] = _(s[0], I)
        s.index = k.lastIndex
        k.lastIndex += s[0].length
      } else {
        k.lastIndex = 0
      }
    } else {
      if (b && s) {
        k.lastIndex = k.global ? s.index + s[0].length : k$lastIndex
      }
    }
    if (S && s && s.length > 1) {
      r(d, s[0], n, function () {
        for (u = 1; u < arguments.length - 2; u++) {
          if (undefined === arguments[u]) {
            s[u] = undefined
          }
        }
      })
    }
    if (s && O$groups) {
      for (s.groups = f = c(null), u = 0; u < O$groups.length; u++) {
        f[(p = O$groups[u])[0]] = s[p[1]]
      }
    }
    return s
  }
}
module.exports = g
