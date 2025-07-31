"use strict";

var r = require("../1707/258/index");
var o = require("./1062");
var i = r.aTypedArray;
(0, r.exportTypedArrayMethod)("fill", function (e) {
  return o.apply(i(this), arguments);
});