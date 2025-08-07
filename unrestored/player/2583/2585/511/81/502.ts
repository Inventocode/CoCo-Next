"use strict";

var r = require("./37");
var i = function () {
  function t() {}
  t.checkAndNudgePoints = function (t, e) {
    for (var n = t.getWidth(), i = t.getHeight(), o = true, a = 0; a < e.length && o; a += 2) {
      var s = Math.floor(e[a]);
      var u = Math.floor(e[a + 1]);
      if (s < -1 || s > n || u < -1 || u > i) {
        throw new r.a();
      }
      o = false;
      if (-1 === s) {
        e[a] = 0;
        o = true;
      } else {
        if (s === n) {
          e[a] = n - 1;
          o = true;
        }
      }
      if (-1 === u) {
        e[a + 1] = 0;
        o = true;
      } else {
        if (u === i) {
          e[a + 1] = i - 1;
          o = true;
        }
      }
    }
    o = true;
    for (a = e.length - 2; a >= 0 && o; a -= 2) {
      s = Math.floor(e[a]);
      u = Math.floor(e[a + 1]);
      if (s < -1 || s > n || u < -1 || u > i) {
        throw new r.a();
      }
      o = false;
      if (-1 === s) {
        e[a] = 0;
        o = true;
      } else {
        if (s === n) {
          e[a] = n - 1;
          o = true;
        }
      }
      if (-1 === u) {
        e[a + 1] = 0;
        o = true;
      } else {
        if (u === i) {
          e[a + 1] = i - 1;
          o = true;
        }
      }
    }
  };
  return t;
}();
exports.a = i;