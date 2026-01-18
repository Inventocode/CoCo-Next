/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：521
 */

"use strict"

export { o as a }
import * as /* [auto-meaningful-name] */$$_217_394 from "../217/394"
import * as /* [auto-meaningful-name] */$$_217_292 from "../217/292"
function o(e) {
  return function t(n, o) {
    switch (arguments.length) {
      case 0:
        return t
      case 1:
        return $$_217_292.a(n) ? t : $$_217_394.a(function (t) {
          return e(n, t)
        })
      default:
        return $$_217_292.a(n) && $$_217_292.a(o) ? t : $$_217_292.a(n) ? $$_217_394.a(function (t) {
          return e(t, o)
        }) : $$_217_292.a(o) ? $$_217_394.a(function (t) {
          return e(n, t)
        }) : e(n, o)
    }
  }
}
export default o
