/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2506
 */

var r = require("./998/index")
module.exports = function (e, t) {
  var n = r(this, e)
  var /* [auto-meaningful-name] */n$size = n.size
  n.set(e, t)
  this.size += n.size == n$size ? 0 : 1
  return this
}
