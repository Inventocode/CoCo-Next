"use strict";

var r = require("../../1250/632");
var o = require("../../1623/309");
var i = require("./1559");
var a = require("./1063");
var s = require("../../1728/257");
var c = require("../../1550/707");
var l = require("../../1250/933");
var u = require("../../1250/823");
module.exports = function (e) {
  var t;
  var n;
  var d;
  var p;
  var f;
  var h;
  var m = o(e);
  var g = "function" == typeof this ? this : Array;
  var _ = arguments.length;
  var v = _ > 1 ? arguments[1] : void 0;
  var b = void 0 !== v;
  var y = u(m);
  var E = 0;
  if (b && (v = r(v, _ > 2 ? arguments[2] : void 0, 2)), void 0 == y || g == Array && a(y)) {
    for (n = new g(t = s(m.length)); t > E; E++) {
      h = b ? v(m[E], E) : m[E];
      c(n, E, h);
    }
  } else {
    for (f = (p = l(m, y)).next, n = new g(); !(d = f.call(p)).done; E++) {
      h = b ? i(p, v, [d.value, E], !0) : d.value;
      c(n, E, h);
    }
  }
  n.length = E;
  return n;
};