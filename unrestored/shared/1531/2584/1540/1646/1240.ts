/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1240
 */

"use strict";

var r = require("../1623/439");
var o = function (e) {
  var t;
  var n;
  this.promise = new e(function (e, r) {
    if (undefined !== t || undefined !== n) {
      throw TypeError("Bad Promise constructor");
    }
    t = e;
    n = r;
  });
  this.resolve = r(t);
  this.reject = r(n);
};
module.exports.f = function (e) {
  return new o(e);
};