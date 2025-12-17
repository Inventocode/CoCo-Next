/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2007
 */

var r = require("./2008")
var i = require("./1329")
module.exports = function (e, t) {
  return !t || "object" !== r(t) && "function" !== typeof t ? i(e) : t
}
