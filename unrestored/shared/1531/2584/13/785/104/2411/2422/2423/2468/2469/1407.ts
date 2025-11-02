/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1407
 */

var r = require("../2475/2477/1408/index")
var i = require("../980")
module.exports = function (e, t) {
  for (var n = 0, tRTE$length = (t = r(t, e)).length; null != e && n < tRTE$length;) {
    e = e[i(t[n++])]
  }
  return n && n == tRTE$length ? e : undefined
}
