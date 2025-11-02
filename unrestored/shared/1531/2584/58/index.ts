/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：58
 */

"use strict"

export { a }
import r = require("../301/203");
import i = require("./989");
import o = require("./685");
function a(e) {
  return function () {
    var t
    var n = r.a(e)
    if (i.a()) {
      var r$aThis$constructor = r.a(this).constructor
      t = Reflect.construct(n, arguments, r$aThis$constructor)
    } else {
      t = n.apply(this, arguments)
    }
    return o.a(this, t)
  }
}
export default a
