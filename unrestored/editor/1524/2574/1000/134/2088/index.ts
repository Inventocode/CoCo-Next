"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.multiInject = void 0;
var r = require("../358");
var i = require("./496");
var o = require("../641");
exports.multiInject = function (e) {
  return function (t, n, a) {
    var s = new i.Metadata(r.MULTI_INJECT_TAG, e);
    if ("number" === typeof a) {
      o.tagParameter(t, n, a, s);
    } else {
      o.tagProperty(t, n, s);
    }
  };
};