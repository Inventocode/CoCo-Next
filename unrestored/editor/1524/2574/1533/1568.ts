"use strict";

var r = require("./1626/86/index");
var o = require("./1626/231");
var i = require("./1534/818");
var a = require("./1728/706");
var s = require("./1728/257");
var c = require("./935/437");
var l = require("./1550/707");
var u = require("./1735/247/index");
var d = require("./1550/821")("slice");
var p = u("species");
var f = [].slice;
var h = Math.max;
r({
  target: "Array",
  proto: !0,
  forced: !d
}, {
  slice: function (e, t) {
    var n;
    var r;
    var u;
    var d = c(this);
    var m = s(d.length);
    var g = a(e, m);
    var _ = a(void 0 === t ? m : t, m);
    if (i(d) && ("function" != typeof (n = d.constructor) || n !== Array && !i(n.prototype) ? o(n) && null === (n = n[p]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) {
      return f.call(d, g, _);
    }
    for (r = new (void 0 === n ? Array : n)(h(_ - g, 0)), u = 0; g < _; g++, u++) {
      if (g in d) {
        l(r, u, d[g]);
      }
    }
    r.length = u;
    return r;
  }
});