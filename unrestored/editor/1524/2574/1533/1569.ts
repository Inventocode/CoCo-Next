"use strict";

var r = require("./1626/86/index");
var o = require("./1727/439");
var i = require("./1623/309");
var a = require("./1728/257");
var s = require("./1738/310");
var c = require("./1626/167");
var l = require("./1727/1220");
var u = require("./1561/708");
var d = require("./1727/1221");
var p = require("./1727/1222");
var f = require("./1727/629");
var h = require("./1727/1067/index");
var m = [];
var g = m.sort;
var _ = c(function () {
  m.sort(void 0);
});
var v = c(function () {
  m.sort(null);
});
var b = u("sort");
var y = !c(function () {
  if (f) {
    return f < 70;
  }
  if (!(d && d > 3)) {
    if (p) {
      return !0;
    }
    if (h) {
      return h < 603;
    }
    var e;
    var t;
    var n;
    var r;
    var o = "";
    for (e = 65; e < 76; e++) {
      switch (t = String.fromCharCode(e), e) {
        case 66:
        case 69:
        case 70:
        case 72:
          n = 3;
          break;
        case 68:
        case 71:
          n = 4;
          break;
        default:
          n = 2;
      }
      for (r = 0; r < 47; r++) {
        m.push({
          k: t + r,
          v: n
        });
      }
    }
    for (m.sort(function (e, t) {
      return t.v - e.v;
    }), r = 0; r < m.length; r++) {
      t = m[r].k.charAt(0);
      if (o.charAt(o.length - 1) !== t) {
        o += t;
      }
    }
    return "DGBEFHACIJK" !== o;
  }
});
r({
  target: "Array",
  proto: !0,
  forced: _ || !v || !b || !y
}, {
  sort: function (e) {
    if (void 0 !== e) {
      o(e);
    }
    var t = i(this);
    if (y) {
      return void 0 === e ? g.call(t) : g.call(t, e);
    }
    var n;
    var r;
    var c = [];
    var u = a(t.length);
    for (r = 0; r < u; r++) {
      if (r in t) {
        c.push(t[r]);
      }
    }
    for (n = (c = l(c, function (e) {
      return function (t, n) {
        return void 0 === n ? -1 : void 0 === t ? 1 : void 0 !== e ? +e(t, n) || 0 : s(t) > s(n) ? 1 : -1;
      };
    }(e))).length, r = 0; r < n;) {
      t[r] = c[r++];
    }
    for (; r < u;) {
      delete t[r++];
    }
    return t;
  }
});