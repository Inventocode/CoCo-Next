/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1776
 */

"use strict";

var r = require("./952/index");
module.exports = function (e) {
  return !(!e || "string" !== typeof e || e.length < 6) && !new RegExp("[^" + r.get().replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&") + "]").test(e);
};