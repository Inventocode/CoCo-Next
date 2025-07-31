"use strict";

var r = require("../1676/946");
var o = require("../1626/167");
var i = require("../1659/241");
var a = require("../1556/473");
var s = require("../1728/257");
var c = require("../1738/310");
var l = require("../1676/421");
var u = require("../1676/1076");
var d = require("./1674");
var p = require("../1676/947");
var f = require("../1735/247/index")("replace");
var h = Math.max;
var m = Math.min;
var g = "$0" === "a".replace(/./, "$0");
var _ = !!/./[f] && "" === /./[f]("a", "$0");
r("replace", function (e, t, n) {
  var r = _ ? "$" : "$0";
  return [function (e, n) {
    var r = l(this);
    var o = void 0 == e ? void 0 : e[f];
    return void 0 !== o ? o.call(e, r, n) : t.call(c(r), e, n);
  }, function (e, o) {
    var l = i(this);
    var f = c(e);
    if ("string" === typeof o && -1 === o.indexOf(r) && -1 === o.indexOf("$<")) {
      var g = n(t, l, f, o);
      if (g.done) {
        return g.value;
      }
    }
    var _ = "function" === typeof o;
    if (!_) {
      o = c(o);
    }
    var v = l.global;
    if (v) {
      var b = l.unicode;
      l.lastIndex = 0;
    }
    for (var y = [];;) {
      var E = p(l, f);
      if (null === E) {
        break;
      }
      if (y.push(E), !v) {
        break;
      }
      if ("" === c(E[0])) {
        l.lastIndex = u(f, s(l.lastIndex), b);
      }
    }
    for (var O, w = "", C = 0, T = 0; T < y.length; T++) {
      E = y[T];
      for (var S = c(E[0]), I = h(m(a(E.index), f.length), 0), A = [], j = 1; j < E.length; j++) {
        A.push(void 0 === (O = E[j]) ? O : String(O));
      }
      var N = E.groups;
      if (_) {
        var R = [S].concat(A, I, f);
        if (void 0 !== N) {
          R.push(N);
        }
        var k = c(o.apply(void 0, R));
      } else {
        k = d(S, f, I, A, N, o);
      }
      if (I >= C) {
        w += f.slice(C, I) + k;
        C = I + S.length;
      }
    }
    return w + f.slice(C);
  }];
}, !!o(function () {
  var e = /./;
  e.exec = function () {
    var e = [];
    e.groups = {
      a: "7"
    };
    return e;
  };
  return "7" !== "".replace(e, "$<a>");
}) || !g || _);