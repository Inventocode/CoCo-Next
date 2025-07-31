"use strict";

var r = require("../../951/index");
var i = require("./1767");
var o = require("./1768");
module.exports = function (e) {
  for (var t, n = 0, a = ""; !t;) {
    a += o(i, r.get(), 1);
    t = e < Math.pow(16, n + 1);
    n++;
  }
  return a;
};