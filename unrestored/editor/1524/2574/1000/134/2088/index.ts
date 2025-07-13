"use strict";

import * as r from "../358";
import * as i from "./496";
import * as o from "../641";
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