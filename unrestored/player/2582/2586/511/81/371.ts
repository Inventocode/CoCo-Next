"use strict";

var n = function () {
  function t(t, e) {
    this.bits = t;
    this.points = e;
  }
  t.prototype.getBits = function () {
    return this.bits;
  };
  t.prototype.getPoints = function () {
    return this.points;
  };
  return t;
}();
exports.a = n;