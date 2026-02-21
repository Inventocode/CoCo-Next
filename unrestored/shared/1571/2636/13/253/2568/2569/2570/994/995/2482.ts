/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2482
 */

var r = require("./2483/996")
var /* [auto-meaningful-name] */Array$prototype$splice = Array.prototype.splice
module.exports = function (e) {
  var /* [auto-meaningful-name] */this$__data__ = this.__data__
  var n = r(this$__data__, e)
  return !(n < 0) && (n == this$__data__.length - 1 ? this$__data__.pop() : Array$prototype$splice.call(this$__data__, n, 1), --this.size, true)
}
