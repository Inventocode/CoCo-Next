/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1733
 */

"use strict"

var r = require("../1720/258/index")
var require$399$some = require("./399").some
var r$aTypedArray = r.aTypedArray;
(0, r.exportTypedArrayMethod)("some", function (e) {
  return require$399$some(r$aTypedArray(this), e, arguments.length > 1 ? arguments[1] : undefined)
})
