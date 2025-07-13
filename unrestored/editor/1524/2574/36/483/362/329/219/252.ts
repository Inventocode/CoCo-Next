"use strict";

export { o as a };
export { c as b };
import * as r from "../../../../../10/index";
function i(e, t, n) {
  return Math.max(t, Math.min(e, n));
}
var o = {
  toVector: function (e, t) {
    if (void 0 === e) {
      e = t;
    }
    return Array.isArray(e) ? e : [e, e];
  },
  add: function (e, t) {
    return [e[0] + t[0], e[1] + t[1]];
  },
  sub: function (e, t) {
    return [e[0] - t[0], e[1] - t[1]];
  },
  addTo: function (e, t) {
    e[0] += t[0];
    e[1] += t[1];
  },
  subTo: function (e, t) {
    e[0] -= t[0];
    e[1] -= t[1];
  }
};
function a(e, t, n) {
  return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * n) : e * t * n / (t + n * e);
}
function s(e, t, n) {
  var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .15;
  return 0 === r ? i(e, t, n) : e < t ? -a(t - e, n - t, r) + t : e > n ? +a(e - n, n - t, r) + n : e;
}
function c(e, t, n) {
  var i = Object(r.a)(t, 2);
  var o = i[0];
  var a = i[1];
  var c = Object(r.a)(n, 2);
  var u = c[0];
  var l = c[1];
  var f = Object(r.a)(e, 2);
  var h = Object(r.a)(f[0], 2);
  var d = h[0];
  var p = h[1];
  var _ = Object(r.a)(f[1], 2);
  var A = _[0];
  var g = _[1];
  return [s(o, d, p, u), s(a, A, g, l)];
}