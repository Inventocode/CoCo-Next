"use strict";

import * as r from "../1626/86/index";
import * as o from "../1738/194";
import * as i from "../1660/817";
import * as a from "../1738/398";
import * as s from "./709";
import * as c from "../1639/826/index";
import * as l from "../1738/635";
import * as u from "../1626/231";
import * as d from "../1626/167";
import * as p from "../1558/934";
import * as f from "../1738/531";
import * as h from "../1660/938";
module.exports = function (e, t, n) {
  var m = -1 !== e.indexOf("Map");
  var g = -1 !== e.indexOf("Weak");
  var _ = m ? "set" : "add";
  var v = o[e];
  var b = v && v.prototype;
  var y = v;
  var E = {};
  var O = function (e) {
    var t = b[e];
    a(b, e, "add" == e ? function (e) {
      t.call(this, 0 === e ? 0 : e);
      return this;
    } : "delete" == e ? function (e) {
      return !(g && !u(e)) && t.call(this, 0 === e ? 0 : e);
    } : "get" == e ? function (e) {
      return g && !u(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
    } : "has" == e ? function (e) {
      return !(g && !u(e)) && t.call(this, 0 === e ? 0 : e);
    } : function (e, n) {
      t.call(this, 0 === e ? 0 : e, n);
      return this;
    });
  };
  if (i(e, "function" != typeof v || !(g || b.forEach && !d(function () {
    new v().entries().next();
  })))) {
    y = n.getConstructor(t, e, m, _);
    s.enable();
  } else if (i(e, !0)) {
    var w = new y();
    var C = w[_](g ? {} : -0, 1) != w;
    var T = d(function () {
      w.has(1);
    });
    var S = p(function (e) {
      new v(e);
    });
    var I = !g && d(function () {
      for (var e = new v(), t = 5; t--;) {
        e[_](t, t);
      }
      return !e.has(-0);
    });
    if (!S) {
      (y = t(function (t, n) {
        l(t, y, e);
        var r = h(new v(), t, y);
        if (void 0 != n) {
          c(n, r[_], {
            that: r,
            AS_ENTRIES: m
          });
        }
        return r;
      })).prototype = b;
      b.constructor = y;
    }
    if (T || I) {
      O("delete");
      O("has");
      if (m) {
        O("get");
      }
    }
    if (I || C) {
      O(_);
    }
    if (g && b.clear) {
      delete b.clear;
    }
  }
  E[e] = y;
  r({
    global: !0,
    forced: y != v
  }, E);
  f(y, e);
  if (!g) {
    n.setStrong(y, e, m);
  }
  return y;
};