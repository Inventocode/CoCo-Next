var r = require("./1878/index");
var i = require("./1881");
var o = require("./1882");
module.exports = function (e, t, n, a, s, c) {
  var u = 1 & n;
  var l = e.length;
  var f = t.length;
  if (l != f && !(u && f > l)) {
    return !1;
  }
  var d = c.get(e);
  var h = c.get(t);
  if (d && h) {
    return d == t && h == e;
  }
  var p = -1;
  var _ = !0;
  var A = 2 & n ? new r() : void 0;
  for (c.set(e, t), c.set(t, e); ++p < l;) {
    var g = e[p];
    var v = t[p];
    if (a) {
      var m = u ? a(v, g, p, t, e, c) : a(g, v, p, e, t, c);
    }
    if (void 0 !== m) {
      if (m) {
        continue;
      }
      _ = !1;
      break;
    }
    if (A) {
      if (!i(t, function (e, t) {
        if (!o(A, t) && (g === e || s(g, e, n, a, c))) {
          return A.push(t);
        }
      })) {
        _ = !1;
        break;
      }
    } else if (g !== v && !s(g, v, n, a, c)) {
      _ = !1;
      break;
    }
  }
  c.delete(e);
  c.delete(t);
  return _;
};