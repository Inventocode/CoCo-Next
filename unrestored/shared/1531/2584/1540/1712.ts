/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1712
 */

"use strict";

var r = require("./1720/258/index");
var o = require("./1733/399").every;
var i = r.aTypedArray;
(0, r.exportTypedArrayMethod)("every", function (e) {
  return o(i(this), e, arguments.length > 1 ? arguments[1] : undefined);
});