/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：934
 */

var r = require("../1659/241")
var o = require("./824")
module.exports = function (e, t) {
  var n = arguments.length < 2 ? o(e) : t
  if ("function" != typeof n) {
    throw TypeError(String(e) + " is not iterable")
  }
  return r(n.call(e))
}
