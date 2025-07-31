"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t) {
  if (null == e || !e.length) {
    return;
  }
  var n = [];
  var a = (0, r.default)(e, t, n);
  if (!a) {
    return;
  }
  for (var i = 0, o = n; i < o.length; i++) {
    var s = o[i];
    t.push(s);
  }
  return a;
};
var r = require("./3226");