/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1651
 */

var /* [auto-meaningful-name] */require$$_1782_194$isFinite = require("../1782/194").isFinite
module.exports = Number.isFinite || function (e) {
  return "number" == typeof e && require$$_1782_194$isFinite(e)
}
