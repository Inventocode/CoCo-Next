"use strict";

var r = require("../1534/628");
var o = require("../1534/300/index");
var i = require("../1250/627");
module.exports = function (e, t, n) {
  var a = r(t);
  if (a in e) {
    o.f(e, a, i(0, n));
  } else {
    e[a] = n;
  }
};