var r = require("../1278");
var i = require("../../../1442/1779/1268/index");
var o = require("../../../1442/1779/1828/1276");
var a = require("../../../1442/1779/1269");
var s = require("../../../1442/1779/1277/index");
var c = require("./1264/index");
var u = require("../../../1442/1779/835");
var l = require("./1841");
var f = require("../../../1442/1779/958/index");
var d = require("../../../1444/836/1086");
var h = require("../../../1442/1779/638");
var p = require("./1842");
var _ = require("./1090/index");
var A = require("../1279");
var g = require("./1843");
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
      var k = u(E);
      var S = !k && f(E);
      var T = !k && !S && _(E);
      C = E;
      if (k || S || T) {
        if (u(w)) {
          C = w;
        } else {
          if (l(w)) {
            C = a(w);
          } else {
            if (S) {
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
            if (!(h(w) && !d(w))) {
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