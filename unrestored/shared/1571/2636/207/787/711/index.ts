/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：711
 */

var r = require("./2004")
var i = require("./2005")
var o = require("./1119/index")
var a = require("./2006")
module.exports = function (e) {
  return r(e) || i(e) || o(e) || a()
}
