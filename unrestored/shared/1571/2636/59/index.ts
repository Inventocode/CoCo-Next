/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：59
 */

"use strict"

export { a }
import * as /* [auto-meaningful-name] */Module_203 from /* 203 */"../301/203"
import * as /* [auto-meaningful-name] */Module_1010 from /* 1010 */"./1010"
import * as /* [auto-meaningful-name] */Module_693 from /* 693 */"./693"
function a(e) {
  return function () {
    var t
    var n = Module_203.a(e)
    if (Module_1010.a()) {
      var /* [auto-meaningful-name] */Module_203$aThis$constructor = Module_203.a(this).constructor
      t = Reflect.construct(n, arguments, Module_203$aThis$constructor)
    } else {
      t = n.apply(this, arguments)
    }
    return Module_693.a(this, t)
  }
}
export default a
