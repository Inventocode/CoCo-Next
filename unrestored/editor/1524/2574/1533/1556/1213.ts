"use strict";

import * as r from "../1534/818";
import * as o from "../1728/257";
import * as i from "../1250/632";
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