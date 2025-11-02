/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2424
 */

var r = require("./2425")
var i = require("./2467")
var o = require("../2468/1406")
module.exports = function (e) {
  var t = i(e)
  return 1 == t.length && t[0][2] ? o(t[0][0], t[0][1]) : function (n) {
    return n === e || r(n, e, t)
  }
}
