/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1260
 */

var r = require(/* 194 */"../1785/194")
var o = require(/* 310 */"../1282/310")
var /* [auto-meaningful-name] */require_761_$$_1648_761$trim = require(/* 761 */"../1648/761").trim
var a = require(/* 954 */"../1658/1261/954")
var /* [auto-meaningful-name] */r$parseFloat = r.parseFloat
var c = 1 / r$parseFloat(a + "-0") !== -1 / 0
module.exports = c ? function (e) {
  var t = require_761_$$_1648_761$trim(o(e))
  var n = r$parseFloat(t)
  return 0 === n && "-" == t.charAt(0) ? -0 : n
} : r$parseFloat
