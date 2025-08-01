"use strict";

var r = require("./37");
var i = function () {
  function t() {}
  t.checkAndNudgePoints = function (t, e) {
    for (var n = t.getWidth(), i = t.getHeight(), o = !0, a = 0; a < e.length && o; a += 2) {
      var s = Math.floor(e[a]);
      var u = Math.floor(e[a + 1]);
      if (s < -1 || s > n || u < -1 || u > i) {
        throw new r.a();
      }
      o = !1;
      if (-1 === s) {
        e[a] = 0;
        o = !0;
      } else {
        if (s === n) {
          e[a] = n - 1;
          o = !0;
        }
      }
      if (-1 === u) {
        e[a + 1] = 0;
        o = !0;
      } else {
        if (u === i) {
          e[a + 1] = i - 1;
          o = !0;
        }
      }
    }
    o = !0;
    for (a = e.length - 2; a >= 0 && o; a -= 2) {
      s = Math.floor(e[a]);
      u = Math.floor(e[a + 1]);
      if (s < -1 || s > n || u < -1 || u > i) {
        throw new r.a();
      }
      o = !1;
      if (-1 === s) {
        e[a] = 0;
        o = !0;
      } else {
        if (s === n) {
          e[a] = n - 1;
          o = !0;
        }
      }
      if (-1 === u) {
        e[a + 1] = 0;
        o = !0;
      } else {
        if (u === i) {
          e[a + 1] = i - 1;
          o = !0;
        }
      }
    }
  };
  return t;
}();
exports.a = i;