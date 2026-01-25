/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：521
 */

"use strict"

export { o as a }
import * as /* [auto-meaningful-name] */$_394 from "./394"
import * as /* [auto-meaningful-name] */$_292 from "./292"
function o(e) {
  return function t(n, o) {
    switch (arguments.length) {
      case 0:
        return t
      case 1:
        return $_292.a(n) ? t : $_394.a(function (t) {
          return e(n, t)
        })
      default:
        return $_292.a(n) && $_292.a(o) ? t : $_292.a(n) ? $_394.a(function (t) {
          return e(t, o)
        }) : $_292.a(o) ? $_394.a(function (t) {
          return e(n, t)
        }) : e(n, o)
    }
  }
}
export default o
