/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：787__part-0
 */

"use strict"

import { "787__part-3__P" as P } from "./index__part-3"
import { "787__part-4__L" as L, "787__part-4__U" as U, "787__part-4__G" as G } from "./index__part-4"
var r = {}
Object.defineProperty(r, "Express", {
  get: function () {
    return P
  }
})
Object.defineProperty(r, "Postgres", {
  get: function () {
    return L
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
export { r as "787__part-0__r" }
