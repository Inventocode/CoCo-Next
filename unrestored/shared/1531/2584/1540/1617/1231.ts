/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1231
 */

var r = require("../1541/194")
var o = require("../1684/310")
var /* [auto-meaningful-name] */require$$_1687_753_index$trim = require("../1687/753/index").trim
var a = require("../1687/753/941")
var /* [auto-meaningful-name] */r$parseFloat = r.parseFloat
var c = 1 / r$parseFloat(a + "-0") !== -1 / 0
module.exports = c ? function (e) {
  var t = require$$_1687_753_index$trim(o(e))
  var n = r$parseFloat(t)
  return 0 === n && "-" == t.charAt(0) ? -0 : n
} : r$parseFloat
