/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：57
 */

"use strict"

export { i as a }
import r = require("./770");
function i(e, t) {
  if ("function" !== typeof t && null !== t) {
    throw new TypeError("Super expression must either be null or a function")
  }
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: true,
      configurable: true
    }
  })
  if (t) {
    r.a(e, t)
  }
}
export default i
