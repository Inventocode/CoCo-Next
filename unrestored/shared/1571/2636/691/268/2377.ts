/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2377
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
var r = require("./359")
var i = require("./1396/501")
var o = require("./649")
exports.unmanaged = function () {
  return function (e, t, n) {
    var a = new i.Metadata(r.UNMANAGED_TAG, true)
    o.tagParameter(e, t, n, a)
  }
}
