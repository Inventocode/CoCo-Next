"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.getInclusionReasons = function (e, t, n) {
  var s = n[e] || {};
  return Object.keys(t).reduce(function (e, n) {
    var o = (0, a.getLowestImplementedVersion)(s, n);
    var l = t[n];
    if (o) {
      var u = (0, a.isUnreleasedVersion)(o, n);
      if (!((0, a.isUnreleasedVersion)(l, n) || !u && !r.lt(l.toString(), (0, a.semverify)(o)))) {
        e[n] = (0, i.prettifyVersion)(l);
      }
    } else {
      e[n] = (0, i.prettifyVersion)(l);
    }
    return e;
  }, {});
};
var r = require("../../../../2701/2667");
var i = require("./2809");
var a = require("./2715");