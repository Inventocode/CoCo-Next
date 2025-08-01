"use strict";

var r = require("../1714/258/index");
var o = require("./1215");
var i = r.aTypedArray;
(0, r.exportTypedArrayMethod)("copyWithin", function (e, t) {
  return o.call(i(this), e, t, arguments.length > 2 ? arguments[2] : void 0);
});