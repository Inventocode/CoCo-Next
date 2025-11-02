/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1718
 */

"use strict"

var r = require("./1720/258/index")
var require$1733399$findIndex = require("./1733/399").findIndex
var r$aTypedArray = r.aTypedArray;
(0, r.exportTypedArrayMethod)("findIndex", function (e) {
  return require$1733399$findIndex(r$aTypedArray(this), e, arguments.length > 1 ? arguments[1] : undefined)
})
