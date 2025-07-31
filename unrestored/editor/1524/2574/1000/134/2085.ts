"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.named = void 0;
var r = require("./358");
var i = require("./2088/496");
var o = require("./641");
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