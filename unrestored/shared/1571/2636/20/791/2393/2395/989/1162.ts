/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1162
 */

"use strict"

var r = require("../../../../../207/787/180")
var i = require("../../../2385/283/index")
var o = require("../../../2385/284/index")
var a = require("../../../2385/2386/1402/311/974/index")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.EndOfStreamError = exports.defaultMessages = undefined
exports.defaultMessages = "End-Of-Stream"
var s = function (e) {
  i(a, e)
  var n = o(a)
  function a() {
    r(this, a)
    return n.call(this, exports.defaultMessages)
  }
  return a
}(a(Error))
exports.EndOfStreamError = s
