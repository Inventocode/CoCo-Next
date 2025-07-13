import * as r from "../../../1435/1772/1270";
var i = Object.prototype.hasOwnProperty;
module.exports = function (e, t, n, o, a, s) {
  var c = 1 & n;
  var u = r(e);
  var l = u.length;
  if (l != r(t).length && !c) {
    return !1;
  }
  for (var f = l; f--;) {
    var h = u[f];
    if (!(c ? h in t : i.call(t, h))) {
      return !1;
    }
  }
  var d = s.get(e);
  var p = s.get(t);
  if (d && p) {
    return d == t && p == e;
  }
  var _ = !0;
  s.set(e, t);
  s.set(t, e);
  for (var A = c; ++f < l;) {
    var g = e[h = u[f]];
    var v = t[h];
    if (o) {
      var m = c ? o(v, g, h, t, e, s) : o(g, v, h, e, t, s);
    }
    if (!(void 0 === m ? g === v || a(g, v, n, o, s) : m)) {
      _ = !1;
      break;
    }
    if (!A) {
      A = "constructor" == h;
    }
  }
  if (_ && !A) {
    var y = e.constructor;
    var b = t.constructor;
    if (!(y == b || !("constructor" in e) || !("constructor" in t) || "function" == typeof y && y instanceof y && "function" == typeof b && b instanceof b)) {
      _ = !1;
    }
  }
  s.delete(e);
  s.delete(t);
  return _;
};