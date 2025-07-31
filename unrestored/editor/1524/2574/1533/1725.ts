"use strict";

var r = require("./1707/258/index");
var o = require("./1728/948");
var i = require("./1626/167");
var a = r.aTypedArray;
var s = r.exportTypedArrayMethod;
var c = [].slice;
s("slice", function (e, t) {
  for (var n = c.call(a(this), e, t), r = o(this), i = 0, s = n.length, l = new r(s); s > i;) {
    l[i] = n[i++];
  }
  return l;
}, i(function () {
  new Int8Array(1).slice();
}));