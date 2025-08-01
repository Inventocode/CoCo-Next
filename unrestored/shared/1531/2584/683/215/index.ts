"use strict";

var r = require("../520/393");
var i = require("../735/518");
var o = require("./293");
function a(e) {
  return function t(n, a, s) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return Object(o.a)(n) ? t : Object(i.a)(function (t, r) {
          return e(n, t, r);
        });
      case 2:
        return Object(o.a)(n) && Object(o.a)(a) ? t : Object(o.a)(n) ? Object(i.a)(function (t, n) {
          return e(t, a, n);
        }) : Object(o.a)(a) ? Object(i.a)(function (t, r) {
          return e(n, t, r);
        }) : Object(r.a)(function (t) {
          return e(n, a, t);
        });
      default:
        return Object(o.a)(n) && Object(o.a)(a) && Object(o.a)(s) ? t : Object(o.a)(n) && Object(o.a)(a) ? Object(i.a)(function (t, n) {
          return e(t, n, s);
        }) : Object(o.a)(n) && Object(o.a)(s) ? Object(i.a)(function (t, n) {
          return e(t, a, n);
        }) : Object(o.a)(a) && Object(o.a)(s) ? Object(i.a)(function (t, r) {
          return e(n, t, r);
        }) : Object(o.a)(n) ? Object(r.a)(function (t) {
          return e(t, a, s);
        }) : Object(o.a)(a) ? Object(r.a)(function (t) {
          return e(n, t, s);
        }) : Object(o.a)(s) ? Object(r.a)(function (t) {
          return e(n, a, t);
        }) : e(n, a, s);
    }
  };
}
var s = a(function (e, t, n) {
  if (e > t) {
    throw new Error("min must not be greater than max in clamp(min, max, value)");
  }
  return n < e ? e : n > t ? t : n;
});
exports.a = s;