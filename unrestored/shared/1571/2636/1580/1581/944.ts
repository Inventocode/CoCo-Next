/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：944
 */

"use strict"

var /* [auto-meaningful-name] */$propertyIsEnumerable = {}.propertyIsEnumerable
var /* [auto-meaningful-name] */Object$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
var i = Object$getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
  1: 2
}, 1)
exports.f = i ? function (e) {
  var t = Object$getOwnPropertyDescriptor(this, e)
  return !!t && t.enumerable
} : $propertyIsEnumerable
