"use strict";

var r = require("../1707/258/index");
var o = require("./936").right;
var i = r.aTypedArray;
(0, r.exportTypedArrayMethod)("reduceRight", function (e) {
  return o(i(this), e, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
});