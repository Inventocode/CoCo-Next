"use strict";

var r = require("./1683/947");
var o = require("./1666/241");
var i = require("./1735/257");
var a = require("./1745/310");
var s = require("./1684/421");
var c = require("./1683/1077");
var l = require("./1683/948");
r("match", function (e, t, n) {
  return [function (t) {
    var n = s(this);
    var r = void 0 == t ? void 0 : t[e];
    return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](a(n));
  }, function (e) {
    var r = o(this);
    var s = a(e);
    var u = n(t, r, s);
    if (u.done) {
      return u.value;
    }
    if (!r.global) {
      return l(r, s);
    }
    var d = r.unicode;
    r.lastIndex = 0;
    for (var p, f = [], h = 0; null !== (p = l(r, s));) {
      var m = a(p[0]);
      f[h] = m;
      if ("" === m) {
        r.lastIndex = c(s, i(r.lastIndex), d);
      }
      h++;
    }
    return 0 === h ? null : f;
  }];
});