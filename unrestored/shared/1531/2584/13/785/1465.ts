"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var r;
var i = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r];
    }
  }
  return e;
};
var o = require("react");
var a = (r = o) && r.__esModule ? r : {
  default: r
};
exports.default = function (e) {
  var t = e.fill;
  var n = undefined === t ? "currentColor" : t;
  var r = e.width;
  var o = undefined === r ? 24 : r;
  var s = e.height;
  var c = undefined === s ? 24 : s;
  var u = e.style;
  var l = undefined === u ? {} : u;
  var f = function (e, t) {
    var n = {};
    for (var r in e) if (!(t.indexOf(r) >= 0)) {
      if (Object.prototype.hasOwnProperty.call(e, r)) {
        n[r] = e[r];
      }
    }
    return n;
  }(e, ["fill", "width", "height", "style"]);
  return a.default.createElement("svg", i({
    viewBox: "0 0 24 24",
    style: i({
      fill: n,
      width: o,
      height: c
    }, l)
  }, f), a.default.createElement("path", {
    d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
  }));
};