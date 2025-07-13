"use strict";

import * as r from "./2088/496";
import * as i from "./641";
exports.tagged = function (e, t) {
  return function (n, o, a) {
    var s = new r.Metadata(e, t);
    if ("number" === typeof a) {
      i.tagParameter(n, o, a, s);
    } else {
      i.tagProperty(n, o, s);
    }
  };
};