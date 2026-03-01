/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1162
 */

"use strict"

var r = require(/* 180 */"../../../../../../207/787/180")
var i = require(/* 283 */"../../../../../../1058/1393/1143/283/index")
var o = require(/* 284 */"../../../../../../1058/1393/1143/284/index")
var a = require(/* 974 */"./974/index")
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
