/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：498
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
var r = require("../359")
var i = function () {
  function e(e, t) {
    this.key = e
    this.value = t
  }
  e.prototype.toString = function () {
    return this.key === r.NAMED_TAG ? "named: " + this.value.toString() + " " : "tagged: { key:" + this.key.toString() + ", value: " + this.value + " }"
  }
  return e
}()
exports.Metadata = i
