/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1736
 */

"use strict"

var r = require("./194")
var o = require("../1720/258/index")
var i = require("./167")
var r$Int8Array = r.Int8Array
var o$aTypedArray = o.aTypedArray
var o$exportTypedArrayMethod = o.exportTypedArrayMethod
var $toLocaleString = [].toLocaleString
var $slice = [].slice
var d = !!r$Int8Array && i(function () {
  $toLocaleString.call(new r$Int8Array(1))
})
o$exportTypedArrayMethod("toLocaleString", function () {
  return $toLocaleString.apply(d ? $slice.call(o$aTypedArray(this)) : o$aTypedArray(this), arguments)
}, i(function () {
  return [1, 2].toLocaleString() != new r$Int8Array([1, 2]).toLocaleString()
}) || !i(function () {
  r$Int8Array.prototype.toLocaleString.call([1, 2])
}))
