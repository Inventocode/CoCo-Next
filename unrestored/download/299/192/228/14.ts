/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：14
 */

"use strict"

var r = "object" == typeof document && document.all
module.exports = "undefined" == typeof r && undefined !== r ? function (e) {
  return "function" == typeof e || e === r
} : function (e) {
  return "function" == typeof e
}
