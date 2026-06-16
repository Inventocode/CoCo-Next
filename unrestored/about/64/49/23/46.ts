/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：46
 */

"use strict"

export { s as a }
import * as /* [auto-meaningful-name] */Module_50 from /* 50 */"../50"
import * as /* [auto-meaningful-name] */Module_8 from /* 8 */"../8"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"../12"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../6"
function s() {
  Module_50.a({
    callback: u,
    type: "error"
  })
  Module_50.a({
    callback: u,
    type: "unhandledrejection"
  })
}
function u() {
  var e = Module_6.b()
  if (e) {
    Module_8.a.log("[Tracing] Transaction: " + Module_12.a.InternalError + " -> Global error occured")
    e.setStatus(Module_12.a.InternalError)
  }
}
export default s
