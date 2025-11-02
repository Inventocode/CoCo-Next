/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1070
 */

var r = require("../1738/231")
var math$floor = Math.floor
module.exports = function (e) {
  return !r(e) && isFinite(e) && math$floor(e) === e
}
