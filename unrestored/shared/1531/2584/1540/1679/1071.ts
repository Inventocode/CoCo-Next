"use strict";

var r = require("../1680/473");
var o = require("../1745/310");
var i = require("../1675/421");
module.exports = function (e) {
  var t = o(i(this));
  var n = "";
  var a = r(e);
  if (a < 0 || a == 1 / 0) {
    throw RangeError("Wrong number of repetitions");
  }
  for (; a > 0; (a >>>= 1) && (t += t)) {
    if (1 & a) {
      n += t;
    }
  }
  return n;
};