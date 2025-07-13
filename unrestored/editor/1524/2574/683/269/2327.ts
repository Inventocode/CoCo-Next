"use strict";

import * as r from "./359";
import * as i from "./2330/498";
import * as o from "./645";
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