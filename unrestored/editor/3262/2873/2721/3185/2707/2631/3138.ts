"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function () {
  var e = this;
  var t = r.BUILDER_KEYS[e];
  var n = arguments.length;
  if (n > t.length) {
    throw new Error("".concat(e, ": Too many arguments passed. Received ").concat(n, " but can receive no more than ").concat(t.length));
  }
  for (var i = {
      type: e
    }, o = 0; o < t.length; ++o) {
    var s = t[o];
    var u = r.NODE_FIELDS[e][s];
    var l = void 0;
    if (o < n) {
      l = arguments[o];
    }
    if (void 0 === l) {
      l = Array.isArray(u.default) ? [] : u.default;
    }
    i[s] = l;
  }
  for (var p in i) (0, a.default)(i, p, i[p]);
  return i;
};
var r = require("../2635/index");
var a = require("../2711");