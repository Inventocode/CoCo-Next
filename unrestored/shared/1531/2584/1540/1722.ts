"use strict";

var r = require("./1720/258/index");
var o = require("./1721/817").indexOf;
var i = r.aTypedArray;
(0, r.exportTypedArrayMethod)("indexOf", function (e) {
  return o(i(this), e, arguments.length > 1 ? arguments[1] : void 0);
});