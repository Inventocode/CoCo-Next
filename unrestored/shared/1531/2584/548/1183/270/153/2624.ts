/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2624
 */

"use strict"

function r(e) {
  var e$theme = e.theme
  var e$name = e.name
  var e$props = e.props
  if (!e$theme || !e$theme.props || !e$theme.props[e$name]) {
    return e$props
  }
  var i
  var o = e$theme.props[e$name]
  for (i in o) if (undefined === e$props[i]) {
    e$props[i] = o[i]
  }
  return e$props
}
export { r as a }
export default r
