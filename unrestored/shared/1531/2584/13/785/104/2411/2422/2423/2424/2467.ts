/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2467
 */

var r = require("../2468/1405")
var i = require("../../../../2483/1142/1390/850/index")
module.exports = function (e) {
  for (var t = i(e), t$length = t.length; t$length--;) {
    var o = t[t$length]
    var a = e[o]
    t[t$length] = [o, a, r(a)]
  }
  return t
}
