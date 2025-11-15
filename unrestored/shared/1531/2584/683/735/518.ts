/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：518
 */

"use strict"

export { o as a }
import /* [auto-meaningful-name] */$$_520_393 = require("../520/393")
import /* [auto-meaningful-name] */$$_215_293 = require("../215/293")
function o(e) {
  return function t(n, o) {
    switch (arguments.length) {
      case 0:
        return t
      case 1:
        return $$_215_293.a(n) ? t : $$_520_393.a(function (t) {
          return e(n, t)
        })
      default:
        return $$_215_293.a(n) && $$_215_293.a(o) ? t : $$_215_293.a(n) ? $$_520_393.a(function (t) {
          return e(t, o)
        }) : $$_215_293.a(o) ? $$_520_393.a(function (t) {
          return e(n, t)
        }) : e(n, o)
    }
  }
}
export default o
