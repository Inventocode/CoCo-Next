/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：633
 */

var r = require("../1742/247/index")
var o = require("../1654/575/index")
var i = require("../1623/300")
var a = r("unscopables")
var array$prototype = Array.prototype
if (undefined == array$prototype[a]) {
  i.f(array$prototype, a, {
    configurable: true,
    value: o(null)
  })
}
module.exports = function (e) {
  array$prototype[a][e] = true
}
