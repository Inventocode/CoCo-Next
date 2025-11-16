/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1436
 */

"use strict"

export { s as a }
import * as /* [auto-meaningful-name] */$$_1508 from "../1508"
import * as /* [auto-meaningful-name] */$$_265 from "../265"
import * as /* [auto-meaningful-name] */$$_350 from "../350"
import * as /* [auto-meaningful-name] */$$_218 from "../218"
function s() {
  $$_1508.a({
    callback: c,
    type: "error"
  })
  $$_1508.a({
    callback: c,
    type: "unhandledrejection"
  })
}
function c() {
  var e = $$_218.b()
  if (e) {
    $$_265.a.log("[Tracing] Transaction: " + $$_350.a.InternalError + " -> Global error occured")
    e.setStatus($$_350.a.InternalError)
  }
}
export default s
