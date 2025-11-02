/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：815
 */

var n = 0
var r = Math.random()
module.exports = function (e) {
  return "Symbol(" + String(undefined === e ? "" : e) + ")_" + (++n + r).toString(36)
}
