"use strict";

var r = require("./1714/258/index");
var o = require("./1722/817").includes;
var i = r.aTypedArray;
(0, r.exportTypedArrayMethod)("includes", function (e) {
  return o(i(this), e, arguments.length > 1 ? arguments[1] : void 0);
});