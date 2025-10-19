/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：453
 */

"use strict";

var r = require("./600/465");
var i = function () {
  function t(t) {
    this.information = t;
    this.generalDecoder = new r.a(t);
  }
  t.prototype.getInformation = function () {
    return this.information;
  };
  t.prototype.getGeneralDecoder = function () {
    return this.generalDecoder;
  };
  return t;
}();
exports.a = i;