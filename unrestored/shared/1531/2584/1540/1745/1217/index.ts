"use strict";

var r = require("../../1253/632");
var o = require("../../1731/309");
var i = require("./1566");
var a = require("../../1720/1249/1064");
var s = require("../../1735/257");
var c = require("../../1557/707");
var l = require("../../1253/934");
var u = require("../../1253/824");
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