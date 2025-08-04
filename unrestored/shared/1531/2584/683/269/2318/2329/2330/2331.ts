"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
var r = require("../../../580");
var i = require("../1368/index");
var o = function () {
  function e(e) {
    this._binding = e;
  }
  e.prototype.inRequestScope = function () {
    this._binding.scope = r.BindingScopeEnum.Request;
    return new i.BindingWhenOnSyntax(this._binding);
  };
  e.prototype.inSingletonScope = function () {
    this._binding.scope = r.BindingScopeEnum.Singleton;
    return new i.BindingWhenOnSyntax(this._binding);
  };
  e.prototype.inTransientScope = function () {
    this._binding.scope = r.BindingScopeEnum.Transient;
    return new i.BindingWhenOnSyntax(this._binding);
  };
  return e;
}();
exports.BindingInSyntax = o;