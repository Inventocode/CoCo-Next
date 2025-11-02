/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1732
 */

"use strict"

var r = require("./1720/258/index")
var o = require("./1735/949")
var i = require("./1736/167")
var r$aTypedArray = r.aTypedArray
var r$exportTypedArrayMethod = r.exportTypedArrayMethod
var $slice = [].slice
r$exportTypedArrayMethod("slice", function (e, t) {
  for (var n = $slice.call(r$aTypedArray(this), e, t), r = o(this), i = 0, n$length = n.length, l = new r(n$length); n$length > i;) {
    l[i] = n[i++]
  }
  return l
}, i(function () {
  new Int8Array(1).slice()
}))
