"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.prettifyTargets = function (e) {
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n];
    var s = i.unreleasedLabels[n];
    if ("string" === typeof r && s !== r) {
      r = a(r);
    }
    t[n] = r;
    return t;
  }, {});
};
exports.prettifyVersion = a;
var r = require("../../../../2691/2657");
var i = require("./2706");
function a(e) {
  if ("string" !== typeof e) {
    return e;
  }
  var t = [r.major(e)];
  var n = r.minor(e);
  var i = r.patch(e);
  if (n || i) {
    t.push(n);
  }
  if (i) {
    t.push(i);
  }
  return t.join(".");
}