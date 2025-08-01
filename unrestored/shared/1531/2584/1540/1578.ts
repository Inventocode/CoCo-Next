"use strict";

var r = require("./1633/86/index");
var o = require("./1735/706");
var i = require("./1563/473");
var a = require("./1735/257");
var s = require("./1731/309");
var c = require("./1557/821/index");
var l = require("./1557/707");
var u = require("./1557/822")("splice");
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
    if (0 === b) {
      n = r = 0;
    } else {
      if (1 === b) {
        n = 0;
        r = _ - v;
      } else {
        n = b - 2;
        r = p(d(i(t), 0), _ - v);
      }
    }
    if (_ + n - r > 9007199254740991) {
      throw TypeError("Maximum allowed length exceeded");
    }
    for (u = c(g, r), f = 0; f < r; f++) {
      if ((h = v + f) in g) {
        l(u, f, g[h]);
      }
    }
    u.length = r;
    if (n < r) {
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