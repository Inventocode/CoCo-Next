/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1723
 */

"use strict"

var r = require("./1736/194")
var o = require("./1720/258/index")
var i = require("./936/index")
var a = require("./1742/247/index")("iterator")
var r$Uint8Array = r.Uint8Array
var i$values = i.values
var i$keys = i.keys
var i$entries = i.entries
var o$aTypedArray = o.aTypedArray
var o$exportTypedArrayMethod = o.exportTypedArrayMethod
var f = r$Uint8Array && r$Uint8Array.prototype[a]
var h = !!f && ("values" == f.name || undefined == f.name)
var m = function () {
  return i$values.call(o$aTypedArray(this))
}
o$exportTypedArrayMethod("entries", function () {
  return i$entries.call(o$aTypedArray(this))
})
o$exportTypedArrayMethod("keys", function () {
  return i$keys.call(o$aTypedArray(this))
})
o$exportTypedArrayMethod("values", m, !h)
o$exportTypedArrayMethod(a, m, !h)
