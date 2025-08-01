"use strict";

var r = {}.propertyIsEnumerable;
var o = Object.getOwnPropertyDescriptor;
var i = o && !r.call({
  1: 2
}, 1);
exports.f = i ? function (e) {
  var t = o(this, e);
  return !!t && t.enumerable;
} : r;