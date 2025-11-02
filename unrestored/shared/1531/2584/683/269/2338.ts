/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2338
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
var r = require("./359")
var i = require("./1366/498")
var o = require("./645")
exports.optional = function () {
  return function (e, t, n) {
    var a = new i.Metadata(r.OPTIONAL_TAG, true)
    if ("number" === typeof n) {
      o.tagParameter(e, t, n, a)
    } else {
      o.tagProperty(e, t, a)
    }
  }
}
