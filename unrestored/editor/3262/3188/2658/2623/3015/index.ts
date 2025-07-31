"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t) {
  if (null == e || !e.length) {
    return;
  }
  var n = [];
  var i = (0, r.default)(e, t, n);
  if (!i) {
    return;
  }
  for (var a = 0, s = n; a < s.length; a++) {
    var o = s[a];
    t.push(o);
  }
  return i;
};
var r = require("./3016");