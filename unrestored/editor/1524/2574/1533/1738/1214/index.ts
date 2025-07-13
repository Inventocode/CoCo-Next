"use strict";

import * as r from "../../1250/632";
import * as o from "../../1623/309";
import * as i from "./1559";
import * as a from "./1063";
import * as s from "../../1728/257";
import * as c from "../../1550/707";
import * as l from "../../1250/933";
import * as u from "../../1250/823";
module.exports = function (e) {
  var t;
  var n;
  var d;
  var p;
  var f;
  var h;
  var m = o(e);
  var g = "function" == typeof this ? this : Array;
  var _ = arguments.length;
  var v = _ > 1 ? arguments[1] : void 0;
  var b = void 0 !== v;
  var y = u(m);
  var E = 0;
  if (b && (v = r(v, _ > 2 ? arguments[2] : void 0, 2)), void 0 == y || g == Array && a(y)) {
    for (n = new g(t = s(m.length)); t > E; E++) {
      h = b ? v(m[E], E) : m[E];
      c(n, E, h);
    }
  } else {
    for (f = (p = l(m, y)).next, n = new g(); !(d = f.call(p)).done; E++) {
      h = b ? i(p, v, [d.value, E], !0) : d.value;
      c(n, E, h);
    }
  }
  n.length = E;
  return n;
};