/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2341
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
var r = require("./359")
var i = require("./1366/498")
var o = require("./645")
exports.targetName = function (e) {
  return function (t, n, a) {
    var s = new i.Metadata(r.NAME_TAG, e)
    o.tagParameter(t, n, a, s)
  }
}
