/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1231
 */

var r = require("../1736/194")
var o = require("../1745/310")
var require$$1686753Index$trim = require("../1686/753/index").trim
var a = require("../1686/753/941")
var r$parseFloat = r.parseFloat
var c = 1 / r$parseFloat(a + "-0") !== -1 / 0
module.exports = c ? function (e) {
  var t = require$$1686753Index$trim(o(e))
  var n = r$parseFloat(t)
  return 0 === n && "-" == t.charAt(0) ? -0 : n
} : r$parseFloat
