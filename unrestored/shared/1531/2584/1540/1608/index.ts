/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1608
 */

"use strict"

var r = require("../1623/272")
var o = require("../1736/194")
var i = require("../1667/818")
var a = require("../1745/398/index")
var s = require("../1745/332")
var c = require("./705")
var l = require("../1667/939")
var u = require("../1541/749")
var d = require("./1205/index")
var p = require("../1736/167")
var f = require("../1654/575/index")
var require$$1667631Index$f = require("../1667/631/index").f
var require$$1659386Index$f = require("../1659/386/index").f
var require$$1623300$f = require("../1623/300").f
var require$$1686753Index$trim = require("../1686/753/index").trim
var o$Number = o.Number
var o$Number$prototype = o$Number.prototype
var y = "Number" == c(f(o$Number$prototype))
var E = function (e) {
  if (u(e)) {
    throw TypeError("Cannot convert a Symbol value to a number")
  }
  var t
  var n
  var r
  var o
  var i
  var /* [auto-meaningful-name] */iL$slice2$length
  var s
  var c
  var l = d(e, "number")
  if ("string" == typeof l && l.length > 2) {
    if (43 === (t = (l = require$$1686753Index$trim(l)).charCodeAt(0)) || 45 === t) {
      if (88 === (n = l.charCodeAt(2)) || 120 === n) {
        return NaN
      }
    } else if (48 === t) {
      switch (l.charCodeAt(1)) {
        case 66:
        case 98:
          r = 2
          o = 49
          break
        case 79:
        case 111:
          r = 8
          o = 55
          break
        default:
          return +l
      }
      for (iL$slice2$length = (i = l.slice(2)).length, s = 0; s < iL$slice2$length; s++) {
        if ((c = i.charCodeAt(s)) < 48 || c > o) {
          return NaN
        }
      }
      return parseInt(i, r)
    }
  }
  return +l
}
if (i("Number", !o$Number(" 0o1") || !o$Number("0b1") || o$Number("+0x1"))) {
  for (var O, w = function (e) {
      var t = arguments.length < 1 ? 0 : e
      var n = this
      return n instanceof w && (y ? p(function () {
        o$Number$prototype.valueOf.call(n)
      }) : "Number" != c(n)) ? l(new o$Number(E(t)), n, w) : E(t)
    }, C = r ? require$$1667631Index$f(o$Number) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","), T = 0; C.length > T; T++) {
    if (s(o$Number, O = C[T]) && !s(w, O)) {
      require$$1623300$f(w, O, require$$1659386Index$f(o$Number, O))
    }
  }
  w.prototype = o$Number$prototype
  o$Number$prototype.constructor = w
  a(o, "Number", w)
}
