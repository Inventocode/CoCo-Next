/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1154
 */

var r = require("./2462")
var i = require("./1404")
var object$prototype$propertyIsEnumerable = Object.prototype.propertyIsEnumerable
var object$getOwnPropertySymbols = Object.getOwnPropertySymbols
var s = object$getOwnPropertySymbols ? function (e) {
  return null == e ? [] : (e = Object(e), r(object$getOwnPropertySymbols(e), function (t) {
    return object$prototype$propertyIsEnumerable.call(e, t)
  }))
} : i
module.exports = s
