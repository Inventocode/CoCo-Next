"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
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
  var n = void 0 === t ? "currentColor" : t;
  var r = e.width;
  var o = void 0 === r ? 24 : r;
  var s = e.height;
  var c = void 0 === s ? 24 : s;
  var u = e.style;
  var l = void 0 === u ? {} : u;
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
    d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
  }));
};