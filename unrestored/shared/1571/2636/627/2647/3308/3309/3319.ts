/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：3319
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.IS_IOS = exports.IS_IPOD = exports.IS_IPHONE = exports.IS_IPAD = undefined
var a = "undefined" !== typeof window && window.navigator ? window.navigator.userAgent : ""
var r = /iPad/i.test(a)
exports.IS_IPAD = r
var o = /iPhone/i.test(a) && !r
exports.IS_IPHONE = o
var i = /iPod/i.test(a)
exports.IS_IPOD = i
var l = o || r || i
exports.IS_IOS = l
