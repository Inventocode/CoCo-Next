"use strict";

var r = require("../../805/index");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t, n) {
  if (!n || !e) {
    return e;
  }
  var a = "".concat(t, "Comments");
  if (e[a]) {
    var i;
    if ("leading" === t) {
      e[a] = n.concat(e[a]);
    } else {
      (i = e[a]).push.apply(i, r(n));
    }
  } else {
    e[a] = n;
  }
  return e;
};