/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：287
 */

"use strict"

var r = require(/* 13 */"../../288/13/index")
var i = require(/* 10 */"../../208/10")
var o = require(/* 84 */"../../225/84")
var a = RangeError
var /* [auto-meaningful-name] */String$fromCharCode = String.fromCharCode
var /* [auto-meaningful-name] */String$fromCodePoint = String.fromCodePoint
var c = i([].join)
r({
  target: "String",
  stat: true,
  arity: 1,
  forced: !!String$fromCodePoint && 1 !== String$fromCodePoint.length
}, {
  fromCodePoint: function (e) {
    for (var t, n = [], /* [auto-meaningful-name] */arguments$length = arguments.length, i = 0; arguments$length > i;) {
      t = +arguments[i++]
      if (o(t, 1114111) !== t) {
        throw new a(t + " is not a valid code point")
      }
      n[i] = t < 65536 ? String$fromCharCode(t) : String$fromCharCode(55296 + ((t -= 65536) >> 10), t % 1024 + 56320)
    }
    return c(n, "")
  }
})
