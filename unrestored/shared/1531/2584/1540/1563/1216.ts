"use strict";

var r = require("../1541/819");
var o = require("../1735/257");
var i = require("../1253/632");
module.exports = function e(t, n, a, s, c, l, u, d) {
  for (var p, f = c, h = 0, m = !!u && i(u, d, 3); h < s;) {
    if (h in a) {
      if (p = m ? m(a[h], h, n) : a[h], l > 0 && r(p)) {
        f = e(t, n, p, o(p.length), f, l - 1) - 1;
      } else {
        if (f >= 9007199254740991) {
          throw TypeError("Exceed the acceptable array length");
        }
        t[f] = p;
      }
      f++;
    }
    h++;
  }
  return f;
};