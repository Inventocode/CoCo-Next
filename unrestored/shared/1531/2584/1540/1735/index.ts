/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1735
 */

"use strict"

var r = require("../1720/258/index")
var o = require("./257")
var i = require("./706")
var a = require("./949")
var r$aTypedArray = r.aTypedArray;
(0, r.exportTypedArrayMethod)("subarray", function (e, t) {
  var n = r$aTypedArray(this)
  var n$length = n.length
  var c = i(e, n$length)
  return new (a(n))(n.buffer, n.byteOffset + c * n.BYTES_PER_ELEMENT, o((undefined === t ? n$length : i(t, n$length)) - c))
})
