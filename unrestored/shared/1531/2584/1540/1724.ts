/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1724
 */

"use strict"

var r = require("./1720/258/index")
var r$aTypedArray = r.aTypedArray
var r$exportTypedArrayMethod = r.exportTypedArrayMethod
var $join = [].join
r$exportTypedArrayMethod("join", function (e) {
  return $join.apply(r$aTypedArray(this), arguments)
})
