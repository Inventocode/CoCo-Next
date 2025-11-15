/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1062
 */

var r = require("./437")
var /* [auto-meaningful-name] */require$_631_index$f = require("./631/index").f
var /* [auto-meaningful-name] */$toString = {}.toString
var a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : []
module.exports.f = function (e) {
  return a && "[object Window]" == $toString.call(e) ? function (e) {
    try {
      return require$_631_index$f(e)
    } catch (t) {
      return a.slice()
    }
  }(e) : require$_631_index$f(r(e))
}
