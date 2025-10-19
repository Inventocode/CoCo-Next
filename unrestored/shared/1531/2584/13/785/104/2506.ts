/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2506
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  var n = {};
  var r = function (e) {
    var t = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
    n[e] = t;
  };
  if (0 === e) {
    r("first-child");
  }
  if (e === t - 1) {
    r("last-child");
  }
  if (0 === e || e % 2 === 0) {
    r("even");
  }
  if (1 === Math.abs(e % 2)) {
    r("odd");
  }
  r("nth-child", e);
  return n;
};