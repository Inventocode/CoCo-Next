/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1008
 */

"use strict"

export { r as a }
function r(e) {
  try {
    return e && "function" === typeof e && e.name || "<anonymous>"
  } catch (t) {
    return "<anonymous>"
  }
}
export default r
