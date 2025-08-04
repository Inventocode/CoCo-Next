"use strict";

var r = require("../1720/258/index");
var o = require("./399").some;
var i = r.aTypedArray;
(0, r.exportTypedArrayMethod)("some", function (e) {
  return o(i(this), e, arguments.length > 1 ? arguments[1] : void 0);
});