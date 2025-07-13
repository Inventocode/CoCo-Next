"use strict";

import * as r from "./1101";
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
export { i as BindingOnSyntax };