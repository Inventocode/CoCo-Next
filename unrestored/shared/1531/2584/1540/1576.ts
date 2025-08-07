"use strict";

var r = require("./1623/86");
var o = require("./1623/439");
var i = require("./1623/309");
var a = require("./1735/257");
var s = require("./1745/310");
var c = require("./1736/167");
var l = require("./1734/1223");
var u = require("./1568/708");
var d = require("./1734/1224");
var p = require("./1734/1225");
var f = require("./1734/629/index");
var h = require("./1734/1068");
var m = [];
var g = m.sort;
var _ = c(function () {
  m.sort(undefined);
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
      return true;
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
  proto: true,
  forced: _ || !v || !b || !y
}, {
  sort: function (e) {
    if (undefined !== e) {
      o(e);
    }
    var t = i(this);
    if (y) {
      return undefined === e ? g.call(t) : g.call(t, e);
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
        return undefined === n ? -1 : undefined === t ? 1 : undefined !== e ? +e(t, n) || 0 : s(t) > s(n) ? 1 : -1;
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