/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1395
 */

var r = require("./718/index")
var i = require("./1151/index")
var o = require("./535")
var function$prototype = Function.prototype
var object$prototype = Object.prototype
var function$prototype$toString = function$prototype.toString
var object$prototype$hasOwnProperty = object$prototype.hasOwnProperty
var l = function$prototype$toString.call(Object)
module.exports = function (e) {
  if (!o(e) || "[object Object]" != r(e)) {
    return false
  }
  var t = i(e)
  if (null === t) {
    return true
  }
  var n = object$prototype$hasOwnProperty.call(t, "constructor") && t.constructor
  return "function" == typeof n && n instanceof n && function$prototype$toString.call(n) == l
}
