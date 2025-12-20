/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1541__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_107 from "../107"
import * as /* [auto-meaningful-name] */$$_241_index from "../241/index"
function h(e, t) {
  if ("function" === typeof e) {
    e(t)
  } else {
    if ("object" === $$_107.a(e) && e && "current" in e) {
      e.current = t
    }
  }
}
function m() {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, t = new Array(arguments$length), n = 0; n < arguments$length; n++) {
    t[n] = arguments[n]
  }
  return function (e) {
    t.forEach(function (t) {
      h(t, e)
    })
  }
}
export { h }
export { m }
