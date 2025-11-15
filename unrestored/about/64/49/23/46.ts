/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：46
 */

"use strict"

export { s as a }
import * as /* [auto-meaningful-name] */$$_$$_72_50 from "../../72/50"
import * as /* [auto-meaningful-name] */$$_$$_72_8 from "../../72/8"
import * as /* [auto-meaningful-name] */$$_12 from "../12"
import * as a from "../6"
function s() {
  $$_$$_72_50.a({
    callback: u,
    type: "error"
  })
  $$_$$_72_50.a({
    callback: u,
    type: "unhandledrejection"
  })
}
function u() {
  var e = a.b()
  if (e) {
    $$_$$_72_8.a.log("[Tracing] Transaction: " + $$_12.a.InternalError + " -> Global error occured")
    e.setStatus($$_12.a.InternalError)
  }
}
export default s
