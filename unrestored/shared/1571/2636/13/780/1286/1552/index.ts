/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1552
 */

var r = require("./1801")
var i = require("./1802")
var o = require("./1803/index")
var a = require("./1804")
module.exports = function (e) {
  return r(e) || i(e) || o(e) || a()
}
