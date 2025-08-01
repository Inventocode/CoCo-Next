"use strict";

var r = require("../../../../../3200/494");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function e(t, n, a) {
  if (!t) {
    return;
  }
  var s = i.VISITOR_KEYS[t.type];
  if (!s) {
    return;
  }
  n(t, a = a || {});
  var o;
  var l = r(s);
  try {
    for (l.s(); !(o = l.n()).done;) {
      var u = o.value;
      var c = t[u];
      if (Array.isArray(c)) {
        var p;
        var f = r(c);
        try {
          for (f.s(); !(p = f.n()).done;) {
            var d = p.value;
            e(d, n, a);
          }
        } catch (h) {
          f.e(h);
        } finally {
          f.f();
        }
      } else {
        e(c, n, a);
      }
    }
  } catch (h) {
    l.e(h);
  } finally {
    l.f();
  }
};
var i = require("./2643/index");