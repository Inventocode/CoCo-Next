"use strict";

import * as r from "./358";
import * as i from "./2088/496";
import * as o from "./641";
exports.optional = function () {
  return function (e, t, n) {
    var a = new i.Metadata(r.OPTIONAL_TAG, !0);
    if ("number" === typeof n) {
      o.tagParameter(e, t, n, a);
    } else {
      o.tagProperty(e, t, a);
    }
  };
};