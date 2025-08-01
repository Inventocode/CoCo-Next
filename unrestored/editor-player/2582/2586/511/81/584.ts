"use strict";

var n = function () {
  function t(t) {
    this.source = t;
  }
  t.prototype.getLuminanceSource = function () {
    return this.source;
  };
  t.prototype.getWidth = function () {
    return this.source.getWidth();
  };
  t.prototype.getHeight = function () {
    return this.source.getHeight();
  };
  return t;
}();
exports.a = n;