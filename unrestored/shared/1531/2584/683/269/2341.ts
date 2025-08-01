"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
var r = require("./359");
var i = require("./2340/498");
var o = require("./645");
exports.targetName = function (e) {
  return function (t, n, a) {
    var s = new i.Metadata(r.NAME_TAG, e);
    o.tagParameter(t, n, a, s);
  };
};