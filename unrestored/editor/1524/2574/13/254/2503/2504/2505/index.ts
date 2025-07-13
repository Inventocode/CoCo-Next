import * as r from "./972/index";
import * as i from "./1411/index";
import * as o from "./1384/index";
import * as a from "./2506/index";
import * as s from "../../../2518/2519/475";
import * as c from "./852/index";
import * as u from "./1412";
module.exports = function e(t, n, l, f, h) {
  if (t !== n) {
    o(n, function (o, c) {
      if (h || (h = new r()), s(o)) {
        a(t, n, c, l, e, f, h);
      } else {
        var d = f ? f(u(t, c), o, c + "", t, n, h) : void 0;
        if (void 0 === d) {
          d = o;
        }
        i(t, c, d);
      }
    }, c);
  }
};