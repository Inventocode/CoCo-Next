/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1721
 */

"use strict"

var r = require("../1720/258/index")
var require$817$includes = require("./817").includes
var r$aTypedArray = r.aTypedArray;
(0, r.exportTypedArrayMethod)("includes", function (e) {
  return require$817$includes(r$aTypedArray(this), e, arguments.length > 1 ? arguments[1] : undefined)
})
