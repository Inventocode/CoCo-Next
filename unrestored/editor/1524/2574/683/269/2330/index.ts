"use strict";

import * as r from "../359";
import * as i from "./498";
import * as o from "../645";
exports.multiInject = function (e) {
  return function (t, n, a) {
    var s = new i.Metadata(r.MULTI_INJECT_TAG, e);
    if ("number" === typeof a) {
      o.tagParameter(t, n, a, s);
    } else {
      o.tagProperty(t, n, s);
    }
  };
};