/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：181
 */

"use strict"

export { s as a }
import * as /* [auto-meaningful-name] */Module_186 from /* 186 */"../../307/186"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"../../307/12"
import * as /* [auto-meaningful-name] */Module_1 from /* 1 */"../1"
import * as /* [auto-meaningful-name] */Module_8 from /* 8 */"../8"
function s() {
  Module_186.a("error", u)
  Module_186.a("unhandledrejection", u)
}
function u() {
  var e = Module_8.a()
  if (e) {
    var /* [auto-meaningful-name] */Internal_error = "internal_error"
    if (Module_1.a) {
      Module_12.c.log("[Tracing] Transaction: " + Internal_error + " -> Global error occured")
    }
    e.setStatus(Internal_error)
  }
}
export default s
