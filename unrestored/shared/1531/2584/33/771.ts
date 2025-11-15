/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：771
 */

"use strict"

export { i as a }
import /* [auto-meaningful-name] */$$_80_907 = require("../80/907")
function i(e, t) {
  if (e) {
    if ("string" === typeof e) {
      return $$_80_907.a(e, t)
    }
    var n = Object.prototype.toString.call(e).slice(8, -1)
    if ("Object" === n && e.constructor) {
      n = e.constructor.name
    }
    return "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $$_80_907.a(e, t) : undefined
  }
}
export default i
