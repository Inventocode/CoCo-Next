/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2435
 */

var r = require("../974/index")
var i = require("../../../../../../785/104/2483/2484/2485/978/1152")
var o = require("./1153/index")
module.exports = function (e, t) {
  var this$__data__ = this.__data__
  if (this$__data__ instanceof r) {
    var this$__data__$__data__ = this$__data__.__data__
    if (!i || this$__data__$__data__.length < 199) {
      this$__data__$__data__.push([e, t])
      this.size = ++this$__data__.size
      return this
    }
    this$__data__ = this.__data__ = new o(this$__data__$__data__)
  }
  this$__data__.set(e, t)
  this.size = this$__data__.size
  return this
}
