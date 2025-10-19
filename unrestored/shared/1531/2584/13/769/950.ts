/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：950
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warning = i;
exports.note = o;
exports.resetWarned = function () {
  r = {};
};
exports.call = a;
exports.warningOnce = s;
exports.noteOnce = function (e, t) {
  a(o, e, t);
};
exports.default = undefined;
var r = {};
function i(e, t) {
  0;
}
function o(e, t) {
  0;
}
function a(e, t, n) {
  if (!(t || r[n])) {
    e(false, n);
    r[n] = true;
  }
}
function s(e, t) {
  a(i, e, t);
}
var c = s;
exports.default = c;