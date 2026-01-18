/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：64
 */

"use strict"

export { i as a }
export { a as b }
export { s as c }
import * as /* [auto-meaningful-name] */$_28_303_index from "./28/303/index"
import /* [auto-meaningful-name] */$_28_303_index1 from "./28/303/index"
function i(e) {
  return e + "_" + $_28_303_index1.generate()
}
function a(e) {
  var t = window.getSelection ? window.getSelection() : null
  if (t) {
    var n = document.createRange()
    n.selectNodeContents(e)
    n.collapse(false)
    t.removeAllRanges()
    t.addRange(n)
  }
}
function s(e) {
  var t = window.getSelection ? window.getSelection() : null
  if (t) {
    var n = document.createRange()
    n.selectNodeContents(e)
    t.removeAllRanges()
    t.addRange(n)
  }
}
$_28_303_index1.characters("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_")
export default i
