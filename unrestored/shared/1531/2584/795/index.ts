/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：795
 */

"use strict"

function r(t, n) {
  setImmediate(function () {
    t.focus()
    t.selectionEnd = t.selectionStart = n ? 0 : t.value.length
  })
}
export { r as a }
export default r
