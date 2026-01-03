/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2522
 */

var r = require("../2523/1446")
var i = require("../../../../2538/2539/2540/862/index")
module.exports = function (e) {
  for (var t = i(e), /* [auto-meaningful-name] */t$length = t.length; t$length--;) {
    var o = t[t$length]
    var a = e[o]
    t[t$length] = [o, a, r(a)]
  }
  return t
}
