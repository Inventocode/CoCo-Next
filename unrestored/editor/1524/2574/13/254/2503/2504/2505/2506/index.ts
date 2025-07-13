import * as r from "../1411/index";
import * as i from "../../../../../784/104/2473/2474/2475/1406";
import * as o from "./1409";
import * as a from "../../../../../784/104/2473/2474/2475/1407";
import * as s from "../../../../../784/104/2473/2474/2475/1410/index";
import * as c from "./1140/index";
import * as u from "../../../../../784/104/2401/2412/446";
import * as l from "./2507";
import * as f from "../../../../../784/104/2473/2474/2475/970/index";
import * as h from "./1147";
import * as d from "../../../../2518/2519/475";
import * as p from "../../../../../784/104/2401/1388/index";
import * as _ from "./1142/index";
import * as A from "../1412";
import * as g from "./2508";
module.exports = function (e, t, n, v, m, y, b) {
  var w = A(e, n);
  var E = A(t, n);
  var x = b.get(E);
  if (x) {
    r(e, n, x);
  } else {
    var C = y ? y(w, E, n + "", e, t, b) : void 0;
    var O = void 0 === C;
    if (O) {
      var S = u(E);
      var k = !S && f(E);
      var T = !S && !k && _(E);
      C = E;
      if (S || k || T) {
        if (u(w)) {
          C = w;
        } else {
          if (l(w)) {
            C = a(w);
          } else {
            if (k) {
              O = !1;
              C = i(E, !0);
            } else {
              if (T) {
                O = !1;
                C = o(E, !0);
              } else {
                C = [];
              }
            }
          }
        }
      } else {
        if (p(E) || c(E)) {
          C = w;
          if (c(w)) {
            C = g(w);
          } else {
            if (!(d(w) && !h(w))) {
              C = s(E);
            }
          }
        } else {
          O = !1;
        }
      }
    }
    if (O) {
      b.set(E, C);
      m(C, E, v, y, b);
      b.delete(E);
    }
    r(e, n, C);
  }
};