"use strict";

import * as r from "../1727/439";
var o = function (e) {
  var t;
  var n;
  this.promise = new e(function (e, r) {
    if (void 0 !== t || void 0 !== n) {
      throw TypeError("Bad Promise constructor");
    }
    t = e;
    n = r;
  });
  this.resolve = r(t);
  this.reject = r(n);
};
e.exports.f = function (e) {
  return new o(e);
};