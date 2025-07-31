var r = require("../1275");
var i = require("../../../1435/1772/1265/index");
var o = require("./1273");
var a = require("../../../1435/1772/1266");
var s = require("../../../1435/1772/1274/index");
var c = require("./1261/index");
var u = require("../../../1435/1772/834");
var l = require("./1834");
var f = require("../../../1435/1772/957/index");
var h = require("../../../1437/835/1085/index");
var d = require("../638");
var p = require("./1835");
var _ = require("./1089/index");
var A = require("../1276");
var g = require("./1836");
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