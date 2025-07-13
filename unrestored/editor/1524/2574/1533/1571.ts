"use strict";

import * as r from "./1626/86/index";
import * as o from "./1728/706";
import * as i from "./1556/473";
import * as a from "./1728/257";
import * as s from "./1623/309";
import * as c from "./1550/820/index";
import * as l from "./1550/707";
var u = require("./1550/821")("splice");
var d = Math.max;
var p = Math.min;
r({
  target: "Array",
  proto: !0,
  forced: !u
}, {
  splice: function (e, t) {
    var n;
    var r;
    var u;
    var f;
    var h;
    var m;
    var g = s(this);
    var _ = a(g.length);
    var v = o(e, _);
    var b = arguments.length;
    if (0 === b ? n = r = 0 : 1 === b ? (n = 0, r = _ - v) : (n = b - 2, r = p(d(i(t), 0), _ - v)), _ + n - r > 9007199254740991) {
      throw TypeError("Maximum allowed length exceeded");
    }
    for (u = c(g, r), f = 0; f < r; f++) {
      if ((h = v + f) in g) {
        l(u, f, g[h]);
      }
    }
    if (u.length = r, n < r) {
      for (f = v; f < _ - r; f++) {
        m = f + n;
        if ((h = f + r) in g) {
          g[m] = g[h];
        } else {
          delete g[m];
        }
      }
      for (f = _; f > _ - r + n; f--) {
        delete g[f - 1];
      }
    } else if (n > r) {
      for (f = _ - r; f > v; f--) {
        m = f + n - 1;
        if ((h = f + r - 1) in g) {
          g[m] = g[h];
        } else {
          delete g[m];
        }
      }
    }
    for (f = 0; f < n; f++) {
      g[f + v] = arguments[f + 2];
    }
    g.length = _ - r + n;
    return u;
  }
});