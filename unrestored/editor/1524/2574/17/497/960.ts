"use strict";

import * as r from "../../1000/213/index";
exports.remove = function (e, t) {
  var n = e.indexOf(t);
  var r = n >= 0;
  if (r) {
    e.splice(n, 1);
  }
  return r;
};
exports.equals = function (e, t) {
  if (!(0, r.is_array)(e) || !(0, r.is_array)(t) || e.length != t.length) {
    return !1;
  }
  for (var n = 0; n < e.length; n++) {
    if (e[n] !== t[n]) {
      return !1;
    }
  }
  return !0;
};
exports.shortest_string_length = function (e) {
  return e.length ? e.reduce(function (e, t) {
    return e.length < t.length ? e : t;
  }).length : 0;
};