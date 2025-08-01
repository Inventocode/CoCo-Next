"use strict";

var r = require("../../494");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t, n) {
  if ("function" === typeof t) {
    t = {
      enter: t
    };
  }
  var i = t;
  var o = i.enter;
  var s = i.exit;
  !function e(t, n, i, o, s) {
    var u = a.VISITOR_KEYS[t.type];
    if (!u) {
      return;
    }
    if (n) {
      n(t, s, o);
    }
    var l;
    var p = r(u);
    try {
      for (p.s(); !(l = p.n()).done;) {
        var f = l.value;
        var d = t[f];
        if (Array.isArray(d)) {
          for (var c = 0; c < d.length; c++) {
            var y = d[c];
            if (y) {
              s.push({
                node: t,
                key: f,
                index: c
              });
              e(y, n, i, o, s);
              s.pop();
            }
          }
        } else if (d) {
          s.push({
            node: t,
            key: f
          });
          e(d, n, i, o, s);
          s.pop();
        }
      }
    } catch (T) {
      p.e(T);
    } finally {
      p.f();
    }
    if (i) {
      i(t, s, o);
    }
  }(e, o, s, n, []);
};
var a = require("./2646/index");