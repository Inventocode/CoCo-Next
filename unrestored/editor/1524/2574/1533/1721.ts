"use strict";

var r = require("./1707/258/index");
var o = require("./1722/936").left;
var i = r.aTypedArray;
(0, r.exportTypedArrayMethod)("reduce", function (e) {
  return o(i(this), e, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
});