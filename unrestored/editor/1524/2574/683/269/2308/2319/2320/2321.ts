"use strict";

import * as r from "../../../580";
import * as i from "../1361";
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
export { o as BindingInSyntax };