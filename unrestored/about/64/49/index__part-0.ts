/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：49__part-0
 */

"use strict"

import { "49__part-3__A" as A } from "./index__part-3"
import { "49__part-4__U" as U, "49__part-4__z" as z, "49__part-4__q" as q } from "./index__part-4"
var r = {}
Object.defineProperty(r, "Express", {
  get: function () {
    return A
  }
})
Object.defineProperty(r, "Postgres", {
  get: function () {
    return U
  }
})
Object.defineProperty(r, "Mysql", {
  get: function () {
    return z
  }
})
Object.defineProperty(r, "Mongo", {
  get: function () {
    return q
  }
})
export { r as "49__part-0__r" }
