"use strict";

function r(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
module.exports = function (e, t, n, o) {
  t = t || "&";
  n = n || "=";
  var a = {};
  if ("string" !== typeof e || 0 === e.length) {
    return a;
  }
  var s = /\+/g;
  e = e.split(t);
  var c = 1e3;
  if (o && "number" === typeof o.maxKeys) {
    c = o.maxKeys;
  }
  var u = e.length;
  if (c > 0 && u > c) {
    u = c;
  }
  for (var l = 0; l < u; ++l) {
    var f;
    var h;
    var d;
    var p;
    var _ = e[l].replace(s, "%20");
    var A = _.indexOf(n);
    if (A >= 0) {
      f = _.substr(0, A);
      h = _.substr(A + 1);
    } else {
      f = _;
      h = "";
    }
    d = decodeURIComponent(f);
    p = decodeURIComponent(h);
    if (r(a, d)) {
      if (i(a[d])) {
        a[d].push(p);
      } else {
        a[d] = [a[d], p];
      }
    } else {
      a[d] = p;
    }
  }
  return a;
};
var i = Array.isArray || function (e) {
  return "[object Array]" === Object.prototype.toString.call(e);
};