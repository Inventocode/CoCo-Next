"use strict";

var r = require("../../494");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function e(t, n, i) {
  if (!t) {
    return;
  }
  var o = a.VISITOR_KEYS[t.type];
  if (!o) {
    return;
  }
  n(t, i = i || {});
  var s;
  var u = r(o);
  try {
    for (u.s(); !(s = u.n()).done;) {
      var l = s.value;
      var p = t[l];
      if (Array.isArray(p)) {
        var f;
        var d = r(p);
        try {
          for (d.s(); !(f = d.n()).done;) {
            var c = f.value;
            e(c, n, i);
          }
        } catch (y) {
          d.e(y);
        } finally {
          d.f();
        }
      } else {
        e(p, n, i);
      }
    }
  } catch (y) {
    u.e(y);
  } finally {
    u.f();
  }
};
var a = require("./2636/index");