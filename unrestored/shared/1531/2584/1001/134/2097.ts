"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.unmanaged = void 0;
var r = require("./358");
var i = require("./1312/496");
var o = require("./641");
exports.unmanaged = function () {
  return function (e, t, n) {
    var a = new i.Metadata(r.UNMANAGED_TAG, !0);
    o.tagParameter(e, t, n, a);
  };
};