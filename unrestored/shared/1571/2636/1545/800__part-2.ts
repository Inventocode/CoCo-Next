/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：800__part-2
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
export { h }
export { m }
