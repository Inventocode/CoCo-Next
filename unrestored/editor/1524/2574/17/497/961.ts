"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.parse_visibility = exports.parse_constraints = void 0;
var r = require("../../125/195/index");
exports.parse_constraints = function (e) {
  var t = e.split(",");
  var n = parseFloat(t[0]);
  var r = parseFloat(t[1]);
  var i = parseFloat(t[2]);
  var o = "true" === t[3] || null;
  return {
    min: isNaN(n) ? -1 / 0 : n,
    max: isNaN(r) ? 1 / 0 : r,
    precision: isNaN(i) ? 0 : i,
    mod: o
  };
};
exports.parse_visibility = function (e) {
  var t;
  switch (e) {
    case "visible":
      t = r.BlockVisibility.VISIBLE;
      break;
    case "hidden":
      t = r.BlockVisibility.HIDDEN;
      break;
    case "translucent":
      t = r.BlockVisibility.TRANSLUCENT;
      break;
    default:
      return;
  }
  return t;
};