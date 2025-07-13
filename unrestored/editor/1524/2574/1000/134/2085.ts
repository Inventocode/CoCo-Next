"use strict";

import * as r from "./358";
import * as i from "./2088/496";
import * as o from "./641";
exports.named = function (e) {
  return function (t, n, a) {
    var s = new i.Metadata(r.NAMED_TAG, e);
    if ("number" === typeof a) {
      o.tagParameter(t, n, a, s);
    } else {
      o.tagProperty(t, n, s);
    }
  };
};