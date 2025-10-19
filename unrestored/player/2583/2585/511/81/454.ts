/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：454
 */

"use strict";

var r = require("./63");
var i = function () {
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
      throw new r.a("" + t);
    }
    var e = 0;
    var n = this.bitOffset;
    var i = this.byteOffset;
    var o = this.bytes;
    if (n > 0) {
      var a = 8 - n;
      var s = t < a ? t : a;
      var u = 255 >> 8 - s << (c = a - s);
      e = (o[i] & u) >> c;
      t -= s;
      if (8 === (n += s)) {
        n = 0;
        i++;
      }
    }
    if (t > 0) {
      for (; t >= 8;) {
        e = e << 8 | 255 & o[i];
        i++;
        t -= 8;
      }
      if (t > 0) {
        var c;
        u = 255 >> (c = 8 - t) << c;
        e = e << t | (o[i] & u) >> c;
        n += t;
      }
    }
    this.bitOffset = n;
    this.byteOffset = i;
    return e;
  };
  t.prototype.available = function () {
    return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
  };
  return t;
}();
exports.a = i;