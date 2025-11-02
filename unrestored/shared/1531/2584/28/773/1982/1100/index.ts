/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1100
 */

var r = require("./1304")
var i = require("./1980/index")
for (var o in (exports = module.exports = function (e, t) {
  return new i(t).process(e)
}).FilterCSS = i, r) exports[o] = r[o]
if ("undefined" !== typeof window) {
  window.filterCSS = module.exports
}
