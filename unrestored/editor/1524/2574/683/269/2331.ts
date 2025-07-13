"use strict";

import * as r from "./359";
import * as i from "./2330/498";
import * as o from "./645";
exports.targetName = function (e) {
  return function (t, n, a) {
    var s = new i.Metadata(r.NAME_TAG, e);
    o.tagParameter(t, n, a, s);
  };
};