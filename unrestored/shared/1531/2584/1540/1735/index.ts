/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1735
 */

"use strict"

var r = require("../1724/258")
var o = require("../1684/257")
var i = require("../1575/706")
var a = require("./949")
var /* [auto-meaningful-name] */r$aTypedArray = r.aTypedArray;
(0, r.exportTypedArrayMethod)("subarray", function (e, t) {
  var n = r$aTypedArray(this)
  var /* [auto-meaningful-name] */n$length = n.length
  var c = i(e, n$length)
  return new (a(n))(n.buffer, n.byteOffset + c * n.BYTES_PER_ELEMENT, o((undefined === t ? n$length : i(t, n$length)) - c))
})
