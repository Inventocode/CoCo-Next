/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：58
 */

"use strict"

export { i as a }
import * as /* [auto-meaningful-name] */$_781 from "./781"
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
    $_781.a(e, t)
  }
}
export default i
