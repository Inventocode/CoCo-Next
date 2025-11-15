/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：120
 */

"use strict"

function r(e, t) {
  return (r = Object.setPrototypeOf || function (e, t) {
    e.__proto__ = t
    return e
  })(e, t)
}
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
    r(e, t)
  }
}
export { i as a }
export default i
