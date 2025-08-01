"use strict";

var r = require("../936/437");
var o = require("../1563/473");
var i = require("../1735/257");
var a = require("../1568/708");
var s = Math.min;
var c = [].lastIndexOf;
var l = !!c && 1 / [1].lastIndexOf(1, -0) < 0;
var u = a("lastIndexOf");
var d = l || !u;
module.exports = d ? function (e) {
  if (l) {
    return c.apply(this, arguments) || 0;
  }
  var t = r(this);
  var n = i(t.length);
  var a = n - 1;
  for (arguments.length > 1 && (a = s(a, o(arguments[1]))), a < 0 && (a = n + a); a >= 0; a--) {
    if (a in t && t[a] === e) {
      return a || 0;
    }
  }
  return -1;
} : c;