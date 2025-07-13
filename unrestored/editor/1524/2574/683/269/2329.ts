"use strict";

import * as r from "./359";
import * as i from "./2330/498";
import * as o from "./645";
exports.unmanaged = function () {
  return function (e, t, n) {
    var a = new i.Metadata(r.UNMANAGED_TAG, !0);
    o.tagParameter(e, t, n, a);
  };
};