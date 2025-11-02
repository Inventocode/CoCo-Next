/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2621
 */

"use strict"

export { i as a }
import r = require("../../../19");
function i() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {}
  var e$baseClasses = e.baseClasses
  var e$newClasses = e.newClasses
  e.Component
  if (!e$newClasses) {
    return e$baseClasses
  }
  var i = r.a({}, e$baseClasses)
  Object.keys(e$newClasses).forEach(function (e) {
    if (e$newClasses[e]) {
      i[e] = "".concat(e$baseClasses[e], " ").concat(e$newClasses[e])
    }
  })
  return i
}
export default i
