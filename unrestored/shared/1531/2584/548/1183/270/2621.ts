/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2621
 */

"use strict"

export { i as a }
import * as /* [auto-meaningful-name] */$$_$$_$$_19 from "../../../19"
function i() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {}
  var /* [auto-meaningful-name] */e$baseClasses = e.baseClasses
  var /* [auto-meaningful-name] */e$newClasses = e.newClasses
  e.Component
  if (!e$newClasses) {
    return e$baseClasses
  }
  var i = $$_$$_$$_19.a({}, e$baseClasses)
  Object.keys(e$newClasses).forEach(function (e) {
    if (e$newClasses[e]) {
      i[e] = "".concat(e$baseClasses[e], " ").concat(e$newClasses[e])
    }
  })
  return i
}
export default i
