/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2343
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiBindToService = function (e) {
  return function (t) {
    return function () {
      for (var n = [], r = 0; r < arguments.length; r++) {
        n[r] = arguments[r];
      }
      return n.forEach(function (n) {
        return e.bind(n).toService(t);
      });
    };
  };
};