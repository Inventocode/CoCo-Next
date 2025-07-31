"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
var r = require("./359");
var i = require("./2330/498");
var o = require("./645");
exports.named = function (e) {
  return function (t, n, a) {
    var s = new i.Metadata(r.NAMED_TAG, e);
    if ("number" === typeof a) {
      o.tagParameter(t, n, a, s);
    } else {
      o.tagProperty(t, n, s);
    }
  };
};