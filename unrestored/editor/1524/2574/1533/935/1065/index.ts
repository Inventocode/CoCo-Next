"use strict";

import * as r from "../../1626/86/index";
import * as o from "../../1250/1216";
import * as i from "../../1623/495";
import * as a from "../../1659/634";
import * as s from "../../1738/531";
import * as c from "../../1735/422";
import * as l from "../../1738/398";
import * as u from "../../1735/247/index";
import * as d from "../../1534/530";
import * as p from "../822";
import * as f from "./1217";
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
  if (j && (y = i(j.call(new e())), h !== Object.prototype && y.next && (d || i(y) === h || (a ? a(y, h) : "function" != typeof y[g] && c(y, g, _)), s(y, C, !0, !0), d && (p[C] = _))), "values" == f && I && "values" !== I.name && (T = !0, A = function () {
    return I.call(this);
  }), d && !b || S[g] === A || c(S, g, A), p[t] = A, f) {
    if (E = {
      values: w("values"),
      keys: v ? A : w("keys"),
      entries: w("entries")
    }, b) {
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