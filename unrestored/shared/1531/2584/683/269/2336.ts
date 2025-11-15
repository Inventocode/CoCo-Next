/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2336
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
var r = require("./2342/498")
var i = require("./645")
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
