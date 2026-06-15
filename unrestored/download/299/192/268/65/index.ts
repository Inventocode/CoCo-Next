/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：65
 */

"use strict"

var /* [auto-meaningful-name] */require_30_$_30_index$f = require(/* 30 */"./30/index").f
var i = require(/* 24 */"../../233/24")
var o = require(/* 18 */"../../233/18/index")("toStringTag")
module.exports = function (e, t, n) {
  if (e && !n) {
    e = e.prototype
  }
  if (e && !i(e, o)) {
    require_30_$_30_index$f(e, o, {
      configurable: true,
      value: t
    })
  }
}
