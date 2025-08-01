"use strict";

var r;
!function (t) {
  t[t.DATA_MASK_000 = 0] = "DATA_MASK_000";
  t[t.DATA_MASK_001 = 1] = "DATA_MASK_001";
  t[t.DATA_MASK_010 = 2] = "DATA_MASK_010";
  t[t.DATA_MASK_011 = 3] = "DATA_MASK_011";
  t[t.DATA_MASK_100 = 4] = "DATA_MASK_100";
  t[t.DATA_MASK_101 = 5] = "DATA_MASK_101";
  t[t.DATA_MASK_110 = 6] = "DATA_MASK_110";
  t[t.DATA_MASK_111 = 7] = "DATA_MASK_111";
}(r || (r = {}));
var i = function () {
  function t(t, e) {
    this.value = t;
    this.isMasked = e;
  }
  t.prototype.unmaskBitMatrix = function (t, e) {
    for (var n = 0; n < e; n++) {
      for (var r = 0; r < e; r++) {
        if (this.isMasked(n, r)) {
          t.flip(r, n);
        }
      }
    }
  };
  t.values = new Map([[r.DATA_MASK_000, new t(r.DATA_MASK_000, function (t, e) {
    return 0 === (t + e & 1);
  })], [r.DATA_MASK_001, new t(r.DATA_MASK_001, function (t, e) {
    return 0 === (1 & t);
  })], [r.DATA_MASK_010, new t(r.DATA_MASK_010, function (t, e) {
    return e % 3 === 0;
  })], [r.DATA_MASK_011, new t(r.DATA_MASK_011, function (t, e) {
    return (t + e) % 3 === 0;
  })], [r.DATA_MASK_100, new t(r.DATA_MASK_100, function (t, e) {
    return 0 === (Math.floor(t / 2) + Math.floor(e / 3) & 1);
  })], [r.DATA_MASK_101, new t(r.DATA_MASK_101, function (t, e) {
    return t * e % 6 === 0;
  })], [r.DATA_MASK_110, new t(r.DATA_MASK_110, function (t, e) {
    return t * e % 6 < 3;
  })], [r.DATA_MASK_111, new t(r.DATA_MASK_111, function (t, e) {
    return 0 === (t + e + t * e % 3 & 1);
  })]]);
  return t;
}();
exports.a = i;