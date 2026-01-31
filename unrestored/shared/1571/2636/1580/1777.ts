/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1777
 */

"use strict"

var /* [auto-meaningful-name] */require$_1754_257_index$exportTypedArrayMethod = require("./1754/257/index").exportTypedArrayMethod
var o = require("./1659/168")
var /* [auto-meaningful-name] */require$_1782_194$Uint8Array = require("./1782/194").Uint8Array
var a = require$_1782_194$Uint8Array && require$_1782_194$Uint8Array.prototype || {}
var /* [auto-meaningful-name] */$toString = [].toString
var /* [auto-meaningful-name] */$join = [].join
if (o(function () {
  $toString.call({})
})) {
  $toString = function () {
    return $join.call(this)
  }
}
var l = a.toString != $toString
require$_1754_257_index$exportTypedArrayMethod("toString", $toString, l)
