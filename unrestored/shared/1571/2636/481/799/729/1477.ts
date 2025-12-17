/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1477
 */

"use strict"

export { s as a }
import * as /* [auto-meaningful-name] */$$_1549_index from "../1549/index"
import * as /* [auto-meaningful-name] */$$_264 from "../264"
import * as /* [auto-meaningful-name] */$$_352 from "../352"
import * as /* [auto-meaningful-name] */$$_220_index from "../220/index"
function s() {
  $$_1549_index.a({
    callback: c,
    type: "error"
  })
  $$_1549_index.a({
    callback: c,
    type: "unhandledrejection"
  })
}
function c() {
  var e = $$_220_index.b()
  if (e) {
    $$_264.a.log("[Tracing] Transaction: " + $$_352.a.InternalError + " -> Global error occured")
    e.setStatus($$_352.a.InternalError)
  }
}
export default s
