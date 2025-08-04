"use strict";

var r = require("../1720/258/index");
var o = require("./1222");
var i = r.aTypedArray;
(0, r.exportTypedArrayMethod)("lastIndexOf", function (e) {
  return o.apply(i(this), arguments);
});