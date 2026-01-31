/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1028
 */

"use strict"

function r() {
  var e = document.createElement("div")
  e.style.width = "99px"
  e.style.height = "99px"
  e.style.position = "absolute"
  e.style.top = "-9999px"
  e.style.overflow = "scroll"
  document.body.appendChild(e)
  var t = e.offsetWidth - e.clientWidth
  document.body.removeChild(e)
  return t
}
export { r as a }
export default r
