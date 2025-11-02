/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1149
 */

var object$prototype = Object.prototype
module.exports = function (e) {
  var t = e && e.constructor
  return e === ("function" == typeof t && t.prototype || object$prototype)
}
