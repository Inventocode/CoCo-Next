/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：46
 */

"use strict"

export { s as a }
import * as /* [auto-meaningful-name] */$$_50 from "../50"
import * as i from "../8"
import * as /* [auto-meaningful-name] */$$_12 from "../12"
import * as a from "../6"
function s() {
  $$_50.a({
    callback: u,
    type: "error"
  })
  $$_50.a({
    callback: u,
    type: "unhandledrejection"
  })
}
function u() {
  var e = a.b()
  if (e) {
    i.a.log("[Tracing] Transaction: " + $$_12.a.InternalError + " -> Global error occured")
    e.setStatus($$_12.a.InternalError)
  }
}
export default s
