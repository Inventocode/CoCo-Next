/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-24
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_75 from /* 75 */"./75"
import * as /* [auto-meaningful-name] */Module_295 from /* 295 */"./295"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"./19"
import * as /* [auto-meaningful-name] */Module_40 from /* 40 */"./40/index"
import * as /* [auto-meaningful-name] */Module_35 from /* 35 */"./35"
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
      Module_35.a(e, t, n[t])
    })
  }
  return e
}
export { Pn }
