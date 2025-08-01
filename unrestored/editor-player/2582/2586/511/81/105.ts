"use strict";

var n = function () {
  function t() {}
  t.numberOfTrailingZeros = function (t) {
    var e;
    if (0 === t) {
      return 32;
    }
    var r = 31;
    if (0 !== (e = t << 16)) {
      r -= 16;
      t = e;
    }
    if (0 !== (e = t << 8)) {
      r -= 8;
      t = e;
    }
    if (0 !== (e = t << 4)) {
      r -= 4;
      t = e;
    }
    if (0 !== (e = t << 2)) {
      r -= 2;
      t = e;
    }
    return r - (t << 1 >>> 31);
  };
  t.numberOfLeadingZeros = function (t) {
    if (0 === t) {
      return 32;
    }
    var e = 1;
    if (t >>> 16 === 0) {
      e += 16;
      t <<= 16;
    }
    if (t >>> 24 === 0) {
      e += 8;
      t <<= 8;
    }
    if (t >>> 28 === 0) {
      e += 4;
      t <<= 4;
    }
    if (t >>> 30 === 0) {
      e += 2;
      t <<= 2;
    }
    return e -= t >>> 31;
  };
  t.toHexString = function (t) {
    return t.toString(16);
  };
  t.toBinaryString = function (t) {
    return String(parseInt(String(t), 2));
  };
  t.bitCount = function (t) {
    t = (t = (858993459 & (t -= t >>> 1 & 1431655765)) + (t >>> 2 & 858993459)) + (t >>> 4) & 252645135;
    t += t >>> 8;
    return 63 & (t += t >>> 16);
  };
  t.truncDivision = function (t, e) {
    return Math.trunc(t / e);
  };
  t.parseInt = function (t, e) {
    if (void 0 === e) {
      e = void 0;
    }
    return parseInt(t, e);
  };
  t.MIN_VALUE_32_BITS = -2147483648;
  t.MAX_VALUE = Number.MAX_SAFE_INTEGER;
  return t;
}();
exports.a = n;