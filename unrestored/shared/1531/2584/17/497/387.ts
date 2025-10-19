/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：387
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fail = exports.assert = undefined;
exports.assert = function (e, t) {
  if (!e) {
    throw new Error(t);
  }
};
exports.fail = function (e) {
  console.error(e);
};