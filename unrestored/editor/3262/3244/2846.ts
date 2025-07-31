"use strict";

var r = require("../2873/2721/805/index");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.findSuggestion = function (e, t) {
  var n = t.map(function (t) {
    return function (e, t) {
      var n;
      var r;
      var i = [];
      var o = [];
      var s = e.length;
      var u = t.length;
      if (!s) {
        return u;
      }
      if (!u) {
        return s;
      }
      for (r = 0; r <= u; r++) {
        i[r] = r;
      }
      for (n = 1; n <= s; n++) {
        for (o = [n], r = 1; r <= u; r++) {
          o[r] = e[n - 1] === t[r - 1] ? i[r - 1] : a(i[r - 1], i[r], o[r - 1]) + 1;
        }
        i = o;
      }
      return o[u];
    }(t, e);
  });
  return t[n.indexOf(a.apply(void 0, r(n)))];
};
var a = Math.min;