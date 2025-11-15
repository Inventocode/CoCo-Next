/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1074
 */

var r = require("../1541/167")
var /* [auto-meaningful-name] */require$$_1541_194$RegExp = require("../1541/194").RegExp
exports.UNSUPPORTED_Y = r(function () {
  var e = require$$_1541_194$RegExp("a", "y")
  e.lastIndex = 2
  return null != e.exec("abcd")
})
exports.BROKEN_CARET = r(function () {
  var e = require$$_1541_194$RegExp("^r", "gy")
  e.lastIndex = 2
  return null != e.exec("str")
})
