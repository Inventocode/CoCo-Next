"use strict";

import * as r from "../1556/473";
import * as o from "../1738/310";
import * as i from "../1676/421";
module.exports = function (e) {
  var t = o(i(this));
  var n = "";
  var a = r(e);
  if (a < 0 || a == 1 / 0) {
    throw RangeError("Wrong number of repetitions");
  }
  for (; a > 0; (a >>>= 1) && (t += t)) {
    if (1 & a) {
      n += t;
    }
  }
  return n;
};