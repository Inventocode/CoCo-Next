"use strict";

var r = require("../1623/309");
var o = require("../1735/706");
var i = require("../1735/257");
module.exports = function (e) {
  for (var t = r(this), n = i(t.length), a = arguments.length, s = o(a > 1 ? arguments[1] : undefined, n), c = a > 2 ? arguments[2] : undefined, l = undefined === c ? n : o(c, n); l > s;) {
    t[s++] = e;
  }
  return t;
};