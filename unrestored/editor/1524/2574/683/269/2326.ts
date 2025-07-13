"use strict";

import * as r from "./2330/498";
import * as i from "./645";
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