"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.getHighestUnreleased = function (e, t, n) {
  return u(e, t, n) === e ? t : e;
};
exports.getLowestImplementedVersion = function (e, t) {
  var n = e[t];
  if (!n && "android" === t) {
    return e.chrome;
  }
  return n;
};
exports.getLowestUnreleased = u;
exports.isUnreleasedVersion = function (e, t) {
  var n = a.unreleasedLabels[t];
  return !!n && n === e.toString().toLowerCase();
};
exports.semverMin = l;
exports.semverify = function (e) {
  if ("string" === typeof e && r.valid(e)) {
    return e;
  }
  o.invariant("number" === typeof e || "string" === typeof e && s.test(e), "'".concat(e, "' is not a valid version"));
  var t = e.toString().split(".");
  for (; t.length < 3;) {
    t.push("0");
  }
  return t.join(".");
};
var r = require("../../../../2691/2657");
var i = require("./2797/index");
var a = require("./2706");
var s = /^(\d+|\d+.\d+)$/;
var o = new i.OptionValidator("@babel/helper-compilation-targets");
function l(e, t) {
  return e && r.lt(e, t) ? e : t;
}
function u(e, t, n) {
  var r = a.unreleasedLabels[n];
  var i = [e, t].some(function (e) {
    return e === r;
  });
  return i ? e === i ? t : e || t : l(e, t);
}