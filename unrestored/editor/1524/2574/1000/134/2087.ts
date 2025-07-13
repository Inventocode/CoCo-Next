"use strict";

import * as r from "./358";
import * as i from "./2088/496";
import * as o from "./641";
exports.unmanaged = function () {
  return function (e, t, n) {
    var a = new i.Metadata(r.UNMANAGED_TAG, !0);
    o.tagParameter(e, t, n, a);
  };
};