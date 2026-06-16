/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1676
 */

"use strict"

var r = require(/* 86 */"./1662/86")
var o = require(/* 271 */"./1662/271")
var i = require(/* 955 */"./1662/955")
var a = require(/* 309 */"./1662/309")
var s = require(/* 632 */"./1581/632")
var c = require(/* 497 */"./1625/497")
var /* [auto-meaningful-name] */require_386_$_1581_386$f = require(/* 386 */"./1581/386").f
if (o) {
  r({
    target: "Object",
    proto: true,
    forced: i
  }, {
    __lookupGetter__: function (e) {
      var t
      var n = a(this)
      var r = s(e)
      do {
        if (t = require_386_$_1581_386$f(n, r)) {
          return t.get
        }
      } while (n = c(n))
    }
  })
}
