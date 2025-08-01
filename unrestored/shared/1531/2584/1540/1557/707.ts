"use strict";

var r = require("../1541/628");
var o = require("../1541/300");
var i = require("../1253/627");
module.exports = function (e, t, n) {
  var a = r(t);
  if (a in e) {
    o.f(e, a, i(0, n));
  } else {
    e[a] = n;
  }
};