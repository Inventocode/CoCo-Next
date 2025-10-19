/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：294
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.is_valid_number = exports.lerp = exports.to_radians = exports.clamp = exports.gen_uid = exports.contains = exports.Rect = exports.Size = undefined;
var r = function (e, t) {
  this.width = e;
  this.height = t;
};
exports.Size = r;
var i = function () {
  function e(e, t, n, r) {
    this.left = e;
    this.top = t;
    this.width = n;
    this.height = r;
  }
  e.prototype.contains = function (e) {
    return e[0] >= this.left && e[0] <= this.left + this.width && e[1] >= this.top && e[1] <= this.top + this.height;
  };
  return e;
}();
exports.Rect = i;
exports.contains = function (e, t) {
  return e.left < t[0] && e.right > t[0] && e.top < t[1] && e.bottom > t[1];
};
exports.gen_uid = function () {
  for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", t = e.length, n = [], r = 0; r < 20; r++) {
    n[r] = e.charAt(Math.random() * t);
  }
  return n.join("");
};
exports.clamp = function (e, t, n) {
  return Math.min(Math.max(e, t), n);
};
exports.to_radians = function (e) {
  return e * Math.PI / 180;
};
exports.lerp = function (e, t, n) {
  return e + n * (t - e);
};
exports.is_valid_number = function (e) {
  return /^[+-]?Infinity$/.test(e) || /^[+-]?\d*\.?\d+(e[+-]?\d+)?$/.test(e);
};