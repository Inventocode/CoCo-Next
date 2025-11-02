/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2444
 */

var r = require("./2446/976")
var object$prototype$hasOwnProperty = Object.prototype.hasOwnProperty
module.exports = function (e) {
  var this$__data__ = this.__data__
  if (r) {
    var n = this$__data__[e]
    return "__lodash_hash_undefined__" === n ? undefined : n
  }
  return object$prototype$hasOwnProperty.call(this$__data__, e) ? this$__data__[e] : undefined
}
