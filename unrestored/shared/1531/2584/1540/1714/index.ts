/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1714
 */

"use strict"

var r = require("../1720/258/index")
var require$$1733399$filter = require("../1733/399").filter
var i = require("./1715/index")
var r$aTypedArray = r.aTypedArray;
(0, r.exportTypedArrayMethod)("filter", function (e) {
  var t = require$$1733399$filter(r$aTypedArray(this), e, arguments.length > 1 ? arguments[1] : undefined)
  return i(this, t)
})
