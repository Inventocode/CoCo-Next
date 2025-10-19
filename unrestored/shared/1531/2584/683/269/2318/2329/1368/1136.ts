/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1136
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = require("./1137");
var i = function () {
  function e(e) {
    this._binding = e;
  }
  e.prototype.onActivation = function (e) {
    this._binding.onActivation = e;
    return new r.BindingWhenSyntax(this._binding);
  };
  return e;
}();
exports.BindingOnSyntax = i;