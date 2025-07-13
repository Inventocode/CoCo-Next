"use strict";

import * as r from "../1707/258/index";
import * as o from "../1738/194";
import * as i from "../1626/167";
import * as a from "./439";
import * as s from "../1728/257";
import * as c from "./1220";
import * as l from "./1221";
import * as u from "./1222";
import * as d from "./629";
import * as p from "./1067/index";
var f = r.aTypedArray;
var h = r.exportTypedArrayMethod;
var m = o.Uint16Array;
var g = m && m.prototype.sort;
var _ = !!g && !i(function () {
  var e = new m(2);
  e.sort(null);
  e.sort({});
});
var v = !!g && !i(function () {
  if (d) {
    return d < 74;
  }
  if (l) {
    return l < 67;
  }
  if (u) {
    return !0;
  }
  if (p) {
    return p < 602;
  }
  var e;
  var t;
  var n = new m(516);
  var r = Array(516);
  for (e = 0; e < 516; e++) {
    t = e % 4;
    n[e] = 515 - e;
    r[e] = e - 2 * t + 3;
  }
  for (n.sort(function (e, t) {
    return (e / 4 | 0) - (t / 4 | 0);
  }), e = 0; e < 516; e++) {
    if (n[e] !== r[e]) {
      return !0;
    }
  }
});
h("sort", function (e) {
  if (void 0 !== e && a(e), v) {
    return g.call(this, e);
  }
  f(this);
  var t;
  var n = s(this.length);
  var r = Array(n);
  for (t = 0; t < n; t++) {
    r[t] = this[t];
  }
  for (r = c(this, function (e) {
    return function (t, n) {
      return void 0 !== e ? +e(t, n) || 0 : n !== n ? -1 : t !== t ? 1 : 0 === t && 0 === n ? 1 / t > 0 && 1 / n < 0 ? 1 : -1 : t > n;
    };
  }(e)), t = 0; t < n; t++) {
    this[t] = r[t];
  }
  return this;
}, !v || _);