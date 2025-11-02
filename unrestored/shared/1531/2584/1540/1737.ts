/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1737
 */

"use strict"

var require$1720258Index$exportTypedArrayMethod = require("./1720/258/index").exportTypedArrayMethod
var o = require("./1736/167")
var require$1736194$Uint8Array = require("./1736/194").Uint8Array
var a = require$1736194$Uint8Array && require$1736194$Uint8Array.prototype || {}
var $toString = [].toString
var $join = [].join
if (o(function () {
  $toString.call({})
})) {
  $toString = function () {
    return $join.call(this)
  }
}
var l = a.toString != $toString
require$1720258Index$exportTypedArrayMethod("toString", $toString, l)
