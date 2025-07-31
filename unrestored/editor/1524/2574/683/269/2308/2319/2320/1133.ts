"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
var r = require("./1134");
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