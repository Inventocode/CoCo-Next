"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.tagged = void 0;
var r = require("./2088/496");
var i = require("./641");
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