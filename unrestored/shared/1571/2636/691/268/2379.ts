/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2379
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
var r = require("./359")
var i = require("./1399/501")
var o = require("./649/index")
exports.targetName = function (e) {
  return function (t, n, a) {
    var s = new i.Metadata(r.NAME_TAG, e)
    o.tagParameter(t, n, a, s)
  }
}
