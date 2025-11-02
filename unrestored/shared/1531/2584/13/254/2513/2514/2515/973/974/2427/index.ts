/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2427
 */

var r = require("./975")
var array$prototype$splice = Array.prototype.splice
module.exports = function (e) {
  var this$__data__ = this.__data__
  var n = r(this$__data__, e)
  return !(n < 0) && (n == this$__data__.length - 1 ? this$__data__.pop() : array$prototype$splice.call(this$__data__, n, 1), --this.size, true)
}
