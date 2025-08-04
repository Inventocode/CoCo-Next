"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
var r = require("./359");
var i = require("./1366/498");
var o = require("./645");
exports.unmanaged = function () {
  return function (e, t, n) {
    var a = new i.Metadata(r.UNMANAGED_TAG, !0);
    o.tagParameter(e, t, n, a);
  };
};