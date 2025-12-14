/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：6
 */

"use strict"

export { o as c }
export { a }
export { s as b }
export { u as d }
export { l as e }
import * as /* [auto-meaningful-name] */$$_16_32 from "../16/32"
var i = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$")
function o(e) {
  var t
  if (undefined === e) {
    e = null === (t = $$_16_32.b().getClient()) || undefined === t ? undefined : t.getOptions()
  }
  return !!e && ("tracesSampleRate" in e || "tracesSampler" in e)
}
function a(e) {
  var t = e.match(i)
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
function s(e) {
  var t
  var n
  if (undefined === e) {
    e = $$_16_32.b()
  }
  return null === (n = null === (t = e) || undefined === t ? undefined : t.getScope()) || undefined === n ? undefined : n.getTransaction()
}
function u(e) {
  return e / 1e3
}
function l(e) {
  return 1e3 * e
}
export default a
