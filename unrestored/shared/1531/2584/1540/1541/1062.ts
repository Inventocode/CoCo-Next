/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1062
 */

var r = require("../1678/437")
var require$$1667631Index$f = require("../1667/631/index").f
var $toString = {}.toString
var a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : []
module.exports.f = function (e) {
  return a && "[object Window]" == $toString.call(e) ? function (e) {
    try {
      return require$$1667631Index$f(e)
    } catch (t) {
      return a.slice()
    }
  }(e) : require$$1667631Index$f(r(e))
}
