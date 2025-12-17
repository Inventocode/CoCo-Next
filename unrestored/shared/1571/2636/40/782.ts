/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：782
 */

"use strict"

export { i as a }
import * as /* [auto-meaningful-name] */$$_79_920 from "../79/920"
function i(e, t) {
  if (e) {
    if ("string" === typeof e) {
      return $$_79_920.a(e, t)
    }
    var n = Object.prototype.toString.call(e).slice(8, -1)
    if ("Object" === n && e.constructor) {
      n = e.constructor.name
    }
    return "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $$_79_920.a(e, t) : undefined
  }
}
export default i
