"use strict";

import * as r from "./358";
import * as i from "./2088/496";
import * as o from "./641";
exports.targetName = function (e) {
  return function (t, n, a) {
    var s = new i.Metadata(r.NAME_TAG, e);
    o.tagParameter(t, n, a, s);
  };
};