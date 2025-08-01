"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.optional = void 0;
var r = require("./358");
var i = require("./1312/496");
var o = require("./641");
exports.optional = function () {
  return function (e, t, n) {
    var a = new i.Metadata(r.OPTIONAL_TAG, !0);
    if ("number" === typeof n) {
      o.tagParameter(e, t, n, a);
    } else {
      o.tagProperty(e, t, a);
    }
  };
};