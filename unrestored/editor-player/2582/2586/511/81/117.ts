"use strict";

var n = function () {
  function t() {}
  t.arraycopy = function (t, e, r, n, o) {
    for (; o--;) {
      r[n++] = t[e++];
    }
  };
  t.currentTimeMillis = function () {
    return Date.now();
  };
  return t;
}();
exports.a = n;