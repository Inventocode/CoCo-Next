"use strict";

var r = require("../../../3190/494");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t, n) {
  if ("function" === typeof t) {
    t = {
      enter: t
    };
  }
  var a = t;
  var s = a.enter;
  var o = a.exit;
  !function e(t, n, a, s, o) {
    var l = i.VISITOR_KEYS[t.type];
    if (!l) {
      return;
    }
    if (n) {
      n(t, o, s);
    }
    var u;
    var c = r(l);
    try {
      for (c.s(); !(u = c.n()).done;) {
        var p = u.value;
        var f = t[p];
        if (Array.isArray(f)) {
          for (var d = 0; d < f.length; d++) {
            var h = f[d];
            if (h) {
              o.push({
                node: t,
                key: p,
                index: d
              });
              e(h, n, a, s, o);
              o.pop();
            }
          }
        } else if (f) {
          o.push({
            node: t,
            key: p
          });
          e(f, n, a, s, o);
          o.pop();
        }
      }
    } catch (y) {
      c.e(y);
    } finally {
      c.f();
    }
    if (a) {
      a(t, o, s);
    }
  }(e, s, o, n, []);
};
var i = require("./2634/index");