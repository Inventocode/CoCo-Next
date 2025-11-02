/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1727
 */

"use strict"

var r = require("./1720/258/index")
var o = require("./1720/1079")
var r$aTypedArrayConstructor = r.aTypedArrayConstructor;
(0, r.exportTypedArrayStaticMethod)("of", function () {
  for (var e = 0, arguments$length = arguments.length, n = new (r$aTypedArrayConstructor(this))(arguments$length); arguments$length > e;) {
    n[e] = arguments[e++]
  }
  return n
}, o)
