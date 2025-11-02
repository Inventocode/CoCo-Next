/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：749
 */

var r = require("../1664/472")
var o = require("../1742/247/1206")
module.exports = o ? function (e) {
  return "symbol" == typeof e
} : function (e) {
  var t = r("Symbol")
  return "function" == typeof t && Object(e) instanceof t
}
