"use strict";

var r = require("../1623/439");
var o = require("../1738/231");
var i = [].slice;
var a = {};
var s = function (e, t, n) {
  if (!(t in a)) {
    for (var r = [], o = 0; o < t; o++) {
      r[o] = "a[" + o + "]";
    }
    a[t] = Function("C,a", "return new C(" + r.join(",") + ")");
  }
  return a[t](e, n);
};
module.exports = Function.bind || function (e) {
  var t = r(this);
  var n = i.call(arguments, 1);
  var a = function () {
    var r = n.concat(i.call(arguments));
    return this instanceof a ? s(t, r.length, r) : t.apply(e, r);
  };
  if (o(t.prototype)) {
    a.prototype = t.prototype;
  }
  return a;
};