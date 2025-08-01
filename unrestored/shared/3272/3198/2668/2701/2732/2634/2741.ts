"use strict";

var r = require("../../../../../2883/2731/806/index");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t, n) {
  if (!n || !e) {
    return e;
  }
  var i = "".concat(t, "Comments");
  if (e[i]) {
    var a;
    if ("leading" === t) {
      e[i] = n.concat(e[i]);
    } else {
      (a = e[i]).push.apply(a, r(n));
    }
  } else {
    e[i] = n;
  }
  return e;
};