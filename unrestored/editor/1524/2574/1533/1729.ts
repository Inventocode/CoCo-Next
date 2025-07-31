"use strict";

var r = require("./1738/194");
var o = require("./1707/258/index");
var i = require("./1626/167");
var a = r.Int8Array;
var s = o.aTypedArray;
var c = o.exportTypedArrayMethod;
var l = [].toLocaleString;
var u = [].slice;
var d = !!a && i(function () {
  l.call(new a(1));
});
c("toLocaleString", function () {
  return l.apply(d ? u.call(s(this)) : s(this), arguments);
}, i(function () {
  return [1, 2].toLocaleString() != new a([1, 2]).toLocaleString();
}) || !i(function () {
  a.prototype.toLocaleString.call([1, 2]);
}));