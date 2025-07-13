"use strict";

import * as r from "../1707/258/index";
import * as o from "../1728/257";
import * as i from "./1245/index";
import * as a from "../1623/309";
import * as s from "../1626/167";
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