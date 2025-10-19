/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：455
 */

"use strict";

var r = require("./336");
var i = require("./105");
var o = function (t) {
  var e = "function" === typeof Symbol && Symbol.iterator;
  var n = e && t[e];
  var r = 0;
  if (n) {
    return n.call(t);
  }
  if (t && "number" === typeof t.length) {
    return {
      next: function () {
        if (t && r >= t.length) {
          t = undefined;
        }
        return {
          value: t && t[r++],
          done: !t
        };
      }
    };
  }
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var a = function () {
  function t(t) {
    this.errorCorrectionLevel = r.a.forBits(t >> 3 & 3);
    this.dataMask = 7 & t;
  }
  t.numBitsDiffering = function (t, e) {
    return i.a.bitCount(t ^ e);
  };
  t.decodeFormatInformation = function (e, n) {
    var r = t.doDecodeFormatInformation(e, n);
    return null !== r ? r : t.doDecodeFormatInformation(e ^ t.FORMAT_INFO_MASK_QR, n ^ t.FORMAT_INFO_MASK_QR);
  };
  t.doDecodeFormatInformation = function (e, n) {
    var r;
    var i;
    var a = Number.MAX_SAFE_INTEGER;
    var s = 0;
    try {
      for (var u = o(t.FORMAT_INFO_DECODE_LOOKUP), c = u.next(); !c.done; c = u.next()) {
        var l = c.value;
        var d = l[0];
        if (d === e || d === n) {
          return new t(l[1]);
        }
        var f = t.numBitsDiffering(e, d);
        if (f < a) {
          s = l[1];
          a = f;
        }
        if (e !== n && (f = t.numBitsDiffering(n, d)) < a) {
          s = l[1];
          a = f;
        }
      }
    } catch (h) {
      r = {
        error: h
      };
    } finally {
      try {
        if (c && !c.done && (i = u.return)) {
          i.call(u);
        }
      } finally {
        if (r) {
          throw r.error;
        }
      }
    }
    return a <= 3 ? new t(s) : null;
  };
  t.prototype.getErrorCorrectionLevel = function () {
    return this.errorCorrectionLevel;
  };
  t.prototype.getDataMask = function () {
    return this.dataMask;
  };
  t.prototype.hashCode = function () {
    return this.errorCorrectionLevel.getBits() << 3 | this.dataMask;
  };
  t.prototype.equals = function (e) {
    if (!(e instanceof t)) {
      return false;
    }
    var n = e;
    return this.errorCorrectionLevel === n.errorCorrectionLevel && this.dataMask === n.dataMask;
  };
  t.FORMAT_INFO_MASK_QR = 21522;
  t.FORMAT_INFO_DECODE_LOOKUP = [Int32Array.from([21522, 0]), Int32Array.from([20773, 1]), Int32Array.from([24188, 2]), Int32Array.from([23371, 3]), Int32Array.from([17913, 4]), Int32Array.from([16590, 5]), Int32Array.from([20375, 6]), Int32Array.from([19104, 7]), Int32Array.from([30660, 8]), Int32Array.from([29427, 9]), Int32Array.from([32170, 10]), Int32Array.from([30877, 11]), Int32Array.from([26159, 12]), Int32Array.from([25368, 13]), Int32Array.from([27713, 14]), Int32Array.from([26998, 15]), Int32Array.from([5769, 16]), Int32Array.from([5054, 17]), Int32Array.from([7399, 18]), Int32Array.from([6608, 19]), Int32Array.from([1890, 20]), Int32Array.from([597, 21]), Int32Array.from([3340, 22]), Int32Array.from([2107, 23]), Int32Array.from([13663, 24]), Int32Array.from([12392, 25]), Int32Array.from([16177, 26]), Int32Array.from([14854, 27]), Int32Array.from([9396, 28]), Int32Array.from([8579, 29]), Int32Array.from([11994, 30]), Int32Array.from([11245, 31])];
  return t;
}();
exports.a = a;