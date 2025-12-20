/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：799__part-0
 */

"use strict"

import { P } from "./index__part-3"
import { j, U, G } from "./index__part-4"
var r = {}
Object.defineProperty(r, "Express", {
  get: function () {
    return P
  }
})
Object.defineProperty(r, "Postgres", {
  get: function () {
    return j
  }
})
Object.defineProperty(r, "Mysql", {
  get: function () {
    return U
  }
})
Object.defineProperty(r, "Mongo", {
  get: function () {
    return G
  }
})
export { r }
