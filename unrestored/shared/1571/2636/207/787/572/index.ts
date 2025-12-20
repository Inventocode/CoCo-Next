/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：572
 */

var r = require("./2001")
var i = require("./2002")
var o = require("./1119/index")
var a = require("./2003")
module.exports = function (e, t) {
  return r(e) || i(e, t) || o(e, t) || a()
}
