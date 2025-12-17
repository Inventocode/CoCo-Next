/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1083
 */

var r = require("./441")
var /* [auto-meaningful-name] */require$_635$f = require("./635").f
var /* [auto-meaningful-name] */$toString = {}.toString
var a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : []
module.exports.f = function (e) {
  return a && "[object Window]" == $toString.call(e) ? function (e) {
    try {
      return require$_635$f(e)
    } catch (t) {
      return a.slice()
    }
  }(e) : require$_635$f(r(e))
}
