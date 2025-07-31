"use strict";

var r = require("./1743");
var i = Array.prototype.concat;
var o = Array.prototype.slice;
var a = module.exports = function (e) {
  for (var t = [], n = 0, a = e.length; n < a; n++) {
    var s = e[n];
    if (r(s)) {
      t = i.call(t, o.call(s));
    } else {
      t.push(s);
    }
  }
  return t;
};
a.wrap = function (e) {
  return function () {
    return e(a(arguments));
  };
};