/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：931
 */

"use strict"

var $propertyIsEnumerable = {}.propertyIsEnumerable
var object$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
var i = object$getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
  1: 2
}, 1)
exports.f = i ? function (e) {
  var t = object$getOwnPropertyDescriptor(this, e)
  return !!t && t.enumerable
} : $propertyIsEnumerable
