/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：491
 */

"use strict"

export { o as a }
import * as /* [auto-meaningful-name] */ReactDom from "react-dom"
import /* [auto-meaningful-name] */ReactDom1 from "react-dom"
function o(e, t, n, r) {
  var o = ReactDom1.unstable_batchedUpdates ? function (e) {
    ReactDom1.unstable_batchedUpdates(n, e)
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
