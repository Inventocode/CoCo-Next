/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1737
 */

"use strict"

var /* [auto-meaningful-name] */require$_1724_258$exportTypedArrayMethod = require("./1724/258").exportTypedArrayMethod
var o = require("./1541/167")
var /* [auto-meaningful-name] */require$_1541_194$Uint8Array = require("./1541/194").Uint8Array
var a = require$_1541_194$Uint8Array && require$_1541_194$Uint8Array.prototype || {}
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
require$_1724_258$exportTypedArrayMethod("toString", $toString, l)
