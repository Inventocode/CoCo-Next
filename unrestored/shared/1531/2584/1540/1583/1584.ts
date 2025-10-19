/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1584
 */

"use strict";

var r = require("../1659/241");
var o = require("../1608/1205/1207");
module.exports = function (e) {
  r(this);
  if ("string" === e || "default" === e) {
    e = "string";
  } else if ("number" !== e) {
    throw TypeError("Incorrect hint");
  }
  return o(this, e);
};