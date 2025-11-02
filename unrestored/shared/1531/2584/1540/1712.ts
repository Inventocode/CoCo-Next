/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1712
 */

"use strict"

var r = require("./1720/258/index")
var require$1733399$every = require("./1733/399").every
var r$aTypedArray = r.aTypedArray;
(0, r.exportTypedArrayMethod)("every", function (e) {
  return require$1733399$every(r$aTypedArray(this), e, arguments.length > 1 ? arguments[1] : undefined)
})
