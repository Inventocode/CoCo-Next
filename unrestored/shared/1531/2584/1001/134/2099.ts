"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.targetName = void 0;
var r = require("./358");
var i = require("./1312/496");
var o = require("./641");
exports.targetName = function (e) {
  return function (t, n, a) {
    var s = new i.Metadata(r.NAME_TAG, e);
    o.tagParameter(t, n, a, s);
  };
};