"use strict";

var r = require("./1707/258/index");
var o = require("./1707/399").findIndex;
var i = r.aTypedArray;
(0, r.exportTypedArrayMethod)("findIndex", function (e) {
  return o(i(this), e, arguments.length > 1 ? arguments[1] : void 0);
});