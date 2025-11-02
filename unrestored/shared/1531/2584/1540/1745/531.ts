/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：531
 */

var require$$1623300$f = require("../1623/300").f
var o = require("./332")
var i = require("../1742/247/index")("toStringTag")
module.exports = function (e, t, n) {
  if (e && !o(e = n ? e : e.prototype, i)) {
    require$$1623300$f(e, i, {
      configurable: true,
      value: t
    })
  }
}
