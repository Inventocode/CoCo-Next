"use strict";

var n = require("../274");
var o = require("./412");
var i = require("../105");
var a = require("../63");
var u = require("../451");
var s = function () {
  var t = function (e, r) {
    return (t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var r in e) if (e.hasOwnProperty(r)) {
        t[r] = e[r];
      }
    })(e, r);
  };
  return function (e, r) {
    function n() {
      this.constructor = e;
    }
    t(e, r);
    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
var c = function (t) {
  function e(e, r, o) {
    var i = t.call(this) || this;
    i.primitive = e;
    i.size = r;
    i.generatorBase = o;
    for (var a = new Int32Array(r), u = 1, s = 0; s < r; s++) {
      a[s] = u;
      if ((u *= 2) >= r) {
        u ^= e;
        u &= r - 1;
      }
    }
    i.expTable = a;
    var c = new Int32Array(r);
    for (s = 0; s < r - 1; s++) {
      c[a[s]] = s;
    }
    i.logTable = c;
    i.zero = new n.a(i, Int32Array.from([0]));
    i.one = new n.a(i, Int32Array.from([1]));
    return i;
  }
  s(e, t);
  e.prototype.getZero = function () {
    return this.zero;
  };
  e.prototype.getOne = function () {
    return this.one;
  };
  e.prototype.buildMonomial = function (t, e) {
    if (t < 0) {
      throw new a.a();
    }
    if (0 === e) {
      return this.zero;
    }
    var r = new Int32Array(t + 1);
    r[0] = e;
    return new n.a(this, r);
  };
  e.prototype.inverse = function (t) {
    if (0 === t) {
      throw new u.a();
    }
    return this.expTable[this.size - this.logTable[t] - 1];
  };
  e.prototype.multiply = function (t, e) {
    return 0 === t || 0 === e ? 0 : this.expTable[(this.logTable[t] + this.logTable[e]) % (this.size - 1)];
  };
  e.prototype.getSize = function () {
    return this.size;
  };
  e.prototype.getGeneratorBase = function () {
    return this.generatorBase;
  };
  e.prototype.toString = function () {
    return "GF(0x" + i.a.toHexString(this.primitive) + "," + this.size + ")";
  };
  e.prototype.equals = function (t) {
    return t === this;
  };
  e.AZTEC_DATA_12 = new e(4201, 4096, 1);
  e.AZTEC_DATA_10 = new e(1033, 1024, 1);
  e.AZTEC_DATA_6 = new e(67, 64, 1);
  e.AZTEC_PARAM = new e(19, 16, 1);
  e.QR_CODE_FIELD_256 = new e(285, 256, 0);
  e.DATA_MATRIX_FIELD_256 = new e(301, 256, 1);
  e.AZTEC_DATA_8 = e.DATA_MATRIX_FIELD_256;
  e.MAXICODE_FIELD_64 = e.AZTEC_DATA_6;
  return e;
}(o.a);
exports.a = c;