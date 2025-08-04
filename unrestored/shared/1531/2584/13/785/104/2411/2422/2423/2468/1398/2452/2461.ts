var r = require("../../../../../../2483/2484/2485/1401");
var i = Object.prototype.hasOwnProperty;
module.exports = function (e, t, n, o, a, s) {
  var c = 1 & n;
  var u = r(e);
  var l = u.length;
  if (l != r(t).length && !c) {
    return !1;
  }
  for (var f = l; f--;) {
    var d = u[f];
    if (!(c ? d in t : i.call(t, d))) {
      return !1;
    }
  }
  var h = s.get(e);
  var p = s.get(t);
  if (h && p) {
    return h == t && p == e;
  }
  var _ = !0;
  s.set(e, t);
  s.set(t, e);
  for (var A = c; ++f < l;) {
    var g = e[d = u[f]];
    var v = t[d];
    if (o) {
      var m = c ? o(v, g, d, t, e, s) : o(g, v, d, e, t, s);
    }
    if (!(void 0 === m ? g === v || a(g, v, n, o, s) : m)) {
      _ = !1;
      break;
    }
    if (!A) {
      A = "constructor" == d;
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