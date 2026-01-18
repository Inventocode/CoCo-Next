/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：491
 */

"use strict"

export { o as a }
import * as /* [auto-meaningful-name] */$$_80_index from "../80/index"
import /* [auto-meaningful-name] */$$_80_index1 from "../80/index"
function o(e, t, n, r) {
  var o = $$_80_index1.unstable_batchedUpdates ? function (e) {
    $$_80_index1.unstable_batchedUpdates(n, e)
  } : n
  if (e.addEventListener) {
    e.addEventListener(t, o, r)
  }
  return {
    remove: function () {
      if (e.removeEventListener) {
        e.removeEventListener(t, o)
      }
    }
  }
}
export default o
