/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：168
 */

"use strict"

function r(e) {
  if (null === e || true === e || false === e) {
    return NaN
  }
  var t = Number(e)
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t)
}
export { r as a }
export default r
