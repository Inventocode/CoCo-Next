/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1611
 */

var /* [auto-meaningful-name] */require$$_1541_194$isFinite = require("../1541/194").isFinite
module.exports = Number.isFinite || function (e) {
  return "number" == typeof e && require$$_1541_194$isFinite(e)
}
