/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2010
 */

var r = require("../../../../../../../1058/1393/1143/283/1120")
var i = require("../../../../../../../1058/1393/1143/284/1328")
function o(t, n, a) {
  if (i()) {
    module.exports = o = Reflect.construct
  } else {
    module.exports = o = function (e, t, n) {
      var i = [null]
      i.push.apply(i, t)
      var o = new (Function.bind.apply(e, i))()
      if (n) {
        r(o, n.prototype)
      }
      return o
    }
  }
  return o.apply(null, arguments)
}
module.exports = o
