/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：284
 */

var r = require("../../../../1058/1393/1143/532")
var i = require("./1328")
var o = require("./2007/index")
module.exports = function (e) {
  return function () {
    var t
    var n = r(e)
    if (i()) {
      var /* [auto-meaningful-name] */rThis$constructor = r(this).constructor
      t = Reflect.construct(n, arguments, rThis$constructor)
    } else {
      t = n.apply(this, arguments)
    }
    return o(this, t)
  }
}
