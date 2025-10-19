/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2560
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assignProperties = function (e, t) {
  Object.keys(t).forEach(function (n) {
    e[n] = t[n];
  });
};
exports.assign = function (e, n, r) {
  if ("string" === typeof n) {
    n = n.split(".");
  }
  if (n.length > 1) {
    var o = n.shift();
    exports.assign(e[o] = "[object Object]" === Object.prototype.toString.call(e[o]) ? e[o] : {}, n, r);
  } else {
    e[n[0]] = r;
  }
};