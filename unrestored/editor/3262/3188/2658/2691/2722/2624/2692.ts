"use strict";

export default (function (e, t) {
  for (var n = Object.keys(t), r = 0, i = n; r < i.length; r++) {
    var a = i[r];
    if (e[a] !== t[a]) {
      return !1;
    }
  }
  return !0;
});