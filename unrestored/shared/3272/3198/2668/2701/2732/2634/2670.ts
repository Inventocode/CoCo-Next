"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t, n) {
  if (!t) {
    return !1;
  }
  if (!(0, i.default)(t.type, e)) {
    return !n && "Placeholder" === t.type && e in s.FLIPPED_ALIAS_KEYS && (0, a.default)(t.expectedNode, e);
  }
  return "undefined" === typeof n || (0, r.default)(t, n);
};
var r = require("./2702");
var i = require("./2703");
var a = require("./2737");
var s = require("./2643/index");