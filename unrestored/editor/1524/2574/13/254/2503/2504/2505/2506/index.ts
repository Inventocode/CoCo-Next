var r = require("../1411/index");
var i = require("../../../../../784/104/2473/2474/2475/1406");
var o = require("./1409");
var a = require("../../../../../784/104/2473/2474/2475/1407");
var s = require("../../../../../784/104/2473/2474/2475/1410/index");
var c = require("./1140/index");
var u = require("../../../../../784/104/2401/2412/446");
var l = require("./2507");
var f = require("../../../../../784/104/2473/2474/2475/970/index");
var h = require("./1147");
var d = require("../../../../2518/2519/475");
var p = require("../../../../../784/104/2401/1388/index");
var _ = require("./1142/index");
var A = require("../1412");
var g = require("./2508");
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