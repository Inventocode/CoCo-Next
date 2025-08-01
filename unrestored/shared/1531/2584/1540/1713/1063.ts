"use strict";

var r = require("../1731/309");
var o = require("../1735/706");
var i = require("../1735/257");
module.exports = function (e) {
  for (var t = r(this), n = i(t.length), a = arguments.length, s = o(a > 1 ? arguments[1] : void 0, n), c = a > 2 ? arguments[2] : void 0, l = void 0 === c ? n : o(c, n); l > s;) {
    t[s++] = e;
  }
  return t;
};