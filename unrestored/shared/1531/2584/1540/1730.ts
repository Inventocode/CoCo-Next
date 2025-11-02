/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1730
 */

"use strict"

var r = require("./1720/258/index")
var r$aTypedArray = r.aTypedArray
var r$exportTypedArrayMethod = r.exportTypedArrayMethod
var math$floor = Math.floor
r$exportTypedArrayMethod("reverse", function () {
  for (var e, r$aTypedArrayThis$length = r$aTypedArray(this).length, n = math$floor(r$aTypedArrayThis$length / 2), r = 0; r < n;) {
    e = this[r]
    this[r++] = this[--r$aTypedArrayThis$length]
    this[r$aTypedArrayThis$length] = e
  }
  return this
})
