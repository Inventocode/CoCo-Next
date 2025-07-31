"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t, n) {
  if (!t) {
    return !1;
  }
  if (!(0, a.default)(t.type, e)) {
    return !n && "Placeholder" === t.type && e in o.FLIPPED_ALIAS_KEYS && (0, i.default)(t.expectedNode, e);
  }
  return "undefined" === typeof n || (0, r.default)(t, n);
};
var r = require("./2713");
var a = require("./2714");
var i = require("./2831");
var o = require("./2636/index");