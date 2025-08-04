"use strict";

var r = require("./1720/258/index");
var o = r.aTypedArray;
var i = r.exportTypedArrayMethod;
var a = [].join;
i("join", function (e) {
  return a.apply(o(this), arguments);
});