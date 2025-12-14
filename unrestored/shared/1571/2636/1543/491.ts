/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：491
 */

"use strict"

export { o as a }
import * as /* [auto-meaningful-name] */$$_80_index from "../80/index"
import /* [auto-meaningful-name] */_$$_80_index from "../80/index"
function o(e, t, n, r) {
  var o = _$$_80_index.unstable_batchedUpdates ? function (e) {
    _$$_80_index.unstable_batchedUpdates(n, e)
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
