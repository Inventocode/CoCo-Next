/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1726
 */

"use strict";

var r = require("./1720/258/index");
var o = require("./1733/399").map;
var i = require("./1735/949");
var a = r.aTypedArray;
(0, r.exportTypedArrayMethod)("map", function (e) {
  return o(a(this), e, arguments.length > 1 ? arguments[1] : undefined, function (e, t) {
    return new (i(e))(t);
  });
});