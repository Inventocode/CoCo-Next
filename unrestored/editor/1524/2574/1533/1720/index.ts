"use strict";

var r = require("../1707/258/index");
var o = require("./1078");
var i = r.aTypedArrayConstructor;
(0, r.exportTypedArrayStaticMethod)("of", function () {
  for (var e = 0, t = arguments.length, n = new (i(this))(t); t > e;) {
    n[e] = arguments[e++];
  }
  return n;
}, o);