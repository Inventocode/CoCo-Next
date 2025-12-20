/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-24
 */

"use strict"

import * as kn from "./75"
import * as /* [auto-meaningful-name] */$_295 from "./295"
import * as Dn from "./19"
import * as /* [auto-meaningful-name] */$_40_index from "./40/index"
import * as Ln from "./35"
function Pn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? Object(arguments[t]) : {}
    var r = Object.keys(n)
    if ("function" === typeof Object.getOwnPropertySymbols) {
      r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))
    }
    r.forEach(function (t) {
      Ln.a(e, t, n[t])
    })
  }
  return e
}
export { Pn }
