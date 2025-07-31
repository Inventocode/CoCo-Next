"use strict";

var r = require("./946");
var o = require("../1660/1072");
var i = require("../1659/241");
var a = require("./421");
var s = require("./942");
var c = require("./1076");
var l = require("../1728/257");
var u = require("../1738/310");
var d = require("./947");
var p = require("../1241/944");
var f = require("../1660/1073");
var h = require("../1626/167");
var m = f.UNSUPPORTED_Y;
var g = [].push;
var _ = Math.min;
r("split", function (e, t, n) {
  var r;
  r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, n) {
    var r = u(a(this));
    var i = void 0 === n ? 4294967295 : n >>> 0;
    if (0 === i) {
      return [];
    }
    if (void 0 === e) {
      return [r];
    }
    if (!o(e)) {
      return t.call(r, e, i);
    }
    for (var s, c, l, d = [], f = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), h = 0, m = new RegExp(e.source, f + "g"); (s = p.call(m, r)) && !((c = m.lastIndex) > h && (d.push(r.slice(h, s.index)), s.length > 1 && s.index < r.length && g.apply(d, s.slice(1)), l = s[0].length, h = c, d.length >= i));) {
      if (m.lastIndex === s.index) {
        m.lastIndex++;
      }
    }
    if (h === r.length) {
      if (!(!l && m.test(""))) {
        d.push("");
      }
    } else {
      d.push(r.slice(h));
    }
    return d.length > i ? d.slice(0, i) : d;
  } : "0".split(void 0, 0).length ? function (e, n) {
    return void 0 === e && 0 === n ? [] : t.call(this, e, n);
  } : t;
  return [function (t, n) {
    var o = a(this);
    var i = void 0 == t ? void 0 : t[e];
    return void 0 !== i ? i.call(t, o, n) : r.call(u(o), t, n);
  }, function (e, o) {
    var a = i(this);
    var p = u(e);
    var f = n(r, a, p, o, r !== t);
    if (f.done) {
      return f.value;
    }
    var h = s(a, RegExp);
    var g = a.unicode;
    var v = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (m ? "g" : "y");
    var b = new h(m ? "^(?:" + a.source + ")" : a, v);
    var y = void 0 === o ? 4294967295 : o >>> 0;
    if (0 === y) {
      return [];
    }
    if (0 === p.length) {
      return null === d(b, p) ? [p] : [];
    }
    for (var E = 0, O = 0, w = []; O < p.length;) {
      b.lastIndex = m ? 0 : O;
      var C;
      var T = d(b, m ? p.slice(O) : p);
      if (null === T || (C = _(l(b.lastIndex + (m ? O : 0)), p.length)) === E) {
        O = c(p, O, g);
      } else {
        if (w.push(p.slice(E, O)), w.length === y) {
          return w;
        }
        for (var S = 1; S <= T.length - 1; S++) {
          if (w.push(T[S]), w.length === y) {
            return w;
          }
        }
        O = E = C;
      }
    }
    w.push(p.slice(E));
    return w;
  }];
}, !!h(function () {
  var e = /(?:)/;
  var t = e.exec;
  e.exec = function () {
    return t.apply(this, arguments);
  };
  var n = "ab".split(e);
  return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
}), m);