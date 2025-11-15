/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1608
 */

"use strict"

var r = require("../1541/272")
var o = require("../1541/194")
var i = require("./818")
var a = require("../1541/398")
var s = require("../1541/332")
var c = require("./705")
var l = require("./939")
var u = require("../1541/749")
var d = require("./1205")
var p = require("../1541/167")
var f = require("../1541/575/index")
var /* [auto-meaningful-name] */require$$_1541_631_index$f = require("../1541/631/index").f
var /* [auto-meaningful-name] */require$$_1684_386$f = require("../1684/386").f
var /* [auto-meaningful-name] */require$$_1541_300_index$f = require("../1541/300/index").f
var /* [auto-meaningful-name] */require$$_1687_753_index$trim = require("../1687/753/index").trim
var /* [auto-meaningful-name] */o$Number = o.Number
var /* [auto-meaningful-name] */o$Number$prototype = o$Number.prototype
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
  var /* [auto-meaningful-name] */IL$slice2$length
  var s
  var c
  var l = d(e, "number")
  if ("string" == typeof l && l.length > 2) {
    if (43 === (t = (l = require$$_1687_753_index$trim(l)).charCodeAt(0)) || 45 === t) {
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
      for (IL$slice2$length = (i = l.slice(2)).length, s = 0; s < IL$slice2$length; s++) {
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
    }, C = r ? require$$_1541_631_index$f(o$Number) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","), T = 0; C.length > T; T++) {
    if (s(o$Number, O = C[T]) && !s(w, O)) {
      require$$_1541_300_index$f(w, O, require$$_1684_386$f(o$Number, O))
    }
  }
  w.prototype = o$Number$prototype
  o$Number$prototype.constructor = w
  a(o, "Number", w)
}
