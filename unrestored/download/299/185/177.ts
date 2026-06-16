/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：177
 */

"use strict"

export { i as a }
var r = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$")
function i(e) {
  var t = e.match(r)
  if (t) {
    var n = undefined
    if ("1" === t[3]) {
      n = true
    } else {
      if ("0" === t[3]) {
        n = false
      }
    }
    return {
      traceId: t[1],
      parentSampled: n,
      parentSpanId: t[2]
    }
  }
}
export default i
