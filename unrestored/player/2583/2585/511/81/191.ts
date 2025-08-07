"use strict";

var r = require("./274/index");
var i = require("./274/412");
var o = require("./105");
var a = require("./63");
var s = require("./451");
var u = function () {
  var t = function (e, n) {
    return (t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) if (e.hasOwnProperty(n)) {
        t[n] = e[n];
      }
    })(e, n);
  };
  return function (e, n) {
    function r() {
      this.constructor = e;
    }
    t(e, n);
    e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var c = function (t) {
  function e(e, n, i) {
    var o = t.call(this) || this;
    o.primitive = e;
    o.size = n;
    o.generatorBase = i;
    for (var a = new Int32Array(n), s = 1, u = 0; u < n; u++) {
      a[u] = s;
      if ((s *= 2) >= n) {
        s ^= e;
        s &= n - 1;
      }
    }
    o.expTable = a;
    var c = new Int32Array(n);
    for (u = 0; u < n - 1; u++) {
      c[a[u]] = u;
    }
    o.logTable = c;
    o.zero = new r.a(o, Int32Array.from([0]));
    o.one = new r.a(o, Int32Array.from([1]));
    return o;
  }
  u(e, t);
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
    var n = new Int32Array(t + 1);
    n[0] = e;
    return new r.a(this, n);
  };
  e.prototype.inverse = function (t) {
    if (0 === t) {
      throw new s.a();
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
    return "GF(0x" + o.a.toHexString(this.primitive) + "," + this.size + ")";
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
}(i.a);
exports.a = c;