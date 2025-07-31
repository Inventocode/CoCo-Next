"use strict";

var r = require("../1626/86/index");
var o = require("../1738/194");
var i = require("../1660/817");
var a = require("../1738/398");
var s = require("./709");
var c = require("../1639/826/index");
var l = require("../1738/635");
var u = require("../1626/231");
var d = require("../1626/167");
var p = require("../1558/934");
var f = require("../1738/531");
var h = require("../1660/938");
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