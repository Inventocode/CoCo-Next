"use strict";

var r = require("../../../../../../../2883/2731/806/index");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.findSuggestion = function (e, t) {
  var n = t.map(function (t) {
    return function (e, t) {
      var n;
      var r;
      var a = [];
      var s = [];
      var o = e.length;
      var l = t.length;
      if (!o) {
        return l;
      }
      if (!l) {
        return o;
      }
      for (r = 0; r <= l; r++) {
        a[r] = r;
      }
      for (n = 1; n <= o; n++) {
        for (s = [n], r = 1; r <= l; r++) {
          s[r] = e[n - 1] === t[r - 1] ? a[r - 1] : i(a[r - 1], a[r], s[r - 1]) + 1;
        }
        a = s;
      }
      return s[l];
    }(t, e);
  });
  return t[n.indexOf(i.apply(void 0, r(n)))];
};
var i = Math.min;