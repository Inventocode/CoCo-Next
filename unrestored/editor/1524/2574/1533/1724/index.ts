"use strict";

var r = require("../1707/258/index");
var o = require("../1728/257");
var i = require("./1245/index");
var a = require("../1623/309");
var s = require("../1626/167");
var c = r.aTypedArray;
(0, r.exportTypedArrayMethod)("set", function (e) {
  c(this);
  var t = i(arguments.length > 1 ? arguments[1] : void 0, 1);
  var n = this.length;
  var r = a(e);
  var s = o(r.length);
  var l = 0;
  if (s + t > n) {
    throw RangeError("Wrong length");
  }
  for (; l < s;) {
    this[t + l] = r[l++];
  }
}, s(function () {
  new Int8Array(1).set({});
}));