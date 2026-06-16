/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：465
 */

"use strict"

export { o as a }
import * as /* [auto-meaningful-name] */Module_781 from /* 781 */"../58/781"
import * as /* [auto-meaningful-name] */Module_1010 from /* 1010 */"../59/1010"
function o(e, t, n) {
  return (o = Module_1010.a() ? Reflect.construct : function (e, t, n) {
    var i = [null]
    i.push.apply(i, t)
    var o = new (Function.bind.apply(e, i))()
    if (n) {
      Module_781.a(o, n.prototype)
    }
    return o
  }).apply(null, arguments)
}
export default o
