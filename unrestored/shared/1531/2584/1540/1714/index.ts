/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1714
 */

"use strict"

var r = require("../1724/258")
var /* [auto-meaningful-name] */require$$_1541_399$filter = require("../1541/399").filter
var i = require("./1715/index")
var /* [auto-meaningful-name] */r$aTypedArray = r.aTypedArray;
(0, r.exportTypedArrayMethod)("filter", function (e) {
  var t = require$$_1541_399$filter(r$aTypedArray(this), e, arguments.length > 1 ? arguments[1] : undefined)
  return i(this, t)
})
