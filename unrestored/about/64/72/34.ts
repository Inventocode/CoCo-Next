/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：34
 */

"use strict"

export { i as a }
var /* [auto-meaningful-name] */Anonymous = "<anonymous>"
function i(e) {
  try {
    return e && "function" === typeof e && e.name || Anonymous
  } catch (t) {
    return Anonymous
  }
}
export default i
