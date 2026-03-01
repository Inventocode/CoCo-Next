/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1651
 */

var /* [auto-meaningful-name] */require_194_$$_1785_194$isFinite = require(/* 194 */"../1785/194").isFinite
module.exports = Number.isFinite || function (e) {
  return "number" == typeof e && require_194_$$_1785_194$isFinite(e)
}
