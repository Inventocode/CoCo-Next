/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：916
 */

"use strict"

export { o as a }
import * as /* [auto-meaningful-name] */$$_$$_75_index from "../../75/index"
import /* [auto-meaningful-name] */_$$_$$_75_index from "../../75/index"
function o(e, t, n, r) {
  var o = _$$_$$_75_index.unstable_batchedUpdates ? function (e) {
    _$$_$$_75_index.unstable_batchedUpdates(n, e)
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
