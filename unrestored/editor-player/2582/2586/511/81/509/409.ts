"use strict";

var n = function () {
  function t(t, e) {
    this.value = t;
    this.checksumPortion = e;
  }
  t.prototype.getValue = function () {
    return this.value;
  };
  t.prototype.getChecksumPortion = function () {
    return this.checksumPortion;
  };
  t.prototype.toString = function () {
    return this.value + "(" + this.checksumPortion + ")";
  };
  t.prototype.equals = function (e) {
    if (!(e instanceof t)) {
      return false;
    }
    var r = e;
    return this.value === r.value && this.checksumPortion === r.checksumPortion;
  };
  t.prototype.hashCode = function () {
    return this.value ^ this.checksumPortion;
  };
  return t;
}();
exports.a = n;