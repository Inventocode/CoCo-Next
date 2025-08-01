"use strict";

var n = require("./63");
var o = function () {
  function t(t) {
    this.bytes = t;
    this.byteOffset = 0;
    this.bitOffset = 0;
  }
  t.prototype.getBitOffset = function () {
    return this.bitOffset;
  };
  t.prototype.getByteOffset = function () {
    return this.byteOffset;
  };
  t.prototype.readBits = function (t) {
    if (t < 1 || t > 32 || t > this.available()) {
      throw new n.a("" + t);
    }
    var e = 0;
    var r = this.bitOffset;
    var o = this.byteOffset;
    var i = this.bytes;
    if (r > 0) {
      var a = 8 - r;
      var u = t < a ? t : a;
      var s = 255 >> 8 - u << (c = a - u);
      e = (i[o] & s) >> c;
      t -= u;
      if (8 === (r += u)) {
        r = 0;
        o++;
      }
    }
    if (t > 0) {
      for (; t >= 8;) {
        e = e << 8 | 255 & i[o];
        o++;
        t -= 8;
      }
      if (t > 0) {
        var c;
        s = 255 >> (c = 8 - t) << c;
        e = e << t | (i[o] & s) >> c;
        r += t;
      }
    }
    this.bitOffset = r;
    this.byteOffset = o;
    return e;
  };
  t.prototype.available = function () {
    return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
  };
  return t;
}();
exports.a = o;