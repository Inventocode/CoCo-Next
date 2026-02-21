/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2485
 */

var r = require("./2483/996")
module.exports = function (e, t) {
  var /* [auto-meaningful-name] */this$__data__ = this.__data__
  var i = r(this$__data__, e)
  if (i < 0) {
    ++this.size
    this$__data__.push([e, t])
  } else {
    this$__data__[i][1] = t
  }
  return this
}
