/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：908
 */

"use strict";

var r = require("./393");
var i = r.a(function (e) {
  return null === e ? "Null" : undefined === e ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
});
exports.a = i;