/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2395
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.fromBuffer = exports.fromStream = exports.EndOfStreamError = undefined
var r = require("./2396/index")
var i = require("./2399")
var o = require("./989/index")
Object.defineProperty(exports, "EndOfStreamError", {
  enumerable: true,
  get: function () {
    return o.EndOfStreamError
  }
})
exports.fromStream = function (e, t) {
  t = t || {}
  return new r.ReadStreamTokenizer(e, t)
}
exports.fromBuffer = function (e, t) {
  return new i.BufferTokenizer(e, t)
}
