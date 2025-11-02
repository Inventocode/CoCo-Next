/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：91
 */

"use strict"

export { i as a }
export { a as b }
import r = require("./68");
import o = require("./28/index");
function i(e) {
  return (o.e() ? window.parent : window).postMessage(e, window.location.origin)
}
function a(e, t, n, o) {
  i({
    type: r.b.PLAYER_DATA_WATCH,
    data: {
      screenId: e,
      tab: t,
      id: n,
      value: o
    }
  })
}
export default i
