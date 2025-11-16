/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2622
 */

"use strict"

export { a }
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_19 from "../../../../19"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_108 from "../../../../108"
function o(e) {
  return e && "object" === $$_$$_$$_$$_108.a(e) && e.constructor === Object
}
function a(e, t) {
  var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {
    clone: true
  }
  var i = n.clone ? $$_$$_$$_$$_19.a({}, e) : e
  if (o(e) && o(t)) {
    Object.keys(t).forEach(function (r) {
      if ("__proto__" !== r) {
        if (o(t[r]) && r in e) {
          i[r] = a(e[r], t[r], n)
        } else {
          i[r] = t[r]
        }
      }
    })
  }
  return i
}
export default a
