/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：58
 */

"use strict"

export { a }
import * as /* [auto-meaningful-name] */$$_301_203 from "../301/203"
import * as /* [auto-meaningful-name] */$_989 from "./989"
import * as /* [auto-meaningful-name] */$_685 from "./685"
function a(e) {
  return function () {
    var t
    var n = $$_301_203.a(e)
    if ($_989.a()) {
      var /* [auto-meaningful-name] */$$_301_203$aThis$constructor = $$_301_203.a(this).constructor
      t = Reflect.construct(n, arguments, $$_301_203$aThis$constructor)
    } else {
      t = n.apply(this, arguments)
    }
    return $_685.a(this, t)
  }
}
export default a
