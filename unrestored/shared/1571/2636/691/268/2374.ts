/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2374
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
var r = require("./1399/501")
var i = require("./649")
exports.tagged = function (e, t) {
  return function (n, o, a) {
    var s = new r.Metadata(e, t)
    if ("number" === typeof a) {
      i.tagParameter(n, o, a, s)
    } else {
      i.tagProperty(n, o, s)
    }
  }
}
