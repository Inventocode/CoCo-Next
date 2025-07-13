"use strict";

import * as r from "./1948";
import * as i from "./1949";
module.exports = function (e, t) {
  return e && !r(t) ? i(e, t) : t;
};