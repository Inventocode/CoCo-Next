/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2285
 */

"use strict"

module.exports = function (e, t) {
  return t ? e.replace(/\{\{((?:(?![\{\}])[\s\S])+?)\}\}/g, function (e, n) {
    var r = n.trim()
    return r in t ? t[r] : e
  }) : e
}
