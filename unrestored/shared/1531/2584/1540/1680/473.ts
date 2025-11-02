/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：473
 */

var math$ceil = Math.ceil
var math$floor = Math.floor
module.exports = function (e) {
  return isNaN(e = +e) ? 0 : (e > 0 ? math$floor : math$ceil)(e)
}
