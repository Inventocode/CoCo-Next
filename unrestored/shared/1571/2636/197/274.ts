/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：274
 */

"use strict"

export { a }
import * as /* [auto-meaningful-name] */$$_301_203 from "../301/203"
import * as /* [auto-meaningful-name] */$$_58_781 from "../58/781"
import * as /* [auto-meaningful-name] */$$_34_465 from "../34/465"
function a(e) {
  var t = "function" === typeof Map ? new Map() : undefined
  return (a = function (e) {
    if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) {
      return e
    }
    var n
    if ("function" !== typeof e) {
      throw new TypeError("Super expression must either be null or a function")
    }
    if ("undefined" !== typeof t) {
      if (t.has(e)) {
        return t.get(e)
      }
      t.set(e, a)
    }
    function a() {
      return $$_34_465.a(e, arguments, $$_301_203.a(this).constructor)
    }
    a.prototype = Object.create(e.prototype, {
      constructor: {
        value: a,
        enumerable: false,
        writable: true,
        configurable: true
      }
    })
    return $$_58_781.a(a, e)
  })(e)
}
export default a
