"use strict";

var n;
var o = require("./248");
var i = require("./63");
!function (t) {
  t[t.L = 0] = "L";
  t[t.M = 1] = "M";
  t[t.Q = 2] = "Q";
  t[t.H = 3] = "H";
}(n || (n = {}));
var a = function () {
  function t(e, r, n) {
    this.value = e;
    this.stringValue = r;
    this.bits = n;
    t.FOR_BITS.set(n, this);
    t.FOR_VALUE.set(e, this);
  }
  t.prototype.getValue = function () {
    return this.value;
  };
  t.prototype.getBits = function () {
    return this.bits;
  };
  t.fromString = function (e) {
    switch (e) {
      case "L":
        return t.L;
      case "M":
        return t.M;
      case "Q":
        return t.Q;
      case "H":
        return t.H;
      default:
        throw new o.a(e + "not available");
    }
  };
  t.prototype.toString = function () {
    return this.stringValue;
  };
  t.prototype.equals = function (e) {
    if (!(e instanceof t)) {
      return !1;
    }
    var r = e;
    return this.value === r.value;
  };
  t.forBits = function (e) {
    if (e < 0 || e >= t.FOR_BITS.size) {
      throw new i.a();
    }
    return t.FOR_BITS.get(e);
  };
  t.FOR_BITS = new Map();
  t.FOR_VALUE = new Map();
  t.L = new t(n.L, "L", 1);
  t.M = new t(n.M, "M", 0);
  t.Q = new t(n.Q, "Q", 3);
  t.H = new t(n.H, "H", 2);
  return t;
}();
exports.a = a;