/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1731
 */

"use strict"

var r = require("../1724/258")
var o = require("../1684/257")
var i = require("./1248/index")
var a = require("../1541/309")
var s = require("../1541/167")
var /* [auto-meaningful-name] */r$aTypedArray = r.aTypedArray;
(0, r.exportTypedArrayMethod)("set", function (e) {
  r$aTypedArray(this)
  var t = i(arguments.length > 1 ? arguments[1] : undefined, 1)
  var /* [auto-meaningful-name] */this$length = this.length
  var r = a(e)
  var s = o(r.length)
  var l = 0
  if (s + t > this$length) {
    throw RangeError("Wrong length")
  }
  for (; l < s;) {
    this[t + l] = r[l++]
  }
}, s(function () {
  new Int8Array(1).set({})
}))
