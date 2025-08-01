"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t, n) {
  var s;
  t = e.code(t);
  return function (o) {
    var l = (0, r.normalizeReplacements)(o);
    if (!s) {
      s = (0, i.default)(e, t, n);
    }
    return e.unwrap((0, a.default)(s, l));
  };
};
var r = require("./2707");
var i = require("./2980/2766");
var a = require("./2980/2767");