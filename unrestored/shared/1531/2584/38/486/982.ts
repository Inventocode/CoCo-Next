/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：982
 */

"use strict";

var r = require("./229");
exports.a = function (e, t) {
  var n;
  if (undefined === t) {
    t = true;
  }
  var i = new Promise(function (r) {
    n = setTimeout(r, e, t);
  });
  i[r.a] = function () {
    clearTimeout(n);
  };
  return i;
};