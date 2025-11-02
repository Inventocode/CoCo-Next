/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1611
 */

var require$$1736194$isFinite = require("../1736/194").isFinite
module.exports = Number.isFinite || function (e) {
  return "number" == typeof e && require$$1736194$isFinite(e)
}
