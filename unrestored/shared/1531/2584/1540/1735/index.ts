"use strict";

var r = require("../1720/258/index");
var o = require("./257");
var i = require("./706");
var a = require("./949");
var s = r.aTypedArray;
(0, r.exportTypedArrayMethod)("subarray", function (e, t) {
  var n = s(this);
  var r = n.length;
  var c = i(e, r);
  return new (a(n))(n.buffer, n.byteOffset + c * n.BYTES_PER_ELEMENT, o((undefined === t ? r : i(t, r)) - c));
});