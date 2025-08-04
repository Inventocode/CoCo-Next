"use strict";

var r = require("./1720/258/index");
var o = require("./1729/937").left;
var i = r.aTypedArray;
(0, r.exportTypedArrayMethod)("reduce", function (e) {
  return o(i(this), e, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
});