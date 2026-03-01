/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：91
 */

"use strict"

export { i as a }
export { a as b }
import * as /* [auto-meaningful-name] */Module_68 from /* 68 */"./68"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"./28/index"
function i(e) {
  return (Module_28.e() ? window.parent : window).postMessage(e, window.location.origin)
}
function a(e, t, n, o) {
  i({
    type: Module_68.b.PLAYER_DATA_WATCH,
    data: {
      screenId: e,
      tab: t,
      id: n,
      value: o
    }
  })
}
export default i
