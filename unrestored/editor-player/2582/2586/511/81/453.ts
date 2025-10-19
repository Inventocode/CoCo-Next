/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：453
 */

"use strict";

var n = require("./600/465");
var o = function () {
  function t(t) {
    this.information = t;
    this.generalDecoder = new n.a(t);
  }
  t.prototype.getInformation = function () {
    return this.information;
  };
  t.prototype.getGeneralDecoder = function () {
    return this.generalDecoder;
  };
  return t;
}();
exports.a = o;