/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：461
 */

"use strict"

export { o as a }
import /* [auto-meaningful-name] */$$_57_770 = require("../57/770")
import /* [auto-meaningful-name] */$$_58_989 = require("../58/989")
function o(e, t, n) {
  return (o = $$_58_989.a() ? Reflect.construct : function (e, t, n) {
    var i = [null]
    i.push.apply(i, t)
    var o = new (Function.bind.apply(e, i))()
    if (n) {
      $$_57_770.a(o, n.prototype)
    }
    return o
  }).apply(null, arguments)
}
export default o
