/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：185__part-0
 */

"use strict"

import { u } from "./index__part-1"
import { d, h, v } from "./index__part-2"
import { q } from "./index__part-5"
var r = {}
Object.defineProperty(r, "Express", {
  get: function () {
    return u
  }
})
Object.defineProperty(r, "Postgres", {
  get: function () {
    return d
  }
})
Object.defineProperty(r, "Mysql", {
  get: function () {
    return h
  }
})
Object.defineProperty(r, "Mongo", {
  get: function () {
    return v
  }
})
Object.defineProperty(r, "BrowserTracing", {
  get: function () {
    return q
  }
})
export { r }
