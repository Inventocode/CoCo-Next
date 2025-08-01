"use strict";

var r = require("./1714/258/index");
var o = require("./1728/937").right;
var i = r.aTypedArray;
(0, r.exportTypedArrayMethod)("reduceRight", function (e) {
  return o(i(this), e, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
});