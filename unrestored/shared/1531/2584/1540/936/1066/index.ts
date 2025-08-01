"use strict";

var r = require("../../1633/86/index");
var o = require("../../1253/1219");
var i = require("../../1585/495");
var a = require("../../1666/634");
var s = require("../../1745/531");
var c = require("../../1742/422");
var l = require("../../1745/398");
var u = require("../../1742/247/index");
var d = require("../../1541/530");
var p = require("../823");
var f = require("./1220");
var h = f.IteratorPrototype;
var m = f.BUGGY_SAFARI_ITERATORS;
var g = u("iterator");
var _ = function () {
  return this;
};
module.exports = function (e, t, n, u, f, v, b) {
  o(n, t, u);
  var y;
  var E;
  var O;
  var w = function (e) {
    if (e === f && A) {
      return A;
    }
    if (!m && e in S) {
      return S[e];
    }
    switch (e) {
      case "keys":
      case "values":
      case "entries":
        return function () {
          return new n(this, e);
        };
    }
    return function () {
      return new n(this);
    };
  };
  var C = t + " Iterator";
  var T = !1;
  var S = e.prototype;
  var I = S[g] || S["@@iterator"] || f && S[f];
  var A = !m && I || w(f);
  var j = "Array" == t && S.entries || I;
  if (j) {
    y = i(j.call(new e()));
    if (h !== Object.prototype && y.next) {
      if (!(d || i(y) === h)) {
        if (a) {
          a(y, h);
        } else {
          if ("function" != typeof y[g]) {
            c(y, g, _);
          }
        }
      }
      s(y, C, !0, !0);
      if (d) {
        p[C] = _;
      }
    }
  }
  if ("values" == f && I && "values" !== I.name) {
    T = !0;
    A = function () {
      return I.call(this);
    };
  }
  if (!(d && !b || S[g] === A)) {
    c(S, g, A);
  }
  p[t] = A;
  if (f) {
    E = {
      values: w("values"),
      keys: v ? A : w("keys"),
      entries: w("entries")
    };
    if (b) {
      for (O in E) if (m || T || !(O in S)) {
        l(S, O, E[O]);
      }
    } else {
      r({
        target: t,
        proto: !0,
        forced: m || T
      }, E);
    }
  }
  return E;
};