"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = require("./1366/498");
var i = require("./645");
exports.tagged = function (e, t) {
  return function (n, o, a) {
    var s = new r.Metadata(e, t);
    if ("number" === typeof a) {
      i.tagParameter(n, o, a, s);
    } else {
      i.tagProperty(n, o, s);
    }
  };
};