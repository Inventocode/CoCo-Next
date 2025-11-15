/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2447
 */

var r = require("./977/index")
module.exports = function (e) {
  var t = r(this, e).delete(e)
  this.size -= t ? 1 : 0
  return t
}
