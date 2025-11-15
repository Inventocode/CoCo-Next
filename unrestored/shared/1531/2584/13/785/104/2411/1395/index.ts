/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1395
 */

var r = require("./718/index")
var i = require("./1151/index")
var o = require("./535")
var /* [auto-meaningful-name] */Function$prototype = Function.prototype
var /* [auto-meaningful-name] */Object$prototype = Object.prototype
var /* [auto-meaningful-name] */Function$prototype$toString = Function$prototype.toString
var /* [auto-meaningful-name] */Object$prototype$hasOwnProperty = Object$prototype.hasOwnProperty
var l = Function$prototype$toString.call(Object)
module.exports = function (e) {
  if (!o(e) || "[object Object]" != r(e)) {
    return false
  }
  var t = i(e)
  if (null === t) {
    return true
  }
  var n = Object$prototype$hasOwnProperty.call(t, "constructor") && t.constructor
  return "function" == typeof n && n instanceof n && Function$prototype$toString.call(n) == l
}
