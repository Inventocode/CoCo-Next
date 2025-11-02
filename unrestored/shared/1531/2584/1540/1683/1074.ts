/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1074
 */

var r = require("../1736/167")
var require$$1736194$RegExp = require("../1736/194").RegExp
exports.UNSUPPORTED_Y = r(function () {
  var e = require$$1736194$RegExp("a", "y")
  e.lastIndex = 2
  return null != e.exec("abcd")
})
exports.BROKEN_CARET = r(function () {
  var e = require$$1736194$RegExp("^r", "gy")
  e.lastIndex = 2
  return null != e.exec("str")
})
