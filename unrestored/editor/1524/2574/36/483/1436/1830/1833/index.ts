import * as r from "../1275";
import * as i from "../../../1435/1772/1265/index";
import * as o from "./1273";
import * as a from "../../../1435/1772/1266";
import * as s from "../../../1435/1772/1274/index";
import * as c from "./1261/index";
import * as u from "../../../1435/1772/834";
import * as l from "./1834";
import * as f from "../../../1435/1772/957/index";
import * as h from "../../../1437/835/1085/index";
import * as d from "../638";
import * as p from "./1835";
import * as _ from "./1089/index";
import * as A from "../1276";
import * as g from "./1836";
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