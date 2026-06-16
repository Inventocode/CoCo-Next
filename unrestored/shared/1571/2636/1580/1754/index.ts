/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1754
 */

"use strict"

var r = require(/* 257 */"../1758/257/index")
var /* [auto-meaningful-name] */require_401_$$_1758_401$filter = require(/* 401 */"../1758/401").filter
var i = require(/* 1755 */"./1755/index")
var /* [auto-meaningful-name] */r$aTypedArray = r.aTypedArray;
(0, r.exportTypedArrayMethod)("filter", function (e) {
  var t = require_401_$$_1758_401$filter(r$aTypedArray(this), e, arguments.length > 1 ? arguments[1] : undefined)
  return i(this, t)
})
