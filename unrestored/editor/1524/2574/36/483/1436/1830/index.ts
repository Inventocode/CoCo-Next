import * as r from "./1083/index";
import * as i from "./1275";
import * as o from "./1831/index";
import * as a from "./1833/index";
import * as s from "./638";
import * as c from "./836/index";
import * as u from "./1276";
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