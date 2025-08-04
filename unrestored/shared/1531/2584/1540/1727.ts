"use strict";

var r = require("./1720/258/index");
var o = require("./1720/1079");
var i = r.aTypedArrayConstructor;
(0, r.exportTypedArrayStaticMethod)("of", function () {
  for (var e = 0, t = arguments.length, n = new (i(this))(t); t > e;) {
    n[e] = arguments[e++];
  }
  return n;
}, o);