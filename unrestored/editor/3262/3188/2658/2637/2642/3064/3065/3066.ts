"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e) {
  for (var t = e.params, n = 0; n < t.length; n++) {
    var r = t[n];
    if (i(r) || a(r)) {
      return n;
    }
  }
  return t.length;
};
var r = require("../../../../2623/index");
var i = r.isAssignmentPattern;
var a = r.isRestElement;