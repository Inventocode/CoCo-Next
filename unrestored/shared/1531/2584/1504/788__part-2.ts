/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：788__part-2
 */

"use strict"

import * as /* [auto-meaningful-name] */ResizeObserverPolyfill from "resize-observer-polyfill"
var h = new Map()
var m = new ResizeObserverPolyfill.default(function (e) {
  e.forEach(function (e) {
    var t
    var /* [auto-meaningful-name] */e$target = e.target
    if (!(null === (t = h.get(e$target)) || undefined === t)) {
      t.forEach(function (e) {
        return e(e$target)
      })
    }
  })
})
export { h as "788__part-2__h" }
export { m as "788__part-2__m" }
