"use strict";

var r = require("./1707/258/index");
var o = require("./1707/399").map;
var i = require("./1728/948");
var a = r.aTypedArray;
(0, r.exportTypedArrayMethod)("map", function (e) {
  return o(a(this), e, arguments.length > 1 ? arguments[1] : void 0, function (e, t) {
    return new (i(e))(t);
  });
});