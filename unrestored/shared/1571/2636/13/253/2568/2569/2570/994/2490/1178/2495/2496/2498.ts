/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2498
 */

module.exports = function (e) {
  var t = this.has(e) && delete this.__data__[e]
  this.size -= t ? 1 : 0
  return t
}
