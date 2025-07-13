"use strict";

function r() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
    t[n] = arguments[n];
  }
  return t.reduce(function (e, t) {
    return null == t ? e : function () {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) {
        r[i] = arguments[i];
      }
      e.apply(this, r);
      t.apply(this, r);
    };
  }, function () {});
}
export { r as a };