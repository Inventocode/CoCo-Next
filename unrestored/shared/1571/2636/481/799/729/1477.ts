/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1477
 */

"use strict"

export { s as a }
import * as /* [auto-meaningful-name] */Module_1549 from /* 1549 */"../1549"
import * as /* [auto-meaningful-name] */Module_264 from /* 264 */"../264"
import * as /* [auto-meaningful-name] */Module_352 from /* 352 */"../352"
import * as /* [auto-meaningful-name] */Module_220 from /* 220 */"../220"
function s() {
  Module_1549.a({
    callback: c,
    type: "error"
  })
  Module_1549.a({
    callback: c,
    type: "unhandledrejection"
  })
}
function c() {
  var e = Module_220.b()
  if (e) {
    Module_264.a.log("[Tracing] Transaction: " + Module_352.a.InternalError + " -> Global error occured")
    e.setStatus(Module_352.a.InternalError)
  }
}
export default s
