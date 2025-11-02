/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：19
 */

"use strict"

function r() {
  return (r = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t]
      for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
        e[r] = n[r]
      }
    }
    return e
  }).apply(this, arguments)
}
export { r as a }
export default r
